const { Dish } = require('../../db')

// ---------------------------------------------------- GET -----------------------------------------------------
let getDishes = async (req, res) => {
    try {
        let dishTypes = await Dish.findAll();
        res.status(200).json(dishTypes);
    } catch (error) {
        console.error('dishes.js', error)
        return ([])
    }
}

module.exports = {
    getDishes
}