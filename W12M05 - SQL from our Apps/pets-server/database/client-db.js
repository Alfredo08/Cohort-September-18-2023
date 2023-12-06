const {Client} = require('pg');

const client = new Client({
    user: 'alfredosalazar',
    host: 'localhost',
    database: 'pets_db'
    //password: root1234,
    //port: 12345
});

/* Callback syntax
client.connect((error, result) => {
    if(error){
        console.log('If there is an error:', error);
    }
    console.log('If the database was connected successfully', result);
}); */

/* Promises syntax */
client.connect()
    .then(() => {
        console.log('If the database was connected successfully');
        client.query("SELECT * FROM pets;")
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                client.end();
            });
    })
    .catch((error) => {
        console.log('If there is an error:', error); 
    });
