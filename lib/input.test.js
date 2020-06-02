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
        const action = {
            type: 'add',
            payload: 'my note'
        };
        const isValid = valid(action);
        expect(isValid).toBeTruthy();
    });

    it('valid function', () => {
        const action = {
            type: 'adhd',
            payload: 'my note'
        };
        const isValid = valid(action);
        expect(isValid).toBeFalsy();
    });

    it('valid function', () => {
        const action = {
            type: '',
            payload: ''
        };
        const isValid = valid(action);
        expect(isValid).toBeFalsy();
    });
});