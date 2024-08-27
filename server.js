if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bcrypt = require('bcryptjs')

const path = require('path')
const app = express()
const port = 3000

//user registration

const users = []

app.use(express.urlencoded({extended: false}));

app.post('/registration', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        users.push({
            id: Date.now().toString(),
            username: username,
            email: email,
            password: hash,
            confirm_password: hash
        });
        console.log(users);
        res.redirect('/login')
    } catch (err) {
        console.log(err);
        res.redirect('/registration')
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = users.find(u => u.username === username)
    if (!user) {
       return res.status(400).send('Username cannot be found')     
    }
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        return res.status(400).send('Password does not match')
    }
    res.redirect('/dashboard')
})

app.delete('/dashboard', (req, res) => {
    res.logOut()
    res.redirect('/logout')
})

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('src/views/dist'));
app.use(express.json());
app.use(cors());

//Express integration

app.get('/', (req, res) => {
    res.render('main')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/registration', (req, res) => {
    res.render('registration')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {name: 'registered user'})
    //res.render('dashboard', { name: req.user.username})
})

app.get('/logout', (req, res) => {
    res.render('logout')
})

app.get('/thankyou', (req, res) => {
    res.render('thankyou')
})

app.get('/forum', (req, res) => {
    res.sendFile(HTML_FILE)
})

/*app.get('/template', (req, res)=> {
    res.render('forum')
})*/

const DIST_DIR = path.join(__dirname, "./src/views/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.set('views', './src/views');
app.set('view engine', 'ejs');

//MySQL integration

const connection = mysql.createConnection({     //create a .env file to assign your database information to the MYSQL variables
    host:  process.env.MYSQL_HOST,
    user:  process.env.MYSQL_USER,
    password:  process.env.MYSQL_PASSWORD,
    database:  process.env.MYSQL_DATABASE
})

connection.connect(err => {
    if (err) {
        console.error('There was a problem connecting to the database')
    } else {
        console.log('The connection is working')
    }
})

connection.query('SELECT * FROM registration', (fields, err) => {
if (err) {
        console.error('No data selected')
    } else {
        console.log('Data selected')
    }    
})

connection.end();

app.listen(port, () => {
    console.log(`Hoop Squad app listening on port ${port}`)
})
