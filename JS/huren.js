document.querySelectorAll("ul.text li").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");
  });
});