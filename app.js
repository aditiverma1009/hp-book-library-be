'use strict'
import chalk from 'chalk';
import {
    createNote, listNotes, removeNote, appendNote
} from './notes.js';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
// import { describe } from 'yargs';
// const chalk = require('chalk')
const args = yargs(process.argv.slice(2))

args.command('add', 'add a new note', {
    title: {
        describe: 'title to the note',
        demandOption: true,
        type: 'string'
    },
    body: {
        describe: 'body to the note',
        demandOption: true,
        type: 'string'
    }
}, function (argv) {
    const newNote = createNote(argv.title, argv.body)
    console.log(newNote)
}).argv


args.command('remove', 'remove a new note', {
    title: {
        describe: 'title to the note',
        demandOption: false,
        type: 'string'
    },
}, (argv) => {
    console.log(removeNote(argv.title))
}).argv


args.command('list', 'list all notes', {
}, () => {
    const allNotes = listNotes()
    console.log(allNotes)
}).argv

args.command('append', 'append to given note', {
    title: {
        describe: 'title of the note to be added to',
        demandOption: false,
        type: 'string'
    }, body: {
        describe: 'append this text',
        demandOption: false,
        type: 'string'
    }
}, (argv) => {
    listNotes(argv.title, argv.body)
    console.log('Append:', argv)
}).argv