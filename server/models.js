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
    const queryVal = [fakeUser.name, fakeUser.image];
    const quuery = 'INSERT INTO USERS (name, image) VALUES(?, ?)';
    connection.query(quuery, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
  owners: (fakeData) => {
    const queryVal = [fakeData.name, fakeData.image];
    const quuery = 'INSERT INTO OWNERS (name, image) VALUES(?, ?)';
    connection.query(quuery, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
  listings: (d) => {
    const queryVal = [d.title, d.avg_rating, d.communication,
      d.check_in, d.accuracy, d.value,
      d.cleanliness,
      d.hospitality, d.stylish, d.sparkling_clean,
      d.quick_responses, d.amazing_amenities, d.counts, d.owners_id];

    const quuery = 'INSERT INTO listings (title, avg_rating, communication, check_in, accuracy, value, cleanliness, hospitality, stylish,sparkling_clean, quick_responses, amazing_amenities, counts, owners_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    connection.query(quuery, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
  reviews: (fakeData) => {
    const queryVal = [fakeData.date, fakeData.review, fakeData.users_id, fakeData.listings_id];
    const quuery = 'INSERT INTO REVIEWS (date, review, users_id,listings_id) VALUES(?, ?, ?, ?)';
    connection.query(quuery, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
  ownersResponses: (fakeResponses) => {
    const queryVal = [fakeResponses.response,
      fakeResponses.date, fakeResponses.reviews_id, fakeResponses.owners_id];
    const quuery = 'INSERT INTO owners_responses (response, date, reviews_id, owners_id) VALUES(?, ?, ?, ?)';
    connection.query(quuery, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
};
