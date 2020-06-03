const { Note } = require('./Notes');

describe('notes', () => {
    it('adds a note', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };
        const addedAction = Note.add(action);
        expect(addedAction).toEqual({ 
            id: expect.any(Number),
            text: 'my note' });
    });

    it('execute function', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };
        const addedAction = Note.execute(action);
        expect(addedAction).toEqual({ 
            id: expect.any(Number),
            text: 'my note' });
    });

});