const { parse } = require('./input');

describe('input', () => {
    it('parses in the information', () => {
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
        const action = parse(commandLineArguments);
        expect(action).toEqual({
            type: 'add',
            payload: 'I am a note'
        });
    });
});