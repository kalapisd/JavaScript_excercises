const arrayElementChecker = (arr, value) => {
  let exists = arr.includes(value);
  let index = exists ? arr.indexOf(value) : -1;
  let allElementsAreNumbers = arr.every((item) => typeof item === "number");
  let someElementsAreNumbers = arr.some((item) => typeof item === "number");

  return {
    exists: exists,
    index: index,
    allElementsAreNumbers: allElementsAreNumbers,
    someElementsAreNumbers: someElementsAreNumbers,
  };
};

export default arrayElementChecker;
