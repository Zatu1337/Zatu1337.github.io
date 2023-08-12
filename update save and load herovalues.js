    function loadHero() {
        const savedHeroString = localStorage.getItem("Attribute");
        const savedHero = JSON.parse(savedHeroString); // Check if savedHero is not null or undefined
        if (savedHero) {
            heroValues.Title = savedHero.Title;
            heroValues.race = savedHero.race;
            heroValues.Level = savedHero.Level;
            heroValues.Exp = savedHero.Exp;
            heroValues.Lp = savedHero.Lp;
            heroValues.Dmg = savedHero.Dmg;
            heroValues.Dodge = savedHero.Dodge;
            heroValues.Def = savedHero.Def;
            heroValues.Hit = savedHero.Hit;
        }
    }

    const heroValues = {
        Title: "Anfänger",
        race: "Tribesmen",
        Level: 1,
        Exp: 0,
        Lp: 32,
        Dmg: 7,
        Dodge: 6,
        Def: 1,
        Hit: 7,
    };

    const newValues = { // änderungen immer hier rein, wie lp, exp, buffs, werden dann zu heroValues nach update/speichern am ende der siete
        Title: "",
        race: "",
        Level: 0,
        Exp: 0,
        Lp: 0,
        Dmg: 0,
        Dodge: 0,
        Def: 0,
        Hit: 0
    };
    // neue werte hier rein wie initiative, klugheit, talente neues array?
    const heroLevel = heroValues.Level;
    const heroExp = heroValues.Exp
    const heroHp = heroValues.Lp;
    const heroDmg = heroValues.Dmg;
    const heroDef = heroValues.Def;
    const heroDodge = heroValues.Dodge;
    const heroHit = heroValues.Hit;
    const heroTitle = JSON.stringify(heroValues.Title);

    function saveHero() { // nach jeder änderung an den zugehörigen werten!
        let oldHeroString = JSON.stringify(heroValues);
        localStorage.setItem("Attribute", oldHeroString);
        showHero();
    }

    function updateHeroValues(newValues) {
        Object.assign(heroValues, newValues);
        saveHero();
    };