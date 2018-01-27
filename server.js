const http = require('http');
const express = require('express');

const app = express();
let server = http.createServer(app);

const port = 3001;
const host = 'localhost';

app.get('/matches', (req, res) => {
    let query = req.query["userName"];
    res.send(['XYZ'])
})

server.listen(port, host, () => {
    console.log('Server running, listening at:', `${host}:${port}`);
});
