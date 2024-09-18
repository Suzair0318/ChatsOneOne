
const mongoose = require('mongoose');

const MessageDB = new mongoose.Schema({
    senderID : {
     type : mongoose.Schema.Types.ObjectId,
     ref : 'User'
    },
    recieverID : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User'
    },
    message : { type : String},
    createdAt : {type : Date , default : Date.now}
  } ,{ 
    timestamps : true 
  })

  const MsgDB = mongoose.model('Messages' , MessageDB);

  
  module.exports =  MsgDB