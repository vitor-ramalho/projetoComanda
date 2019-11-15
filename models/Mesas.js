const mongoose = require('mongoose');

const MesasSchema = mongoose.Schema({
    nomeG:{
        type:String,
        require: true
    },
    qtPessoas:{
        type: Number,
        required: true
    },
    pedido:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Mesas', MesasSchema);