import React from "react";
import { birthdayInMounth, convertMonth } from "../../utils/helpers";
import { BirthdayUserItem } from "./BirthdayUserItem";

export const BirthdayList = ({ usersArray }) => {
  const checkedUser = usersArray.filter((item) => item.checked === true);
  const sortBirthdayInMounth = birthdayInMounth(checkedUser);

  return (
    <div className="birthday">
      {checkedUser.length === 0 ? (
        <span>No selected employees...</span>
      ) : (
        sortBirthdayInMounth.map((item) =>
          item.users.length === 0 ? (
            <></>
          ) : (
            <div className="birthday__list">
              <b>{item.month}</b>
              <ul>
                {item.users.map((user) => (
                  <BirthdayUserItem
                    key={user.id}
                    lastName={user.lastName}
                    firstName={user.firstName}
                    dob={convertMonth(user.dob)}
                  />
                ))}
              </ul>
            </div>
          )
        )
      )}
    </div>
  );
};
