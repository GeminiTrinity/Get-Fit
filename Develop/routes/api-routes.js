const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then((workoutDB) => {
        res.json(workoutDB);
    })
})

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .limit(7)
    .then(workoutDB => {
        console.log(workoutDB);
        res.json(workoutDB);
    })
});

module.exports = router;