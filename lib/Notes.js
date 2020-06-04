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
                    return note;
                });
        case 'list':
            return this.find();
        default:
            return;
    }
};

module.exports = mongoose.model('Note', noteSchema);
