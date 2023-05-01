CREATE TABLE Item (
    item_id SERIAL PRIMARY KEY,
    stock INTEGER NOT NULL,
    price INTEGER NOT NULL,
    item_name VARCHAR(255) NOT NULL
);