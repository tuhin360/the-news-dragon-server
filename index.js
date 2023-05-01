const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories');

app.use(cors())


app.get('/', (req, res) => {
    res.send('Dragon is running!')
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, (port, () => {
    console.log(`Dragon API is running on port ${port}`);
}))