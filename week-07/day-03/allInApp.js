const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');

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
// greeter 
app.get('/greeter', (req, res) => {
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
// appendA 
app.get('/appenda/:str', (req, res) => {
    let str = req.params.str;
    
    let output = {};
    output.appended = str + 'a'

    return res.send(output);
});
 app.use(express.json());
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );
// doUntil
app.post('/dountil/:action',(req,res) => {
    action = req.body.action
    if (action === "sum"){
        
    } 
    console.log(req.body)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
