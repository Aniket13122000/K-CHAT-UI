// reducers.js
const initialState = {
    currentUser: null,
    messageList: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return { ...state, currentUser: action.payload };
      case 'ADD_MESSAGE':
        return { ...state, messageList: [...state.messageList, action.payload] };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  