let $ = document;
let formInput = $.querySelector(".form-control");
let btnSave = $.getElementById("btn-save");
let btnDelete = $.getElementById("btn-delete");
let notedList = $.getElementById("listed");
let colorContainer = $.getElementById("color-select");

colorContainer.addEventListener("click", (e) => {
  formInput.style.backgroundColor = e.target.style.backgroundColor;
  formInput.focus();
});

function btnDeleteNote() {
  formInput.value = "";
  formInput.style.backgroundColor = "#fff";
}

function btnSaveNote() {
  if (formInput.value.trim()) {
    let cardBg = formInput.style.backgroundColor;
    notedList.insertAdjacentHTML(
      "beforeend",
      `<div class="card shadow-sm rounded" style="background-color:${cardBg};">
        <p class="card-text p-3">${formInput.value}</p></div>`
    );
    btnDeleteNote();
  }
}

notedList.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    e.target.parentElement.remove();
  }
});

function addNoteKey(e) {
  if (e.keyCode === 13) {
    if (formInput.value) {
      btnSaveNote();
    }
  }
}

btnDelete.addEventListener("click", btnDeleteNote);
btnSave.addEventListener("click", btnSaveNote);
formInput.addEventListener("keydown", addNoteKey);