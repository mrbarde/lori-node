var path = require('path');
var {Clicks} = require('lori-scripts');

var config = new Clicks({
    baseDir: path.resolve(__dirname),
    env: path.join(
        __dirname, 
        'src/environments/',
        process.env.NODE_ENV.toLowerCase()+'.environment.js'
    )
});

config.init()

module.exports = config;