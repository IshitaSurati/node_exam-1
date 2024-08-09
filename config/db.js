const mongoose = require('mongoose');

const dbConnect = async () => {
    await mongoose.connect("mongodb+srv://ishitasurati83:todo12345@cluster0.enet2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connect to MongoDB");

}

module.exports =dbConnect