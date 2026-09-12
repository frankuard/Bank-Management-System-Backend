const mongoose = require('mongoose');

function connectToDB() {
    
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Server is Connected to DB");
    })
    .catch(err =>{
        console.log("Error connecting to DB",err)
        process.exit(1)
    })
}

module.exports = connectToDB