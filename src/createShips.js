class createShip{
    constructor(type, length, hitpoints, isSunk){
        this.type = type;
        this.length = length;
        this.hitpoints = hitpoints;
        this.isSunk = isSunk;
    }
};

function newShip(){
    let testShip = new createShip("Battleship", 3, 3, false);
    return testShip;
}

export default newShip;