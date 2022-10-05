import { GET_ITEM_DATA } from "../actions/ActionTypes";

const initialState = {
    borrowedItem: [],
}


export const getBorrowItem = (state = initialState, action) => {

    switch (action.type) {
        case GET_ITEM_DATA:
            return {
                ...state,
                borrowedItem: action.value,
            };

        default:
            return {
                ...state
            };
    }
};