"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    DoenerTrainer.allOrders = [
        {
            name: "Döner mit allem", ingredients: [DoenerTrainer.IngredientsList.doener, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Yufka mit allem", ingredients: [DoenerTrainer.IngredientsList.yufka, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Lahmacun mit allem", ingredients: [DoenerTrainer.IngredientsList.lahmacun, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Döner vegetarisch", ingredients: [DoenerTrainer.IngredientsList.doener, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Yufka vegetarisch", ingredients: [DoenerTrainer.IngredientsList.yufka, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Lahmacun ohne Zwiebel", ingredients: [DoenerTrainer.IngredientsList.lahmacun, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Döner ohne Zwiebel", ingredients: [DoenerTrainer.IngredientsList.doener, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Yufka ohne Zwiebel", ingredients: [DoenerTrainer.IngredientsList.yufka, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Lahmacun mit extra Zwiebel", ingredients: [DoenerTrainer.IngredientsList.lahmacun, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Döner mit extra Zwiebel", ingredients: [DoenerTrainer.IngredientsList.doener, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Yufka mit extra Zwiebel", ingredients: [DoenerTrainer.IngredientsList.yufka, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.onion, DoenerTrainer.IngredientsList.cabbage]
        },
        {
            name: "Döner ohne Kraut", ingredients: [DoenerTrainer.IngredientsList.doener, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.onion]
        },
        {
            name: "Yufka ohne Kraut", ingredients: [DoenerTrainer.IngredientsList.yufka, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.onion]
        },
        {
            name: "Lahmacun ohne Kraut", ingredients: [DoenerTrainer.IngredientsList.lahmacun, DoenerTrainer.IngredientsList.tomato, DoenerTrainer.IngredientsList.corn, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.meat, DoenerTrainer.IngredientsList.onion]
        }
    ];
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Order.js.map