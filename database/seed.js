/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const Models = require('../server/models.js');

function users() {
  for (let i = 0; i < 3000; i += 1) {
    const randomName = faker.name.firstName();
    Models.users({ name: randomName });
  }
}

function listings() {
  for (let i = 0; i < 100; i += 1) {
    const randomListingTitle = faker.lorem.words();
    const randomOwnerName = faker.name.firstName();
    Models.listings({ title: randomListingTitle, owner: randomOwnerName });
  }
}

function ownerResponses() {
  for (let i = 0; i < 500; i += 1) {
    const randomOwnerResponse = faker.lorem.sentences();
    Models.ownersResponses({ response: randomOwnerResponse });
  }
}

function reviews() {

}

// users();
// listings();
// ownerResponses();
