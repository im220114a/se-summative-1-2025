/**
 * Adds an item to an array - used to add a name to the attendees list
 */
function addAttendee(array, name) {
  array.push(name);
  return array;
}

/**
 * Removes an item from an array - used to remove names from the attendees list
 */
function removeAttendee(array, nameToRemove) {
  const index = array.indexOf(nameToRemove);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

/**
 * Returns an empty array - used to clear the attendees array in particular
 */
function clearAttendees(array) {
  array.length = 0;
  return array;
}

/**
 * Generate a random rota:
 * - If no days or no participants, returns []
 * - Shuffles the participants once
 * - Assigns each day in order, looping over the shuffled participants if needed
 */
function generateRota(days, participants) {
  if (!days || days.length === 0 || !participants || participants.length === 0) {
    return [];
  }

  // Shuffle the list - avoid mutating the original
  const shuffled = shuffleArray([...participants]);

  // For each day, pick the next person from the shuffled array, wrapping if needed
  const assignments = days.map((day, i) => {
    const person = shuffled[i % shuffled.length];
    return { day, person };
  });

  return assignments;
}

/**
 * Return an array that has been shuffled using the Fisher-Yates algorithm.
 */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Convert an array of assignments (e.g., [{ day, person }]) to CSV string.
 * Returns an empty string if no assignments.
 */
function exportRota(assignments) {
  if (!assignments || assignments.length === 0) {
    return "";
  }
  
  let csv = "Day,Leader\n"; // CSV header
  assignments.forEach(({ day, person }) => {
    csv += `${day},${person}\n`;
  });
  return csv;
}

// Export for Jest tests
module.exports = {
  addAttendee,
  removeAttendee,
  clearAttendees,
  generateRota,
  exportRota
};
