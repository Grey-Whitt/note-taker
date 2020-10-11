//requirements
const router = require('express').Router()
const notes = require('../../db/db.json')
const fs = require("fs");
const path = require("path");

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
    req.body.id = notes.length
    
    const note = addNote(req.body, notes);
    res.json(note);
    
})

router.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id

    const newNotes = notes.filter(note => note.id != noteId)
    
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(newNotes, null, 2)
    );

})



//exports routes so the can be used in server.js
module.exports = router