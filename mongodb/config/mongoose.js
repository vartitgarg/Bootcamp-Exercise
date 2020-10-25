const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts_list_db');


const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to db'));

db.once('open',function(){
    console.log('Sucessfully connected to db');
});