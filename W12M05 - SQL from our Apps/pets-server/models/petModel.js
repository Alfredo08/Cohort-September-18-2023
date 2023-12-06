const pool = require('./../database/config');

const getAll = () => {
    const nativeQuery = `
        SELECT *
        FROM pets;`;
    
    return pool.query(nativeQuery);
}

const createOne = (data) => {
    const nativeQuery = `
        INSERT INTO pets(name, species, breed, user_id)
        VALUES ($1, $2, $3, $4) RETURNING *;`;
        
        // data must be an array holding the params listed in the previous query
        // The params must come in that order
        return pool.query(nativeQuery, data);
}

const deleteOne = (data) => {
    const nativeQuery = `
        DELETE FROM pets
        WHERE id = $1;`;
    
        return pool.query(nativeQuery, data);
}

const getOne = (data) => {
    const nativeQuery = `
        SELECT *
        FROM pets
        WHERE id = $1;`;
    return pool.query(nativeQuery, data);
}

const Pets = {
    getAll,
    getOne,
    createOne,
    deleteOne
};

module.exports = Pets;