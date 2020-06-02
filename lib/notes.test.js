const { add } = require('./notes');

describe('notes', () => {
    it('add function', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };
        const addedAction = add(action);
        expect(addedAction).toEqual({ text: 'my note' });
    });

    // it('execute function', () => {
    //     const action = {
    //         type: 'add',
    //         payload: 'my note'
    //     };
    //     const executedAdd = execute('add');
    //     expect(executedAdd).toEqual(console.log(

    //     ));
    // });

});