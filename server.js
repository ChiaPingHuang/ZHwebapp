const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')

app.use(bodyParser.urlencoded({ extended: true }));


app.set('view-engine', 'ejs');


const users = [];



app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login1.html");
})


app.post('/login', function (req, res) {
    res.send(req.body);
    console.log("req.body");
});


//Register

app.get('/register', function (req, res) {
    res.render(__dirname + "/views/register.ejs");
});

app.post('/register', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
   
    res.redirect('/login');
    } catch {
    //   res.redirect('/register')
    } 
    console.log(users);
    
  })




















app.listen(3000, function () {
    console.log("Server is running");
});


