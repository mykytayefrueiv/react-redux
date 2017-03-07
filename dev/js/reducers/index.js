import {combineReducers} from 'redux';
import ItemsReducer from './reducer-items';
import CartItemsReducer from './reducer-cart-items';
import CategoriesReducer from './reduce-categories';
import ItemReducer from './reducer-item';

const allReducers = combineReducers({
    items: ItemsReducer,
    selectedItem: ItemReducer,
    cart: CartItemsReducer,
    categories: CategoriesReducer
});

export default allReducers