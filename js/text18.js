document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("textarea");
  const h1 = document.querySelector("h1");

  let timeId;

  textarea.addEventListener("focus", event => {
    timeId = setInterval(() => {
      const length = textarea.value.length;
      h1.textContent = `κΈμμ : ${length}`;
    }, 50);
  });
  textarea.addEventListener("blur", event => {
    clearInterval(timeId);
  });
});
