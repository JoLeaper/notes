const { Note } = require('./notes');

describe('notes', () => {

    it('add function', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };
        const note = new Note();
        const addedAction = note.add(action);
        expect(addedAction).toEqual({ text: 'my note' });
    });

    it('add function', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };
        const addedAction = Note.execute(action);
        expect(addedAction).toEqual({ text: 'my note' });
    });

//     // it('execute function', () => {
//     //     const action = {
//     //         type: 'add',
//     //         payload: 'my note'
//     //     };
//     //     const addedAction = execute(action);
//     //     console.log('000000000000000', addedAction, '00000000000');
//     //     expect(addedAction).toEqual({ text: 'my note' });
//     // });

// });