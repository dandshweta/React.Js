function parent() {
  let name = "Ali";
  let city = "Paris";
  var i = 0;

  function child() {
    let typeOfDeveloper = "JavaSript";
    console.log({ typeOfDeveloper, name, city, i });
    i++;
  }

  return child;

  /* return function () {
      let typeOfDeveloper = "JavaSript";
      console.log({ typeOfDeveloper, name, city });
    }; */
}

const result = parent();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
