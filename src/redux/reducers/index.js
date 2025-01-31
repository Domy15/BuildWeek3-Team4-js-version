const initialState = {
  myProfile: {},
  user: {
    update: false,
    update2: false,
    profile: {},
  },
  friends: [],
  interaction: {
    favourites: [
      {
        area: "Milano",
        bio: "il ripieno di mozzarella e pomodoro è ciò che mi fa svegliare la mattinaa 😍",
        createdAt: "2023-11-13T09:33:14.639Z",
        email: "carletto23@gmail.com",
        image:
          "https://yt3.ggpht.com/a/AGF-l7-X5W2ImMOQivotV8pQdM0Pndv4-oZskxjgPA=s900-mo-c-c0xffffffff-rj-k-no",
        name: "Carletto",
        surname: "dei Sofficini",
        title: "Sofficiamo un po solo io e te?😍 ",
        updatedAt: "2023-11-17T16:09:47.598Z",
        username: "totti10",
        __v: 0,
        _id: "6551ed5ac55e7e0018f83c0b",
      },
    ],
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

    case "UPDATE2":
      return {
        ...state,
        user: {
          ...state.user,
          update2: !state.user.update2,
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

    case "ADDJOB":
      return {
        ...state,
        interaction: {
          ...state.interaction,
          favouritesJobs: state.interaction.favouritesJobs.concat(
            action.payload
          ),
        },
      };

    case "REMOVEJOB":
      return {
        ...state,
        interaction: {
          ...state.interaction,
          favouritesJobs: state.interaction.favouritesJobs.filter((item) => {
            return action.payload !== item;
          }),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
