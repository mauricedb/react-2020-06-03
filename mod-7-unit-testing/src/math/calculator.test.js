import Calculator from "./Calculator";

function wait() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

describe("the calculator", function () {
  let calc;

  beforeAll(function () {
    calc = new Calculator();
  });
  //   beforeEach(function () {
  //     calc = new Calculator();
  //   });

  describe("can add", function () {
    test("2 + 5 === 7", function () {
      const result = calc.add(2, 5);

      expect(result).toBe(7);
    });

    test("async", function () {
      return wait();
    });

    test("async", async function () {
      await wait();
    });

    test("1 + 1 === 2", function () {
      const result = calc.add(1, 1);

      expect(result).toBe(2);
    });

    test("0.1 + 0.2 === 0.3", function () {
      const result = calc.add(0.1, 0.2);

      expect(result).toBeCloseTo(0.3);
    });
  });

  describe("can subtract", function () {
    test("2 - 5 === -3", function () {
      const result = calc.subtract(2, 5);

      expect(result).toBe(-3);
    });

    test("1 - 1 === 0", function () {
      const result = calc.subtract(1, 1);

      expect(result).toBe(0);
    });

    test("1 - 1 === 0", function () {
      const result = calc.subtract(1, 1);

      expect([{ x: 1, name: "John" }]).toMatchSnapshot();
    });
  });
});
