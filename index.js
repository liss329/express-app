const express = require('express');
const ejs = require('ejs');

const app = express();
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

app.get('/', (req, res) => {
    const msg =
        `This is Express-app Top page<br>
        これはトップページです`;
    res.render('index.ejs', {
        title: 'Index',
        content: msg,
        link: { href: '/other', text: '※別のページに移動' },
    });
});

app.get('/other', (req, res) => {
    const msg =
        `This is Express-app Top page<br>
        これは用意された別のページです`;
    res.render('index.ejs', {
        title: 'other',
        content: msg,
        link: { href: '/', text: '※トップに戻る' },
    });
});

app.listen(3000, () => {
    console.log('Start server port:3000');
});
