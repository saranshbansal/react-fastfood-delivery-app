export default function CartReducer(state = {
  selection: []
}, action) {
  switch (action.type) {
    case 'ADD_ITEMS':
      {
        return Object.assign({}, state, { selection: action.payload});
      }
    case 'REMOVE_ITEMS': 
      {
        return Object.assign({}, state, { selection: action.payload });        
      }
    case 'CHECKOUT_AND_RESET_SELECTION':
      {
        return Object.assign({}, state, { selection: [] });
      }
    default:
      return state;
  }
}
