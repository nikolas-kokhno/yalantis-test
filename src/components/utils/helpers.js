export const filterUserByAlphabet = (users) => {
  let filterArr = [];

  for (let i = 65; i < 91; i++) {
    let letterNow = String.fromCharCode(i);

    filterArr.push({
      letter: letterNow,
      users: users.filter((item) => item.lastName[0] === letterNow),
    });
  }

  return filterArr;
};

export const convertDate = (date) => {
  return new Date(date).getMonth();
};

export const monthToString = (number) => {
  switch (number) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return number;
  }
};

export const convertMonth = (date) => {
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();

  return `${day} ${monthToString(month)}, ${year} year`;
};

export const birthdayInMounth = (users) => {
  let sortByMounth = [];

  for (let i = 0; i < 12; i++) {
    sortByMounth.push({
      month: monthToString(i),
      users: users.filter((item) => convertDate(item.dob) === i),
    });
  }

  return sortByMounth;
};
