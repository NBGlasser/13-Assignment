DROP DATABASE IF EXISTS sandvich_DB;

CREATE DATABASE sandvich_DB;

USE sandvich_DB;

CREATE TABLE sandviches(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    gone BOOLEAN NOT NULL,
    PRIMARY KEY (id)

);