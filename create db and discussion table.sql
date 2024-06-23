create database beis_din_db

use beis_din_db;

create table discussion(
 id INT PRIMARY KEY,
 side_1 VARCHAR(25),
  side_2 VARCHAR(255),
  issue VARCHAR(255)
 );
 
 insert into discussion(1,"Raiten","Chamammi","building")
