const containsOnlyNumbers = (str) => {
  return /^(\d+ )*(\d+)$/.test(str);
};
const containsOnlyLetters = (str) => {
  return /^[A-Za-z\s]*$/.test(str);
};

export { containsOnlyLetters, containsOnlyNumbers };
