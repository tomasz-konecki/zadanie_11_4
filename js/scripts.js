var btnRing = document.getElementsByClassName('btn-ring'),
    btnText = document.getElementsByClassName('btn-text'),
    btnPhoto = document.getElementsByClassName('btn-photo'),
    paragraphs = document.getElementsByTagName('p'),

    samsungGalaxyS6 = new Phone({
        brand: "Samsung Electronics",
        model: "Samsung Galaxy S6",
        price: 2250,
        color: "black",
        screenSize: 5.5,
        resolH: 1440,
        resolV: 2560
    }),

    iPhone6S = new Phone({
        brand: "Apple",
        model: "iPhone 6S",
        price: 1750,
        color: "silver",
        screenSize: 4.7,
        resolH: 750,
        resolV: 1334
    }),

    onePlusOne = new Phone({
        brand: "OnePlus",
        model: "OnePlus One",
        price: 1950,
        color: "white",
        screenSize: 5.5,
        resolH: 1080,
        resolV: 1920
    }),

    phones = [samsungGalaxyS6, iPhone6S, onePlusOne];
// ---------------------------------------------------------------------------------------------------

function Phone({brand, model, price, color, screenSize, resolH, resolV}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.screenSize = screenSize;
    this.resolH = resolH;
    this.resolV = resolV;
}

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

function displayPhones() {
    phones.forEach((phone, index) => {
        document.getElementById(`model-${index+1}`)
            .innerText = phone.model;
        document.getElementById(`info-${index+1}`)
            .innerText = phone.printInfo();
    });
}

function resetAction(n) {
    setTimeout(function() {
        paragraphs[n].innerText = 'Phone action';
    }, 1500);
}

// ---------------------------------------------------------------------------------------------------

phones.forEach((phone, index) => {
    btnRing[index].addEventListener('click', () => phone.ring(index))
})

phones.forEach((phone, index) => {
    btnText[index].addEventListener('click', () => phone.sendText(index))
})

phones.forEach((phone, index) => {
    btnPhoto[index].addEventListener('click', () => phone.takePhoto(index))
})

// ---------------------------------------------------------------------------------------------------

displayPhones();