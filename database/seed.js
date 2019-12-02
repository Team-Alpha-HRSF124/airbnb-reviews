/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const Models = require('../server/models.js');

function users() {
  for (let i = 0; i < 3000; i += 1) {
    const randomName = faker.name.firstName();
    const randomImage = faker.image.avatar();
    Models.users({ name: randomName, image: randomImage });
  }
}

function owners() {
  for (let i = 0; i < 100; i += 1) {
    const randomName = faker.name.firstName();
    const randomImage = faker.image.avatar();
    Models.owners({ name: randomName, image: randomImage });
  }
}

function listings() {
  for (let i = 1; i <= 100; i += 1) {
    const title = faker.lorem.words();
    const avg_rating = Math.floor(Math.random() * (5 * 100 - 3.5 * 100) + 3.5 * 100) / (1 * 100);
    const communication = Math.floor(Math.random() * (5 * 100 - 3.5 * 100) + 3.5 * 100) / (1 * 100);
    const check_in = Math.floor(Math.random() * (5 * 100 - 3.5 * 100) + 3.5 * 100) / (1 * 100);
    const accuracy = Math.floor(Math.random() * (5 * 100 - 3.5 * 100) + 3.5 * 100) / (1 * 100);
    const value = Math.floor(Math.random() * (5 * 100 - 3.5 * 100) + 3.5 * 100) / (1 * 100);
    const cleanliness = Math.floor(Math.random() * (5 * 100 - 3.5 * 100) + 3.5 * 100) / (1 * 100);
    const hospitality = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    const stylish = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    const sparkling_clean = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    const quick_responses = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    const amazing_amenities = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    const counts = Math.floor(Math.random() * (400 - 50 + 1) + 50);
    const owners_id = i;
    Models.listings({
      title,
      avg_rating,
      communication,
      check_in,
      accuracy,
      value,
      cleanliness,
      hospitality,
      stylish,
      sparkling_clean,
      quick_responses,
      amazing_amenities,
      counts,
      owners_id,
    });
  }
}

function ownerResponses() {
  for (let i = 0; i < 500; i += 1) {
    const randomOwnerResponse = faker.lorem.sentences();
    Models.ownersResponses({ response: randomOwnerResponse });
  }
}

users();
owners();
listings();
// ownerResponses();
