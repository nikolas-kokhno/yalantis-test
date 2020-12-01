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
  const mounth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return mounth[number];
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
