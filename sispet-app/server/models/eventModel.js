const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    start: {
        type: Date,
        required: false,
    },
    end: {
        type: Date,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    animal: {
        type: String,
        required: false
    },
    user_id: {
        type: String,
        required: true
    }
}
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;