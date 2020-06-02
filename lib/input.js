const minimist = require('minimist');

const parse = (argument) => {
    const parsedArgument = minimist(argument);
    delete parsedArgument._;
    const [[type, payload]] = Object.entries(parsedArgument);
    return {
        type: type,
        payload: payload
    };
};

const valid = (argument) => {
    const parsedArgument = minimist(argument);
    delete parsedArgument._;
    const [[type, payload]] = Object.entries(parsedArgument);
    return (type === 'add' && payload);
};

module.exports = {
    parse,
    valid
};