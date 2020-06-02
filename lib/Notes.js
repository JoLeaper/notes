class Note {
    static add(action) {
        const note = {
            id: Date.now(),
            text: action.payload
        };
        console.log(note);
        return note;
    }

    static execute(action){
        switch (action.type) {
            case 'add':
                return Note.add(action);
            case 'delete':
            // this code will list
                break;
            case 'edit':
            // this code will delete
                break;
            default:
                return;
        }
    }
}

module.exports = {
    Note
};
