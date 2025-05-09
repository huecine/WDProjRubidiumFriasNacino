// Step 3: Require/Loads the express module
const express = require('express');
// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
//  path is used to set default directories for MVC and also for the static files
const fs = require('fs');
const path = require('path'); 
const { error } = require('console');
// include the defined package


// Step 4: Creates our express server
const app = express();

//Serves static files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));



//Sets a basic route index.hbs when website initially starts and when home is clicked from the nav bar or whenever a process needs to go back to home 

// Routes for between pages
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/index', (req, res) => {
    res.render('index');
})

app.get('/game', (req, res) => {
    const users = JSON.parse(fs.readFileSync(userDataPath));
     res.render('game');
})

app.get('/instru', (req, res) => {
    res.render('instru');
})

app.get('/itemshop', (req, res) => {
    res.render('itemshop');
})

app.get('/kitchen', (req, res) => {
    res.render('kitchen');
})

app.get('/deploy', (req, res) => {
    res.render('deploy');
})

app.get('/freedom', (req, res) => {
    let msgList = JSON.parse(fs.readFileSync(messageList))
    fs.writeFileSync(messageList, JSON.stringify(msgList, null, 2));
    res.render('freedom',{msgList});
    res.render('freedom');
    const users = JSON.parse(fs.readFileSync(userDataPath));
})

const messageList = path.join(__dirname, 'data', 'messages.json');

app.get('/postmsg', (req, res) => {
    let msgList = JSON.parse(fs.readFileSync(messageList))
    let data = req.query;

    let msgTime = new Date().valueOf();

    msgList[msgTime] = {name: data.name, text: data.text}

    fs.writeFileSync(messageList, JSON.stringify(msgList, null, 2));
    res.render('freedom',{msgList});
    res.redirect('freedom')
})

//GET login page
app.get('/login', (req, res) => {
    res.render('login');

});

// /enter
app.get('/enter', (req, res) => {
    const { name, password } = req.body;
    const data = fs.readFileSync(userDataPath);
    const users = JSON.parse(data);
    const messageList = path.join(__dirname, 'data', 'messages.json');
    req.session.name = name;

    res.render('game', { name, password });
});

// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));


