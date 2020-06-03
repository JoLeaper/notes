const Note = require('./Notes');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongodb = new MongoMemoryServer();

describe('Note model', () => {
    beforeAll(() => {
        return mongodb.getUri()
            .then(uri => mongoose.connect(uri, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }));
    });
    
    beforeEach(() => {
        return mongoose.connection.dropDatabase();
    });

    afterAll(() => {
        return mongoose.connection.close()
            .then(() => mongodb.stop());
    });

    it('adds a note to the user database with execute', () => {
        const action = {
            type: 'add',
            payload: 'hello world'
        };

        return Note.execute(action)
            .then(note => {
                expect(note.toJSON()).toEqual({
                    _id: expect.anything(),
                    text: expect.any(String),
                    __v: 0
                });
            });
    });

    it('lists the notes that are in the database', async() => {
        const addNote = {
            type: 'add',
            payload: 'hello world'
        };

        const listNotes = {
            type: 'list'
        };

        await Note.execute(addNote);

        return Note.execute(listNotes)
            .then(notes => {
                expect(notes.map(note => note.toJSON())).toEqual([{
                    _id: expect.anything(),
                    text: expect.any(String),
                    __v: 0
                }]);
            });
    });
    
    it('deletes a note from the database', async() => {
        const addNote = {
            type: 'add',
            payload: 'hello world'
        };

        const note = await Note.execute(addNote);

        const deleteNote = {
            type: 'delete',
            payload: note._id
        };

        return Note.execute(deleteNote)
            .then(notes => {
                expect(notes.toJSON()).toEqual({
                    _id: deleteNote.payload,
                    text: expect.any(String),
                    __v: 0
                }
                );
            });
    });
});
