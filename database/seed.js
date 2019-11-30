/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const Models = require('../server/models.js');

const randomName = faker.name.findName();

Models.users({ name: randomName });
