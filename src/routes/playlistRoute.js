import express from 'express';
import {
    createPlaylist,
    getAllPlaylists,
    getPlaylistById,
    updatePlaylist,
    deletePlaylist
} from '../controllers/playlistController.js';

const playlistRouter = express.Router();

// Routes pour les playlists
playlistRouter.post('/add', createPlaylist);
playlistRouter.get('/list', getAllPlaylists);
playlistRouter.get('/playlists/:id', getPlaylistById);
playlistRouter.put('/playlists/:id', updatePlaylist);
playlistRouter.delete('/playlists/:id', deletePlaylist);

export default playlistRouter;
