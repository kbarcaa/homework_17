let currUser = {};
$(document).ready(function () {
  // We're going to store some data here because we want to reference this
  // stuff multiple times, and this way we don't need to keep doing API calls
  let allWorkouts = [];
  let selectedWorkout = { activities: [] };

  /** ********** DOM Population ********** */

  // Populate workout data
  // (If we're adding a new blank item to the list we will want to auto-select
  // it, so that is handled in the params argument)
  function populateWorkouts(params) {
    $("#workouts-list").empty();
    const ul = $("<ul>");
    allWorkouts.forEach((workout, idx) => {
      console.log(workout);
      const li = $("<li>");
      li.addClass("workout-item");
      li.attr("data-workout-id", workout.id);
      li.attr("data-workout-idx", idx);
      li.html("<span>" + workout.day + "</span>" + workout.name);
      ul.append(li);
    });
    $("#workouts-list").append(ul);
    if (params && params.selectLatest === true) {
      $("#workouts-list li:last-child").addClass("selected");
    }
  }

  // STUDENTS: Populate activity data for the selected workout
  function populateActivities() {

    $.ajax({
      method: "GET",
      url: "/api/activities"
    }).then((resp) => {
      console.log(resp);
      renderUsers();
    });
    
  };
  
  /** ********* Event handlers ********* */

  //When someone clicks on a workout item, we'll populate the DOM with
  // all activities for that workout. Note that because the workouts don't
  // exist in the DOM when the page is loaded, we need to use the special
  // event selector.
  $("#workouts-list").on("click", ".workout-item", function (e) {
    e.preventDefault();
    console.log("item clicked");
    $("#workouts-list li").removeClass("selected");
    $(this).addClass("selected");
    const idx = $(this).attr("data-workout-idx");
    const id = $(this).attr("data-workout-id");
    selectedWorkout = allWorkouts[idx];
    $("div.right-column").show();
    populateActivities();
  });

  // Create a new empty workout for the user to work with
  $("button#add-workout").on("click", function (e) {
    e.preventDefault();
    const dayString = moment().format("MMM DD, YYYY");
    const name = $("#workout-name").val().trim();
    selectedWorkout = {
      name: name,
      day: moment().format("MMM DD, YYYY"),
      activities: [],
    };
    allWorkouts.push(selectedWorkout);

    // Save to db via api
    saveSelectedWorkout();

    populateWorkouts({ selectLatest: true });
    $("div.right-column").show();
  });

  // STUDENTS: Add an activity to the selected workout, then save via API
  $("button#add-activity").on("click", function (e) {
    e.preventDefault();

    // currUser.activity_name = req.body.,
    (currUser.duration = $("input[name='duration']").val()),
      (currUser.weight = $("input[name='weight']").val()),
      (currUser.reps = $("input[name='reps']").val()),
      (currUser.sets = $("input[name='sets']").val()),
      (currUser.distance = $("input[name='distance']").val()),
      console.log(currUser);

    $.ajax("/api/activity", {
      method: "POST",
      data: currUser,
    }).then((resp) => {
      console.log(resp);
      updateTable(resp.data);
    });
  });

  /** ********** API Calls ******************* */

  // Retrive a JSON payload of all exercises
  function getExercises() {
    $.ajax({
      method: "GET",
      url: "/api/exercise",
    }).then((resp) => {
      console.log(resp);
      
      resp.forEach((exercise) => {
        const opt = $("<option>");
        opt.val(exercise.exercise_name);
        opt.text(exercise.exercise_name);
        $("select#exercise").append(opt);
      });
    });
  }

  updateTable = (user) => {
    let trTag = $("<tr>");
    let tdTag1 = $("<td>");
    let tdTag2 = $("<td>");
    let tdTag3 = $("<td>");
    let tdTag4 = $("<td>");
    let tdTag5 = $("<td>");

    tdTag1.text(user.duration);
    tdTag2.text(user.weight);
    tdTag3.text(user.reps);
    tdTag4.text(user.sets);
    tdTag5.text(user.distance);

    trTag.append(tdTag1);
    trTag.append(tdTag2);
    trTag.append(tdTag3);
    trTag.append(tdTag4);
    trTag.append(tdTag5);
    $("table").append(trTag);
  };

  renderUsers = () => {
    allWorkouts.forEach((user) => {
      updateTable(user);
    });
  }

  // STUDENTS: Retrieve a JSON payload of all workouts done so far
  function getWorkouts() {
    $.ajax({
      method: "GET",
      url: "/api/workout",
      data: selectedWorkout
    }).then((resp) => {
      console.log(resp);
      renderUsers();
    });
  }

  // Save the currently selected workout
  function saveSelectedWorkout() {
    $.ajax({
      method: "POST",
      url: "/api/workout",
      data: selectedWorkout,
    }).then(function (resp) {
      console.log(resp);
      if (resp && resp.id) {
        selectedWorkout.id = resp.id;
      }
    });
  }

  // Add an activity to the current workout being viewed.
  // Save the currently selected workout
  function saveActivity(activity) {
    $.ajax({
      method: "POST",
      url: "/api/activity?workoutId=" + selectedWorkout.id,
      data: activity,
    }).then(function (resp) {
      console.log(resp);
    });
  }

  // Page-loading operations
  getExercises();
  getWorkouts();
});
