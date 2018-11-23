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

// @route   POST api/properties
// @desc    CREATE a property
// @access  Private
router.post("/", (req, res) => {
  const newProperty = new Property({
    name: req.body.name,
    img: req.body.img
  });
  newProperty.save().then(property => res.json(property));
});

// @route GET api/properties
// @desc retrieves all properties
// @access PUBLIC
router.get("/", (req, res) => {
  Property.find()
    .then(properties => res.json(properties))
    .catch(err => res.statusMessage(404).json({ notfound: "No properties" }));
});

module.exports = router;
