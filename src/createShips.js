class createShip{
    constructor(type, length, hitpoints){
        this.type = type;
        this.length = length;
        this.hitpoints = hitpoints;
        this.hit = function(location){
            if(location){
                location = "Hit";
                hitpoints = hitpoints - 1;
            } 
        };
        this.isSunk = function(hitpoints){
            if(hitpoints == 0){
                return true;
            }
            return false;
        };
    }
};

function newShip(type, length, hp){
    let testShip = new createShip(type, length, hp);
    return testShip;
}

module.exports = newShip;
export default newShip;