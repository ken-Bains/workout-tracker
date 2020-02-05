const db = require("../models");
const mongojs = require("mongojs");

module.exports = function(app, path) {

    app.get("/api/workouts", function(req,res) {
        db.Workout.find({}).populate("exercises").then(function(docs){
            console.log(docs);
            res.json(docs);
        })
    });

    app.post("/api/workouts", function(req, res){
        db.Workout.create({}).then(function(docs){
            console.log(docs);
            res.json(docs);
        })
    });

    app.put("/api/workouts/:id", function(req,res){
        db.Exercise.create(req.body, function(err, docs){
            if(err) throw err;
            db.Workout.update(
                {
                    _id: mongojs.ObjectId(req.params.id)
                },{$push:{exercises: docs._id}}, {new:true}).then(function(data){

            })
        });
    })
};