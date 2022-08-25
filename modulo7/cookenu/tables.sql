-- Active: 1660093932060@@35.226.146.116@3306@guimaraes-4211274-jenifer-silveira

CREATE TABLE IF NOT EXISTS Cookenu_users  (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Cookenu_users(id)
)
