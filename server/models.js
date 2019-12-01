/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'airbnb',
});

connection.connect();

module.exports = {
  users: (fakeUser) => {
    const queryVal = [fakeUser.name];
    const quuery = 'INSERT INTO USERS (name) VALUES(?)';
    connection.query(quuery, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
  listings: (fakeListings) => {
    const queryVal = [fakeListings.title, fakeListings.owner];
    const quuery = 'INSERT INTO listings (title, owner) VALUES(?, ?)';
    connection.query(quuery, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
  ownersResponses: (fakeResponses) => {
    const queryVal = [fakeResponses.response];
    const quuery = 'INSERT INTO owners_responses (response) VALUES(?)';
    connection.query(quuery, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
};
