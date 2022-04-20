const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const msg =
        `This is Index page<br>
        ※メッセージを書いて送信してください。`;
    res.render('index.ejs', {
        title: 'Index',
        content: msg,
    });
});

app.post('/', (req, res) => {
    const msg =
        `This is Posted page<br>
        あなたは${req.body.message}と送信しました。`;
    res.render('index.ejs', {
        title: 'Posted',
        content: msg
    });
});

app.get('/other', (req, res) => {
    const name = req.query.name;
    const pass = req.query.pass;
    const msg =
        `あなたの名前は${name}<br>
        パスワードは${pass}です。`;
    res.render('index.ejs', {
        title: 'other',
        content: msg,
        link: { href: '/', text: '※トップに戻る' },
    });
});

app.listen(3000, () => {
    console.log('Start server port:3000');
});
