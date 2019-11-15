const mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
    title: {
       type: String,
       require: true
    },
    description: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
    
})


module.exports = mongoose.model('Posts', PostsSchema);