
// Adds an attendee to the array
function addAttendee(array, name) {
  array.push(name);
  return array;
}

// Removes an attendee from the array
function removeAttendee(array, nameToRemove) {
  const index = array.indexOf(nameToRemove);

  // If the name exists in the array...
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// Clears all attendees from the array
function clearAttendees(array) {
  array.length = 0;
  return array;
}
  
// Export these so Jest can import them
module.exports = {
  addAttendee,
  removeAttendee,
  clearAttendees
};


  