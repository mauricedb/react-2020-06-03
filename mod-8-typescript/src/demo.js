class Calculator {
    // private name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    constructor(name) {
        this.name = name;
    }
    // add(x: number, y: number): number;
    // add(x: string, y: string): number;
    // add(x: any, y: any): number {
    add(x, y) {
        // this.name = "aaa";
        return +x + +y;
    }
    subtract(x, y) {
        return x - y;
    }
    divide(x, y) {
        return x / y;
    }
}
const x = document.getElementById("x");
const y = document.getElementById("y");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");
const calculator = new Calculator("Calculator");
const c = {
    add: (x, y) => x + y,
    subtract: (x, y) => x + y,
};
if (add) {
    add.addEventListener("click", () => {
        if (result) {
            result.textContent = calculator.add(x.value, y.value).toString();
        }
        else {
        }
    });
}
if (subtract && result) {
    subtract.addEventListener("click", () => {
        result.textContent = calculator.subtract(+x.value, +y.value).toString();
    });
}
function shouldNeverHappen(value) {
    throw new Error("Unexpected value: " + value);
}
function doStuff(value) {
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
// class C implements SomethingElse {}
