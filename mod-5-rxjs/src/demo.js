import { from, interval, Observable, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  flatMap,
  take,
  filter,
  map,
  scan,
  tap,
  switchMap,
} from "rxjs/operators";

const mapNumbers = document.getElementById("mapNumbers");
const startTimer = document.getElementById("startTimer");
const loadIntegers = document.getElementById("loadIntegers");
const result = document.getElementById("result");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jokesUrl =
  "https://the-problem-solver-sample-data.azurewebsites.net/chuck-norris";

// const stream = from(numbers);
// const smaller = stream.pipe(take(5));
// smaller.subscribe(
//   (data) => console.log(data),
//   (err) => console.error(err),
//   () => console.log("Completed")
// );

// const timer = interval(1000).pipe(take(5));
// timer.subscribe(
//   (data) => console.log(data),
//   (err) => console.error(err),
//   () => console.log("Completed")
// );

// const o = new Observable(function (observer) {
//   observer.next(12);
//   observer.next(42);

//   let i = 0;
//   setInterval(function () {
//     observer.next(i++);
//   }, 1000);
// });
// o.subscribe((data) => console.log(data));

// mapNumbers.addEventListener("click", () => {
// const values = numbers
//   .filter((n) => n % 2 === 0)
//   .map((n) => ({ n }));
// result.textContent = JSON.stringify(values);
fromEvent(mapNumbers, "click")
  .pipe(
    switchMap(() => from(numbers)),
    filter((n) => n % 2 === 0),
    map((n) => ({ n })),
    scan((p, c) => [...p, c], [])
  )
  .subscribe(
    (data) => {
      result.textContent = JSON.stringify(data);
    },
    (err) => console.error(err),
    () => console.log("Completed")
  );
// });

// startTimer.addEventListener("click", () => {
// const values = [];
// let n = 0;
// setInterval(() => {
//   n += 1;
//   if (n % 2 === 0) {
//     values.push({ n });
//     result.textContent = JSON.stringify(values);
//   }
// }, 1000);

fromEvent(startTimer, "click")
  .pipe(
    switchMap(() => interval(1000)),
    filter((n) => n % 2 === 0),
    map((n) => ({ n })),
    scan((p, c) => [...p, c], [])
  )
  .subscribe(
    (data) => {
      result.textContent = JSON.stringify(data);
    },
    (err) => console.error(err),
    () => console.log("Completed")
  );
// });

// loadIntegers.addEventListener("click", () => {
fromEvent(loadIntegers, "click")
  .pipe(
    switchMap(() => ajax.getJSON(jokesUrl)),
    flatMap((e) => e),
    // tap((e) => console.log(e)),
    map((joke) => joke.id)
  )
  .pipe(
    filter((n) => n % 2 === 0),
    map((n) => ({ n })),
    scan((p, c) => [...p, c], [])
  )
  .subscribe(
    (data) => {
      result.textContent = JSON.stringify(data);
    },
    (err) => console.error(err),
    () => console.log("Completed")
  );

// fetch(jokesUrl)
//   .then((rsp) => rsp.json())
//   .then((values) => values.map((joke) => joke.id))
//   .then((values) => values.filter((n) => n % 2 === 0))
//   .then((values) => values.map((n) => ({ n })))
//   .then((values) => (result.textContent = JSON.stringify(values)));
// });
