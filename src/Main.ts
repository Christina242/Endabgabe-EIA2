namespace DoenerTrainer {

    window.addEventListener("load", handleLoad);

    let startButton: HTMLButtonElement;
    export let crc2: CanvasRenderingContext2D;
    export let kebabhouse: KebabHouse;
    export let ingredients: Ingredients;
    export let animation: boolean = false;
    export let faces: Human;
    export let lahmacun: Lahmacun;
    export let doener: Doener;
    export let yufka: Yufka;
    let allCustomer: number = 0;

    let worker: number = 2;
    let customer: number = 3;
    let raw: number = 10;
    let container: number = 15;
    let unoccupied: number = 20;

    let moveables: Moveable[] = [];

    let imgData: ImageData;

    let usedIngredients: IngredientsList[] = [];

    let activeWorker: Worker;

    function handleLoad(): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("#canvas");

        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");



        startButton = <HTMLButtonElement>document.querySelector("#start");
        startButton.addEventListener("click", startGame);
        canvas.addEventListener("mouseup", handleMouse);

    }

    function startGame(): void {

        console.log("start");


        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");


        kebabhouse = new KebabHouse();
        kebabhouse.draw();
        imgData = crc2.getImageData(0, 0, 800, 600);
        ingredients = new Ingredients();
        ingredients.draw();
        lahmacun = new Lahmacun();
        lahmacun.draw();
        doener = new Doener();
        doener.draw();
        yufka = new Yufka();
        yufka.draw();


        let canvasWrap: HTMLDivElement = <HTMLDivElement>document.querySelector("#canvas-wrap");
        canvasWrap.classList.remove("is-hidden");



        getSettings();
        createWorker();

        ingredients.maxIngredients = container;
        ingredients.maxRawIngredients = raw;

        body.removeChild(form);

        animation = true;
        window.setInterval(createCustomer, 60000 / customer);
        window.setInterval(update, 20);

    }
    function getSettings(): void {
        let formData: FormData = new FormData(document.forms[0]);

        worker = Number(formData.get("Worker"));
        customer = Number(formData.get("Customer"));
        raw = Number(formData.get("Raw"));
        container = Number(formData.get("Container"));
        unoccupied = Number(formData.get("Unoccupied"));
    }

    function createWorker(): void {
        for (let nWorker: number = 0; nWorker < worker; nWorker++) {
            let newWorker: Worker = new Worker(new Vector(nWorker * 200, 250), new Vector(0, 0));
            newWorker.draw();
            moveables.push(newWorker);
        }

    }
    function createCustomer(): void {
        let newCustomer: Customer = new Customer(new Vector(allCustomer * 200, 0), new Vector(0, 0));
        moveables.push(newCustomer);
        newCustomer.draw();
        allCustomer++;
    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.draw();

            if (moveable instanceof Worker) {
                moveable.mood = moveable.mood - 50 / unoccupied / 50;
                moveable.move(0.15);
            }
            if (moveable instanceof Customer) {
                moveable.generateOrder();

            }
        }

        ingredients.draw();
        lahmacun.draw();
        doener.draw();
        yufka.draw();
    }

    function giveFood(_customer: Customer): void {
        let allIngredients: IngredientsList[] = usedIngredients;
        
        for (let j = 0; j < _customer.order.ingredients.length; j++) {
            let index: number = -1;
            for (let i = 0; i < allIngredients.length; i++) {

                if (allIngredients[i] == _customer.order.ingredients[j]) {
                    index = i;
                }
            }

            // allIngredients.indexOf(_customer.order.ingredients[j]);
            // console.log(_customer.order.ingredients[j]);
           
            if (index >= 0) { 
                allIngredients.splice(index, 1);
               
            }
           
        }
       
        /*  for (let i = 0; i < allIngredients.length; i++) {
             for (let j = 0; j < _customer.order.ingredients.length; j++) {
                 if (allIngredients[i] == _customer.order.ingredients[j]) {
 
                 }
 
             }
 
         } */

    }


    function handleMouse(_event: MouseEvent): void {


        let position: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);

        for (let moveable of moveables) {
            if (moveable instanceof Worker) {

                if (moveable.position.x < position.x && moveable.position.x + 80 > position.x && moveable.position.y < position.y && moveable.position.y + 80 > position.y) {
                    activeWorker = moveable;
                }
            }
        }

        for (let moveable of moveables) {
            if (moveable instanceof Customer) {

                giveFood(moveable);
            }
        }

        if (activeWorker == undefined) {
            return;
        }
        
        //Tomaten 
        //Worker position 
        if (position.x > 50 && position.y > 130 && position.x < 50 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new Vector(position.x - 40, activeWorker.position.y);
            if (ingredients.usedTomatos < container) {
                usedIngredients.push(IngredientsList.tomato);
                ingredients.usedTomatos = ingredients.usedTomatos + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Tomaten sind leer!");
            }
        }

        if (position.x > 50 && position.y > 380 && position.x < 50 + 70 && position.y < 380 + 100) {
            setTimeout(fillTomatos, 500)
            activeWorker.mood = activeWorker.mood + 3;
        }

        //Gurken
        //Worker position
        if (position.x > 150 && position.y > 130 && position.x < 150 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new Vector(position.x - 40, activeWorker.position.y);
            if (ingredients.usedCucumbers < container) {
                usedIngredients.push(IngredientsList.cucumber);
                ingredients.usedCucumbers = ingredients.usedCucumbers + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Gurken sind leer!");
            }
        }

        if (position.x > 150 && position.y > 380 && position.x < 150 + 70 && position.y < 380 + 100) {
            setTimeout(fillCucumber, 500)
            activeWorker.mood = activeWorker.mood + 3;
        }

        //Mais
        //Worker position
        if (position.x > 250 && position.y > 130 && position.x < 250 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new Vector(position.x - 40, activeWorker.position.y);
            if (ingredients.usedCorn < container) {
                usedIngredients.push(IngredientsList.corn);
                ingredients.usedCorn = ingredients.usedCorn + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Mais ist leer!");
            }
        }

        if (position.x > 250 && position.y > 380 && position.x < 250 + 70 && position.y < 380 + 100) {
            setTimeout(fillCorn, 500)
            activeWorker.mood = activeWorker.mood + 3;
        }

        //Fleisch
        //Worker position
        if (position.x > 350 && position.y > 130 && position.x < 350 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new Vector(position.x - 40, activeWorker.position.y);
            if (ingredients.usedMeat < container) {
                usedIngredients.push(IngredientsList.meat);
                ingredients.usedMeat = ingredients.usedMeat + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Fleisch ist leer!");
            }
        }

        if (position.x > 350 && position.y > 380 && position.x < 350 + 70 && position.y < 380 + 100) {
            setTimeout(fillMeat, 500)
            activeWorker.mood = activeWorker.mood + 3;
        }

        //Zwiebeln
        //Worker position
        if (position.x > 450 && position.y > 130 && position.x < 450 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new Vector(position.x - 40, activeWorker.position.y);
            if (ingredients.usedOnions < container) {
                usedIngredients.push(IngredientsList.onion);
                ingredients.usedOnions = ingredients.usedOnions + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Zwiebeln sind leer!");
            }
        }

        if (position.x > 450 && position.y > 380 && position.x < 450 + 70 && position.y < 380 + 100) {
            setTimeout(fillOnion, 500)
            activeWorker.mood = activeWorker.mood + 3;
        }

        //Rotkraut
        //Worker position
        if (position.x > 550 && position.y > 130 && position.x < 550 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new Vector(position.x - 40, activeWorker.position.y);
            if (ingredients.usedCabbage < container) {
                usedIngredients.push(IngredientsList.cabbage);
                ingredients.usedCabbage = ingredients.usedCabbage + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Rotkraut ist leer!");
            }
        }

        if (position.x > 550 && position.y > 380 && position.x < 550 + 70 && position.y < 380 + 100) {
            setTimeout(fillCabbage, 500)
            activeWorker.mood = activeWorker.mood + 3;
        }

        
    }

    function fillTomatos(): void {

        while (ingredients.maxIngredients - ingredients.usedTomatos <= ingredients.maxIngredients && ingredients.maxRawIngredients - ingredients.usedRawTomatos > 0) {
            ingredients.usedRawTomatos = ingredients.usedRawTomatos + 1;
            ingredients.usedTomatos = ingredients.usedTomatos - 1;
        }

        if (ingredients.maxRawIngredients - ingredients.usedRawTomatos <= 0) {
            window.alert("Tomaten müssen nachbestellt werden!");
        }
    }

    function fillCucumber(): void {

        while (ingredients.maxIngredients - ingredients.usedCucumbers <= ingredients.maxIngredients && ingredients.maxRawIngredients - ingredients.usedRawCucumbers > 0) {
            ingredients.usedRawCucumbers = ingredients.usedRawCucumbers + 1;
            ingredients.usedCucumbers = ingredients.usedCucumbers - 1;
        }

        if (ingredients.maxRawIngredients - ingredients.usedRawCucumbers <= 0) {
            window.alert("Gurken müssen nachbestellt werden!");
        }
    }

    function fillCorn(): void {

        while (ingredients.maxIngredients - ingredients.usedCorn <= ingredients.maxIngredients && ingredients.maxRawIngredients - ingredients.usedRawCorn > 0) {
            ingredients.usedRawCorn = ingredients.usedRawCorn + 1;
            ingredients.usedCorn = ingredients.usedCorn - 1;
        }

        if (ingredients.maxRawIngredients - ingredients.usedRawCorn <= 0) {
            window.alert("Mais müssen nachbestellt werden!");
        }
    }

    function fillMeat(): void {

        while (ingredients.maxIngredients - ingredients.usedMeat <= ingredients.maxIngredients && ingredients.maxRawIngredients - ingredients.usedRawMeat > 0) {
            ingredients.usedRawMeat = ingredients.usedRawMeat + 1;
            ingredients.usedMeat = ingredients.usedMeat - 1;
        }

        if (ingredients.maxRawIngredients - ingredients.usedRawMeat <= 0) {
            window.alert("Fleisch müssen nachbestellt werden!");
        }
    }

    function fillOnion(): void {

        while (ingredients.maxIngredients - ingredients.usedOnions <= ingredients.maxIngredients && ingredients.maxRawIngredients - ingredients.usedRawOnions > 0) {
            ingredients.usedRawOnions = ingredients.usedRawOnions + 1;
            ingredients.usedOnions = ingredients.usedOnions - 1;
        }

        if (ingredients.maxRawIngredients - ingredients.usedRawOnions <= 0) {
            window.alert("Zwiebeln müssen nachbestellt werden!");
        }
    }

    function fillCabbage(): void {

        while (ingredients.maxIngredients - ingredients.usedCabbage <= ingredients.maxIngredients && ingredients.maxRawIngredients - ingredients.usedRawCabbage > 0) {
            ingredients.usedRawCabbage = ingredients.usedRawCabbage + 1;
            ingredients.usedCabbage = ingredients.usedCabbage - 1;
        }

        if (ingredients.maxRawIngredients - ingredients.usedRawCabbage <= 0) {
            window.alert("Rotkraut müssen nachbestellt werden!");
        }
    }
}