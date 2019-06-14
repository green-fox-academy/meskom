const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '')));

app.use(express.json());

app.post('/signup', (req, res) => {
    let username = req.body.name 
    let email = req.body.email
    console.log (username,email)
    res.send(`Thanks ${username}, we will send updates to ${email}`)
})
app.listen(port, () => console.log(`listening on port ${port}`))
