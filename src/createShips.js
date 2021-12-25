class createShip{
    constructor(type, length, hitpoints){
        this.type = type;
        this.length = length;
        this.hitpoints = hitpoints;
        this.locations = [...Array(length).keys()]
        this.hit = function(targetLocation){
            if(this.locations[targetLocation] != undefined && this.locations[targetLocation] != "Hit"){
                this.locations[targetLocation] = "Hit";
                this.hitpoints = this.hitpoints - 1;
                this.isSunk();
                return this.locations[targetLocation];
            }
            return false;
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