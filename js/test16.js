document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll("img");

  imgs.forEach(img => {
    img.addEventListener("contextmenu", event => {
      //컨텍스트 메뉴 이벤트가 발생하면 (즉 오른쪽 클릭 하면)
      event.preventDefault(); //오른쪽 마우스 사용 불가로 만듬
    });
  });
});
