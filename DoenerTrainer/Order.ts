namespace DoenerTrainer {

    enum Ingredients {
        bread, tomato, onion, cucumber, meat, corn, cabbage
    }
    interface Order {
        name: string,
        ingredients: Ingredients[]

    }

    let allOrders: Order[] = [
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
    ]
}