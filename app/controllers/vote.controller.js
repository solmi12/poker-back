
const db = require("../models/index"); 
const Vote = db.vote
let express = require('express');
exports.estimer = (req, res) =>{


  if (!req.body.userStory) {
    res.status(400).send({ message: " can not be empty!" });
    return;
  }
    const vote = new Vote({
      userStory : req.body.userStory,
      estFinal: req.body.estFinal,
      username : req.body.username,
    
      });
     
      vote
        .save(vote)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Vote."
          });
        });
}
exports.findAll = (req, res) => {
  const userStory = req.query.userStory;
  var condition = userStory ? { userStory: { $regex: new RegExp(userStory), $options: "i" } } : {};

  Vote.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};