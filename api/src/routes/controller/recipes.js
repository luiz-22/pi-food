const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Recipe, Diet, Dish } = require('../../db')
const { API_KEY, URL } = process.env;

// -------------------------------------------------- INFO API --------------------------------------------------
const getApiInfo = async () => {
    try {
        const resApi = await axios.get(`${URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const { results } = resApi.data

        if (results.length > 0) {

            let response = await results?.map((result) => {
                return {
                    healthScore: result.healthScore,
                    id: result.id,
                    title: result.title,
                    readyInMinutes: result.readyInMinutes,
                    image: `https://webknox.com/recipeImages/${result.id}-556x370.jpg`,
                    summary: result.summary,
                    dishTypes: result.dishTypes?.map(element => element),
                    diets: result.diets?.map(element => element),
                    steps: (result.analyzedInstructions[0] && result.analyzedInstructions[0].steps ? result.analyzedInstructions[0].steps.map(item => item.step) : '')
                }
            })

            return response;
        }

        return ([])
    } catch (error) {
        console.error('INFO API', error);
        return ([])
    }
}


// -------------------------------------------------- INFO DB ---------------------------------------------------
const getDBInfo = async () => {
    try {
        const dataDB = await Recipe.findAll({
            include: [{
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }, {
                model: Dish,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        })

        let response = await dataDB?.map(recipe => {
            return {
                id: recipe.id,
                title: recipe.title,
                summary: recipe.summary,
                healthScore: recipe.healthScore,
                readyInMinutes: recipe.readyInMinutes,
                dishTypes: recipe.dishes?.map(dish => dish.name),
                steps: recipe.steps,
                image: recipe.image,
                diets: recipe.diets?.map(diet => diet.name),
            }
        });
        return response;

    } catch (error) {
        console.error('INFO DB', error)
        return ([])
    }
}


// ----------------------------------------------- INFO API + DB ------------------------------------------------
const getAllInfo = async () => {
    try {
        const apiInfo = await getApiInfo();
        const bdInfo = await getDBInfo();
        const infoTotal = apiInfo.concat(bdInfo);
        return infoTotal;
    } catch (error) {
        console.error('INFO API + DB', error);
        return ([])
    }
}


// ---------------------------------------------------- GET -----------------------------------------------------
// /recipes
// /recipes?name
router.get('/', async (req, res) => {
    const { name } = req.query
    const info = await getAllInfo()
    try {

        if (name) {

            const arrayTitle = info.filter(el => el.title.toLowerCase().includes(name.toLowerCase()))

            if (arrayTitle.length > 0) return res.status(200).json(arrayTitle)
            else return res.status(400).send('There is no recipe for this quest.')
        }

        res.status(200).json(info)
    } catch (error) {
        console.error('GET RECEPIES', error);
        res.status(400).send("Conexion error.")
    }
})


// ---------------------------------------------------- GET -----------------------------------------------------
// /recipes/:id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const info = await getAllInfo()
    try {
        const recipe = info.filter(el => el.id.toString() === id)

        if (recipe.length > 0) return res.status(200).json(recipe)
        else return res.status(400).json('Wrong id.')

    } catch (error) {
        console.error('GET RECEPIES', error);
        res.status(400).send("Conexion error.")
    }
})


module.exports = router