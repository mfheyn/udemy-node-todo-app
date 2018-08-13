const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users collection (name, age, location)
    const db = client.db('TodoApp');
    db.collection('Users').insertOne({
        name: 'Michael',
        age: 21,
        location: 'Wisconsin, USA'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user');
        }

        console.log(JSON.stringify(result, undefined, 2));
    })

    client.close();
});