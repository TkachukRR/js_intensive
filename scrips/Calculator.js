export class Calculator {
  x = null;
  y = null;

  constructor(x, y, ...excessive) {
    this.checkNum(x);
    this.checkNum(y);
    if (excessive.length) {
      throw new Error("Допустимо только два чисовых значения");
    }
    this.x = x;
    this.y = y;
  }
  setX(num) {
    this.checkNum(num);
    this.x = num;
  }

  setY(num) {
    this.checkNum(num);
    this.y = num;
  }

  logSum() {
    console.log(this.x + this.y);
    return this.x + this.y;
  }

  logMul() {
    console.log(this.x * this.y);
    return this.x * this.y;
  }

  logSub() {
    console.log(this.x - this.y);
    return this.x - this.y;
  }

  logDiv() {
    if (!this.y) {
      throw new Error("Деление на ноль!!!");
    }
    console.log(this.x / this.y);
    return this.x / this.y;
  }

  getX() {
    console.log(this.x);
    return this.x;
  }
  getY() {
    console.log(this.y);
    return this.y;
  }

  checkNum(num) {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("Ожидаеться число");
    }
  }
}
