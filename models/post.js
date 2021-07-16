const { Schema, model } = require('mongoose');
const Populate = require("../util/autopopulate");

const postSchema = new Schema({
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },

    size: { type: String, required: true },
    price: { type: String, required: true },
    description: {type: String, required: true}

})

postSchema
    .pre('findOne', Populate('creator'))
    .pre('find', Populate('creator')
    );

module.exports = model('Post', postSchema);