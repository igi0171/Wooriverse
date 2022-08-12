# Wooriverse

An app that allows users to view, like and comment on their favorite artists' posts.

## An embedded screenshot of the app

Artists page
![This is an image](https://i.imgur.com/qn7MzQp.jpg)

Posts by Artist page
![This is an image](https://i.imgur.com/QPIhMdB.png)

Post page
![This is an image](https://i.imgur.com/q0Q13Be.png)

## Explanations of the technologies used

React.js is used for frontend development with Redux for state management and Material UI for styling. Axios is used to fetch REST APIs from the backend Express.js server with MongoDB as the database. JWT authentication is also incorporated.

## A couple paragraphs about the general approach you took

Firstly, I did the initial setup of the frontend and the backend and the setup of the database. Next, I integrated redux for state management and tested the app by seeding some posts. After that, authentication (login/logout) for the app is set up.

Then, I worked on the details page of a post. Following that, I added the comments feature to the details page. Finally, I introduced the posts by artist.

## Installation instructions for any dependencies

### Client

material-ui/core
material-ui/icons
material-ui/lab
axios
jwt-decode
moment
react-redux
react-router-dom
redux
redux-thunk

### Server

bcrypt
cors
dotenv
express
jsonwebtoken
mongoose
uuid

## Link to your user stories – who are your users, what do they want, and why?

Users are fans of the artist(s). They want to view, like and comment on their favorite artist(s) posts becuase they are stans.

## Descriptions of any unsolved problems or major hurdles you had to overcome

Adding an artist to user's artists instead before being able to view that artist's posts.

Adding more media including videos to a post.
