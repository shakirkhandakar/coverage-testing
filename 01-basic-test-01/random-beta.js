// Exports a function that returns an array of random integers
exports.randomNumberArray = function (len = 5, max = 100) {
  return Array.from({ length: len }, () => Math.floor(Math.random() * max));
};
