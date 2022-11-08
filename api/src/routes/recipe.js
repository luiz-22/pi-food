const express = require('express')
const router = express.Router()
const { Recipe, Diet, Dish } = require('../db')

// ---------------------------------------------------- POST ----------------------------------------------------
router.post('/', async (req, res) => {
    let {
        title,
        summary,
        healthScore,
        readyInMinutes,
        dishTypes,
        steps,
        image,
        diets
    } = req.body

    try {
        let newRecipe = await Recipe.create({
            title,
            summary,
            healthScore,
            readyInMinutes,
            steps,
            image
        })

        diets.forEach(async el => {
            let dietDb = await Diet.findAll({
                where: { name: el },
            });
            await newRecipe.addDiets(dietDb);
        });

        dishTypes.forEach(async el => {
            let dishDb = await Dish.findAll({
                where: {name: el}
            })
            await newRecipe.addDishes(dishDb)
        })

        res.status(200).send('Recipe Created.');

    } catch (error) {
        console.log('recipe.js', error)
        res.status(400).send("Failed to create recipe.");
    }
})

module.exports = router