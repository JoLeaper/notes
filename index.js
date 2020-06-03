const mongoose = require('mongoose');

const Note = require('./lib/Notes');
const { Input } = require('./lib/Input');

mongoose.connect('mongodb://localhost:27017/play', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const action = new Input(process.argv);
if (action.valid()) {
    Note.execute(action);
}
