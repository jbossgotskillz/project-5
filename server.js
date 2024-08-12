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


//registration practice

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

/*app.post('/registration', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            confirm_password: hashedPassword
        });
        console.log(users)
        res.redirect('/login');
    } catch {
        console.log(err);
        res.redirect('/registration');
    }
})

app.post('/login', async(req, res) => {
    const user = users.find(user => user.name = req.body.name);
    if (user === null) {
        return res.status(400).send('User cannot be found')
    };
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('You have successfully logged in')
        } else {
            res.send('You do not have access')
        }
    } catch {
        res.status(500).send();
    };
})*/

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('dist'));
app.use(express.json());
app.use(cors());

//Express integration

/*app.get('/', (req, res) => {
    res.send('Hello World!');
})*/

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

app.get('/message', (req, res) => {
    res.json({message:  "Yo"})
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

/*app.post("/login", (req, res) => {
    const { email, password } = req.body;
    //👇🏻 checks if the user exists
    let result = users.filter(
        (user) => user.email === email && user.password === password
    );
    //👇🏻 if the user doesn't exist
    if (result.length !== 1) {
        return res.json({
            error_message: "Incorrect credentials",
        });
    }
    //👇🏻 Returns the id if successfuly logged in
    res.json({
        message: "Login successful",
        id: result[0].id,
    });
});*/

//MySQL integration         https://www.youtube.com/watch?v=Hej48pi_lOc

/*import dotenv from 'dotenv'         //install dotenv
dotenv.config()*/

const connection = mysql.createConnection({     //create a .env file
    host:  process.env.MYSQL_HOST,
    user:  process.env.MYSQL_USER,
    password:  process.env.MYSQL_PASSWORD,
    database:  process.env.MYSQL_DATABASE
})

//default user = host: 'localhost', user: 'root', password: 'Therealjboss#1!'
//added user = host: 'localhost', user: 'JordanBoss', password: 'Jbossgotgame#1!'

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
