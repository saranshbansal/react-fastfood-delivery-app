export function filterMenu(response) {
    return { type: 'FILTER_ITEMS', payload: response };
}
