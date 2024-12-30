const mongoose = require('mongoose');

const DroneSchema = mongoose.Schema({
    id: String,
    location: { lat: Number, lng: Number },
    status: String,
    battery: Number,
    payload: String,
});

module.exports = mongoose.model('Drone', DroneSchema);
