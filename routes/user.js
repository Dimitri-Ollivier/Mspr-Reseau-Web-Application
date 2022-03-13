const express = require('express');
const pool = require('../services/database');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/:id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT id, name, surname, password, email FROM user WHERE id=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }

    res.status(200).json({id: req.params.id})
})

router.post('/login', async function (req, res) {
    try {
        const {email, enteredPassword} = req.body;

        const sqlGetUser = 'SELECT password FROM user WHERE email=?';
        const rows = await pool.query(sqlGetUser, email);
        if(rows){
            const isValid = await bcrypt.compare(enteredPassword, rows[0].password)
            res.status(200).json({valid_password: isValid});
        }
        res.status(200).send(`User with email ${email} was not found`);
    } catch (error) {
        res.status(400).send(error.message)
    }

    res.status(200).json({id: req.params.email})
})

module.exports = router;