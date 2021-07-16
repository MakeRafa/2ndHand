const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    // picture: {
    //     file: { type: Buffer, required: true },
    //     filename: { type: String, required: true },
    // },
    size: { type: String, required: true },
    price: { type: String, required: true },
    description: {type: String, required: true}

})

module.exports = model('Post', postSchema);