import Playlist from '../models/playlistModel.js';

// Créer une nouvelle playlist
export const createPlaylist = async (req, res) => {
    try {
        const { titre,username, playlist } = req.body;
        const newPlaylist = new Playlist({ titre,username, playlist });
        await newPlaylist.save();
        res.status(201).json(newPlaylist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtenir toutes les playlists
export const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find();
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir une playlist par ID
export const getPlaylistById = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);
        if (!playlist) return res.status(404).json({ message: 'Playlist non trouvée' });
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour une playlist
export const updatePlaylist = async (req, res) => {
    try {
        const { titre, playlist } = req.body;
        const updatedPlaylist = await Playlist.findByIdAndUpdate(
            req.params.id,
            { titre, playlist },
            { new: true }
        );
        if (!updatedPlaylist) return res.status(404).json({ message: 'Playlist non trouvée' });
        res.status(200).json(updatedPlaylist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer une playlist
export const deletePlaylist = async (req, res) => {
    try {
        const deletedPlaylist = await Playlist.findByIdAndDelete(req.params.id);
        if (!deletedPlaylist) return res.status(404).json({ message: 'Playlist non trouvée' });
        res.status(200).json({ message: 'Playlist supprimée' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
