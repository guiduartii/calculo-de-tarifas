import { LIST_DISTRIBUITORS, LIST_EQUIPMENTS_DISTRIBUITOR } from "./constants";
import { initialState, localStorageSetItem } from "./initialState";

export const powerDistribuitorReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_DISTRIBUITORS:

            const { data } = action;
            localStorageSetItem(data)
            
            return data;

        default:
            return state;
    }
};

export const calculateEquipmentsDistribuitor = (state = [], action) => {
    switch (action.type) {
        case LIST_EQUIPMENTS_DISTRIBUITOR:
            return action.data;
        default:
            return state;
    }
}

