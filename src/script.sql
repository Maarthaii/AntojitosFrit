-- Generated: 2023-11-14 16:00
-- Author: Liyimar Gamboa

CREATE DATABASE antojitosfrit character set utf8mb4;

CREATE TABLE cliente(
id_cliente int auto_increment primary key,
nombreCliente varchar(50) not null,
telefonoCliente varchar(10) not null,
correoCliente varchar(50) not null
);

CREATE TABLE carrito(
id_cliente int,
id_carrito int auto_increment primary key,
id_producto int,
cantidad int,
FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente) ON DELETE NO ACTION ON UPDATE NO ACTION,
FOREIGN KEY (id_producto) REFERENCES producto (id_producto) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Creacion de la tabla factura con relacion de uno a muchos con cliente
CREATE TABLE factura(
id_factura int auto_increment primary key,
fechaFactura date,
total int,
id_cliente int,
id_carrito int,
FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente) ON DELETE NO ACTION ON UPDATE NO ACTION,
FOREIGN KEY (id_carrito) REFERENCES carrito (id_carrito) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE producto(
id_producto int auto_increment primary key,
nombreProducto varchar(45),
descripcion varchar(200),
precio int,
id_admin int,
FOREIGN KEY (id_admin) REFERENCES administradores (id_admin) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE administradores(
id_admin int auto_increment primary key,
nombreAdmin varchar(45),
telefonoAdmin varchar(10),
correoAdmin varchar(50)
);

USE antojitosfrit;
show tables;