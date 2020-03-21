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

exports.parseJsonAsync = parseJsonAsync;
exports.arrayContainsArray = arrayContainsArray;
