CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID INT NOT NULL AUTO_INCREMENT,
  MESSAGE VARCHAR(255),
  USER VARCHAR(40),
  ROOM VARCHAR(50),
  PRIMARY KEY(ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


