const mongoose = require('mongoose');
const connectDB = require('../db');

connectDB();

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

const categoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: false,
    unique: true
  }
});

categoriesSchema.pre('save', function(next) {
  this.slug = generateSlug(this.title);
  next();
});

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
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
  content: {
    type: String,
    required: true
  },
  media: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media',
    required: false
  }],
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
    required: false
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  slug: {
    type: String,
    required: false,
    unique: true
  }
});

newsSchema.pre('save', function(next) {
  this.slug = generateSlug(this.title);
  next();
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

const Categories = mongoose.models.Categories
  ? mongoose.model('Categories')
  : mongoose.model('Categories', categoriesSchema);

const News = mongoose.models.News
  ? mongoose.model('News')
  : mongoose.model('News', newsSchema);

const Media = mongoose.models.Media
  ? mongoose.model('Media')
  : mongoose.model('Media', mediaSchema);

const User = mongoose.models.User
  ? mongoose.model('User')
  : mongoose.model('User', userSchema);

module.exports = { Categories, Media, News, User };