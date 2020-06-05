class Calculator {
  // private name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  constructor(private readonly name: string) {}

  // add(x: number, y: number): number;
  // add(x: string, y: string): number;
  // add(x: any, y: any): number {
  add(x: number | string, y: number | string): number {
    // this.name = "aaa";
    return +x + +y;
  }

  subtract(x: number, y: any): number {
    return x - y;
  }

  divide(x: number, y: number): number {
    return x / y;
  }
}

const x = document.getElementById("x") as HTMLInputElement;
const y = document.getElementById("y") as HTMLInputElement;
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");

interface TheCalc {
  add(x: number, y: number): number;
  subtract(x: number, y: number): number;
}

const calculator = new Calculator("Calculator");

const c: TheCalc = {
  add: (x: number, y: number) => x + y,
  subtract: (x: number, y: number) => x + y,
  // divide: (x: number, y: number) => x / y,
};

if (add) {
  add.addEventListener("click", () => {
    if (result) {
      result.textContent = calculator.add(x.value, y.value).toString();
    } else {
    }
  });
}

if (subtract && result) {
  subtract.addEventListener("click", () => {
    result.textContent = calculator.subtract(+x.value, +y.value).toString();
  });
}

// enum Value {
//   One = "One",
//   Two = "Two",
// }

type Value = "One" | "Two";

function shouldNeverHappen(value: never) {
  throw new Error("Unexpected value: " + value);
}

function doStuff(value: Value) {
  switch (value) {
    case "One":
      return;
    case "Two":
      return;
    default:
      shouldNeverHappen(value);
  }
}

doStuff("One");
// doStuff("7777");

// const name = "Jack";

type Currency = "EUR" | "GBP" | "USD";

type Something = {
  x: number;
};

interface SomethingElse {
  x: number;
}

// class C implements SomethingElse {}
