import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const chansonSchema = new Schema({
    name: String,
    desc: String,
    image: String,
    file: String,
    duration:String
});

const playlistSchema = new Schema({
    titre: { type: String, required: true },
    username:{ type: String, required: true },
    playlist: [chansonSchema]
});

const Playlist = model('Playlist', playlistSchema);

export default Playlist;
