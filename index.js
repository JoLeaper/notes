const { Note } = require('./lib/notes');
const { Input } = require('./lib/input');

const thing = new Input(process.argv);
if (thing.valid()) {
    Note.execute(thing);
}
