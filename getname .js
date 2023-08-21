const heroValues = {
    Title: "",
    race: "",
    Level: 1,
    Exp: 0,
    maxLp: 32,
    Lp: 32,
    Dmg: 7,
    Dodge: 6,
    Def: 1,
    Hit: 9,


};

function loadHero() {
    const savedHeroString = localStorage.getItem("Attribute");
    const savedHero = JSON.parse(savedHeroString); // Check if savedHero is not null or undefined
    if (savedHero) {
        heroValues.Title = savedHero.Title;
        heroValues.race = savedHero.race;
        heroValues.Level = savedHero.Level;
        heroValues.Exp = savedHero.Exp;
        heroValues.Lp = savedHero.Lp;
        heroValues.maxLp = savedHero.maxLp;
        heroValues.Dmg = savedHero.Dmg;
        heroValues.Dodge = savedHero.Dodge;
        heroValues.Def = savedHero.Def;
        heroValues.Hit = savedHero.Hit;
        loadRace();
    }

}
loadHero();

function loadRace() { // nach hero aufrufen?

    const savedRaceString = localStorage.getItem("Race");
    const savedRace = JSON.parse(savedRaceString); // Check if savedHero is not null or undefined
    if (savedRace === "Nord") {
        heroaAvatar.style.backgroundImage = "url('https://dl.dropbox.com/s/kncxtg33cqssp82/schildmaid%203.png?dl=0')"; // Ändere die Hintergrundgrafik
        console.log("Maid");
    } else if (savedRace === "Tribesmen") {
        heroaAvatar.style.backgroundImage = "url('https://dl.dropbox.com/s/mimlbldehzz94sd/char3%203.jpg?dl=0')";
        console.log("lizard");

    } else if (savedRace === "Gothe") {
        heroaAvatar.style.backgroundImage = "url('https://dl.dropbox.com/s/ykkap0o6r00b478/char1%201.png?dl=0')";
        console.log("knight");
    }
}


function getStoredName() { // dont wrap title in name..
    const storedName = localStorage.getItem("Username");
    heroLevel = heroValues.Level;
    heroTitle = heroValues.Title;
    if (storedName) {
        document.getElementById("heroName").innerHTML = "| " + storedName + " |" + "Level: " + heroLevel;
        document.getElementById("heroTitle").innerText = "[ " + heroTitle + " ]";
    } else {
        document.getElementById("heroName").innerHTML = "| " + "Held" + " |" + "Level: " + heroLevel;
        document.getElementById("heroTitle").innerHTML = "[ " + heroTitle + " ]"; // erst nach const heroTitle..
    }
    return storedName ? storedName : null;
}
getStoredName();