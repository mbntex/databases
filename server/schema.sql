DROP DATABASE chat;   /*REMOVE AFTER TESTING COMPLETE*/
CREATE DATABASE chat;


USE chat;


CREATE TABLE messages (
  /* Describe your table here.*/
  ID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40),
  text VARCHAR(255),
  roomname VARCHAR(50),
  PRIMARY KEY(ID)
);

INSERT INTO messages VALUES (null, 'bob', 'omg it aint sunny anymore', 'lobby');
INSERT INTO messages VALUES (null, 'kelly', 'run man run!', 'lobby');
INSERT INTO messages VALUES (null, 'sal', 'where are we?', 'room 18');
INSERT INTO messages VALUES (null, 'heisenberg', 'is this the right turn?', 'bb');
INSERT INTO messages VALUES (null, 'bob', 'make a decision.', 'lobby');

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


