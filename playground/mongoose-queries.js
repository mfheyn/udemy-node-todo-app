//mongoosejs.com/docs/guide.html
const {ObjectID} = require('mongodb'); //for ObjectID.isValid

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b73488d06e5b13833fb8c24';
if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({ //returns array of objects if exists, or empty array
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
}).catch((e) => console.log(e));

Todo.findOne({ //returns object if exists, or null
    _id: id
}).then((todo) => {
    console.log('Todos', todo);
}).catch((e) => console.log(e));

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by ID', todo);
}).catch((e) => console.log(e));

User.findById('5b71fbf16ec3a1de625').then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log("Invalid id"));