const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('assets'));
app.get('/', (req, res) => {
    res.sendFile(path.join('/', 'index.html'));
});
// doubling
app.get('/doubling', (req, res) => {
    let input = req.query.input * 1
    let output = {}
    if (!input) {
        output.error = 'plz gimme input'
        
    }
    else {
        output.received = input;
        output.result = input * 2;
    }
    return res.send(output);

});
// greater 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
