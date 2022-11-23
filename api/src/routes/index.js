const { Router } = require('express');

const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getDiets } = require('./controller/diets');
const { getDishes } = require('./controller/dishes');
const { createRecipe } = require('./controller/recipe');
const recipes = require('./controller/recipes.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/diets', getDiets);
router.get('/dishes', getDishes);
router.post('/recipe', createRecipe);
router.use('/recipes', recipes);

module.exports = router;
