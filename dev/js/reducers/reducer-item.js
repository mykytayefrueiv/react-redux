import * as _ from '../../../node_modules/lodash'


export default function (state = {}, action) {
    switch(action.type) {
        case 'SELECT_ITEM': {
            return {
                ...state, 
                ...action.payload
            };
        };
        case 'REMOVE_ITEM_SELECTION': {
            return {};
        }
    }
    return state;
}
