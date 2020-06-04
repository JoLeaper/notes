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
            return this.findByIdAndDelete({ _id: action.payload })
                .then(note => {
                    console.log('you deleted the note');
                    return note;
                });
        case 'list':
            return this.find()
                .then(note => {
                    console.log(note);
                });
        default:
            return;
    }
};

module.exports = mongoose.model('Note', noteSchema);
