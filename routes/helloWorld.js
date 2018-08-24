var express = require("express");
var HelloWorldModel = require("../models/helloWorld");

var router = express.Router();

router.get("/", (req, res) => {
  HelloWorldModel.find({}, (err, helloWorlds) => {
    if (err) return console.log(err);

    res.send(helloWorlds);
  });
});

router.post("/", (req, res) => {
  HelloWorldModel.create({ helloWorld: "helloWorld" }, (err, helloWorld) => {
    if (err) return console.log(err);

    res.send(helloWorld);
  });
});

module.exports = router;
