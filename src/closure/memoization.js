function counterV1() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

const add = counterV1();
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
console.log(add()); // 4

/************************************************* */
// Another example of caching or Memoization

function counterV2() {
  let counter = 0;

  return function (num) {
    counter += num;
    return counter;
  };
}

const addV2 = counterV2();
console.log(addV2(10)); // 10
console.log(addV2(20)); // 30
console.log(addV2(40)); // 70
console.log(addV2(1)); // 71
