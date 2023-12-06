const express = require('express');
const Pets = require('./../models/petModel');
const Users = require('./../models/userModel');

const petController = express.Router();

petController.get('/pets', (req, res) => {
    Pets.getAll()
        .then((result) => {
            const templateVariables = {
                pets: result.rows
            };
            return res.render('pets', templateVariables);
            // return res.status(200).json(result.rows);
        });
});

petController.get('/new/pet', (req, res) => {
    Users.getAll()
        .then((result) => {
            const templateVariables = {
                users: result.rows
            };
            return res.render('new-pet', templateVariables);
        });
});

petController.get('/edit/pet/form/:id', (req, res) => {
    Users.getAll()
        .then((result) => {
            const templateVariables = {
                users: result.rows
            };
            const data = [req.params.id]
            Pets.getOne(data)
                .then((resultPet) => {
                    templateVariables['currentPet'] = resultPet.rows[0]
                    return res.render('edit-pet', templateVariables);
                });
        });
    
});

petController.post('/create/pet', (req, res) => {
    const data = [req.body.name, req.body.species, req.body.breed, req.body.user_id]
    Pets.createOne(data)
        .then((result) => {
            console.log(result);
            return res.redirect('/pets');
        });
});

petController.post('/delete/pet/:id', (req, res) => {
    const data = [req.params.id];
    Pets.deleteOne(data)
        .then((result) => {
            return res.redirect('/pets');
        });
});



module.exports = petController
