require('dotenv').config();
const mongoose = require('mongoose');
const {Client} = require('./models/Client');
const {Torrent} = require('./models/Torrent');

// mongoose.connect(process.env.LOCAL_DB)
// .then(() => {
//     t.save()
//     .then(() => console.log("saved"))
//     .catch((err) => console.error(err));
// });
