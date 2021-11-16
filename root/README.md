# Homework Tracker

This is a homework tracking platform for elementary school building with MERN stack.
Simply, you can login to the application with 3 roles. The principal, teacher and student.

## Principal

- add a teacher account to the system
- add a student account to the system
- list teachers and students accounts
- remove from the list teachers and students accounts

## Teacher

- assign homework to the system
- list students associated with the teacher
- see the own assignment data

## Student

- add homework to the system with image
- see own homework data

## Missing Features

_these features are currently developing_

- principal can't look homeworks
- teacher can't look student's homework

# Getting Started

To run a development environment, you can use the `npm run dev` command in the ./root folder. This will start up a development web server on port 3000, and a nodemon-watched API server on port 5000.

- Install MongoDB

* [MongoDB](https://docs.mongodb.com/manual/installation/)

```
 cd client
 npm i
 npm start
```

```
 cd server
 npm i
 npm run dev
```

# Configuration

Create a `.env` file customize the environment for specifying credential information for MongoDB.

Sample:
```
DATABASE_ACCESS=mongodb+srv://<admin>:<password>@cluster0.543iq.mongodb.net/homeworkTracker?retryWrites=true&w=majority
```
