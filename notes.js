// const fs = require('fs');
import { readFileSync,writeFileSync } from 'node:fs';

export const createNote = (title, body) => {
    const allNotes = listNotes();
    let duplicateNotes = allNotes.filter((eachNote)=>{
        return eachNote.title === title
    })
    if(duplicateNotes.length === 0) {
        allNotes.push({
            title: title,
            body: body
        })
        // save it to file now
        saveNote(allNotes)
        return 'New Note created!'
    } else {
        return 'Note title is taken'
    }
}

const saveNote = (notes) => {
    // notes are json 
    const notesData = JSON.stringify(notes)
    writeFileSync('notes.json', notesData)
}


export const listNotes = () => {
    try {
        const fileData = readFileSync('./notes.json')
        const data = fileData.toString();
        return JSON.parse(data)
    } catch (error) {
        return []
    }

}

export const removeNote = (title) => {
    const allNotes = listNotes()
    const noteToBeLeft = allNotes.filter((eachNote)=>{
        return eachNote.title !== title
    })
    if(allNotes.length === noteToBeLeft.length) {
        return 'No note to remove!'
    } else {
        saveNote(noteToBeLeft)
        return 'Note removed!'
    }
}

export const appendNote = (title, body) => {
    console.log('append notes..')
}
