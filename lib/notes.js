const add = action => {
    const note = {
        text: action.payload
    };
    console.log(note);
    return note;
};

const execute = action => {
    switch (action) {
        case 'add':
            //code
            break;
        case 'delete':
            // this code will delete
            break;
        case 'edit':
            // this code will edit
            break;


    }
    const note = {
        text: action.payload
    };
    console.log(note);
};

module.exports = {
    execute,
    add
};