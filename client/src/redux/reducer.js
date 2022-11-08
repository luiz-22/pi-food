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

const initialState = {
    allRecipes: [],
    recipes: [],
    diets: [],
    dishes: [],
    detail: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                allRecipes: action.payload,
                recipes: action.payload
            }
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: state.allRecipes
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        case GET_DISHES:
            return {
                ...state,
                dishes: action.payload
            }
        case SEARCH:
            return {
                ...state,
                recipes: action.payload
            }
        case SORT_A_Z:
            return {
                ...state,
                recipes: state.recipes.slice().sort(function (a, b) {
                    let titleA = a.title.toLowerCase(),
                        titleB = b.title.toLowerCase()
                    if (titleA < titleB)
                        return -1
                    if (titleA > titleB)
                        return 1
                    return 0
                })
            }
        case SORT_Z_A:
            return {
                ...state,
                recipes: state.recipes.slice().sort(function (a, b) {
                    let titleA = a.title.toLowerCase(),
                        titleB = b.title.toLowerCase()
                    if (titleA > titleB)
                        return -1
                    if (titleA < titleB)
                        return 1
                    return 0
                })
            }
        case SORT_HEALTH_SCORE_ASC:
            return {
                ...state,
                recipes: state.recipes.slice().sort(function (a, b) {
                    let healthScoreA = a.healthScore,
                        healthScoreB = b.healthScore
                    if (healthScoreA < healthScoreB)
                        return -1
                    if (healthScoreA > healthScoreB)
                        return 1
                    return 0
                })
            }
        case SORT_HEALTH_SCORE_DES:
            return {
                ...state,
                recipes: state.recipes.slice().sort(function (a, b) {
                    let healthScoreA = a.healthScore,
                        healthScoreB = b.healthScore
                    if (healthScoreA > healthScoreB)
                        return -1
                    if (healthScoreA < healthScoreB)
                        return 1
                    return 0
                })
            }
        case FILTER_BY_DIET:
            return {
                ...state,
                recipes: state.allRecipes.filter(r => r.diets.includes(action.payload))
            }
        case 'FILTER_BY_DISH':
            return {
                ...state,
                recipes: state.allRecipes.filter(r => r.dishTypes.includes(action.payload))
            }
        case RECIPE_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return { ...state }
    }
}
