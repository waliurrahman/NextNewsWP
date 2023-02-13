const mongoose = require('mongoose');
const connectDB = require('../../../../db');
const { News } = require('../../../../models/News');

connectDB();


const handleCategories = async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const newsData = await News.find();
        res.status(200).json(newsData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    case 'POST':
      try {
        const newNewsData = req.body;
        const newNews = new News(newNewsData);
        await newNews.save();
        res.status(201).json(newNews);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    case 'PUT':
      try {
        const updateNewsData = req.body;
        const updatedNews = await News.findByIdAndUpdate(
          updateNewsData._id,
          updateNewsData,
          { new: true }
        );
        res.status(200).json(updatedNews);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    case 'DELETE':
      try {
        const deletedNews = await News.findByIdAndDelete(req.query._id);
        res.status(200).json(deletedNews);
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