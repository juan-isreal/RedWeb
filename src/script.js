
const clicker = document.getElementById("clicker");
const upg1 = document.getElementById("upg1");
const upg2 = document.getElementById("upg2");
const upg3 = document.getElementById("upg3");
let clicks = 0;
let incrementer = 1;
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
clicker.addEventListener("click" () => {
    clicks += incrementer;
    clicker.innerText = "Clicks: "+clicks;
    clicker.innerText = (clicks > 1 ? "Clicks: "+clicks : "Click: 1");
    for (let i = 1; i >= upgrades.length(); i++) {
        if (clicks >= upgrades[i].price) {
            upgrades[i].hidden = false;
        } else {
            upgrades[i].hidden = true;
        }

    }
});