
const mongoose = require('mongoose');
const UserDB = require('./db.js')
const MessageDB = require('./msgDb.js') 

const ConDB = new mongoose.Schema({
      participants : [
        {
         type : mongoose.Schema.Types.ObjectId,
         ref : UserDB
      }
    ],
      messages : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : MessageDB,
            default : []
        }
      ]
  });

  const ConversationDB = mongoose.model('Converstion' , ConDB);

  
  module.exports =  ConversationDB