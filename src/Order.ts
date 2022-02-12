namespace DoenerTrainer {

    
    export interface Order {
        name: string,
        ingredients: IngredientsList[]

    }

   export let allOrders: Order[] = [
        {
            name: "Döner mit allem", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.onion, IngredientsList.cabbage]
        },
        {
            name: "Yufka mit allem", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.onion, IngredientsList.cabbage]
        },
        {
            name: "Lahmacun mit allem", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.onion, IngredientsList.cabbage]
        },
        {
            name: "Döner vegetarisch", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.onion, IngredientsList.cabbage]
        },
        {
            name: "Yufka vegetarisch", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.onion, IngredientsList.cabbage]
        },
        {
            name: "Lahmacun ohne Zwiebel", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.cabbage]
        },
        {
            name: "Döner ohne Zwiebel", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.cabbage]
        },
        {
            name: "Yufka ohne Zwiebel", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.cabbage]
        },
        {
            name: "Lahmacun mit extra Zwiebel", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.onion, IngredientsList.onion, IngredientsList.cabbage]
        },
        {
            name: "DÖner mit extra Zwiebel", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.onion, IngredientsList.onion, IngredientsList.cabbage]
        },
        {
            name: "Yufka mit extra Zwiebel", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.onion, IngredientsList.onion, IngredientsList.cabbage]
        },
        {
            name: "Döner ohne Kraut", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.onion]
        },
        {
            name: "Yufka ohne Kraut", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.onion]
        },
        {
            name: "Lahmacun ohne Kraut", ingredients: [IngredientsList.bread, IngredientsList.tomato, IngredientsList.corn, IngredientsList.cucumber, IngredientsList.meat, IngredientsList.onion]
        }
    ]
}