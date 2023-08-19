const verpflegung = [{ // ich arbeite mit dem begriff savedMoney aus loadcoins und reichtum[0].wert!
    name: 'Rationen',
    image: 'https://dl.dropbox.com/scl/fi/iw2x80tlnkuthz6cudvt8/Coin.png?rlkey=68rhbacrjtvxcawupqo3cypx1&dl=0',
    wert: "",
    anzahl: ""

}];
    

function setViewportHeight() {

  let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.01;
  

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewportHeight();

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
    const savedRationString = localStorage.getItem("Verpflegung"); 
    const savedRation = JSON.parse(savedRationString);
    document.getElementById("rations").innerHTML = savedRation;
    verpflegung[0].anzahl = savedRation;

}
const reichtum = [{
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

    const buttons = document.querySelectorAll('button[value="lol"]');

    function itemTooltip(event) {
        const itemNameTooltip = event.target.id
        const itemName2Tooltip = event.target.name
        let tooltipText;
        const selectedItem = allItems.find(item => item.name === itemNameTooltip);
        const selectedItem2 = allItems.find(item => item.name === itemName2Tooltip);
        if (selectedItem) {
            tooltipText = selectedItem.tooltip; // Angenommen, du hast das Tooltip-Attribut im Objekt
            document.getElementById("tooltipBox").innerHTML = tooltipText;
        } else if (selectedItem2) {
            tooltipText2 = selectedItem2.tooltip;
            document.getElementById("tooltipBox").innerHTML = tooltipText2;
        } else document.getElementById("tooltipBox").innerHTML = 'gibbet nich!';
    }


    buttons.forEach(button => {
        button.addEventListener("mouseover", itemTooltip);
    });

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
