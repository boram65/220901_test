// /* 객체 test */
// const site = {
//   사이트명: "네이버",
//   url: "https://naver.com",
// };
// const product = {
//   상품명: "ASUS ROG SPATHA",
//   연결기술: "Wired/Wireless",
//   해상도: "8200dpi",
//   무선기술: "RF 2.4GHz",
//   트랙킹: "Laser",
//   OS서포트: "W10,W8.1,W7",
//   크기: "89*137*45mm",
//   무게: "178.5g without cable",
//   제조국: "중국",
//   "가용 인터페이스": "Mouse:USB",
//   인증번호: "MSIP-CMM-MSQ-L7701MOUSE",
//   출시일: "2017년 5월",
//   옵션명: ["1", "2", "3"],
//   판매처: site,
//   printBrand: function (myname) {
//     console.log(`${myname} 선호하는 상품은 ${this.상품명} 입니다.`);
//     console.log(this);
//   },
//   // printModel: myname => {
//   //   console.log(`${myname} 선호하는 모델번호는 ${this.인증번호} 입니다.`);
//   //   console.log(this);
//   // },
// };

// String.prototype.toPrint = function () {
//   console.log("[2022-09-06]" + this.valueOf());
// };
// "dd".toPrint();

// const testStr = "test입니다.";
// testStr.toPrint();

// console.log(product.상품명.toPrint());

// console.log("abcd".toString());
// console.log([1, 2, 3, 4].toString());

// const arr = [12, 14, 10, 6, 3, 4];

// console.log((Math.random() * 10).toFixed());

const pc = [
  {
    제품명: "cpu",
    가격: 30,
    무개: 10,
  },
  {
    제품명: "HDD",
    가격: 10,
    무개: 16,
  },
  {
    제품명: "gpu",
    가격: 60,
    무개: 25,
  },
  {
    제품명: "mainBode",
    가격: 15,
    무개: 18,
  },
  {
    제품명: "RAM",
    가격: 18,
    무개: 14,
  },
];
/*
const compare = (a, b) => {
  console.log(JSON.stringify(a) + "___" + JSON.stringify(b));
  if (a.가격 < b.가격) {
    return 1;
  }
  if (a.가격 > b.가격) {
    return -1;
  }
  return 0;
};
*/
const sort = _.sortBy(pc, ["가격", "무개"]).reverse();
console.log(sort);
console.log("-----------");

const resl = _.orderBy(pc, ["가격", "무개"], ["desc", "asc"]);
console.log(resl);
