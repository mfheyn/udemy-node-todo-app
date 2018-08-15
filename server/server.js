var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

var port = 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/12345, use :
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // Validate id using isValid
        // 404 - send back empty send
    if (!ObjectID.isValid(id))
        res.status(404).send({});
    
    // findById query looking for matching ID
        //success
            //if todo - send it back
            // if no todo - send back 404 with empty body
        //error
            // 400 - and send empty body back
    Todo.findById(id).then((todo) => {
        if (todo != null) {
            res.status(200).send({todo});
        }
        else {
            res.status(404).send();
        }
    }, (error) => {
        res.status(404).send();
    }).catch((e) => {
        res.tatus(404).send();
    })
});

app.listen(port, () => {
    console.log('Started on port', port);
});

module.exports = {app};