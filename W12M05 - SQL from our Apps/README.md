# M05 W12 | SQL from our Apps
[Github Repository](https://github.com/Alfredo08/Cohort-September-18-2023/tree/main/W12M05%20-%20SQL%20from%20our%20Apps) | [Vimeo Video Recording](https://vimeo.com/891699172/2901beb9e9?share=copy)

## Topics to cover
- [x] Server architecture review
- [x] Perform `BREAD` actions on database via command line app
- [x] Connect to DB via PG
- [x] Pool vs Client
- [x] Connect Node app and perform queries

## Basic Connection

```js
const { Pool } = require('pg')
const pool = new Pool({
  user: 'random',
  password: 'password',
  database: 'w4d2_schema',
  hostname: 'localhost',
  port: 5432,
  ssl: true
})

pool.connect((err) => {
  if (err) return console.log(err) // Shows error if something happened
}
```

Remember that we needed to make a user with a password to be able to connect to postgres.
The `pg` package gives us tools to make/keep a connection with `postgres` and allow us to run queries inside our server.
This is super useful for things like getting out data and displaying it to the user, or modifying data by user requests in your server (POST to create a new user inside of postgres database, etc)

We also noticed that the query calls are asynchronous!!! Remember how we tried to write a `return` statement and the console.log ran before the query ever finished? This is why we need to use callbacks to access our data.

## Callback example

```js
function getUserWithId(id, callback) {
  client.query(
    'SELECT * FROM students WHERE students.id = $1::integer',
    [id],
    (err, res) => {
      console.log(err ? err.stack : res.rows);
      callback(res.rows);
    }
  );
}
//calling the function with a callbaclk!
getUserWithId(1, (rows) => {
  console.log('The result is ', rows);
});
```

## Arguments

You can pass arguments inside of your queries to keep them dynamic.

```js
client.query('SELECT * FROM students WHERE students.id = $1::integer', [id], (err, res) => {
```

The `$1` Refers to the first element inside of the arguments array.

let say part of your query is

```js
'. . .  WHERE students.id = $1::integer LIMIT $2::integer', [1, 5], (err, res) => {
```

`$1` referes to the FIRST element in the array which value is `1`
`$2` referes to the FIRST element in the array which value is `5`

## Moving it all in another file

Now that we figured out all on how to write SQL from a file, Time to make them into functions ( as a library). Why should we do this ? ( you may ask yourself). The idea is quite simple. Picture us one day switching the database entirely to something that is not PSQL. IF that ever happens and all your queries are all over the code base, you will have a hard time trying to refactor all that code.

If however, we have all our code a specific area, all we have to do is refactor the `methods` and be done with it.

`main.js`

```js
const lib = require('./demo');

lib.getStudents().then((rows) => {
  console.log(rows);
});
```

`lib.js`

```js
const { Pool } = require('pg')
const pool = new Pool({
  user: 'development',
  password: 'development',
  database: 'w05d03'
})
pool.connect()

const getStudents = () => {
  return pool.query("SELECT * FROM students").then( res => {
    return res.rows;
  });
}

export.default = { getStudents }
```

## References

[Error First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)

### Connecting it with Express Server

For this we create, a `db` file that its purpose is just to connect to our database. Then we would import it into our server.js and after pass to our helper methods that contain psql commands.

```js
// dbInitializeConnection.js

const { Pool } = require('pg');
// Setup a connection to PSQL with the correct credentials.
const pool = new Pool({
  user: 'development',
  password: 'development',
  database: 'w05d03',
  host: 'localhost',
  port: 5432,
});

console.log('connection establishing...');

module.exports = pool;
```