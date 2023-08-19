const verpflegung = [{ // ich arbeite mit dem begriff savedMoney aus loadcoins und reichtum[0].wert!
    name: 'Rationen',
    image: 'https://dl.dropbox.com/scl/fi/iw2x80tlnkuthz6cudvt8/Coin.png?rlkey=68rhbacrjtvxcawupqo3cypx1&dl=0',
    wert: "",
    anzahl: ""

}];
    function checkYourLife() {
        if (heroValues.Lp <= 0 || heroValues.Lp === 0) {
            document.getElementById("fightButton").style.visibility = "hidden";
            document.getElementById("heroLp").innerHTML = "Du wirst (im ganzen) gefressen!";
            playFailSound();
            clearFight();
            setTimeout(backToBegin, 3000);
            console.log("Der Kampf is vorbei DU TOT");
        } else {
            console.log("Der Kampf geht weiter");
        }
    }
// JavaScript
function setViewportHeight() {
  // Get the viewport height
  let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.01;
  
  // Set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Call the function to set the initial viewport height
setViewportHeight();

// Listen for window resize events to update the viewport height
window.addEventListener('resize', setViewportHeight);


function handleTouchButton(buttonSelector) {
  const button = document.querySelector(buttonSelector);
  let isTouched = false;

  button.addEventListener('touchstart', () => {
    isTouched = true;
  });

  button.addEventListener('touchend', () => {
    if (isTouched) {
      button.click();
      isTouched = false;
    }
  });
}

function loadRation() {
    const savedRationString = localStorage.getItem("Verpflegung"); // objekt wieder holen um damit zu arbeiten
    const savedRation = JSON.parse(savedRationString);
    document.getElementById("rations").innerHTML = savedRation;
    verpflegung[0].anzahl = savedRation;

}
const reichtum = [{ // ich arbeite mit dem begriff savedMoney aus loadcoins und reichtum[0].wert!
    name: 'Goldmünzen',
    image: 'https://www.geiger-edelmetalle.de/media/d4/4e/29/1680794041/b659f881b1e5a2f78f09f912f211a5e5.png',
    wert: ""

}];

function loadCoins() {
    const savedMoneyString = localStorage.getItem("Reichtum");
    const savedMoney = JSON.parse(savedMoneyString);
    document.getElementById("wallet").innerText = savedMoney;
    reichtum[0].wert = savedMoney;

}
function showGold(){
    document.getElementById("wallet").innerText = reichtum[0].wert;


}     

   function compareInventarWithAllItems() { // match qith quest item compare ??
        const inventarDivs = document.querySelectorAll('.inventar-item');
        for (let i = 0; i < 4; i++) { //egal wenn nur 4 divs da ?
            const itemInInventar = inventar[i];
            const foundItem = itemInInventar && allItems.find(item => item.name === itemInInventar.name);
            for (let i = 0; i < inventar.length; i++) {
                if (inventar[i] === null) {
                    inventar[i] = undefined;
                }
            }
            if (foundItem) {
                console.log(`Item "${itemInInventar.name}"JA`);
                inventarDivs[i].innerHTML = `<img src="${foundItem.image}" id="${foundItem.name}" />`;
                inventarDivs[i].addEventListener("mouseover", itemTooltip); // wichtig
            } else {
                inventarDivs[i].innerHTML = `<img src="" alt="" />`;
                inventarDivs[i].addEventListener("mouseover", itemTooltip); // wichtig
                console.log(`Item "${itemInInventar}" NEEEIN :(`);
            }
        }
    }
