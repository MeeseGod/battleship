const newShip = require("../src/createShips");

test("Pass parameters and return object appropriately", () => {
    expect(newShip("Battleship", 3, 3).length).toBe(3);
})

test("Return true if HP is 0", () => {
    expect(newShip("Battleship", 3, 3).isSunk(0)).toBe(true);
})

test("Returns hit if hit", () => {
    expect(newShip("Battleship", 3, 3).hit(0)).toBe("Hit");
    expect(newShip("Battleship", 3, 3).hit(5)).toBe(false);
})