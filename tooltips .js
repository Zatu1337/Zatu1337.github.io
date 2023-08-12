function tooltip(event) {
    let tooltipText;

    if (event.target.id === "salt") {
        tooltipText = 'Slzkristalle in grob gemahlener Form';

    } else if (event.target.id === "brot") {
        tooltipText = 'Ein Laib Brot frisch aus dem Ofen, Hmm duftet das gut!';
    } else if (event.target.id === "wasser") {
        tooltipText = 'Klares Brunnenwasser, OHNE Stückchen!';

    } else if (event.target.id === "i4") {
        tooltipText = 'Ein Sack schweres frisch gemahlenes Mehl';

    } else if (event.target.id === "i5") {
        tooltipText = 'Ein riesiger grüner Salatkopf';
    } else if (event.target.id === "i6") {
        tooltipText = 'Ein paar Fleischhappen.';
    } else if (event.target.id === "krämerSchild ") {
        tooltipText = 'Adrians Alltägsüter';
    } else if (event.target.id === "schmiedeSchild") {
        tooltipText = 'Onkel Armin der Schmied ist leider nicht da!';
    } else if (event.target.id === "arenaSchild") {
        tooltipText = 'Du hörst das geschrei der tobenden Menge!';
    } else if (event.target.id === "lazarettSchild") {
        tooltipText = 'Wenn es mal wirklich wehtut!';
    } else if (event.target.id === "stadtorSchild") {
        tooltipText = 'Raus in die Welt?';
    } else if (event.target.id === "alte karte") { // funktion für leuchtet dann auf und wird nach gespräch dem shop hinzugefügt
        tooltipText = 'Hier scheint es sich um eine Karte der Gegend zu handeln.';
    } else if (event.target.id === "Diamant") {
        tooltipText = 'Ein richtig fetter Klunker!';
    } else if (event.target.id === "Silbermünze") {
        tooltipText = 'Eine Sonderprägung mit einem Glücksdrachen!';
    } else if (event.target.id === "Gastrolith") {
        tooltipText = 'Eine Verdaungshilfe...';
    } else if (event.target.id === "Goldnugget") {
        tooltipText = 'Gold in erdgebundener Form!';
    } else if (event.target.id === "QuestGoldschmuck") {
        tooltipText = '"Ein wunderschönes filigran gearbeitestes Schmuckstück. Dieses Werk muss ein Meister seiner Kunst geschaffen haben!';
    } else if (event.target.id === " ") {
        tooltipText = '-';

    } else {

        tooltipText = 'gibbet nich!';

        document.getElementById("tooltipBox").innerHTML = tooltipText;
    }

    // Event-Listener für alle Div-Bereiche hinzufügen ACHTUNG: ELEMENTE die erst geladen werden mit funktion addstuf dahinter ballern
    document.getElementById("brot").addEventListener("mouseover", tooltip);
    document.getElementById("salt").addEventListener("mouseover", tooltip);
    document.getElementById("i4").addEventListener("mouseover", tooltip); // irgendwann angleichen mit name...
    document.getElementById("i5").addEventListener("mouseover", tooltip);
    document.getElementById("i6").addEventListener("mouseover", tooltip);
    document.getElementById("wasser").addEventListener("mouseover", tooltip);

    document.getElementById("krämerSchild").addEventListener("mouseover", tooltip);
    document.getElementById("schmiedeSchild").addEventListener("mouseover", tooltip);
    document.getElementById("arenaSchild").addEventListener("mouseover", tooltip);
    document.getElementById("lazarettSchild").addEventListener("mouseover", tooltip);
    document.getElementById("stadtorSchild").addEventListener("mouseover", tooltip);

    document.getElementById("GoldnuggetID").addEventListener("mouseover", tooltip);
    document.getElementById("Diamant").addEventListener("mouseover", tooltip);
    document.getElementById("Goldnugget").addEventListener("mouseover", tooltip);
    document.getElementById("Gastrolith").addEventListener("mouseover", tooltip);
    document.getElementById("Silbermünze").addEventListener("mouseover", tooltip);
    document.getElementById("alteKarte").addEventListener("mouseover", tooltip);
}

function hideTooltip() {
    document.getElementById("tooltipBox").style.visibility = "hidden";
}