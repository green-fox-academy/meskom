let mysql = require('mysql');

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db' + err.toString());
    return;
  }
  console.log('Connection established');
});

conn.end();

