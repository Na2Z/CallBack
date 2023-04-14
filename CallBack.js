console.log("Home_Task");

// No 1
function add(num1, num2, callback) {
  let result = num1 + num2;
  callback(result);
}

function subtract(num1, num2, callback) {
  let result = num1 - num2;
  callback(result);
}

function multiply(num1, num2, callback) {
  let result = num1 * num2;
  callback(result);
}

function divide(num1, num2, callback) {
  let result = num1 / num2;
  callback(result);
}

function power(num1, num2, callback) {
  let result = Math.pow(num1, num2);
  callback(result);
}
console.log("");
// a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12
divide(375, 125, function (result) {
  multiply(result, 3, function (result1) {
    power(result1, 2, function (resultawal) {
      multiply(96, 10, function (result2) {
        multiply(result2, 84, function (result3) {
          divide(result3, 12, function (resultakhir) {
            subtract(resultawal, 750, function (resultlanjut) {
              add(resultlanjut, resultakhir, function (finalresult) {
                console.log(
                  "a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12 = ",
                  finalresult
                );
              });
            });
          });
        });
      });
    });
  });
});
// b. 500 - 625 / 5 + 84 / 12 * 96 / 12
divide(625, 5, function (result1) {
  divide(84, 12, function (result2) {
    multiply(result2, 96, function (result3) {
      divide(result3, 12, function (result4) {
        subtract(500, result1, function (result5) {
          add(result5, result4, function (finalresult) {
            console.log("b. 500 - 625 / 5 + 84 / 12 * 96 / 12 = ", finalresult);
          });
        });
      });
    });
  });
});
// c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84
divide(750, 2, function (result1) {
  divide(125, 5, function (result2) {
    multiply(result2, 96, function (result3) {
      divide(result3, 12, function (result4) {
        multiply(375, 84, function (result5) {
          add(result1, result4, function (result6) {
            add(result6, result5, function (result) {
              console.log(
                "c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84 = ",
                result
              );
            });
          });
        });
      });
    });
  });
});
// d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250
divide(750, 125, function (result1) {
  multiply(96, 10, function (result2) {
    multiply(result2, 500, function (result3) {
      divide(result3, 250, function (result4) {
        subtract(1000, result1, function (result5) {
          subtract(result4, 12, function (result6) {
            add(result6, result5, function (result) {
              console.log(
                "d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250 = ",
                result
              );
            });
          });
        });
      });
    });
  });
});
// e. 36 ** 2 / 72 + 125 * 10 - 24 * 3
power(36, 2, function (result1) {
  divide(result1, 72, function (result2) {
    multiply(125, 10, function (result3) {
      multiply(24, 3, function (result4) {
        add(result2, result3, function (result5) {
          subtract(result5, result4, function (result) {
            console.log("e. 36 ** 2 / 72 + 125 * 10 - 24 * 3 = ", result);
          });
        });
      });
    });
  });
});
// f. 500 / 100 * 20 + 84 * 2 - 125 / 5
divide(500, 100, function (result1) {
  multiply(result1, 20, function (result2) {
    multiply(84, 2, function (result3) {
      divide(125, 5, function (result4) {
        add(result2, result3, function (result5) {
          subtract(result5, result4, function (result) {
            console.log("f. 500 / 100 * 20 + 84 * 2 - 125 / 5 = ", result);
          });
        });
      });
    });
  });
});
// g. 375 * 2 - 750 / 25 + 1000 / 500
multiply(375, 2, function (result1) {
  divide(750, 25, function (result2) {
    divide(1000, 500, function (result3) {
      subtract(result1, result2, function (result4) {
        add(result4, result3, function (result) {
          console.log("g. 375 * 2 - 750 / 25 + 1000 / 500 = ", result);
        });
      });
    });
  });
});
// h. 12 * 12 * 2 - 84 + 96 ** 2
multiply(12, 12, function (result1) {
  multiply(result1, 2, function (result2) {
    power(96, 2, function (result3) {
      subtract(result2, 84, function (result4) {
        add(result4, result3, function (result) {
          console.log("h. 12 * 12 * 2 - 84 + 96 ** 2 = ", result);
        });
      });
    });
  });
});
// i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12
divide(750, 25, function (result1) {
  multiply(result1, 375, function (result2) {
    divide(result2, 125, function (result3) {
      multiply(result3, 72, function (result4) {
        divide(result4, 12, function (result5) {
          multiply(84, 12, function (result6) {
            add(result5, result6, function (result) {
              console.log(
                "i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12 = ",
                result
              );
            });
          });
        });
      });
    });
  });
});
// j. 96 / 12 ** 2 + 625 / 5 - 375 * 84
divide(96, 12, function (result1) {
  power(result1, 2, function (result2) {
    divide(625, 5, function (result3) {
      multiply(375, 84, function (result4) {
        add(result2, result3, function (result5) {
          subtract(result5, result4, function (result) {
            console.log("j. 96 / 12 ** 2 + 625 / 5 - 375 * 84 = ", result);
          });
        });
      });
    });
  });
});
// k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10
divide(250, 25, function (result1) {
  multiply(result1, 10, function (result2) {
    power(36, 2, function (result3) {
      divide(result3, 72, function (result4) {
        multiply(125, 10, function (result5) {
          add(result2, result4, function (result6) {
            subtract(result6, result5, function (result) {
              console.log(
                "k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10 = ",
                result
              );
            });
          });
        });
      });
    });
  });
});
// l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10
divide(375, 125, function (result1) {
  multiply(result1, 100, function (result2) {
    divide(500, 250, function (result3) {
      multiply(result3, 50, function (result4) {
        multiply(96, 10, function (result5) {
          add(result2, result4, function (result6) {
            subtract(result6, result5, function (result) {
              console.log(
                "l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10 = ",
                result
              );
            });
          });
        });
      });
    });
  });
});
// m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2
divide(750, 25, function (result1) {
  divide(375, 125, function (result2) {
    power(96, 2, function (result3) {
      divide(result3, 12, function (result4) {
        power(result4, 2, function (result5) {
          subtract(result1, result2, function (result6) {
            add(result6, result5, function (result) {
              console.log(
                "m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2 = ",
                result
              );
            });
          });
        });
      });
    });
  });
});
// n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12
divide(1000, 500, function (result1) {
  multiply(result1, 375, function (result2) {
    divide(result2, 125, function (result3) {
      multiply(result3, 72, function (result4) {
        divide(result4, 12, function (result5) {
          multiply(84, 12, function (result6) {
            subtract(result5, result6, function (result) {
              console.log(
                "n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12 = ",
                result
              );
            });
          });
        });
      });
    });
  });
});
// o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2
divide(96, 12, function (result1) {
  power(result1, 2, function (result2) {
    divide(500, 250, function (result3) {
      multiply(result3, 375, function (result4) {
        divide(result4, 125, function (result5) {
          multiply(84, 2, function (result6) {
            subtract(result2, result5, function (result7) {
              add(result7, result6, function (result) {
                console.log(
                  "o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2 = ",
                  result
                );
              });
            });
          });
        });
      });
    });
  });
});
