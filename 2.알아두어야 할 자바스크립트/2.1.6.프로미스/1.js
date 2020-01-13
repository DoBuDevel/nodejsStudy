const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then(messege => {
    console.log(messege);
  })
  .catch(error => {
    console.error(error);
  });

console.log(__dirname);
console.log(__filename);
