const sortByPopularity = require("../exercise-2");

test("Exercise 2", () => {
    expect(
        sortByPopularity({
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
    ).toStrictEqual([
        "cheese cake",
        "ice-cream",
        "brownies",
        "tiramisu",
        "chocolate cake",
        "apple pie",
        "rhubarb pie",
        "waffles",
        "profiteroles",
    ]);

    expect(
        sortByPopularity({
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
    ).toStrictEqual([
        "pie",
        "gummy bears",
        "deep-fried mars bar",
        "child tears",
        "panda express",
        "not applicable",
        "rum cake",
        "revenge (served cold)",
        "easter eggs",
        "dessert",
    ]);

    expect(
        sortByPopularity({
            a: "blue",
            b: "red",
            c: "green",
            d: "blue",
            e: "blue",
            f: "red",
        })
    ).toStrictEqual(["blue", "red", "green"]);
    
    expect(
        sortByPopularity({
            a: "monday",
            b: "monday",
            c: "tuesday",
            d: "wednesday",
            e: "saturday",
            f: "monday",
        })
    ).toStrictEqual(["monday", "tuesday", "wednesday", "saturday"]);
});
