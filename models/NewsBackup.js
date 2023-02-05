const mongoose = require('mongoose');
const connectDB = require('../db');

connectDB();

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
});

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  media: [mediaSchema],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Category = mongoose.models.Category
  ? mongoose.model('Category')
  : mongoose.model('Category', categorySchema);

const News = mongoose.models.News
  ? mongoose.model('News')
  : mongoose.model('News', newsSchema);

const Media = mongoose.models.Media
  ? mongoose.model('Media')
  : mongoose.model('Media', mediaSchema);

const User = mongoose.models.User
  ? mongoose.model('User')
  : mongoose.model('User', userSchema);

module.exports = { Category, Media, News, User };
