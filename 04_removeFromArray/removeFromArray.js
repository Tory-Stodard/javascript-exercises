const removeFromArray = function (arr, ...args) {
  args.forEach((element) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        arr.splice(i, 1);
      }
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
