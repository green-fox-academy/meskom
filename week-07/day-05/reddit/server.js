const express = require('express');
const app = express();
const port = 3000;
let mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reddit'
});

//app.get('/', (req, res) => res.send('Hello World!'));


conn.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db' + err.toString());
        return;
    }
    console.log('Connection established');
});

app.use(express.json());
app.get('/posts', function(req, res) {
    let input = 'SELECT * FROM posts;'
    conn.query(input, function(err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(200).send('Database error');
            return;
        }
        res.send(rows);

    });
});
//conn.end();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));