import React from "react";
import PropTypes from "prop-types";

export const EmployeesItem = ({
  firstName,
  lastName,
  checkedUser,
  checked,
}) => {
  return (
    <label className="employees__list-item">
      <input type="checkbox" onChange={checkedUser} checked={checked} />
      <span>{lastName + " " + firstName}</span>
    </label>
  );
};

EmployeesItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  checked: PropTypes.bool,
  checkedUser: PropTypes.func,
};
