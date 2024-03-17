
const express = require('express');
const app = express();
const port = 3000;


app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.send('Selamat datang di Express JS')
});

app.get('/express', (request, response) => {
    response.render('index');
})

app.listen(port, () => {
    console.log(`Aplikasi ini telah dijalankan di server http://localhost:${port}`);
});




