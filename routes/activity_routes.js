const express = require('express')

const router = express.Router()

const ActivityCntrl = require('../controllers/activityCntrl');

// All routes in this file are prefixed with /api/activity/
// GET  "/"
// Calls controller which will return all activities for a specific workout
// This route answers all GET request /api/

// Here we pass off control to Activity Controller, getAll() method
router.get("/", ActivityCntrl.getAll);
// Answers all POST calls to /api/acivity/
router.post("/", ActivityCntrl.create);

module.exports = router

