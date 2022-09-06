const arr = [
  "강석원",
  "박종훈",
  "윤슨준",
  "이슬비",
  "이정윤",
  "이종석",
  "이진우",
  "최도원",
  "최승준",
  "이다혜",
];
const arr2 = [5, 5, 5, 2, 3];

const sum = arr2.reduce((v1, v2) => v1 + v2);

//console.log(sum);
/*
const fillterfn = (value, index, arr) => {
  console.log(`[${index}] ${value}`);
  //return value.indexOf("이") === 0 ? true : false;
  return value.startsWith("이");
};
arr.push("이도원");

const fillterResult = arr.filter(fillterfn);
console.log(fillterResult);

console.log(arr.reverse());
/*
const myForEach = (value, index, arr) => {
  console.log(`${value}`);
};

const forEachResult = arr.forEach(myForEach);
*/
/*
const myMap = (value, index, arr) => {
  console.log(`${value}`);
  return value * value;
};
const mapResuelt = arr.map(myMap);
console.log(myMap);
*/
/*
const fillterfn = (value, index, arr) => {
  console.log(`[${index}] ${value}`);
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const fillterResult = arr.filter(fillterfn);
console.log(fillterResult);
*/
