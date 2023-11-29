SELECT *
FROM users JOIN pets
    ON users.id = pets.user_id;

SELECT u.first_name, u.last_name, p.name, p.species
FROM users u JOIN pets p
    ON u.id = p.user_id
WHERE u.id = 3;


SELECT *
FROM users JOIN pets
    ON users.id = pets.user_id
ORDER BY users.age;

SELECT *
FROM users JOIN pets
    ON users.id = pets.user_id
ORDER BY users.age DESC;

SELECT users.first_name, COUNT(users.first_name)
FROM users JOIN pets
    ON users.id = pets.user_id
GROUP BY users.first_name
ORDER BY users.first_name DESC;

SELECT CONCAT(users.first_name, ' ', users.last_name) AS "Full name", pets.name, NOW()
FROM users JOIN pets
    ON users.id = pets.user_id
ORDER BY users.age;
