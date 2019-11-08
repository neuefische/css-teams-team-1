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
  const button = document.createElement("button");
  button.className = fruit;
  fruitList.appendChild(button);
});
