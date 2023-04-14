function add(num1, num2) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject("Input harus berupa angka");
    } else {
      let result = num1 + num2;
      resolve(result);
    }
  });
}

function subtract(num1, num2) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject("Input harus berupa angka");
    } else {
      let result = num1 - num2;
      resolve(result);
    }
  });
}

function multiply(num1, num2) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject("Input harus berupa angka");
    } else {
      let result = num1 * num2;
      resolve(result);
    }
  });
}

function divide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject("Input harus berupa angka");
    } else {
      let result = num1 / num2;
      resolve(result);
    }
  });
}

function power(num1, num2) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject("Input harus berupa angka");
    } else {
      let result = Math.pow(num1, num2);
      resolve(result);
    }
  });
}

// a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12
let result = Promise.all([
  divide(375, 125),
  power(3, 2),
  multiply(96, 10),
  divide(84, 12),
])
  .then(([a, b, c, d]) => {
    let total = a * b - 750 + c * d;
    console.log("a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });

// b. 500 - 625 / 5 + 84 / 12 * 96 / 12
result = Promise.all([divide(625, 5), divide(84, 12), divide(96, 12)])
  .then(([a, b, c]) => {
    total = 500 - a + b * c;
    console.log("b. 500 - 625 / 5 + 84 / 12 * 96 / 12 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84
result = Promise.all([
  divide(750, 2),
  divide(125, 5),
  divide(96, 12),
  multiply(374, 84),
])
  .then(([a, b, c, d]) => {
    total = a + b * c + d;
    console.log("c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250
result = Promise.all([divide(750, 125), multiply(96, 10), divide(500, 250)])
  .then(([a, b, c]) => {
    total = 1000 - a - 12 - b * c;
    console.log("d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// e. 36 ** 2 / 72 + 125 * 10 - 24 * 3
result = Promise.all([power(36, 2), multiply(125, 10), multiply(24, 3)])
  .then(([a, b, c]) => {
    total = a / 72 + b - c;
    console.log("e. 36 ** 2 / 72 + 125 * 10 - 24 * 3 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// f. 500 / 100 * 20 + 84 * 2 - 125 / 5
result = Promise.all([divide(500, 100), multiply(84, 2), divide(125, 5)])
  .then(([a, b, c]) => {
    total = a * 20 + b - c;
    console.log("f. 500 / 100 * 20 + 84 * 2 - 125 / 5 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// g. 375 * 2 - 750 / 25 + 1000 / 500
result = Promise.all([multiply(375, 2), divide(750, 25), divide(1000, 500)])
  .then(([a, b, c]) => {
    total = a - b + c;
    console.log("g. 375 * 2 - 750 / 25 + 1000 / 500 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// h. 12 * 12 * 2 - 84 + 96 ** 2
result = Promise.all([multiply(12, 12), power(96, 2)])
  .then(([a, b]) => {
    total = a * 2 - 84 + 96 + b;
    console.log("h. 12 * 12 * 2 - 84 + 96 ** 2 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12
result = Promise.all([
  divide(750, 25),
  divide(375, 125),
  divide(72, 12),
  multiply(84, 12),
])
  .then(([a, b, c, d]) => {
    total = a * b * c + d;
    console.log("i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// j. 96 / 12 ** 2 + 625 / 5 - 375 * 84
result = Promise.all([multiply(96, 12), divide(625, 5), multiply(375, 84)])
  .then(([a, b, c]) => {
    total = a ** 2 + b - c;
    console.log("j. 96 / 12 ** 2 + 625 / 5 - 375 * 84 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10
result = Promise.all([divide(250, 25), power(36, 2), multiply(125, 10)])
  .then(([a, b, c]) => {
    total = a * 10 + b / 72 - c;
    console.log("k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10
result = Promise.all([divide(375, 125), divide(500, 250), multiply(96, 10)])
  .then(([a, b, c]) => {
    total = a * 100 + b * 50 - c;
    console.log("l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2
result = Promise.all([
  divide(750, 25),
  divide(375, 125),
  power(96, 2),
  power(12, 2),
])
  .then(([a, b, c, d]) => {
    total = a - b + c / d;
    console.log("m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12
result = Promise.all([
  divide(1000, 500),
  divide(375, 125),
  divide(72, 12),
  power(84, 12),
])
  .then(([a, b, c, d]) => {
    total = a * b * c - d;
    console.log("n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
// o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2
result = Promise.all([
  divide(96, 12),
  divide(500, 250),
  divide(375, 125),
  multiply(84, 2),
])
  .then(([a, b, c, d]) => {
    total = a ** 2 - b * c + d;
    console.log("o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2 = ", total);
  })
  .catch((error) => {
    console.log(error);
  });
