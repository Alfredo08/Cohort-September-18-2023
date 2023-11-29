CREATE TABLE users(
    id SERIAL PRIMARY KEY, -- Setting the primary key
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    species VARCHAR(30) NOT NULL,
    breed VARCHAR(30) NOT NULL,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ALTER TABLE