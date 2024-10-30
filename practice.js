// function addHabitToArray(habitData) {
//   let habit = new Habit(habitInput.value, habitGoal.value, []);
//   habitData.push(habit);
// }

// function saveAndDisplay(habitData) {
//   localStorage.setItem("habitData", JSON.stringify(habitData));
//   displayTable();
// }
















function cleanTableHeader(headers) {
  x = headers.split("\n");
  x.splice(0, 1);
  x.splice(-1, 1);

  for (let i = 0; i < x.length; i++) {
    x[i] = x[i].trim();
  }
}



function displayTable() {
  let tableHeaderRows = document.getElementById("tableHeaderRow").textContent;
  cleanTableHeader(tableHeaderRows);

  createRowForHabit(habitData);
}

function createRowForHabit(habitData) {
  tableBody.innerHTML = " ";

  for (n = 0; n < habitData.length; n++) {
    let habit = habitData[n];

    let datesArray = Object.values(habit.dates);

    let row = document.createElement("tr");

    searchHeader(habit, datesArray, row);

    tableBody.appendChild(row);
  }
}

function searchHeader(habit, datesArray, row) {
  for (header of x) {
    if (header === "Habit's") {
      createLabelCell(row, habit.name);
    } else if (parseInt(header) === past) {
      createInputCell(row, past, 0, datesArray);
    } else if (parseInt(header) === present) {
      createInputCell(row, present, 1, datesArray);
    } else if (parseInt(header) === future) {
      createInputCell(row, future, 2, datesArray);
    } else if (header === "Goal") {
      createLabelCell(row, habit.goal);
    }
  }
}

function createLabelCell(row, name) {
  let label = document.createElement("td"); // creates a new data cell
  label.textContent = name;
  row.appendChild(label);
}

function createInputCell(row, date, count, array) {
  let inputTd = document.createElement("td");
  let input = document.createElement("input");
  input.className = "checkBox";
  input.type = "checkbox";
  input.dataset.habitIndex = n;
  input.dataset.checkBoxIndex = count; // unique
  if (array.includes(date)) {
    input.checked = true;
  }
  inputTd.appendChild(input);
  row.appendChild(inputTd);
}

