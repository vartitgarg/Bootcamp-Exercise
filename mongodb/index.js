const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
  
app.listen(port, () => {
    console.log(`server is up and running to port ${port}`);
});

Contact.create({
    name: "Vartit",
    phone: 1234
    },function(err,newContact){
        if(err){
            console.log('error');
            return;
        }
        console.log('*******',newContact);
        return res.redirect('back');
});