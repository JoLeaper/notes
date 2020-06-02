const { execute } = require('./lib/notes');
const { parse, valid } = require('./lib/input');

const thing = valid(process.argv) && parse(process.argv);  

if (thing) execute(thing);
else console.log('invalid command');
