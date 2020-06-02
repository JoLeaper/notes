const { parse, valid } = require('./input');

describe('input', () => {
    it('parses in the information', () => {
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
        const action = parse(commandLineArguments);
        expect(action).toEqual({
            type: 'add',
            payload: 'I am a note'
        });
    });

    it('valid function', () => {
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
        const isValid = valid(commandLineArguments);
        expect(isValid).toBeTruthy();
    });

    it('valid function', () => {
        const commandLineArguments = ['node', 'index.js', '--adhd', 'I am a note'];
        const isValid = valid(commandLineArguments);
        expect(isValid).toBeFalsy();
    });

    it('valid function', () => {
        const commandLineArguments = ['node', 'index.js', '--add', ''];
        const isValid = valid(commandLineArguments);
        expect(isValid).toBeFalsy();
    });
});