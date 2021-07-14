const { Schema, model } = require('mongoose');

const postSchema = new Schema({
<<<<<<< HEAD
    title: { type: String, required: true },
    //     picture: { 
    //         file: {type: Buffer, required: true},
    //         filename: {type: String, required: true},  
    // },
    //     size: { type: String, required: true},
    //     price: { type: String, required: true},
=======
    title: { type: String, required: true},
//     picture: { 
//         file: {type: Buffer, required: true},
//         filename: {type: String, required: true},  
// },
//     size: { type: String, required: true},
//     price: { type: String, required: true},
>>>>>>> 01fce7e5e86eb96b10dbc2ac5c4a203fdfc12931

})

module.exports = model('Post', postSchema);