const getCurrentDate = () => {
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return currentDate;
};
module.exports = { getCurrentDate };
