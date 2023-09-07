// Exercise 3
//
// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: "brownies",
  fred: "tiramisu",
  lisa: "chocolate cake",
  riley: "ice-cream",
  sunny: "cheese cake",
  john: "ice-cream",
  beth: "cheese cake",
  summer: "ice-cream",
  mike: "apple pie",
  rick: "brownies",
  andrew: "cheese cake",
  jerry: "rhubarb pie",
  "jean-luc": "cheese cake",
  tiffany: "waffles",
  melissa: "profiteroles",
};

const favoriteDessertsGroupB = {
  alice: "pie",
  betty: "deep-fried mars bar",
  colin: "gummy bears",
  damien: "child tears",
  alicia: "panda express",
  gertrude: "gummy bears",
  belinda: "pie",
  russ: "not applicable",
  ursula: "rum cake",
  lisa: "revenge (served cold)",
  diana: "pie",
  lyndon: "easter eggs",
  lynda: "dessert",
};

// Write a function that accepts an object (like above) and returns a new object with the data sorted
// and classified like so:

// {
//   'name of dessert': ['name1', 'name2']
// }

// Expected output for groupByValue(favoriteDessertsGroupB) is
// {
//   'pie': [ 'alice', 'belinda', 'diana' ],
//   'deep-fried mars bar': [ 'betty' ],
//   'gummy bears': [ 'colin', 'gertrude' ],
//   'child tears': [ 'damien' ],
//   'panda express': [ 'alicia' ],
//   'not applicable': [ 'russ' ],
//   'rum cake': [ 'ursula' ],
//   'revenge (served cold)': [ 'lisa' ],
//   'easter eggs': [ 'lyndon' ],
//   'dessert': [ 'lynda' ]
// }

const groupByValue = (obj) => {
  // do something
}

// Verification via console.log()
console.log("Group A", groupByValue(favoriteDessertsGroupA));
console.log("Group B", groupByValue(favoriteDessertsGroupB));

// Test your code: "yarn test exercise-3"

module.exports = groupByValue;
