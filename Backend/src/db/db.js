const mongoose = require('mongoose');


function connectToDB(req, res) {
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log('Connected to the database');
    }).catch((err)=>{
        console.log('Cannot connect to the database', err);
        process.exit();
    })
}


module.exports = connectToDB;
