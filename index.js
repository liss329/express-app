const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcom to Express');
});

app.listen(3000, () => {
    console.log('Start server port:3000');
});
