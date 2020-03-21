const parseJsonAsync = (jsonString) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(jsonString));
    });
  });
};

exports.parseJsonAsync = parseJsonAsync;
