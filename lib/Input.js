const minimist = require('minimist');

class Input {
    constructor(argument) {
        const parsedArgument = minimist(argument);
        delete parsedArgument._;
        const [[type, payload]] = Object.entries(parsedArgument);
        
        this.type = type;
        this.payload = payload;
    }

    valid() {
        const { type, payload } = this;
        // console.log(type, payload);
        return (type === 'add' && payload);
    }
}

module.exports = {
    Input
};
