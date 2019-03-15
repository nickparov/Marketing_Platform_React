import * as actionTypes from '../actions/actionTypes';

export const setObjects = (foundObjects) => {
    return {
        type: actionTypes.OBJECTS_WERE_FOUND,
        foundObjects
    }
}