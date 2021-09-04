class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.minNumber = min;
      this.maxNumber = max;
    }

    guess() {
      return Math.ceil((this.maxNumber + this.minNumber) / 2);
    }

    lower() {
      this.maxNumber = this.guess();
    }

    greater() {
      this.minNumber = this.guess();
    }
}

module.exports = GuessingGame;
