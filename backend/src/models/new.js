const { Schema, model } = require('mongoose');

const newSchema = new Schema({

    title: String,
    content:{
        type: String,
        required: true
    },
    date:{
        type: Date
    }
},{
    timestamps: true
})

module.exports = model('New', newSchema);