import React from "react";
import { useDispatch } from "react-redux";
import { fetchUsers, fetchUsersFromLocalStorage } from "./store/actions/users";
import { EmployeesPage } from "./pages";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.state === undefined) {
      dispatch(fetchUsers());
    } else {
      dispatch(fetchUsersFromLocalStorage());
    }
  });

  return <EmployeesPage />;
};

export default App;
