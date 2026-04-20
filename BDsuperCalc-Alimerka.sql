CREATE DATABASE IF NOT EXISTS super_calc_alimerka;

USE super_calc_alimerka;

CREATE TABLE IF NOT EXISTS user(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user(nombre, email) VALUES
('Juan Pérez', 'juan@example.com'),
('María García', 'maria@example.com');

SELECT * FROM user;
