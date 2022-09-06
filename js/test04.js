/* 객체 test */
const site = {
  사이트명: "네이버",
  url: "https://naver.com",
};
const product = {
  상품명: "ASUS ROG SPATHA",
  연결기술: "Wired/Wireless",
  해상도: "8200dpi",
  무선기술: "RF 2.4GHz",
  트랙킹: "Laser",
  OS서포트: "W10,W8.1,W7",
  크기: "89*137*45mm",
  무게: "178.5g without cable",
  제조국: "중국",
  "가용 인터페이스": "Mouse:USB",
  인증번호: "MSIP-CMM-MSQ-L7701MOUSE",
  출시일: "2017년 5월",
  옵션명: ["1", "2", "3"],
  판매처: site,
  printBrand: function (myname) {
    console.log(`${myname} 선호하는 상품은 ${this.상품명} 입니다.`);
    console.log(this);
  },
  // printModel: myname => {
  //   console.log(`${myname} 선호하는 모델번호는 ${this.인증번호} 입니다.`);
  //   console.log(this);
  // },
};

const str = "      가나다라마바사아자차카타파하        ";
console.log(str.trim().split(""));
