class ClickerLogistic {
  clickAmount = 0;
  clickBaseValue = 1;
  clickModifier = 0;
  constructor() {}
  static clickGenerator() {
    this.clickAmount = this.clickBaseValue * this.clickModifier;
  }
  addClickBaseValue(Add) {
    this.clickBaseValue = this.clickBaseValue + Add;
  }
  addClickModifier(Add) {
    this.clickBaseValue = this.clickModifier + Add;
  }
  getClickAmount() {
    return clickAmount;
  }
}

export default ClickerLogistic;
