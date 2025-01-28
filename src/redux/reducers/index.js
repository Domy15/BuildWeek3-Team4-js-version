const initialState = {
  user: [],
  friends: [],
  interaction: {
    favourites: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FRIENDS":
      return {
        ...state,
        friends: action.payload,
      };

    case "PROFILE":
      return {
        ...state,
        user: action.payload,
      };

    case "ADD":
      return {
        ...state,
        interaction: {
          ...state.interaction,
          favourites: state.interaction.favourites.concat(action.payload),
        },
      };
    case "REMOVE":
      return {
        ...state,
        interaction: {
          ...state.interaction,
          favourites: state.interaction.favourites.filter((item) => {
            return action.payload !== item;
          }),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
