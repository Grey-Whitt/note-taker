const express = require('express')
const PORT = process.env.PORT || 3001
const router = require('./routes/htmlRoutes');
const app = express()
const htmlRoutes = require('./routes/htmlRoutes')
app.use(express.static('public'));

app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});