const verpflegung = [{ // ich arbeite mit dem begriff savedMoney aus loadcoins und reichtum[0].wert!
    name: 'Rationen',
    image: 'https://dl.dropbox.com/scl/fi/iw2x80tlnkuthz6cudvt8/Coin.png?rlkey=68rhbacrjtvxcawupqo3cypx1&dl=0',
    wert: "",
    anzahl: ""

}];

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