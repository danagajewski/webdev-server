import mongoose from 'mongoose';
const schema = mongoose.Schema({
  postedBy: {username: String},
  tuit: String,
  handle: String,
  likes: Number,
  dislikes: Number,
  comments: Number,
  retuits: Number,
  time: String,
  avatar_image: String
}, {collection: 'tuits'});
export default schema;