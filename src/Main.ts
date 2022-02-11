namespace DoenerTrainer {

    window.addEventListener("load", handleLoad);

    let startButton: HTMLButtonElement;
    export let crc2: CanvasRenderingContext2D;
    export let kebabhouse: KebabHouse;
    export let ingredients: Ingredients;
    export let animation: boolean = false;
    export let faces: Human;
    export let lahmacun: Lahmacun;
    let allCustomer: number = 0;

    let worker: number = 2;
    let customer: number = 3;
    let raw: number = 10;
    let container: number = 15;
    let unoccupied: number = 20;

    let moveables: Moveable[] = [];

    let imgData: ImageData;

    function handleLoad(): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("#canvas");

        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");



        startButton = <HTMLButtonElement>document.querySelector("#start");
        startButton.addEventListener("click", startGame);


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

        let canvasWrap: HTMLDivElement = <HTMLDivElement>document.querySelector("#canvas-wrap");
        canvasWrap.classList.remove("is-hidden");



        getSettings();
        createWorker();

        body.removeChild(form);

        animation = true;
        window.setInterval(createCustomer, 60000 / customer);
        window.setInterval(update, 1000);

    }
    function getSettings(): void {
        let formData: FormData = new FormData(document.forms[0]);

        worker = Number(formData.get("Worker"));
        customer = Number(formData.get("Customer"));
        raw = Number(formData.get("Raw"));
        container = Number(formData.get("Container"));
        unoccupied = Number(formData.get("Unoccupied"));
        console.log(worker, customer, raw, container, unoccupied);
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
        }
        ingredients.draw();
        lahmacun.draw();

    }

    function giveFood(): void {

    }
}