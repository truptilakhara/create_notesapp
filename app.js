const noteBtn = document.getElementById("create");
const input = document.getElementById("inputValue");
// const containernote=document.getElementById("inputValue")
let notes = document.getElementsByClassName("input-box");
function showData() {
  input.innerHTML = localStorage.getItem("notes");
}
showData();
function updateStorage() {
  localStorage.setItem("notes", input.innerHTML);
}

noteBtn.addEventListener("click", () => {
  console.log("Notes created");
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "img/delete.png";
  input.appendChild(inputbox).appendChild(img);
});

input.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLinebreak");
        event.preventDefault();
    }
})
