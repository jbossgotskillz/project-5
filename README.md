# project-5

Name:  Jordan Woodard

Project Description:  This project involves creating a forum where users can submit their own questions and respond to other users' questions with answers.  The app that contains the forum is called "Hoop Squad", and it follows a basketball theme.  As a result, all of the questions posted on the app will be related to basketball.

Comments:  

--Navigation--

The Hoop Squad app is made up of seven pages:  Main, Home, Registration, Login, Dashboard, Logout, and Goodbye.  The Main page serves as the root page.  From here, you can move to the Home page, and beyond that, you can move to the either the Registration page or the Login page.  It is possible to go back and forth between the Registration and Login pages when not submitting a form.  Meanwhile, submitting a form on the Registration page takes you to the Login page if it is valid, and then submitting a form on the Login page takes you to the Dashboard page if it is valid.  From the Dashboard page are routes that lead to the Logout page and the Goodbye page.  The Logout page takes you back to the Home page, while the Goodbye page takes you back to the Main page.

--Registration--

Using the app requires you to register a new account.  This is done on the Registration page.  After creating a new username, a new email address, and a new password, you will be able to enter this data into the Login page.  The fields in the Registration and Login pages are all required, and not filling them in correctly (or not filling them in at all) causes invalid feedback messages to appear.  Said messages send valid feedback when a field is entered correctly.  Going to the Goodbye page deletes your account.

--Database--

Hoop Squad comes with a database that is used for storing information pertaining to registered users.  Whenever you register a new user onto the Registration page, the credentials are added to the database.

--Forum--

In order to use the forum, you need to be on the Dashboard page.  On the left is where the category list is presented, whereas the discussions are on the right.  Clicking on one of the six categories results in a different discussion showing up.  In the discussion thread, questions can be posted, and you can answer the questions.

--Other--

Clicking on any of the foreground images and the navbar image causes a sound effect to play.  What you hear depends on what the image is showing.  In addition, all of the buttons play a unique sound effect.  Two buttons in particular (the Contact button on the Home page and the Settings button on the Dashboard page) will show an alert box if clicked.  Last but not least, the Main page features an audio control panel, which plays a song.  It is not set to autoplay, so you have to click on the play button if you want to hear it, and it won't loop either, so you won't have to click on the stop button when the track ends.

Technologies:  html, css, js, react, express, sql

Minimal Requirements:  Node 13.14.0, NPM 6.14.4, Express 4.19.2, EJS 3.1.10, MySQL 8.0.38, React 18.3.1

Improvements:  
