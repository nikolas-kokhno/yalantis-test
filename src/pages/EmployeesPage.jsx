import React from "react";
import { useSelector } from "react-redux";
import { EmployeesList } from "../components/Employees/EmployeesList";
import { BirthdayList } from "../components/EmployeesBirthday/BirthdayList";

const EmployeesPage = () => {
  const usersData = useSelector((data) => {
    return data.users;
  });

  return (
    <div className="employees">
      <div className="employees__left">
        <div className="employees__header">
          <h3>Employees</h3>
        </div>

        <EmployeesList usersArray={usersData.items} />
      </div>

      <div className="employees__right">
        <div className="employees__header">
          <h3>Employees Birthday</h3>
        </div>

        <BirthdayList usersArray={usersData.items} />
      </div>
    </div>
  );
};

export default EmployeesPage;
