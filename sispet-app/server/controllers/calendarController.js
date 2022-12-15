const express = require("express");
const Event = require("../models/eventModel");
const moment = require("moment");
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.post("/create-event", async (req, res) => {
    const start = req.body.start
    const end = req.body.end
    const title = req.body.title
    const animal = req.body.animal
    const user_id = req.user._id
    const newEvent = new Event({start, end, title, animal, user_id});
    await newEvent.save();
    res.sendStatus(201);
});

router.get("/get-events", async (req, res) => {
    const user_id = req.user._id
    const events = await Event.find({
        start: { $gte: moment(req.query.start).toDate() }, 
        end: { $lte:  moment(req.query.end).toDate() },
        user_id
    });
    res.send(events);
});

module.exports = router;