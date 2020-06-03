const { Note } = require('./lib/Notes');
const { Input } = require('./lib/Input');

const thing = new Input(process.argv);
if (thing.valid()) {
    Note.execute(thing);
}
