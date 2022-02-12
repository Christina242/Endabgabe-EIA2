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
        if (position.x > 50 && position.y > 130 && position.x < 50 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new Vector(position.x - 40, activeWorker.position.y);
            if (ingredients.usedTomatos < container) {
                usedIngredients.push(IngredientsList.tomato);
                ingredients.usedTomatos = ingredients.usedTomatos + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("tomaten sind alle");
            }
        }



        if (position.x > 50 && position.y > 380 && position.x < 50 + 70 && position.y < 380 + 100) {
            setTimeout(fillTomatos, 500)
            activeWorker.mood = activeWorker.mood + 3;
        }



    }

    function fillTomatos(): void {

        while (ingredients.maxIngredients - ingredients.usedTomatos <= ingredients.maxIngredients && ingredients.maxRawIngredients - ingredients.usedRawTomatos > 0) {
            ingredients.usedRawTomatos = ingredients.usedRawTomatos + 1;
            ingredients.usedTomatos = ingredients.usedTomatos - 1;
        }

        if (ingredients.maxRawIngredients - ingredients.usedRawTomatos <= 0) {
            window.alert("tomaten müssen nachbestellt werden");
        }



    }


}