CREATE DATABASE IF NOT EXISTS airbnb;

USE airbnb;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45)
);
CREATE TABLE IF NOT EXISTS owners_responses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  response VARCHAR(280)
);
CREATE TABLE IF NOT EXISTS listings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(45),
  owner VARCHAR(45)
);
CREATE TABLE IF NOT EXISTS reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  avg_rating INT,
  counts INT,
  communication INT,
  check_in INT,
  accuracy INT,
  value INT,
  cleanliness INT,
  hospitality BOOLEAN,
  stylish BOOLEAN,
  sparkling_clean BOOLEAN,
  quick_responses BOOLEAN,
  amazing_amenities BOOLEAN,
  data VARCHAR(45),
  review VARCHAR(280),
  users_id INT,
  owners_responses_id INT,
  listings_id INT,
  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (owners_responses_id) REFERENCES owners_responses(id),
  FOREIGN KEY (listings_id) REFERENCES listings(id)
);
