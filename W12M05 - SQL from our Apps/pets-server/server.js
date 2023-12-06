const express = require('express');
const petController = require('./controllers/petController');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes/Endpoints
app.use(petController);

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});