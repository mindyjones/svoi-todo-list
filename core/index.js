const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express();

const PORT = 3333

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const tags = JSON.parse(fs.readFileSync('../fakedata/tags.json'))

app.get('/tags', function (req, res) {
    return res.send(tags)
});

app.get('/tags/:id', function (req, res) {
    const id = req.params.id;
    return res.send(tags[id])
});

app.post('/tags', function (req, res) {
    const data = req.body
    tags.push(data)
    console.log('🌑 новый тег успешно добавлен')
    return res.send(tags)
})

app.listen(PORT, function () {
    console.log('✅ Сервер запущен с портом ' + PORT)
})