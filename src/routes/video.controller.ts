import { RequestHandler } from 'express';
import VideoModel from './Video';

export const createVideo: RequestHandler = async (req, res) => {

    const videoFound = await VideoModel.findOne({url: req.body.url});

    if (videoFound) return res.status(301).json({message: 'Duplicate video!'});

    const video = new VideoModel(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
}

export const getVideos: RequestHandler = async (req, res) => {
    const videos = await VideoModel.find();
    return res.json(videos);
}

export const getVideo: RequestHandler = async (req, res) => {
    const id: string = req.params?.id;
    const video = await VideoModel.findById(id);
    if (!video) return res.status(204).json({message: 'No video where found!'});
    return res.json(video);
}

export const updateVideo: RequestHandler = async (req, res) => {
    const id: string = req.params.id;
    const videoUpdated = await VideoModel.findByIdAndUpdate(id, req.body, {new: true});
    if (!videoUpdated) return res.status(204).json({message: 'No video where found!'})
    return res.json(videoUpdated);
}

export const deleteVideo: RequestHandler = async (req, res) => {
    const id: string = req.params.id;
    const deletedVideo = await VideoModel.findByIdAndDelete(id);
    if (!deletedVideo) return res.status(204).json({message: 'Video no deleted!'});
    return res.json(deletedVideo);
}