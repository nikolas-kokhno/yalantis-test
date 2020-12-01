import axios from "axios";

const baseURL = "https://yalantis-react-school-api.yalantis.com/api/task0";

export const getUsers = (items) => ({
  type: "GET_USERS",
  payload: items,
});

export const getUserFromLocale = (items) => ({
  type: "GET_USERS_FROM_LOCAL",
  payload: items,
});

export const checkedUser = (data) => ({
  type: "CHECKED_USER",
  payload: { ...data, checked: !data.checked },
});

export const fetchUsers = () => (dispatch) => {
  axios.get(`${baseURL}/users`).then(({ data }) => {
    dispatch(getUsers(data));
  });
};

export const fetchUsersFromLocalStorage = () => (dispatch) => {
  dispatch(getUserFromLocale(JSON.parse(localStorage.state)));
};
