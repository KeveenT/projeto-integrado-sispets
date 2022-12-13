const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = Schema({
    start: Date,
    end: Date,
    title: String
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;