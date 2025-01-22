const { exportRota } = require('../functions'); // Adjust as needed

describe("Export Rota", () => {
  test("returns empty string if no assignments exist", () => {
    const result = exportRota([]);
    expect(result).toBe("");
  });

  test("returns CSV with header and rows for valid assignments", () => {
    const assignments = [
      { day: "Monday", person: "Alice" },
      { day: "Tuesday", person: "Bob" }
    ];
    const csv = exportRota(assignments);

    // Split lines
    const lines = csv.trim().split('\n');
    expect(lines.length).toBe(3); // header + 2 rows
    expect(lines[0]).toBe("Day,Leader");
    expect(lines[1]).toBe("Monday,Alice");
    expect(lines[2]).toBe("Tuesday,Bob");
  });
});
