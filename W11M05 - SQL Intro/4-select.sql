SELECT *
FROM users;

SELECT first_name, last_name, age
FROM users;

SELECT first_name AS "First name", last_name AS "Last name", age
FROM users;

SELECT *
FROM users
WHERE age >= 25;

SELECT *
FROM users
WHERE age >= 24 AND first_name = 'Alex' AND email = 'alex@miller.com'; 

SELECT *
FROM pets
LIMIT 3;

SELECT *
FROM pets
LIMIT 3
OFFSET 3;