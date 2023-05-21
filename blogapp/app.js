const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const morgan = require('morgan');

const options = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.crt'))
};

const articles = JSON.parse(fs.readFileSync(path.join(__dirname, 'db', 'articles.json')));

let app = express();
app.locals.appTitle = 'blog-express';
app.locals.articles = articles;

app.set('appname', 'blogapp');
app.set('port', process.env.PORT || 8000);
app.set('host', process.env.HOST || 'localhost');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(morgan('dev'));

app.get('/admin', (req, res, next) => {
  res.render('admin');
});
app.get('/post', (req, res, next) => {
  res.render('post');
});
app.get('/login', (req, res, next) => {
  res.render('login');
});
app.get('/articles/:slug', (req, res, next) => {
  let article = articles.find(a => { if (a.slug === req.params.slug) return a; });
  res.render('article', article);
});
app.get('/', (req, res) => {
  res.render('index');
});

https.createServer(options, app).listen(app.get('port'), app.get('host'), () => {
  console.log(`Express.js server is listening at https://${app.get('host')}:${app.get('port')}`);
});

module.exports = app;
