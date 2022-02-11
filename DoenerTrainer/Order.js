"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    let Ingredients;
    (function (Ingredients) {
        Ingredients[Ingredients["bread"] = 0] = "bread";
        Ingredients[Ingredients["tomato"] = 1] = "tomato";
        Ingredients[Ingredients["onion"] = 2] = "onion";
        Ingredients[Ingredients["cucumber"] = 3] = "cucumber";
        Ingredients[Ingredients["meat"] = 4] = "meat";
        Ingredients[Ingredients["corn"] = 5] = "corn";
        Ingredients[Ingredients["cabbage"] = 6] = "cabbage";
    })(Ingredients || (Ingredients = {}));
    DoenerTrainer.allOrders = [
        {
            name: "Döner mit allem", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.onion, Ingredients.cabbage]
        },
        {
            name: "Yufka mit allem", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.onion, Ingredients.cabbage]
        },
        {
            name: "Lahmacun mit allem", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.onion, Ingredients.cabbage]
        },
        {
            name: "Döner vegetarisch", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.onion, Ingredients.cabbage]
        },
        {
            name: "Yufka vegetarisch", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.onion, Ingredients.cabbage]
        },
        {
            name: "Lahmacun ohne Zwiebel", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.cabbage]
        },
        {
            name: "Döner ohne Zwiebel", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.cabbage]
        },
        {
            name: "Yufka ohne Zwiebel", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.cabbage]
        },
        {
            name: "Lahmacun mit extra Zwiebel", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.onion, Ingredients.onion, Ingredients.cabbage]
        },
        {
            name: "DÖner mit extra Zwiebel", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.onion, Ingredients.onion, Ingredients.cabbage]
        },
        {
            name: "Yufka mit extra Zwiebel", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.onion, Ingredients.onion, Ingredients.cabbage]
        },
        {
            name: "Döner ohne Kraut", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.onion]
        },
        {
            name: "Yufka ohne Kraut", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.onion]
        },
        {
            name: "Lahmacun ohne Kraut", ingredients: [Ingredients.bread, Ingredients.tomato, Ingredients.corn, Ingredients.cucumber, Ingredients.meat, Ingredients.onion]
        }
    ];
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Order.js.map