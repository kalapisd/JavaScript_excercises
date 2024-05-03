const setNumPrices = (arr) => {
  return arr.map(item => item * 1.27).reduce((prev, curr) => prev + curr, 0);
};

export default setNumPrices;
