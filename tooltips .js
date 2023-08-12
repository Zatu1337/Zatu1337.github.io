const allItems = [{
        name: 'Mehlsack',
        image: 'https://dl.dropbox.com/scl/fi/60c0xfn7lj5qelaam34oq/mehl.png?rlkey=3rxsy8mbe8e4mysfyfl1dddo6&dl=0',
        wert: 1
    }, {
        name: 'Salat',
        image: 'https://dl.dropbox.com/scl/fi/jhr315pdcwgu30iwt10se/salat.jpg?rlkey=cvg90osrdai7865blu572tvx4&dl=0',
        wert: 1
    }, {
        name: 'Fleisch',
        image: 'https://dl.dropbox.com/scl/fi/cyp45cv4bqfsglgv618sp/Lamb_chops.jpg?rlkey=y76hoa03jz3twiykc0rr21127&dl=0',
        wert: 10
    }, {
        name: 'Brot',
        image: 'https://shorturl.at/aPR35',
        wert: 1
    }, {
        name: 'Salz',
        image: 'https://shorturl.at/eyAC9',
        wert: 1
    }, {
        name: 'Wasserschlauch',
        image: 'https://shorturl.at/ajvO1',
        wert: 1
    }, {
        name: 'Gastrolith',
        image: 'https://dl.dropbox.com/scl/fi/23djomyvve2txazimhegd/gastrlith.jpg?rlkey=ejht72m67b9pobt67qbu5h2dy&dl=0',
        wert: 1

    }, {
        name: 'Münze',
        image: 'https://dl.dropbox.com/scl/fi/nwbc2gv1jyoxa6oqwjm91/silber-drachenm-nze.png?rlkey=q7f1a01l56kpcdwcves9ztipc&dl=0',
        wert: 3

    }, {
        name: 'Nugget',
        image: 'https://shorturl.at/aexF4',
        wert: 5
    }, {
        name: 'Diamant',
        image: 'https://shorturl.at/uzKPZ',
        wert: 10
    }, {
        name: 'Goldenes Schmuckstück',
        image: "",
        wert: 0
    }, {
        name: 'heiltrank1', // aus datei kopiren
        image: 'https://feywildgame.com/wp-content/uploads/2020/10/feywild-healing-potion-500x500.jpg',
        wert: 15
    }, {
        name: 'alte karte',
        image: 'https://dl.dropbox.com/s/wzsvhq82gxiqg30/New%20map1.jpg?dl=0',
        wert: 15
    }, {
        name: 'stärkungstonikum1',
        image: 'https://previews.123rf.com/images/tanshy/tanshy1702/tanshy170200229/73014729-elixier-von-fantasy-spiele-für-eine-flasche.jpg',
        wert: 30
    }, {
        name: 'Rostiges Messer',
        image: 'https://dl.dropbox.com/scl/fi/dcwjgyk1mkst5n95a6rhq/rostiges-K-chenmesser.jpg?rlkey=ylgzl0yo0ny0d0ijrfayt75us&dl=0',
        wert: 1
    }, {
        name: 'Gambeson',
        image: 'https://shorturl.at/guyY7',
        wert: 5,
        equip: '',
        def: '',
        seltenheit: ''
    }, {
        name: 'Fass Buckler',
        image: 'https://shorturl.at/crvGY',
        wert: 3
    }, {
        name: 'Holzkeule mit Nägeln',
        image: 'https://dl.dropbox.com/scl/fi/j47ovo09jt4nahlu8d23u/wpn2-wood-spike-club.png?rlkey=xydwr5abqv2a2qbn9d1cdl2y2&dl=0',
        wert: 17
    }, {
        name: 'Holzrüstung',
        image: 'https://shorturl.at/lsN24',
        wert: 15
    }, {
        name: 'Kreuz-Schild',
        image: 'https://dl.dropbox.com/scl/fi/h12l865dxgw5eqxu6rxfi/cutted-shield.jpg?rlkey=unf6yn02ico1wiahxi1xauqwq&dl=0',
        wert: 9
    }, {
        name: 'Rostige Axt',
        image: 'https://dl.dropbox.com/scl/fi/gtejqvrb6a0ggvxmhvxk1/wpn3-rost-axt.jpg?rlkey=ef9buczfcou0pvmsfssfjswjr&dl=0',
        wert: 45
    }, {
        name: 'Lässige Lederrüstung',
        image: 'https://dl.dropbox.com/scl/fi/fgzjtwntlffnyvocxy17g/nice-leather-armor.jpg?rlkey=edv1raxg81l8cz1q3bg1pyfww&dl=0',
        wert: 37
    }, {
        name: 'Antiker Schild',
        image: 'https://dl.dropbox.com/scl/fi/8wq1ras96iyg8hrlkatil/greek-sparta-shieldrk.jpg?rlkey=6v571whu9q7qtasz02qv5scv1&dl=0',
        wert: 25
    }, {
        name: 'Rostiger Dolch',
        image: 'https://dl.dropbox.com/s/r6r39tdyzmknxqq/rostdolch.jpg?dl=0',
        wert: 10

    }





];

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

for (const itemName of allItems) {
    const element = document.getElementById(itemName);

    if (element) {
        element.addEventListener("mouseover", tooltip);
    }
}
