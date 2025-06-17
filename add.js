function divide(...args) {
  const numbers = args.filter((num) => typeof num === "number" && !isNaN(num));
  if (numbers.length === 0) return 0;
  return numbers.slice(1).reduce((acc, curr) => {
    if (curr === 0) throw new Error("Divisão por zero!");
    return acc / curr;
  }, numbers[0]);
}

module.exports = divide;
