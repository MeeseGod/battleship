const newGameboard = require("../src/createGameboards");

test("Return true if positions are occupied when hit, false otherwise", () => {
    expect(newGameboard().receiveAttack(3, 1)).toBe(false);
    expect(newGameboard().receiveAttack("Occupied", "Occupied")).toBe(true);
})
