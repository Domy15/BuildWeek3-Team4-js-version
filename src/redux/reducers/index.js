const initialState = {
  user: [],
  friends: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FRIENDS':
        return {
            ...state,
            friends: action.payload
        }

    case "PROFILE":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
