const initialState = {
  items: [],
  loading: false,
  errors: [],
};

const checkedStatus = (users) => {
  return users.map((item) => ({ ...item, checked: false }));
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS": {
      return {
        ...state,
        items: checkedStatus(action.payload),
      };
    }
    case "CHECKED_USER": {
      return {
        ...state,
        items: [
          ...state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default users;
