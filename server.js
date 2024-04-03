const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {

    var data = {
        "name": "John",
        "age": 30,
        "city": "New York"
    };
    res.send(data);
});

app.get('/api/users', (req, res) => {
    res.send('API Users');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});