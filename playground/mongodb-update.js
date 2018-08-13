// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b70f44ef576c941d0d202c7')
    // }, {
    //     $set: { //set is an update operator, find more at mongodb website
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //update user, name from Fool to Jen, increment age
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b71ee8abbadef34ac5f3b52')
    }, {
        $set: {
            name: "Jen"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});