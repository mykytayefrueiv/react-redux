function addToCart(item) {
    return {type: 'ADD_TO_CART', payload: item}
};
function checkoutCart() {
    return {type: 'CHECKOUT_CART'};
};
function addCategory(categoryName) {
    return {type: 'ADD_CATEGORY', payload: categoryName}
}
function removeCategory(categoryIndex) {
    return {type: 'REMOVE_CATEGORY', payload: categoryIndex}
};
function selectItem(item) {
    return {type: 'SELECT_ITEM', payload: item};
};
function createUpdateItem(itemToId) {
    return {type: 'UPDATE_ITEM', payload: itemToId };
};
function removeItemSelection() {
    return { type: 'REMOVE_ITEM_SELECTION' };
};

export {addToCart, addCategory, removeCategory,selectItem, createUpdateItem, removeItemSelection, checkoutCart};
