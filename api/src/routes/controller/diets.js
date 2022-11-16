const { Diet } = require('../../db')

// ---------------------------------------------------- GET -----------------------------------------------------
let getDiets = async (req, res) => {
    try {
        let diets = await Diet.findAll();
        res.status(200).json(diets);
    } catch (error) {
        console.error('diets.js', error)
        return ('Conexion error.')
    }
}

module.exports = {
    getDiets
}
