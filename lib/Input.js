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
        switch (type) {
            case 'add':
                return payload;
            case 'delete':
                return payload;
            case 'list':
                return true;
            default:
                return;
        }
    }
}

module.exports = {
    Input
};
