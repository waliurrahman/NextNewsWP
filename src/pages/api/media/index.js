const mongoose = require('mongoose');
const connectDB = require('../../../../db');
const { Media } = require('../../../../models/News');

connectDB();


const handleMedia = async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const mediaData = await Media.find();
        res.status(200).json(mediaData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    case 'POST':
      try {
        const newMediaData = req.body;
        const newMedia = new Media(newMediaData);
        await newMedia.save();
        res.status(201).json(newMedia);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    case 'PUT':
      try {
        const updateMediaData = req.body;
        const updatedMedia = await Media.findByIdAndUpdate(
          updateMediaData._id,
          updateMediaData,
          { new: true }
        );
        res.status(200).json(updatedMedia);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    case 'DELETE':
      try {
        const deletedMedia = await Media.findByIdAndDelete(req.query._id);
        res.status(200).json(deletedMedia);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
};

export default handleMedia;