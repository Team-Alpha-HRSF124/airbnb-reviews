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
    let queryVal = [fakeUser.id, fakeUser.name];
    let quuery = 'INSERT INTO USERS (id, name) VALUES(?, ?)';
    connection.query(quuery, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
};
