const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

noteSchema.statics.execute = function(action) {
    switch (action.type) {
        case 'add':
            return this.create({
                text: action.payload
            });
        case 'delete':
            return this.findByIdAndDelete({
                _id: action.payload
            });
        case 'list':
            return this.find();
        default:
            return;
    }
};

module.exports = mongoose.model('Note', noteSchema);

// class Note {
//     static add(action) {
//         const note = {
//             id: Date.now(),
//             text: action.payload
//         };
//         console.log(note);
//         return note;
//     }

//     static execute(action){
//         switch (action.type) {
//             case 'add':
//                 return Note.add(action);
//             case 'delete':
//             // this code will list
//                 break;
//             case 'edit':
//             // this code will delete
//                 break;
//             default:
//                 return;
//         }
//     }
// }

// module.exports = {
//     Note
// };
