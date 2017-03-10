import * as _ from '../../../node_modules/lodash'

export default function (state = {}, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            if (state[action.payload.id]) {
                return _.assign({}, state, {
                    [action.payload.id]: _.assign(state[action.payload.id], {
                        quantity: state[action.payload.id].quantity + 1
                    })
                });
            }
            return _.assign({}, state, {
                [action.payload.id]: {
                    item: action.payload,
                    quantity: 1
                }
            });
        }
        case 'CHECKOUT_CART': {
            alert("Hurray, you've checkouted the cart");
            return state;
        }
    }
    return state;
}
