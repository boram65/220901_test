const select = document.querySelector("select");
const p = document.querySelector("p");

select.addEventListener("change", (event) = > {
    const options = event.currentTarget.options;
    const index = event.currentTarget.options.selectedIndex
    p.testContent = `선택 : ${options[index].textContent}`
});
