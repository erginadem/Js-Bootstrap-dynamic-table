const newNameEl = document.getElementById("newName");
const newPointEl = document.getElementById("newPoint");
const btnAddEl = document.getElementById("btnAdd");
const nameEl = document.getElementById("name");
const pointEl = document.getElementById("point");
const tbodyEl = document.getElementById("tbody");
const btnEditEl = document.getElementById("edit");
const btnDeleteEl = document.getElementById("delete");
const btnOkEl = document.getElementById("ok");
const btnNotEl = document.getElementById("not");
const divOkNotEl = document.getElementById("ok-not");
const divEditDeleteEl = document.getElementById("edit-delete");

let id = 1; // must get id from somewhere automatically

// Add new row to table
btnAddEl.addEventListener("click", () => {
  let newName = newNameEl.value;
  let newPoint = Number(newPointEl.value);

  // confirmation check
  if (!newName || newPoint < 0 || newPoint > 100 || newPoint == "") {
    return alert("Please enter valid informations!");
  }
  let newTr = document.createElement("tr");

  newTr.innerHTML = `
    <tr class="table-active">
        <th scope="row">${id}</th>
        <td id="name">${newName}</td>
        <td class="text-center" id="point">${newPoint}</td>
        <td class="text-center">
            <div class="edit-delete" id="edit-delete">
                <i class="btn fa-solid fa-pencil" id="edit"></i> 
                <i class="btn fa-solid fa-trash" id="delete"></i>
            </div>
            <div class="d-none" id="ok-not">
                <i class="btn fa-solid fa-check" id="ok"></i> 
                <i class="btn fa-solid fa-x" id="not"></i>
              </div>
          </td>
      </tr>`;

  // new row first child of tbody with name and point
  tbodyEl.prepend(newTr);

  newNameEl.value = "";
  newPointEl.value = "";
});

// edit button
btnEditEl.addEventListener("click", () => {
  divOkNotEl.classList.toggle("d-none");
  divEditDeleteEl.classList.toggle("d-none");

  // edit & save --- name & point
});

// delete button
btnDeleteEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.className === "btn fa-solid fa-trash fa-lg") {
    if (
      confirm(`Are you sure to delete 
        ${e.target.closest("tr").querySelector("#name").innerText}`)
    ) {
      e.target.closest("tr").style.backgroundColor = "red";

      setInterval(() => {
        e.target.closest("tr").remove();
      }, 400);
    }
  }
});

// ok button
btnOkEl.addEventListener("click", () => {
  if (confirm(`Are you sure to save changes?`)) {
    // save changes

    divOkNotEl.classList.toggle("d-none");
    divEditDeleteEl.classList.toggle("d-none");
  }
});

// not button
btnNotEl.addEventListener("click", () => {
  divOkNotEl.classList.toggle("d-none");
  divEditDeleteEl.classList.toggle("d-none");

  // do not save changes
});

// average --> must get average of total
