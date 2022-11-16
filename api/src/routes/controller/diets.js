const express = require('express')
const router = express.Router()
const { Diet } = require('../../db')

// ---------------------------------------------------- GET -----------------------------------------------------
router.get('/', async (req, res) => {
    try {
        let diets = await Diet.findAll();
        res.status(200).json(diets);
    } catch (error) {
        console.error('diets.js', error)
        return ('Conexion error.')
    }
})

module.exports = router