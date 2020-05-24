const express = require("express");

// -- BRING IN REFERENCE TO OUR CONTROLLER METHODS (LOGIC) -- //
const AboutCntrl = require("../controllers/aboutCntrl");

module.exports = function(app) {
    app.get('/about', AboutCntrl.getAbout);
}
