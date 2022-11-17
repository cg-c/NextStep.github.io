const express = require('express');
const PORT = 3000;
const path = require('path');
const app = express();

app.use(express.static('public'));

// app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/industries', (req, res) => {
    res.render('industries');
})

app.get('/quiz', (req, res) => {
    res.render('quiz');
})

app.get('/industries/construction', (req, res) => {
    res.render('industries/construction');
})

app.get('/industries/cyberSecurity', (req, res) => {
    res.render('industries/cyberSecurity');
})

app.get('/industries/dataScience', (req, res) => {
    res.render('industries/dataScience');
})

app.get('/industries/education', (req, res) => {
    res.render('industries/education');
})

app.get('/industries/finance', (req, res) => {
    res.render('industries/finance');
})

app.get('/industries/healthCare', (req, res) => {
    res.render('industries/healthCare');
})

app.get('/industries/iot', (req, res) => {
    res.render('industries/iot');
})

app.get('/industries/music', (req, res) => {
    res.render('industries/music');
})

app.get('/industries/realitySpace', (req, res) => {
    res.render('industries/realitySpace');
})

app.get('/industries/theoretical', (req, res) => {
    res.render('industries/theoretical');
})

app.listen(PORT, () => {
    console.log('Server on http://localhost:3000');
});