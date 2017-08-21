var phones,
    btnRing = document.getElementsByClassName('btn-ring'),
    btnText = document.getElementsByClassName('btn-text'),
    btnPhoto = document.getElementsByClassName('btn-photo'),
    paragraphs = document.getElementsByTagName('p');

// ---------------------------------------------------------------------------------------------------

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

Phone.prototype.ring = function(n) {
    paragraphs[n].innerText = `${this.model} is ringing!`;
    resetAction(n);
}

Phone.prototype.sendText = function(n) {
    paragraphs[n].innerText = `${this.model} is sending a text message!`;
    resetAction(n);
}

Phone.prototype.takePhoto = function(n) {
    paragraphs[n].innerText = `${this.model} is taking a photo!`;
    resetAction(n);
}

// ---------------------------------------------------------------------------------------------------

var samsungGalaxyS6 = new Phone("Samsung Electronics", "Samsung Galaxy S6", 2250, "black", 5.5, 1440, 2560),
    iPhone6S = new Phone("Apple", "iPhone 6S", 1750, "silver", 4.7, 750, 1334),
    onePlusOne = new Phone("OnePlus", "OnePlus One", 1950, "white", 5.5, 1080, 1920);

phones = [samsungGalaxyS6, iPhone6S, onePlusOne];

// ---------------------------------------------------------------------------------------------------

function displayPhones() {
    var i = 0,
        phonesLength = phones.length;

    while (i < phonesLength) {
        document.getElementById(`model-${i+1}`)
            .innerText = phones[i].model;
        document.getElementById(`info-${i+1}`)
            .innerText = phones[i].printInfo();
        i++;
    }
}

function resetAction(n) {
    setTimeout(function() {
        paragraphs[n].innerText = 'Phone action';
    }, 1500);
}

// ---------------------------------------------------------------------------------------------------

btnRing[0].addEventListener("click", function() {
    samsungGalaxyS6.ring(0);
});
btnRing[1].addEventListener("click", function() {
    iPhone6S.ring(1);
});
btnRing[2].addEventListener("click", function() {
    onePlusOne.ring(2);
});

// ---------------------------------------------------------------------------------------------------

btnText[0].addEventListener("click", function() {
    samsungGalaxyS6.sendText(0);
});
btnText[1].addEventListener("click", function() {
    iPhone6S.sendText(1);
});
btnText[2].addEventListener("click", function() {
    onePlusOne.sendText(2);
});

// ---------------------------------------------------------------------------------------------------

btnPhoto[0].addEventListener("click", function() {
    samsungGalaxyS6.takePhoto(0);
});
btnPhoto[1].addEventListener("click", function() {
    iPhone6S.takePhoto(1);
});
btnPhoto[2].addEventListener("click", function() {
    onePlusOne.takePhoto(2);
});

// ---------------------------------------------------------------------------------------------------

displayPhones();