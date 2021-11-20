var express = require('express')
const routes = require('./src/routes/index');
const app = express();
const bodyParser = require('body-parser')
const config = require('./webpack.config.js');
const webpack = require('webpack');

const compiler = webpack(config);

new Promise((resolve, reject) => {
  compiler.run((err, res) => {
    if (err) {
      return reject(err);
    }
    resolve(res);
  });
});

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/js', express.static(__dirname + 'public/js'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use('/', routes);

module.exports = app;