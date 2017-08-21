var phones; // global variable used by both functions: createPhonese & displayPhones;
   
function Phone(brand, model, price, color, screenSize, resolH, resolV) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.screenSize = screenSize;
    this.resolH = resolH;
    this.resolV = resolV;
}

// ---------------------------------------------------------------------------------------------------

Phone.prototype.printInfo = function() {
    return `Brand: ${this.brand};\nColour: ${this.color};\n Screen size: ${this.screenSize}";\nResolution: ${this.resolH}x${this.resolV} pixels;\n Price: ${this.price} PLN.`;

}

Phone.prototype.ring = function() {
    console.log(`${this.model} is ringing`);
}

Phone.prototype.sendText = function() {

}

Phone.prototype.takePhoto = function() {

}

// ---------------------------------------------------------------------------------------------------

function createPhones() {

var samsungGalaxyS6 = new Phone("Samsung Electronics", "Samsung Galaxy S6", 2250, "black", 5.5, 1440, 2560),
    iPhone6S = new Phone("Apple", "iPhone 6S", 1750, "silver", 4.7, 750, 1334),
    onePlusOne = new Phone("OnePlus", "OnePlus One", 1950, "white", 5.5, 1080, 1920);

    phones = [samsungGalaxyS6, iPhone6S, onePlusOne];

// ---------------------------------------------------------------------------------------------------
}

function displayPhones() {
var i = 0,
    phonesLength = phones.length;

while (i < phonesLength) {
    document.getElementById(`model-${i+1}`).innerText = phones[i].model;
    document.getElementById(`info-${i+1}`).innerText = phones[i].printInfo();
    i++;
}
}

// ---------------------------------------------------------------------------------------------------


createPhones();
displayPhones();



