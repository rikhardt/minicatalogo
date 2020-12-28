import { types } from "../types/types";

export const reducerApp = (state = {}, action) => {

    switch (action.type) {
        case types.productAddNew:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
    }
}