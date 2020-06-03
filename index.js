const Note = require('./lib/Notes');
const { Input } = require('./lib/Input');

const action = new Input(process.argv);
if (action.valid()) {
    Note.execute(action);
}
