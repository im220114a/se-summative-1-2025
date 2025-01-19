const { generateRota } = require('../functions');

describe("Generate Rota", () => {
  test("returns empty array if no days or no participants", () => {
    // No days
    let result = generateRota([], ["Alice"]);
    expect(result).toEqual([]);

    // No participants
    result = generateRota(["Monday"], []);
    expect(result).toEqual([]);
  });

  test("shuffles participants and assigns each day in order", () => {
    const days = ["Monday", "Tuesday", "Wednesday"];
    const participants = ["Alice", "Bob"];

    const assignments = generateRota(days, participants);

    // We should have as many assignments as days
    expect(assignments.length).toBe(3);

    // Each assignment has day & person
    assignments.forEach(({ day, person }, i) => {
      expect(days).toContain(day); // day is one of the chosen
      expect(participants).toContain(person); // person is one of the participants
    });
  });

  test("cycles participants if more days than people", () => {
    const days = ["Mon", "Tue", "Wed", "Thu"];
    const participants = ["Alice", "Bob"];
    
    const assignments = generateRota(days, participants);
    expect(assignments.length).toBe(4);

    // Each assignment has a valid participant
    assignments.forEach(({ person }) => {
      expect(participants).toContain(person);
    });
  });
});
