const express = require('express');
const mySql = require('mysql');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8080;
const conn = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'quiz'
});

conn.connect((err) => {
    if (err) {
        console.log(`MySql connection error!`, err);
    } else {
        console.log('MySQL connection estabilished!')
    }
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/game.html'));
});

app.get('/questions', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/questions.html'));
});


app.get('/api/game', (req, res) => {
    conn.query(`SELECT id, question FROM questions ORDER BY rand(); `, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        conn.query(`SELECT * FROM answers WHERE question_id =?`, [rows[0].id], (err, ans) => {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            console.log(ans);
            let qa = {};
            qa = rows[0];
            qa.answers = ans
            console.log(qa);
            res.send(qa);
        });
    });
});

app.get('/api/questions', (req, res) => {
    conn.query(`SELECT * FROM questions; `, (err, ques) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(ques);
    });
});

app.post('/api/questions', (res, req) => {
    let newqa = {}
    newqa = req.body;
    console.log(newqa);
    conn.query(`INSERT INTO questions (question) VALUES (?)`,[newqa.question], (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        console.log(rows[0].id);
        conn.query(`INSERT INTO answers (question_id,answer,is_correct) VALUES (?,?,?),(?,?,?),(?,?,?),(?,?,?)`,
        [rows[0].id, newqa.answers[0].answer, newqa.answer[0].is_correct],
        [rows[0].id, newqa.answers[1].answer, newqa.answer[1].is_correct],
        [rows[0].id, newqa.answers[2].answer, newqa.answer[2].is_correct],
        [rows[0].id, newqa.answers[3].answer, newqa.answer[3].is_correct], 
        (err, rows) => {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            console.log(rows);
            res.status(200).send;
        });
    });
});
app.delete('api/questions/:id', (res, req) => {
    let idp = req.params.id;
    conn.query(`DELETE FROM questions WHERE id = ?`, [idp], (err, del) => {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
        console.log(del);
        res.send.status(200);
    })
    conn.query(`DELETE FROM answers WHERE question_id = ?`, [idp], (err, del) => {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
        console.log(del);
        res.send.status(200);

    })
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}!`);
});
