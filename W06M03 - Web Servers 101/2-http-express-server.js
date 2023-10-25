const express = require('express');
const app = express();

function middleMan(request, response, next) {
    console.log("This will happen first before all endpoints!");
    request.message = "Hey there!!!";
    return next();
};

app.use(middleMan);

// Common middlewares:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/home', (request, response) => {
    response.send("Hey there from the express /home endpoint");
});

app.get('/name/:fullName', (request, response) => {
    console.log("Message",request.message);
    const obj = {
        fullName: request.params.fullName
    };
    response.json(obj);
});

app.get('/info', (request, response) => {
    console.log("Message", request.message);
    const obj = {
        firstName: request.query.firstName,
        lastName: request.query.lastName,
        age: request.query.age
    };
    response.json(obj);
});

app.listen(3000, () => {
    console.log("This express server is running in port 3000");
});