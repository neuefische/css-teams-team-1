import { addLink } from "./lib/link.js";

const fruitButtons = [
  "apple",
  "banana",
  "pear",
  "pineapple",
  "cherry",
  "strawberry",
  "watermelon",
  "grape",
  "blueberry",
  "lemon",
  "raspberry",
  "orange"
];

const fruitList = document.querySelector(".content");

fruitButtons.forEach(fruit => {
  let button = document.createElement("button");
  button.className = fruit;
  const linkedButton = addLink(button);
  fruitList.appendChild(linkedButton);
});
