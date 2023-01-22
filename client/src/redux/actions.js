import axios from "axios";
import {
    GET_RECIPES,
    GET_ALL_RECIPES,
    GET_DIETS,
    GET_DISHES,
    SEARCH,
    SORT_A_Z,
    SORT_Z_A,
    SORT_HEALTH_SCORE_ASC,
    SORT_HEALTH_SCORE_DES,
    FILTER_BY_DIET,
    RECIPE_DETAIL,
    CLEAR_DETAIL
} from './types'

const URL = 'https://pi-food-xso1.onrender.com'

export function getRecipes() {
    return async function (dispatch) {
        return await axios.get(`${URL}/recipes`)
            .then(response => {
                dispatch({ type: GET_RECIPES, payload: response.data })
            })
            .catch(error => {
                console.log(error)
                return []
            })
    }
}


export function getAllRecipes() {
    return { type: GET_ALL_RECIPES }
}

export function getDiets() {
    return async function (dispatch) {
        return await axios.get(`${URL}/diets`)
            .then(response => {
                dispatch({ type: GET_DIETS, payload: response.data })
            })
            .catch(error => {
                console.log(error)
                return []
            })
    }
}

export function getDishes() {
    return async function (dispatch) {
        return await axios.get(`${URL}/dishes`)
            .then(response => {
                dispatch({ type: GET_DISHES, payload: response.data })
            })
            .catch(error => {
                console.log(error)
                return []
            })
    }
}

export function search(name) {
    return async function (dispatch) {
        return await axios.get(`${URL}/recipes?name=${name}`)
            .then(response => {
                dispatch({ type: SEARCH, payload: response.data })
            })
            .catch(() => {
                dispatch(getAllRecipes())
                alert('There is no recipe for this quest.')
            })
    }
}

export function sortAtoZ() {
    return { type: SORT_A_Z }
}

export function sortZtoA() {
    return { type: SORT_Z_A }
}

export function sortHealtScoreAsc() {
    return { type: SORT_HEALTH_SCORE_ASC }
}

export function sortHealtScoreDes() {
    return { type: SORT_HEALTH_SCORE_DES }
}

export function filterByDiet(name) {
    return { type: FILTER_BY_DIET, payload: name }
}

export function filterByDish(name) {
    return { type: 'FILTER_BY_DISH', payload: name }
}

export function recipeDetail(id) {
    return async function (dispatch) {
        return await axios.get(`${URL}/recipes/${id}`)
            .then(response => {
                dispatch({ type: RECIPE_DETAIL, payload: response.data })
            })
            .catch(() => {
                alert('Wrong id.')
            })
    }
}

export function clearDetail() {
    return { type: CLEAR_DETAIL, payload: {} }
}

export function createRecipe(recipe) {
    return async function (dispatch) {
        try {
            return await axios.post(`${URL}/recipe`, recipe)
                .then(response => {
                    dispatch(getRecipes())
                    alert(response.data)
                })
        } catch (error) {
            console.log(error);
            return []
        }
    }
}