const newShip = require("../src/createShips");

class createGameboard{
    constructor(){
        this.placeShip = function(xCoordinate, yCoordinate, type, length, direction){
            if(xCoordinate == "Open" && yCoordinate == "Open"){
                return newShip("Battleship", 3);
            }
            return false;
        };
        this.receiveAttack = function(xCoordinate, yCoordinate){
            if(xCoordinate == "Occupied" && yCoordinate == "Occupied"){
                // Get the ship object mark at that location
                // Run the hit function
            }
            return this.missedAttack(xCoordinate, yCoordinate);
        };
        this.missedAttack = function(xCoordinate, yCoordinate){
            // Mark the tile at x & y as missed
        };
        this.allShipsSunk = function(){
            return true;
        }
        this.getLivingShips = function(){
            return true;
        }
    }
}

function newGameboard(){
    let testBoard = new createGameboard();
    return testBoard;
}

module.exports = newGameboard;