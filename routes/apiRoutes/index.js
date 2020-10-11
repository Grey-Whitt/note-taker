//requirements
const router = require('express').Router()
const notes = require('../../db/db.json')
const fs = require("fs");
const path = require("path");
const uniqid = require('uniqid');

//writes to the db when new note is added
function addNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

//route to get notes from the db
router.get('/api/notes', (req, res) => {
    res.json(notes)
})

//route to post to the db
router.post('/api/notes', (req, res) => {
    //sets the id of each note to an 8 byte unique id based on the current time
    req.body.id = uniqid.time()
    
    const note = addNote(req.body, notes);
    res.json(note);
    
})

//route to delete requested note based on id
router.delete('/api/notes/:id', (req, res) => {
    //sets noteId to the id in the query
    const noteId = req.params.id

    //takes noteId and uses it to find the note we want to delete
    const note = notes.findIndex(note => note.id === noteId);
 
    //removes note from the array
    notes.splice(note, 1);
    
    //writes in the db with the updated array
    res.json(noteId)
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    );

})


//exports routes so the can be used in server.js
module.exports = router