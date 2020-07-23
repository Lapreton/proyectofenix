const { Schema, model } = require('mongoose');

const newSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    fecha:{
        type: String,
    },
    date:{
        type: Date
    }

},{
    timestamps: true
})

module.exports = model('New', newSchema);