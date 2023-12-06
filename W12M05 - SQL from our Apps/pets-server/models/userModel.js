const pool = require('./../database/config');

const getAll = () => {
    const nativeQuery = `
        SELECT *
        FROM users;`;
    return pool.query(nativeQuery);
}

const Users = {
    getAll
};

module.exports = Users;