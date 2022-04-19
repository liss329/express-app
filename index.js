const express = require('express');
const ejs = require('ejs');

const app = express();
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

app.get('/', (req, res) => {
    // index.ejsをレンダリングする
    res.render('index.ejs', {
        title: 'Index',
        content: 'This is Express-app Top page',
    });
});

app.listen(3000, () => {
    console.log('Start server port:3000');
});
