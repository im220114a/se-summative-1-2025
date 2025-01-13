// __tests__/displayRemoveReset.test.js

/**
 * Display, Remove, & Reset (TDD)
 * We expect to:
 * 1. Insert new attendees into a structure (e.g., array or DOM table).
 * 2. Remove specific attendees upon request.
 * 3. Clear the entire list with a confirmation.
 *
 * These tests will initially fail because we haven't implemented the feature yet.
 */

describe("Display, Remove, & Reset Attendees", () => {
    let attendees;
  
    beforeEach(() => {
      // Reset our "attendees" for each test
      attendees = [];
    });
  
    test("should display newly added names (simulate adding 2 names)", () => {
      // Simulate adding names to the structure
      // For now, we just assume there's a function addAttendee()
  
      addAttendee(attendees, "Alice");
      addAttendee(attendees, "Bob");
  
      // Expect the "attendees" to have these two names
      expect(attendees).toEqual(["Alice", "Bob"]); 
      // This test will fail until we implement addAttendee
    });
  
    test("should remove an attendee when asked", () => {
      // Suppose we have 3 initial names
      attendees = ["Alice", "Bob", "Charlie"];
  
      removeAttendee(attendees, "Bob");
  
      // 'Bob' should no longer be in the list
      expect(attendees).toEqual(["Alice", "Charlie"]);
      // Will fail until removeAttendee is implemented
    });
  
    test("should clear the entire list with a confirmation", () => {
      attendees = ["Alice", "Bob", "Charlie"];
  
      // Pretend we have a function that requires confirmation
      clearAttendees(attendees, /* confirm = true */);
  
      // Expect the array to be empty
      expect(attendees).toEqual([]);
      // Will fail until clearAttendees is implemented
    });
  });
  
  // We'll define these functions in the next ticket, or in a separate module later but for now, they're undefined, ensuring the tests fail.
  
  function addAttendee() {}
  function removeAttendee() {}
  function clearAttendees() {}
  