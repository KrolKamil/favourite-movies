const parseJsonAsync = (jsonString) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(jsonString));
    });
  });
};

const arrayContainsArray = (superset, subset) => {
  if (subset.length === 0) {
    return false;
  }
  return subset.every((value) => {
    return (superset.indexOf(value) >= 0);
  });
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

exports.parseJsonAsync = parseJsonAsync;
exports.arrayContainsArray = arrayContainsArray;
exports.getRandomNumber = getRandomNumber;
