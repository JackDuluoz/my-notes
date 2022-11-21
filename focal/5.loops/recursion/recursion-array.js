const printItems = function (array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
}

const array1 = ["A", "B", "C", "D", "E"];
const array2 = ["A", ["B", "C"], "D", "E"];
const array3 = ["A", [["B", ["C"]], [[["D"]], "E"]]];


printItems(array1);
console.log("");
printItems(array2);
console.log("");
printItems(array3);