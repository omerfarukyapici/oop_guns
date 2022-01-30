class Gun {
    constructor(gunName, price, silencer, magazine, caliber, scope) {
        this.gunName = gunName;
        this.price = price;
        this.slincer = silencer;
        this.magazine = magazine;
        this.caliber = caliber;
        this.scope = scope;
    }
}

const gunsData = {
    ump: new Gun(
        "Ump",
        300 + "$",
        false,
        25,
        "45acp",
        "red dot"
    ),
    m4A1: new Gun(
        "M4A1",
        1500 + "$",
        true,
        40,
        "5.56",
        "4x"
    ),
    ak47: new Gun(
        "Ak47",
        1000 + "$",
        false,
        30,
        "7.62",
        false
    ),
    kar98: new Gun(
        "Kar98",
        1700 + "$",
        true,
        5,
        "50 cal",
        "8x"
    ),
    scarL: new Gun(
        "ScarL",
        1600 + "$",
        true,
        40,
        "5.56",
        "4x"
    )
}
console.log(gunsData.m4A1, gunsData.m4A1, gunsData.ak47, gunsData.kar98, gunsData.scarL)