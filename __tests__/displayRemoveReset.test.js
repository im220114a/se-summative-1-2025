// __tests__/displayRemoveReset.test.js

/**
 * Display, Remove, & Reset (TDD)
 * We expect to:
 * 1. Insert new attendees into a structure (e.g., array or DOM table).
 * 2. Remove specific attendees upon request.
 * 3. Clear the entire list with a confirmation.
 */

const { addAttendee, removeAttendee, clearAttendees } = require('../functions');

describe("Display, Remove, & Reset Attendees", () => {
    let attendees;
  
    beforeEach(() => {
      // Reset our "attendees" for each test
      attendees = [];
    });
  
    test("should display newly added names (simulate adding 2 names)", () => {
      // Simulate adding names to the structure
      addAttendee(attendees, "Alice");
      addAttendee(attendees, "Bob");
  
      // Expect the "attendees" to have these two names
      expect(attendees).toEqual(["Alice", "Bob"]); 

    });
  
    test("should remove an attendee when asked", () => {
      // Suppose we have 3 initial names
      attendees = ["Alice", "Bob", "Charlie"];
  
      removeAttendee(attendees, "Bob");
  
      // 'Bob' should no longer be in the list
      expect(attendees).toEqual(["Alice", "Charlie"]);
    });
  
    test("should clear the entire list with a confirmation", () => {
      attendees = ["Alice", "Bob", "Charlie"];
      clearAttendees(attendees, /* confirm = true */);
  
      // Expect the array to be empty
      expect(attendees).toEqual([]);
    });
  });
  