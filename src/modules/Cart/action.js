export function addItemToSelection(response) {
    return { type: 'ADD_ITEMS', payload: response };
}

export function removeItemToSelection(response) {
    return { type: 'REMOVE_ITEMS', payload: response };
}

export function checkoutCurrentOrder(response) {
    return { type: 'CHECKOUT_AND_RESET_SELECTION', payload: response };
}
