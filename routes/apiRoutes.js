const db = require("../models");
const mongojs = require("mongojs");

module.exports = function(app, path) {

    app.get("/api/workouts", function(req,res) {
        db.Workout.find({}).populate("exercises").then(function(docs){
            res.json(docs);
        })
    });

    app.post("/api/workouts", function(req, res){
        db.Workout.create({}).then(function(docs){
            res.json(docs);
        })
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Exercise.create(req.body)
            .then((docs) => db.Workout.findOneAndUpdate(
                {_id: req.params.id},
                { 
                    $push: {
                        exercises: docs._id 
                    }, 
                    $inc: {
                        totalDuration: docs.duration
                    } 
                },
                { new: true })
            )
            .then(data => {
            res.json(data);
            }).catch(err => {
                res.json(err);
            });
      });

      app.get("/api/workouts/range", function(req,res) {
        db.Workout.find({}).populate("exercises").then(function(docs){
            res.json(docs);
        })
    });
};