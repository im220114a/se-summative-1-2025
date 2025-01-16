// Store our attendees here
let attendees = [];

// Select DOM elements
const attendeeForm = document.getElementById('attendeeForm');
const nameInput = document.getElementById('nameInput');
const errorMessage = document.getElementById('errorMessage');
const attendeeList = document.getElementById('attendeeList');
const clearAllBtn = document.getElementById('clearAll');

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
