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

module.exports = {
    parse
};