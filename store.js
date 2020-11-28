const util = require('util');
const fs = require('fs');

const uuidv1 = require ('uuid/v1');
const { join } = require('path');

const readFileAsync = util.promisefy(fs.readfile);
const writeFileAsync = util.promisify(fs.writefile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8');
        
    }
    write(note) {
        return writeFileAsync('db/db.json', json.stringify(note));   
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;

            try{
                parsedNotes = [].concat(join.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes
        });
    }

    addNote(note) {
        const { title, text } = note;

        if (!title || !test) {
            throw new Error('Note 'title' and 'text' cannot be black');

        }

        const newNote = {title, text id: uuidv1() };

        retuen this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    }

    remoteNote(id) {
        return this.getNotes()
        .then((notes) => notes.filter((notes) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes));
    }
}

module.exports = new Store();
