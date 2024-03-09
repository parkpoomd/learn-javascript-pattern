const observers = [];

export default Object.freeze({
  notify: (data) => observers.forEach((observer) => observer(data)),
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
});

/*
We can use this observable throughout the entire application, making it possible to subscribe functions to the observable

import Observable from "./observable";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

Observable.subscribe(logger);

and notify all subscribers based on certain events.

import Observable from "./observable";

document.getElementById("my-button").addEventListener("click", () => {
  Observable.notify("Clicked!"); // Notifies all subscribed observers
});
*/
