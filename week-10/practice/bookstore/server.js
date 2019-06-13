const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bookinfo'
});

app.use(express.json());

app.get('/title', (req, res) => {
    conn.query(`SELECT book_name FROM book_mast`, (err, row) => {
        res.send(row)
    })
})

// app.get('/books', (req, res) => {
//     conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast
//     INNER JOIN author ON book_mast.aut_id = author.aut_id
//     INNER JOIN category ON book_mast.cate_id = category.cate_id
//     INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;`,
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send('Sql error!');
//             } else {
//                 console.log(result)
//                 res.status(200).send(result);
//             }
//         });
// });
app.get('/books', (req, res) => {
    let query = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast
    INNER JOIN author ON book_mast.aut_id = author.aut_id
    INNER JOIN category ON book_mast.cate_id = category.cate_id
    INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id `
    if (req.query.category) {
        query += `WHERE cate_descrip = ${req.query.category}`
    }
    if (req.query.publisher) {
        let pub = req.query.publisher
        query += `WHERE pub_name LIKE "%${pub}%"`;
    }
    if (req.query.plt) {
        query += `WHERE book_price < ${req.query.plt}`
    }
    if (req.query.pgt) {
        query += `WHERE book_price > ${req.query.pgt}`
    }
    conn.query(query, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send('Sql error!');
        } else {
            console.log(result)
            res.status(200).send(result);
        }
    });
});


app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => console.log(`listening on port ${port}`))

