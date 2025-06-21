const search = document.getElementById("search");

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.body.style.backgroundColor = search.value;
  }
});




const colors = document.querySelectorAll(".color");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    document.body.style.backgroundColor = color.dataset.color ;
  });
});
