import React from "react";
import { useDispatch } from "react-redux";
import { filterUserByAlphabet } from "../utils/helpers";
import { EmployeesItem } from "./EmployeesItem";
import { checkedUser } from "../../store/actions/users";

export const EmployeesList = ({ users }) => {
  const dispatch = useDispatch();
  const userByAlphabet = filterUserByAlphabet(users);

  const checkUser = (user) => {
    dispatch(checkedUser(user));
  };

  return (
    <div className="employees__list">
      {userByAlphabet &&
        userByAlphabet.map((alphabet) => (
          <div className="employees__list-letter" key={alphabet.letter}>
            <b>{alphabet.letter}</b>
            {alphabet && (
              <div className="employees__list-users">
                {alphabet.users.length === 0 ? (
                  <span className="employees__list-item">
                    --- There are no users on this letter ---
                  </span>
                ) : (
                  alphabet.users.map((item) => (
                    <EmployeesItem
                      key={item.id}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      checkedUser={() => checkUser(item)}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
