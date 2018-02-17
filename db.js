var mongoose = require('mongoose');

var url = 'mongodb://MaineMadness:MaineMadness@ds239988.mlab.com:39988/mainemadness';
mongoose.connect(url);

module.exports = mongoose.connection;
