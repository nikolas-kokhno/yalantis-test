import React from "react";
import PropTypes from "prop-types";

export const BirthdayUserItem = ({ firstName, lastName, dob }) => {
  return (
    <div className="birthday__list-item">
      &bull; {lastName + " " + firstName + " - " + dob}
    </div>
  );
};

BirthdayUserItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dob: PropTypes.string,
};
