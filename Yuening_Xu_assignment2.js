/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// const doubleQuantity = (items) => {
//   let ret = new Array();
//   items.forEach((object) => {
//     let obj = { quantity: object.quantity * 2, price: object.price * 2 };
//     ret.push(obj);
//   });
//   return ret;
// };

// const doubleobject = doubleQuantity(itemsObject);
// doubleobject.forEach((value) => {
//   console.log(value);
// });

/***use map */
const doublemap = itemsObject.map(({ quantity, price }) => {
  return { quantity: quantity * 2, price: price * 2 };
});
console.log(doublemap);

// const largerThan = (items) => {
//   let ret = new Array();
//   items.forEach((object) => {
//     if (object.quantity > 2 && object.price > 300) {
//       let obj = { quantity: object.quantity, price: object.price };
//       ret.push(obj);
//     }
//   });
//   return ret;
// };

// const largeobject = largerThan(itemsObject);
// largeobject.forEach((value) => {
//   console.log(value);
// });
const largermap = itemsObject.filter(({ quantity, price }) => {
  return quantity > 2 && price > 300;
});
console.log(largermap);

// console.log("\n");
// const totalValue = (items) => {
//   let ret = 0;
//   items.forEach((item) => {
//     ret += item.quantity * item.price;
//   });
//   return ret;
// };
// const sumValue = totalValue(itemsObject);
// console.log(sumValue);
const total = itemsObject.reduce((sum, item) => {
  return sum + item.quantity * item.price;
}, 0);
console.log(total);
/* Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const formatString = (sValue) => {
  const ret = sValue
    .trim()
    .toLowerCase()
    .replaceAll(/[^a-z]/g, " ")
    .replaceAll(/\s+/g, " ");

  return ret;
};

console.log("\n");
const resultS = formatString(string);
console.log(resultS);
console.log(
  "if result equals Expected Return String?  ",
  resultS === expectedReturnString
);
/*

Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const combineUuid = (first, second) => {
  const ret = new Array();
  second.forEach((item) => ret.push({ ...item, name: null }));
  first.forEach((item) => {
    let same = ret.find((retItem) => retItem.uuid === item.uuid);
    if (same === undefined) {
      ret.push(
        Object.assign({ uuid: item.uuid }, { role: null }, { name: item.name })
      );
    } else {
      same.name = item.name;
    }
  });
  ret.sort((a, b) => (a.uuid > b.uuid ? 1 : -1));
  return ret;
};

/***
 * use this function to compare 2 arrays
 * input: array
 * output: the different part between 2 arrays
 
function getDifference(array1, array2) {
  return array1.filter((object1) => {
    return !array2.some((object2) => {
      return (
        object1.uuid === object2.uuid &&
        object1.role === object2.role &&
        object1.name === object2.name
      );
    });
  });
}
*/
const q3ret = combineUuid(first, second);
//console.log(getDifference(q3ret, expectedReturnArray));
console.log("\n", q3ret);
