import { addLink } from "./lib/link.js";

const fruits = [
  {
    name: "apple",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "banana",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "pear",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "pineapple",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "cherry",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "strawberry",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "watermelon",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "grape",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "blueberry",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "lemon",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "raspberry",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  },

  {
    name: "orange",
    description: "An apple is a sweet, edible fruit produced by Apple trees ar."
  }
];

const fruitList = document.querySelector(".content");

fruits.forEach(fruit => {
  const fruitName = fruit.name;
  let button = document.createElement("button");
  button.className = fruitName;
  const linkPath = fruitName + ".html";
  const linkedButton = addLink(button, linkPath);
  fruitList.appendChild(linkedButton);
});
