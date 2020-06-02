const { execute } = require('./lib/notes');
const { parse, valid } = require('./lib/input');

const thing = valid(process.argv) && parse(process.argv);  
execute(thing);
