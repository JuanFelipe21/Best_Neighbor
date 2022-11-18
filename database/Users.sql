-- to create a new database
CREATE DATABASE USUARIOS;

-- to use database
use USUARIOS;

-- creating a new table
CREATE TABLE residente (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  telefono BIGINT(20) NOT NULL,
  id_conjunto INT(6) NOT NULL,
  nro_torre INT(2) NOT NULL,
  nro_apartamento INT(3) NOT NULL
);

CREATE TABLE ALERTAS(
  ID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  TIPO VARCHAR (50) NOT NULL,
  TITULO VARCHAR (50) NOT NULL,
  ID_USUARIO VARCHAR (50) NOT NULL,
  DESCRIPCION VARCHAR (500) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe residente;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

flush privileges;
