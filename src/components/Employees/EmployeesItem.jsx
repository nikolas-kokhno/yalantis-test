import React from "react";
import PropTypes from "prop-types";

export const EmployeesItem = ({ firstName, lastName, checkedUser }) => {
  return (
    <label className="employees__list-item">
      <input type="checkbox" onClick={checkedUser} />
      <span>{lastName + " " + firstName}</span>
    </label>
  );
};

EmployeesItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  checkedUser: PropTypes.func,
};
