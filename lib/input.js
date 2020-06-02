const minimist = require('minimist');

class Input {
    constructor(argument){
        this.argument = argument;
    }

    parse(argument) {
        const parsedArgument = minimist(argument);
        delete parsedArgument._;
        const [[type, payload]] = Object.entries(parsedArgument);
        return {
            type: type,
            payload: payload
        };
    }

    valid(action) {
        const { type, payload } = action;
        // console.log(type, payload);
        return (type === 'add' && payload);
    }
}

module.exports = {
    Input
};