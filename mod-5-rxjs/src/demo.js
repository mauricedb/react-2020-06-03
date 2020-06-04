const mapNumbers = document.getElementById("mapNumbers");
const startTimer = document.getElementById("startTimer");
const loadIntegers = document.getElementById("loadIntegers");
const result = document.getElementById("result");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jokesUrl =
  "https://the-problem-solver-sample-data.azurewebsites.net/chuck-norris";

mapNumbers.addEventListener("click", () => {
  const values = numbers.filter((n) => n % 2 === 0).map((n) => ({ n }));
  result.textContent = JSON.stringify(values);
});

startTimer.addEventListener("click", () => {
  const values = [];
  let n = 0;
  setInterval(() => {
    n += 1;
    if (n % 2 === 0) {
      values.push({ n });
      result.textContent = JSON.stringify(values);
    }
  }, 1000);
});

loadIntegers.addEventListener("click", () => {
  fetch(jokesUrl)
    .then((rsp) => rsp.json())
    .then((values) => values.map((joke) => joke.id))
    .then((values) => values.filter((n) => n % 2 === 0))
    .then((values) => values.map((n) => ({ n })))
    .then((values) => (result.textContent = JSON.stringify(values)));
});
