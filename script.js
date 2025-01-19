// Store our attendees here
let attendees = [];

// Select DOM elements
const attendeeForm = document.getElementById('attendeeForm');
const nameInput = document.getElementById('nameInput');
const errorMessage = document.getElementById('errorMessage');
const attendeeList = document.getElementById('attendeeList');
const clearAllBtn = document.getElementById('clearAll');
const weekdaySelection = document.getElementById('weekdaySelection');
const generateRotaBtn = document.getElementById('generateRota');
const rotaResult = document.getElementById('rotaResult');

attendeeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page refresh

  // Trim the input
  const newName = nameInput.value.trim();

  // Check for blank name
  if (!newName) {
    errorMessage.textContent = 'Name cannot be blank.';
    errorMessage.style.display = 'block';
    return;
  }

  // Check for duplicates
  const alreadyExists = attendees.some(
    (attendee) => attendee.toLowerCase() === newName.toLowerCase()
  );

  if (alreadyExists) {
    errorMessage.textContent = 'That name already exists in the list.';
    errorMessage.style.display = 'block';
    return;
  }

  errorMessage.style.display = 'none';

  addAttendee(attendees, newName);

  // Create a list item
  const li = document.createElement('li');
  li.textContent = newName;

  // Create a small remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.style.marginLeft = '10px';
  removeBtn.addEventListener('click', () => {
    // Remove from the array
    removeAttendee(attendees, newName);
    // Remove from the DOM
    attendeeList.removeChild(li);
  });

  // Append the remove button to each name
  li.appendChild(removeBtn);

  // Append li to the list
  attendeeList.appendChild(li);

  // Reset the input field
  nameInput.value = '';
});

// Clear All button event
clearAllBtn.addEventListener('click', () => {
  const userConfirmed = confirm('Are you sure you want to clear the entire list?');
  if (userConfirmed) {
    clearAttendees(attendees);

    // Remove all <li> from the DOM
    while (attendeeList.firstChild) {
      attendeeList.removeChild(attendeeList.firstChild);
    }
  }
});

generateRotaBtn.addEventListener('click', () => {
  // Collect which days are checked
  const checkboxes = weekdaySelection.querySelectorAll('input[type="checkbox"]');
  const chosenDays = [];
  checkboxes.forEach((cb) => {
    if (cb.checked) {
      chosenDays.push(cb.value);
    }
  });

  // If no days chosen, show error
  if (chosenDays.length === 0) {
    rotaResult.innerHTML = '<p style="color:red;">Please select at least one day.</p>';
    return;
  }

  // If no attendees
  if (attendees.length === 0) {
    rotaResult.innerHTML = '<p style="color:red;">No attendees found. Please add names first.</p>';
    return;
  }

  // Generate the rota
  const assignments = generateRota(chosenDays, attendees);

  // If empty array returned
  if (assignments.length === 0) {
    rotaResult.innerHTML = '<p style="color:red;">Error: Could not generate a rota due to invalid inputs.</p>';
    return;
  }

  // Build an HTML table with fade-in animation
  let table_html = `<table class="rotaTable fade-in">
    <thead>
      <tr><th>DAY</th><th>LEADER</th></tr>
    </thead>
    <tbody>`;

  for (let i = 0; i < assignments.length - 1; i++) {
    const { day, person } = assignments[i];
    table_html += `<tr>
      <td>${day}</td>
      <td>${person}</td>
    </tr>`;
  }

  table_html += `</tbody></table>`;

  rotaResult.innerHTML = table_html;
});
