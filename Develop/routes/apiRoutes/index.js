const router = require('express').Router()
const notes = require('../../db/db.json')
const fs = require("fs");
const path = require("path");

router.get('/api/notes', (req, res) => {
    res.json(notes)
})

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length
    
    const note = addNote(req.body, notes);
    res.json(note);
    
})

function addNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

module.exports = router