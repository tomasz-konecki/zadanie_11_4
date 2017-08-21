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

var model1 = document.getElementById('model-1'),
    model2 = document.getElementById('model-2'),
    model3 = document.getElementById('model-3');

switch (this.model) {
    case "Samsung Galaxy S6":
    model1.innerText = this.model;
    return printPhoneDetails(this);
    break;

    case "iPhone 6S":
    model2.innerText = this.model;
    return printPhoneDetails(this);
    break;

    case "OnePlus One":
    model3.innerText = this.model;
    return printPhoneDetails(this);
    break;

    default:
    alert("Something's not right");
}
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
    infoText,
    phonesLength = phones.length;

while (i < phonesLength) {
    infoText = phones[i].printInfo();
    document.getElementById(`info-${i+1}`).innerText = infoText;
    i++;
}
}

// ---------------------------------------------------------------------------------------------------

function printPhoneDetails (phone) {
    return `Brand: ${phone.brand};\nColour: ${phone.color};\n Screen size: ${phone.screenSize}";\nResolution: ${phone.resolH}x${phone.resolV} pixels;\n Price: ${phone.price} PLN.`;
}

// ---------------------------------------------------------------------------------------------------

createPhones();
displayPhones();



