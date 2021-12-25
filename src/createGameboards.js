import newShip from ("../src/createShips");

class createGameboard{
    constructor(){
        this.placeShip = function(){
            return true;
        };
        this.receiveAttack = function(){
            return true;
        };
        this.missedAttack = function(){
            return true;
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
    return new createGameboard();
}

module.exports = newGameboard;