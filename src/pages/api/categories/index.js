const mongoose = require('mongoose');
const connectDB = require('../../../../db');
const { Categories } = require('../../../../models/News');

connectDB();

const handleCategories = async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const categoriesData = await Categories.find();
        res.status(200).json(categoriesData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    case 'POST':
      try {
        const newCategoriesData = req.body;
        const newCategories = new Categories(newCategoriesData);
        await newCategories.save();
        res.status(201).json(newCategories);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    case 'PUT':
      try {
        const updateCategoriesData = req.body;
        const updatedCategories = await Categories.findByIdAndUpdate(
          updateCategoriesData._id,
          updateCategoriesData,
          { new: true }
        );
        res.status(200).json(updatedCategories);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
      break;
    case 'DELETE':
      try {
        const deletedCategories = await Categories.findByIdAndDelete(req.query._id);
        res.status(200).json(deletedCategories);
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

export default handleCategories;