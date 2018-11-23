const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");

// load Property model
const Property = require("../../models/Property");

// @route GET api/properties/test
// @desc tests our a properties route
// @access PUBLIC
router.get("/test", (req, res) =>
  res.json({ msg: "properties test route is active" })
);

// @route GET api/properties
// @desc retrieves all properties
// @access PUBLIC
router.get("/", (req, res) => {
  Property.find()
    .then(properties => res.json(properties))
    .catch(err => res.statusMessage(404).json({ notfound: "No properties" }));
});

module.exports = router;
