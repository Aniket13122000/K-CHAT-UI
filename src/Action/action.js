// actions.js
export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user,
  });
  
  export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    payload: message,
  });
  