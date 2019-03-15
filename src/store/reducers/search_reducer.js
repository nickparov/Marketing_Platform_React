import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    isSelected: false,
    country_id: null,
    city_id: null,
    inst_id: null,
    foundObjects: [],
    loading: false,
    loaded: false
}

const setObjects = (state, action) => {
    return updateObject(state, {
        foundObjects: action.foundObjects
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.OBJECTS_WERE_FOUND: return setObjects(state, action);
        default: return state;
    }
}

export default reducer;