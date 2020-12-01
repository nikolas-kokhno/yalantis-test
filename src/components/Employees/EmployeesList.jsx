import React from "react";
import { useDispatch } from "react-redux";
import { filterUserByAlphabet } from "../../utils/helpers";
import { Loader } from "./Loader";
import { EmployeesItem } from "./EmployeesItem";
import { checkedUser } from "../../store/actions/users";

export const EmployeesList = ({ usersArray }) => {
  const dispatch = useDispatch();
  const userByAlphabet = filterUserByAlphabet(usersArray);

  const checkUser = (user) => {
    dispatch(checkedUser(user));
  };

  return (
    <div className="employees__list">
      {usersArray.length === 0 ? (
        <Loader />
      ) : (
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
                      checked={item.checked}
                      checkedUser={() => checkUser(item)}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};
