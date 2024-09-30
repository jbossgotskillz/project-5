const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const bcrypt = require('bcryptjs')

const path = require('path')
const app = express()
const port = 3000

//database integration

const connection = mysql.createConnection({
    host:  ['localhost', 'hoop-squad-64060117364e.herokuapp.com/'],
    user:  'root',
    password:  'Therealjboss#1!',
    database:  'hoop_squad_db'
});

//user registration

app.use(express.urlencoded({extended: false}))

app.post('/registration', (req, res) => {
    const { username, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).send('Error registering user');
        }
        console.log(username, email, password)

        connection.query('INSERT INTO registration (username, email, new_password) VALUES (?, ?, ?)',
        [username, email, hash], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).send('Error registering user');
                //res.redirect('/registration')

            }

            //res.status(200).send('User registered successfully');
            res.redirect('/login')

        }
    );
    });
});

app.post('/login', (req, res) => {
    const { username, email, password } = req.body;

    try {
        const [rows] =  connection.query('SELECT username, email, new_password FROM registration',
        [username, email, password], (err, result) => {
            if (rows.length === 0) {
                res.send('Invalid login credentials')
            }

            const user = rows[0];
            const isMatch = bcrypt.compare(password, user.password)
            if (!isMatch) {
                res.send('Invalid login credentials')
            } else {
                res.redirect('/dashboard')
            }
        })
    } catch (error) {
        console.error(error);
    }
})

app.delete('/dashboard', (req, res) => {
    res.redirect('/logout')
})

//server routing

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

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('src/views/dist'));
app.use(express.json());
app.use(cors());

const DIST_DIR = path.join(__dirname, "./src/views/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.set('views', './src/views');
app.set('view engine', 'ejs');

//server port

app.listen(port, () => {
    console.log(`Hoop Squad app listening on port ${port}`)
})
