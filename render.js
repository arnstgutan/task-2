import * as massives from "./file.js";
import * as script from "./script.js";

const tableBody = document.querySelector(".table-body");

console.log(massives.list);

render();

let zeroObj = {};

function addTask(array) {
  zeroObj.FirstName = array[0];
  zeroObj.LastName = array[1];
  zeroObj.employeeID = array[2];
  zeroObj.Designation = array[3];
  zeroObj.LanguageExpertise = array[4];
  massives.list.push(zeroObj);
  showList();
  render();
  zeroObj = {};
}

function deleteTask(task) {
  let obj = massives.list.find((item) => item.FirstName === task);
  if (obj) {
    massives.list.splice(massives.list.indexOf(obj), 1);
  } else {
    console.log("Объект для удаления не найден");
  }
  showList();
  render();
}

function showList() {
  for (let elem of massives.list) {
    console.log(elem);
  }
}

function render() {
  let container = tableBody.querySelectorAll("*");
  container.forEach((elem) => {
    elem.remove();
  });

  massives.list.forEach((elem) => {
    append(
      elem.FirstName,
      elem.LastName,
      elem.employeeID,
      elem.Designation,
      elem.LanguageExpertise
    );
  });
  addAdd();
}

function append(
  FirstName,
  LastName,
  employeeID,
  Designation,
  LanguageExpertise
) {
  tableBody.insertAdjacentHTML(
    `beforeEnd`,
    `<tr>
        <td>
          <div class="texfield firstname" contenteditable="true">${FirstName}</div>
        </td>
        <td>
          <div class="texfield" contenteditable="true">${LastName}</div>
        </td>
        <td>
          <div class="texfield" contenteditable="true">${employeeID}</div>
        </td>
        <td>
          <div class="texfield" contenteditable="true">${Designation}</div>
        </td>
        <td>
          <div class="texfield" contenteditable="true">${LanguageExpertise}</div>
        </td>
        <td>
          <button class="custom-btn btn-1 delete-btn">delete</button>
        </td>
      </tr>`
  );
}

function addAdd() {
  tableBody.insertAdjacentHTML(
    `beforeEnd`,
    ` <tr>
        <td>
          <div class="texfield" contenteditable="true"> </div>
        </td>
        <td>
          <div class="texfield" contenteditable="true"> </div>
        </td>
        <td>
          <div class="texfield" contenteditable="true"> </div>
        </td>
        <td>
          <div class="texfield" contenteditable="true"> </div>
        </td>
        <td>
          <div class="texfield" contenteditable="true"> </div>
        </td>
        <td>
          <button class="custom-btn btn-2 add-btn">add</button>
        </td>
      </tr>`
  );
}

export { deleteTask, append, addTask, render };
