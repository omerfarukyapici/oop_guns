class Math {
    /* Properties */
    
    constructor(numberOne, numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    /* Getters */

    get plus() {
        return this.calPlus();
    }

    get minus() {
        return this.calMinus();
    }

    get divideBy() {
        return this.calDivideBy();
    }

    get multiply() {
        return this.calMultiply();
    }


    /* Methods */

    calPlus() {
        return this.numberOne + this.numberTwo;
    }

    calMinus() {
        return this.numberOne - this.numberTwo;
    }

    calDivideBy() {
        return this.numberOne / this.numberTwo;
    }

    calMultiply() {
        return this.numberOne * this.numberTwo;
    }
}

const mathData = new Math(13, 4)

console.log(mathData.plus, mathData.minus, mathData.divideBy, mathData.multiply);