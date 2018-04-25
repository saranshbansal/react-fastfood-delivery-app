export default function OrderReducer(state = {
  selection: []
}, action) {
  switch (action.type) {
    case 'ADD_ITEMS':
      {
        return Object.assign({}, state, { selection: action.payload});
      }
    default:
      return state;
  }
}
