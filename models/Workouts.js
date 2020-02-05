const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }],
});

// WorkoutSchema.methods.addDuration = function(newDuration) {
//     this.totalDuration += newDuration;
// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;