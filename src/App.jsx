import React from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/actions/users";
import { EmployeesPage } from "./pages";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  });

  return <EmployeesPage />;
};

export default App;
