// Store our attendees here
const attendees = [];

// Select DOM elements
const attendeeForm = document.getElementById('attendeeForm');
const nameInput = document.getElementById('nameInput');
const errorMessage = document.getElementById('errorMessage');
const attendeeList = document.getElementById('attendeeList');

// Check for when the form is submitted
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

  // If all checks pass, add to the list
  attendees.push(newName);

  // Create a list item and add it
  const li = document.createElement('li');
  li.textContent = newName;
  attendeeList.appendChild(li);

  // Reset the input field
  nameInput.value = '';
});
