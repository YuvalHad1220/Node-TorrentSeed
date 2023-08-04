const mongoose = require('mongoose');

const torrentSchema = new mongoose.Schema({
    name: String,
    size: Number,
    seeders: Number,
    leechers: Number,
    downloadSpeed: Number,
    uploadSpeed: Number,
    isStartAnnounced: Boolean,
    isFinishAnnounced: Boolean,
    announceUrl: String,
    infoHash: Buffer,
    timeToAnnounce: Number,
    downloaded: Number,
    uploaded: Number
});

const Torrent = mongoose.model('Torrent', torrentSchema);

module.exports = {Torrent, torrentSchema};