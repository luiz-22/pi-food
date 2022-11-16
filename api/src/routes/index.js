const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipes = require('./controller/recipes.js');
const recipe = require('./controller/recipe.js');
const diets = require('./controller/diets.js');
const dishes = require('./controller/dishes.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipes);
router.use('/recipe', recipe);
router.use('/diets', diets);
router.use('/dishes', dishes);

module.exports = router;
