//requirements
const router = require('express').Router()
const path = require('path');

//route that serves the homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//route that serves the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


//exports routes
module.exports = router;