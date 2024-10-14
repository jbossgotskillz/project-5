const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const bcrypt = require('bcryptjs')
const methodOverride = require('method-override')

const path = require('path')
const app = express()
const port = process.env.PORT || 3000

//database integration

const connection = mysql.createConnection(process.env.JAWSDB_URL)

connection.connect((err) => {
  if (err) {
    console.error('There was a problem connecting to the database: ' + err.stack);
    return;
  }
  console.log('The connection is working:  ID = ' + connection.threadId);
});

//user registration

app.use(express.urlencoded({extended: false}))

app.post('/registration', (req, res) => {
    const { username, email, password } = req.body;

    /*bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).send('Error registering user');
        }
        console.log(username, email, password)*/

        connection.query('INSERT INTO registration (username, email, new_password) VALUES (?, ?, ?)',
        [username, email, password], (err, results) => {
            if (err) {
                console.error('Error inserting user: ', err);
                return res.status(500).send('Error registering user');
            }
            res.redirect('/login')
        }
    );
});

/*app.post('/login', (req, res) => {
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
})*/


app.post('/login', (req, res) => {
    const { username, email, password } = req.body;

        if (!username || !email || !password) {
            res.send('Error logging in user');
        }
        connection.query('SELECT * FROM registration WHERE username = ? AND email = ? AND new_password = ?',
        [username, email, password], (err, results) => {
            if (err) {
                res.send('Invalid login credentials: ', err);
                console.error('Invalid login credentials');
            } else {
                res.redirect('/dashboard')
            }

            
           //const user = results[0];
                      
           /*const isMatch = bcrypt.compare(password, user.password, (err) => {
                if (err) {
                    console.error('Error comparing passwords: ', err);
                } 
                
                if(!isMatch) {
                    res.send('Passwords do not match')
                } else {
                    res.send('Login successful');
                    //res.redirect('/dashboard')
                }
                console.log(user)

            })*/
        }
    )}

)

app.delete('/dashboard', (req, res) => {
    let userId = req.params.id;

    connection.query('DELETE FROM registration WHERE id = ?', 
    [userId], (err, result) => {
      if (err) {
        console.error('Error deleting user: ' + err.stack);
        res.send('User could not be deleted');
      } else {
        res.redirect('/thankyou');
      }
    });
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
