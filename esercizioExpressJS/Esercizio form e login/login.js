const express = require('express')
const app = express()
const port = 3000
var path = require('path')

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const fs = require('fs');

var usernameSaved;
var passwordSaved;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
})

app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname + '/signform.html'));
})

app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname + '/loginform.html'));
})

app.get("/loginok", function(req,res){
    res.sendFile(path.join(__dirname + '/privatePage.html'));
})

app.get("/loginfail", function(req,res){
    res.send("Username e password non corretti!");
})

app.get("/signok", function(req,res){
    res.send("Registrazione effettuata con successo!" + "<br><br>" +
    "Username -> " + usernameSaved + "<br><br>"+
    "Password -> " + passwordSaved + "<br>")
})


app.get("/loginfail", function(req,res){
    res.send("Username e password non corretti!")
})


app.post('/signin', (req, res) => {
    usernameSaved = req.body.username;
    passwordSaved = req.body.password;

    json = {
        username: usernameSaved,
        password: passwordSaved
    }
    json = JSON.stringify(json);
    fs.writeFile('./userData.json', json, (err) => {
    if (!err) {
        console.log('done');
    }
    })

    res.redirect('/signok');

})

app.post("/login", function(req,res){
    var jsonFile = require("./userData.json");

    var testUsername = jsonFile.username;
    var testPassword = jsonFile.password;

    usernameSaved = req.body.username;
    passwordSaved = req.body.password;

    if (!(testUsername==usernameSaved) || !(testPassword==passwordSaved)){
        res.redirect('/loginfail');
        
    } else {
        res.redirect('/loginok');
    }
});

  
app.listen(port, () => {
    console.log(`Login exercise listening on port ${port}`)
})