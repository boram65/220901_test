/*함수 test*/

const myPrint = (...data) => {
  console.log(data.join("_"));
};
myPrint("하이", "hi", "가나다라바마사");

const str = "안녕_하세요_ㅎㅎ";
console.log(str.split("_"));
/*
const min = (...items) => {
  console.log(items);
  let val = items[0];
  for (i in items) if (val > items[i]) val = items[i];
  return val;
};

console.log(min(10, 20, 40, 5, 10, 25));

/*
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

const sum2 = function (a, b) {
  return a + b;
};
console.log(sum2(5, 7));

const sum3 = (a, b) => a + b;
console.log(sum3(9, 9));

let app = prompt("과일 입력", "사과");
console.log(app);

let app2 = confirm("확인?");
console.log(app2);

const isLeapYear = year =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(`2020년은 운년일까? === ${isLeapYear(2020)}`);
console.log(`2010년은 운년일까? === ${isLeapYear(2010)}`);
console.log(`2000년은 운년일까? === ${isLeapYear(2000)}`);
console.log(`1900년은 운년일까? === ${isLeapYear(1900)}`);
/*
function main(a, b, c) {
  console.log(`a의 값은 ${a} 입니다.`);
  console.log(`b의 값은 ${b} 입니다.`);
  console.log(`c의 값은 ${c} 입니다.`);
  console.log("");
}
main(11, 22);

let main2 = function () {
  console.log("함수 2번째");
};

main2 = function () {
  console.log("재정의 함수");
};

main2();

const main3 = () => console.log("함수 3번째");

main3();

/*
console.log(typeof main);
console.log(typeof 1234);
console.log(typeof "1234");
console.log(console.log);
*/
