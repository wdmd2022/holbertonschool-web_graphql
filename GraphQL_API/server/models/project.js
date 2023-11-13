// model for Projects

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = Schema({
    title: String,
    weight: Number,
    description: String
});

module.exports = mongoose.model('Project', projectSchema);
