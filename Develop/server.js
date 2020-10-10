const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

//parse data
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));

//path to html routes
app.use('/', htmlRoutes)

//path to api routes
app.use('/', apiRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});