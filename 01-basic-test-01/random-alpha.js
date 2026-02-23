// Generates a random lowercase alphabetic string
module.exports = function randomAlpha(n = 8) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let s = "";
  for (let i = 0; i < n; i++) {
    s += chars[Math.floor(Math.random() * chars.length)];
  }
  return s;
};
