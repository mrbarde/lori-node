var path = require('path');
var {Clicks} = require('lori-scripts');

var config = new Clicks({
    baseDir: path.resolve(__dirname)
});

config.init()

module.exports = config;