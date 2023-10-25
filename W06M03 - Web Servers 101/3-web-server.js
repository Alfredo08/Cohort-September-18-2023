const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/home", (req, res) => {
    res.render("index");
});

app.get("/students", (req, res) => {
    const students = [{
        firstName : "Alex",
        lastName : "Miller",
        age : 25
    },
    {
        firstName : "Martha",
        lastName : "Smith",
        age : 31
    },
    {
        firstName : "Roger",
        lastName : "Anderson",
        age : 28
    }];
    const course = "Node/Express course";
    
    const templateVariables = {
        students,
        course
    };

    res.render("students", templateVariables);
});

app.listen(3000, () => {
    console.log("This web server is running in port 3000");
});