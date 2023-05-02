let btnExp = document.querySelector("#exp");
let btnExpList = document.querySelector("#expList");
let btnImp = document.querySelector("#imp");
let btnAdd = document.querySelector("#add");

btnAdd.addEventListener("click", () => {
  monApi.createContactWindow();
});

function createContactWindow() {
  createWindow(500, 300, "contact.html");
}
