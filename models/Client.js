const mongoose = require('mongoose');
const { torrentSchema } = require('./Torrent'); // Update the path accordingly

const clientSchema = new mongoose.Schema({
    randID: String,
    clientName: String,
    userAgent: String,
    port: Number,
    uploadLimit: Number,
    downloadLimit: Number,
    peerID: String,
    torrents: [torrentSchema]
});

clientSchema.virtual('availableUpload')
.set(function(value) {})
.get(function() {})

const Client = mongoose.model('Client', clientSchema);

module.exports = {
    Client
};