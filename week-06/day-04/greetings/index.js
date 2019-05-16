const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let value = req.query.name

  if (!value) {
    res.render('home', { greetings: `Welcome Guest` })
  } else {
    res.render('home', { greetings: `Welcome ${value}` })
  }
});

//THANKS BALÁZS!! :)



// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});