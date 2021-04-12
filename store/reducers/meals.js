import { MEALS} from "../../data/dummy-data";

const initialState = {
    meals: MEALS,
    filterMeals: MEALS , //initially there are no filters
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    return state;
}