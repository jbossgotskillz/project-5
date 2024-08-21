# project-5

Name:  Jordan Woodard

Project Description:  This project involves creating a forum where users can submit their own questions and respond to other users' questions with answers.  The app that contains the forum is called "Hoop Squad", and it follows a basketball theme.  As a result, all of the questions posted on the app will be related to basketball.

Comments:  

--Navigation--

The Hoop Squad app is made up of seven pages:  Main, Home, Registration, Login, Dashboard, Logout, and Goodbye.  The Main page serves as the root page.  From here, you can move to the Home page, and beyond that, you can move to the either the Registration page or the Login page.  It is possible to go back and forth between the Registration and Login pages when not submitting a form.  Meanwhile, submitting a form on the Registration page takes you to the Login page if it is valid, and then submitting a form on the Login page takes you to the Dashboard page if it is valid.  From the Dashboard page are routes that lead to the Forum page, the Logout page, and the Goodbye page.  The Forum page takes you back to the Dashboard page, while the Logout page takes you back to the Home page, and the Goodbye page takes you back to the Main page.

--Registration--

Using the app requires you to register a new account.  This is done on the Registration page.  After creating a new username, a new email address, and a new password, you will be able to enter this data into the Login page.  The fields in the Registration and Login pages are all required, and not filling them in correctly (or not filling them in at all) causes invalid feedback messages to appear.  Said messages send valid feedback when a field is entered correctly.  Also, entering the wrong credentials on the Login page returns an error message instead of logging you in.  Going to the Goodbye page deletes your account.

--Database--

Hoop Squad comes with a database that is used for storing information pertaining to registered users.  Whenever you register a new user onto the Registration page, the credentials are added to the database.  P.S.:  If you want to use the registration database that is connected to the server, you need to download MySQL, install dotenv and create a .env file.  Once you do this, you should write your MySQL information in the .env file, due to them being replaced with "process.env" variables on server.js (for example, in .env, for the user variable, (where it reads "process.env.MYSQL_USER", write your MySQL username).  You also need to configure dotenv onto server for the database to work in production.  This is set up in order for you to build your own MySQL database and to keep other users from accessing your information directly from the server.

--Forum--

In order to use the forum, you need to be on the Forum page.  On the left is where the category list is presented, whereas the discussions are on the right.  Clicking on one of the six categories results in a different discussion showing up.  In the discussion thread, questions can be posted, and you can answer the questions.

--Other--

Clicking on any of the foreground images and the navbar image causes a sound effect to play.  What you hear depends on what the image is showing.  In addition, all of the buttons play a unique sound effect.  Two buttons in particular (the Contact button on the Home page and the Settings button on the Dashboard page) will show an alert box if clicked.  Last but not least, the Main page features an audio control panel, which plays a song.  It is not set to autoplay, so you have to click on the play button if you want to hear it, and it won't loop either, so you won't have to click on the stop button when the track ends.

Technologies:  html, css, js, react, express, sql

Minimal Requirements:  Node 13.14.0, NPM 6.14.4, Express 4.19.2, EJS 3.1.10, MySQL 8.0.38, React 18.3.1

Improvements:  add Gulp for testing and debugging, figure out why the React code is not working, make the username of the currently logged-in user appear on the Dashboard page, use MySQL to store registered user information instead of hard-coding it onto the server



*copy the link below to use the Hoop Squad page*

https://hoop-squad-64060117364e.herokuapp.com/
