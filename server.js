const express = require('express');
const PORT = 3000;
const app = express();

// app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(PORT, () => {
    console.log('Server on http://localhost:3000');
});