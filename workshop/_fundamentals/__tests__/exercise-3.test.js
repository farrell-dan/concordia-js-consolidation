const groupByValue = require("../exercise-3");

test("Exercise 3", () => {
  expect(
    groupByValue({
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
    })
  ).toStrictEqual({
    brownies: ["scott", "rick"],
    tiramisu: ["fred"],
    "chocolate cake": ["lisa"],
    "ice-cream": ["riley", "john", "summer"],
    "cheese cake": ["sunny", "beth", "andrew", "jean-luc"],
    "apple pie": ["mike"],
    "rhubarb pie": ["jerry"],
    waffles: ["tiffany"],
    profiteroles: ["melissa"],
  });
  expect(
    groupByValue({
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
    })
  ).toStrictEqual({
    pie: ["alice", "belinda", "diana"],
    "deep-fried mars bar": ["betty"],
    "gummy bears": ["colin", "gertrude"],
    "child tears": ["damien"],
    "panda express": ["alicia"],
    "not applicable": ["russ"],
    "rum cake": ["ursula"],
    "revenge (served cold)": ["lisa"],
    "easter eggs": ["lyndon"],
    dessert: ["lynda"],
  });
  expect(
    groupByValue({
      a: "blue",
      b: "red",
      c: "green",
      d: "blue",
      e: "blue",
      f: "red",
    })
  ).toStrictEqual({ blue: ["a", "d", "e"], red: ["b", "f"], green: ["c"] });
  expect(
    groupByValue({
      a: "monday",
      b: "monday",
      c: "tuesday",
      d: "wednesday",
      e: "saturday",
      f: "monday",
    })
  ).toStrictEqual({
    monday: ["a", "b", "f"],
    tuesday: ["c"],
    wednesday: ["d"],
    saturday: ["e"],
  });
});
