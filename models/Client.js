const mongoose = require('mongoose');
const { Torrent, torrentSchema } = require('./Torrent'); // Update the path accordingly

const torrentSchema = new mongoose.Schema({
    randID: String,
    clientName: String,
    userAgent: String,
    port: Number,
    uploadLimit: Number,
    downloadLimit: Number,
    peerID: String,
    torrents: [torrentSchema]
});

const Client = mongoose.model('Client', clientSchema);

module.exports = {
    Client
};