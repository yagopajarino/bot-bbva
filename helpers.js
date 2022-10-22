const isEqual = (one, other) => {
  keysA = Object.keys(one);
  keysB = Object.keys(other);
  return (
    keysA.every((i) => keysB.includes(i)) &&
    keysB.every((i) => keysA.includes(i)) &&
    keysA.every((i) => one[i] === other[i])
  );
};

const getNewMovements = (lastMovement, movements) => {
  let res = [];
  i = 0;
  while (i < movements.length && !isEqual(lastMovement, movements[i])) {
    res.push(movements[i]);
    i++;
  }
  return res;
};

module.exports = {
  isEqual,
  getNewMovements,
};
