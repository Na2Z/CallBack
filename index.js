// function fungsiWorld(callBack) {
//   setTimeout(() => {
//     callBack({ message: "world" });
//   }, 3000);
// }

// console.log("hello");

// fungsiWorld(function (data) {
//   console.log(data);
// });

// console.log("Javascript");

console.log("----------------------------------------------------");
console.log("callback-try");

// const fs = require("fs")
// fs.readFile('./backend-00.html','utf-8' function (err, result){
//     console.log(result);
// })

function jumlah(a, b, hasil) {
  setTimeout(() => {
    hasil(null, a + b);
  }, 0);
}

// 10 + 20 +30 + 40
let hasilpenjumlahan = 0;
jumlah(10, 20, function (err, result) {
  jumlah(result, 30, function (err, result1) {
    jumlah(result1, 40, function (err, result2) {
      console.log(result2);
    });
  });
});

console.log("hasil penjumlahan : ", hasilpenjumlahan);
console.log("---------------------------------------------");
console.log("Promise");

const p1 = new Promise(function (resolve, reject) {
  let error = true;
  if (error) {
    reject("ada error");
  } else {
    resolve("hello");
  }
});
//resolve mengembalikan nilai normal (ga error) reject mengembalika nilai error

p1.then((d) => {
  console.log(d);
}).catch((e) => {
  console.log("rejected");
  console.log(e);
});

function jumlah(a, b, hasil) {
  setTimeout(() => {
    hasil(null, a + b);
  }, 0);
}

function jumlahPromise(a, b) {
  const p = new Promise((resolve, reject) => {
    if (typeof a == "string" || typeof b == "string") {
      reject("ada angka tapi string");
    } else {
      resolve(a + b);
    }
  });
  return p;
}

jumlahPromise(10, 20)
  .then(function (d) {
    return jumlahPromise(d, 20); //10+20+20= 50
  })
  .then(function (d) {
    return jumlahPromise(d, 50); //50+50 = 100
  })
  .then(function (d) {
    console.log("hasilnya : ", d);
  })
  .catch(function (err) {
    console.log(err);
  });
