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
    database: 'quiz'
});

app.use(express.json());

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/game.html'));
})
app.get('/questions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/questions.html'));
})
app.get('/api/game', (req, res) => {
    conn.query(`SELECT * FROM questions ORDER BY rand()`, (err, rows) => {
        if (err) {
            res.status(500).send('DB error');
            return;
        }

        conn.query('SELECT * FROM answers WHERE question_id = ? ', [rows[0].id], (err, ans) => {
            if (err) {
                res.status(500).send('DB error');
                return;
            }

            rows[0].answers = ans
            res.send(rows[0]);

        })
    })
})

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
// app.post('/api/questions', (req, res) => {
//     console.log(req.body)
//     let newQA = req.body
//     console.log(newQA);
//     conn.query(`INSERT INTO questions (question) VALUES (?)`,[newQA.question], (err, rows) => {
//         if (err) {
//             console.log(err.toString());
//             res.status(500).send('DB error');
//             return;
//         }
//         console.log(rows)
        
//         conn.query(`INSERT INTO answers (question_id,answer,is_correct) VALUES {(?,?,?),(?,?,?),(?,?,?),(?,?,?)]`,
//             [
//                 (questionInsertId, newQA.answers[0].answer, newQA.answers[0].is_correct),
//                 (questionInsertId, newQA.answers[1].answer, newQA.answers[1].is_correct),
//                 (questionInsertId, newQA.answers[2].answer, newQA.answers[2].is_correct),
//                 (questionInsertId, newQA.answers[3].answer, newQA.answers[3].is_correct)
//             ],
//             (err, qa) => {
//                 if (err) {
//                     console.log(err.toString());
//                     res.status(500).send('DB error');
//                     return;
//                 }
//                 console.log(qa);
//                 res.sendStatus(200);
//             })
//     })
// })

app.post('/api/questions', (req, res) => {
    let newqa = req.body;
    conn.query(`INSERT INTO questions (question) VALUES (?)`,[newqa.question], (err, result) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        else {
            console.log(result)
        const questionInsertId = result.insertId;
        console.log(questionInsertId);
        console.log(newqa.answers[0].answer)
        console.log(newqa.answers[0].is_correct)

        conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,?),(?,?,?),(?,?,?),(?,?,?)`,
        [questionInsertId, newqa.answers[0].answer, newqa.answers[0].is_correct,
        questionInsertId, newqa.answers[1].answer, newqa.answers[1].is_correct,
        questionInsertId, newqa.answers[2].answer, newqa.answers[2].is_correct,
        questionInsertId, newqa.answers[3].answer, newqa.answers[3].is_correct], 
        (err, rows) => {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            console.log(rows);
            res.status(200).send;
        });
    }
    });
});

app.delete('/api/questions/:id', (res, req) => {
    let idp = req.params.id;
    console.log(idp);
    conn.query(`DELETE FROM questions WHERE id = ?`, [idp], (err, del_q) => {
        if (err) {
            console.log(err.toString());
            res.send('Database error');
            return;
        }
        else {
            conn.query(`DELETE FROM answers WHERE question_id = ?`, [idp], (err, del_a) => {
                if (err) {
                    console.log(err.toString());
                    res.send('Database error');
                    return;
                } else {
                    //console.log(del_a);
                    res.send('deleted Q&A')
                }
            });
        }
    })
});


app.listen(port, () => console.log(`listening on port ${port}`))

