function addToCart(item) {
    return {type: 'ADD_TO_CART', payload: item}
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
function updateItem(itemToId) {
    return {type: 'UPDATE_ITEM', payload: itemToId};
}

export {addToCart, addCategory, removeCategory,selectItem, updateItem};
