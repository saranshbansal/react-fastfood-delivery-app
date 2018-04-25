export default function DashboardReducer(state = {
  items: [],
  filteredItems: []
}, action) {
  switch (action.type) {
    case 'LOAD_FOOD_ITEMS':
      {
        return Object.assign({}, state, {items: action.payload});
      }
    case 'FILTER_ITEMS':
      {
        return Object.assign({}, state, { filteredItems: action.payload });
      }
    default:
      return state;
  }
}
