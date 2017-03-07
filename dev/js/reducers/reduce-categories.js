import * as _ from '../../../node_modules/lodash';

const defaultState = [
    'phone', 'pc', 'gaming station'
];

export default function (state = defaultState, action) {
    switch(action.type) {
        case 'ADD_CATEGORY': {
            return [...state, action.payload];
        };
        case 'REMOVE_CATEGORY': {
            return _.reject(state, (c, idx) => idx === action.payload);
        }
    }
    return state;
}
