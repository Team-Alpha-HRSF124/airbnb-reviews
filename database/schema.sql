CREATE DATABASE IF NOT EXISTS airbnb;

USE airbnb;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45),
  image VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS owners (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45),
  image VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS listings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(45),
  avg_rating DECIMAL,
  communication DECIMAL,
  check_in DECIMAL,
  accuracy DECIMAL,
  value DECIMAL,
  cleanliness DECIMAL,
  hospitality BOOLEAN,
  stylish BOOLEAN,
  sparkling_clean BOOLEAN,
  quick_responses BOOLEAN,
  amazing_amenities BOOLEAN,
  counts INT,
  owners_id INT,
  FOREIGN KEY (owners_id) REFERENCES owners(id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  date VARCHAR(45),
  review VARCHAR(280),
  users_id INT,
  listings_id INT,
  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (listings_id) REFERENCES listings(id)
);

CREATE TABLE IF NOT EXISTS owners_responses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  response VARCHAR(280),
  reviews_id INT,
  owners_id INT,
  FOREIGN KEY (reviews_id) REFERENCES reviews(id),
  FOREIGN KEY (owners_id) REFERENCES owners(id)
);
