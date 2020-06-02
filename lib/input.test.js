const { Input } = require('./input');

describe('input', () => {
    let input;
    beforeEach(() => {
        input = new Input();
    });

    it('parses in the information', () => {
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
        const action = input.parse(commandLineArguments);

        expect(action).toEqual({
            type: 'add',
            payload: 'I am a note'
        });
    });

    it('valid function', () => {
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
        const isValid = input.valid(input.parse(commandLineArguments));
        expect(isValid).toBeTruthy();
    });

    it('valid function', () => {
        const commandLineArguments = ['node', 'index.js', '--adhd', 'I am a note'];
        const isValid = input.valid(input.parse(commandLineArguments));
        expect(isValid).toBeFalsy();
    });

    it('valid function', () => {
        const commandLineArguments = ['node', 'index.js', '--add', ''];
        const isValid = input.valid(input.parse(commandLineArguments));
        expect(isValid).toBeFalsy();
    });
});