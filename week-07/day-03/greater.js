const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('assets'));
app.get('/', (req, res) => {
    res.sendFile(path.join('/', 'index.html'));
});
// greater 
app.get('/greater', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    let output = {};
    if (!name && !title) {
        output.error = "Please provide a name and a title!"
    }
    else if (!name) {
        output.error = "Please provide a name!"
    }
    else if (!title) {
        output.error = "Please provide a title!"
    }
    else {
        output.welcome_message = `Oh, hi there ${name}, my dear ${title}!`;
    }
    return res.send(output);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
