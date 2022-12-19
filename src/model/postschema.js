const mongoose = require('mongoose');
const Schema =mongoose.Schema
const postSchema = new Schema({
    author:String,
    location:String,
    likes:{type:Number},
    description: String,
    image: String,
    date: {type:Date,default:Date.now()}
    }
    )
const post = mongoose.model('post', postSchema);
module.exports=post
/*mongodb://localhost/posts */
