import * as massives from "./file.js";
import * as render from "./render.js";

const fields = document.querySelectorAll(".texfield");

/* fields.forEach((filed) => {
  filed.addEventListener("click", function (event) {
    this.contentEditable = true;
  });

    document.addEventListener("click", function (e) {
    if (e.target !== fields) {
      filed.contentEditable = false;
    }
  });
}); */

/* const deleteIcons = document.querySelectorAll("delete-btn"); */

function addField(exp) {
  let parentTR = exp.parentElement.parentElement;
  let fieldsContent = parentTR.querySelectorAll(".texfield");
  let contentArray = [];
  fieldsContent.forEach((item) => {
    contentArray.push(item.textContent);
  });
  render.addTask(contentArray);
}

document.addEventListener("click", function (event) {
  let target = event.target;
  if (!target.classList.contains("add-btn")) return;
  addField(target);
});

function deleteTaskUI(exp) {
  let parentTR = exp.parentElement.parentElement;
  parentTR.remove();
  let fieldName = parentTR.querySelector(".firstname").textContent;
  console.log(fieldName);
  render.deleteTask(fieldName);
}

document.addEventListener("click", function (event) {
  let target = event.target;
  if (!target.classList.contains("delete-btn")) return;
  deleteTaskUI(target);
});
