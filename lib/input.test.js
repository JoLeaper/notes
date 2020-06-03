const { Input } = require('./Input');

describe('input', () => {
    let input;
    beforeEach(() => {
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
        input = new Input(commandLineArguments);
    });

    it('parses in the information', () => {
        expect(input).toEqual({
            type: 'add',
            payload: 'I am a note'
        });
    });

    it('valid function returns true', () => {
        const isValid = input.valid();
        expect(isValid).toBeTruthy();
    });

    it('valid function returns false if command is wrong', () => {
        const commandLineArguments = ['node', 'index.js', '--adhd', 'I am a note'];
        input = new Input(commandLineArguments);
        const isValid = input.valid();
        expect(isValid).toBeFalsy();
    });

    it('valid function returns false if there is no text', () => {
        const commandLineArguments = ['node', 'index.js', '--add', ''];
        input = new Input(commandLineArguments);
        const isValid = input.valid();
        expect(isValid).toBeFalsy();
    });
});
