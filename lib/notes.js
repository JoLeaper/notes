const add = action => {
    const note = {
        text: action.payload
    };
    console.log(note);
    return note;
};

const execute = action => {
    let note;
    switch (action.type) {
        case 'add':
            note = add(action);
            break;
        case 'delete':
            // this code will delete
            break;
        case 'edit':
            // this code will edit
            break;

    }
};

module.exports = {
    execute,
    add
};