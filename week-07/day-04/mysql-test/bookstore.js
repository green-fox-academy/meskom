let mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo'
});

conn.query('SELECT  FROM category;', function(err, rows) {
    console.log('Data received from db:\n');
    console.log(rows);
  });

// conn.connect(function(err) {
//   if (err) {
//     console.log('Error connecting to Db' + err.toString());
//     return;
//   }
//   console.log('Connection established');
// });
// conn.end();
app.use(express.json());
app.get('/', function(req, res) {
  conn.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

