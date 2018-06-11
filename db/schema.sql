### Schema

/* Create the database */
DROP DATABASE burger_db;
CREATE DATABASE burger_db;

/* Use the database */
USE burger_db;

/* Create the table */
CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
