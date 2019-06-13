const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 8081;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'auction'
});
app.use(express.json());

app.get('/api/items', (req, res) => {
    conn.query(`SELECT * FROM auction `, (err, row) => {
        res.send(row)
    })
})
app.post('/api/items/:id/bids', (req, res) => {
    let info = req.body
    let id = req.params.id
    console.log(info, id);
    conn.query(`SELECT highest_bid, expire_date FROM auction WHERE id=?`, [id], (err, row) => {
        if (err) {
            console.log(err);
            res.status(500).send('DB error!');
            return
        }
        if (row[0].highest_bid >= info.amount) {
            let message = { message: "Your bid is below the highest bid!" }
            res.send(message)
        }
        console.log (row[0].expire_date, new Date())
        if (row[0].expire_date < new Date()) {
             let message = { message: "The auction is over!" }
             res.send(message)
         }
         else {
            conn.query(`UPDATE auction SET highest_bid = ?, bidders_name = ? WHERE ID = ? `,
                [info.amount, info.name, id], (err, status) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('DB error!');
                    } else {
                        res.send({message: "Successful!"})
                    }
                });
        };
    })
});

app.listen(port, () => console.log(`listening on port ${port}`))
