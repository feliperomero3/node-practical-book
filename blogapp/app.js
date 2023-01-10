const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');

const options = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.crt'))
};

let app = express();
app.locals.appTitle = 'blog-express';

app.set('appname', 'blogapp');
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap/dist'));

app.all('*', (req, res) => {
  res.render('index', { msg: 'Welcome to Practical Node.js!' });
});

https.createServer(options, app).listen(app.get('port'), () => {
  console.log(`Express.js server is listening on port ${app.get('port')}`);
});

module.exports = app;
