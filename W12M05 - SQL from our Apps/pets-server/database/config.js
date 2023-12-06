const {Pool} = require('pg');

const pool = new Pool({
    user: 'alfredosalazar',
    host: 'localhost',
    database: 'pets_db'
});

pool.connect()
    .then(() => {
        console.log('If the database was connected successfully');
    })
    .catch((error) => {
        console.log('If there is an error:', error); 
    });

module.exports = pool;