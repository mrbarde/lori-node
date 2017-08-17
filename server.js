var express = require("express");
var app = express();
var loriConfig = require('./lori.config');
var chalk = require('chalk');
var path = require('path');
var {exec} = require('child_process');

// set static assets path
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// render view
app.use('/*', express.static(path.join(__dirname, 'public')));

// start node server
app.listen(loriConfig.serverPort, () => {
    console.log('Node server running at <'+chalk.green('localhost:'+loriConfig.serverPort)+'>')
});