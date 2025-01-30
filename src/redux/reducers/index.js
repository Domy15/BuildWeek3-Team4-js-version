const initialState = {
  myProfile: {},
  user: {
    update: false,
    profile: {},
  },
  friends: [],
  interaction: {
    favourites: [],
    favouritesPosts: [],
    favouritesJobs: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_PROFILE":
      return {
        ...state,
        myProfile: action.payload,
      };

    case "FRIENDS":
      return {
        ...state,
        friends: action.payload,
      };

    case "PROFILE":
      return {
        ...state,
        user: {
          ...state.user,
          profile: action.payload,
        },
      };

    case "UPDATE":
      return {
        ...state,
        user: {
          ...state.user,
          update: !state.user.update,
        },
      };

    case "ADD_POST":
      return {
        ...state,
        interaction: {
          ...state.interaction,
          favouritesPosts: state.interaction.favouritesPosts.concat(
            action.payload
          ),
        },
      };

    case "REMOVE_POST":
      return {
        ...state,
        interaction: {
          ...state.interaction,
          favouritesPosts: state.interaction.favouritesPosts.filter((item) => {
            return action.payload !== item;
          }),
        },
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
