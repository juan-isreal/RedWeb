
const clicker = document.getElementById("clicker");
const upg1 = document.getElementById("upg1");
const upg2 = document.getElementById("upg2");
const upg3 = document.getElementById("upg3");

let upgrades = [0, {
    "upgrade": 1,
    "element": document.getElementById("upg1"),
    "price": 50,
    "incrementer": 2
}, {
    "upgrade": 2,
    "element": document.getElementById("upg2"),
    "price": 100,
    "incrementer": 5
}, {
    "upgrade": 3,
    "element": document.getElementById("upg3"),
    "price": 200,
    "incrementer": 10
}];

let clicks = 0;
let incrementer = 1;
clicker.addEventListener("click" () => {
    clicks += incrementer;
    if (clicks >= upgrades[3].price) {
        upgrades[3].element.hidden = false;
        upgrades[2].element.hidden = false;
        upgrades[1].element.hidden = false;
    } else if (clicks >= upgrades[2].price) {
        upgrades[2].element.hidden = false;
        upgrades[1].element.hidden = false;
    } else if (clicks >= upgrades[1].price) {
        upgrades[1].element.hidden = false;
    }
});