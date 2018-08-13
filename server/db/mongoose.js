var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp');

//unlike Monogoclient.connect, where connections are managed manually,
//mongoose maintains the connection over time on the mongoose variable,
//behind the scenes mongoose waits and since the connection is maintained,
//performing server operations are instantaneously executed.
//No micromanaging with mongoose.

//Tell mongoose to use built in promise library:
mongoose.Promise = global.Promise;

module.exports = {mongoose};