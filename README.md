# Dynamic-CSSVar-app

This is the project that I developed based on repository [App-Ideas](https://github.com/florinpop17/app-ideas). 

<img src="./public/print.png">

**Tier:** 1-Beginner

CSS variables are a powerful tool that lets the developer associate a symbolic
name with a value, and then use that name in the stylesheet wherever that
value is required. The advantage is that when a change to that value is 
required it only needs to change in the CSS variable definition rather than in
the many spots it may be used.

What can make this even more powerful is to dynamically change the value of a
CSS variable at runtime.

The goal of this app is to dynamically change the background color of text boxes
based to let you gain experience using both CSS variables and dynamically 
changing them from within the app.

## User Stories

-   [x] User can see three two boxes to be used to enter a User ID and Password
along with 'Cancel' and 'Login' buttons underneath them. The default background
color of the text boxes is white.
-   [x] User can enter a user id and password into the text boxes.
-   [x] User can click the 'Login' button to validate the user id and password.
-   [x] User can see a warning message if one or both of the text boxes contains
spaces and the background color of the empty text box will change to light
yellow.
-   [x] User can see a warning message if the user id doesn't match 'testuser'
and the background color of the text box will change to light red.
-   [x] User can see a warning message if the password doesn't match 'mypassword'
and the background color of the text box will change to light red.
-   [x] User can click the 'Cancel' button to clear the text boxes and reset
their background colors to white.
