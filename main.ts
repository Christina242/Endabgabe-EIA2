namespace DoenerTrainer {

    window.addEventListener("load", handleLoad);
    
    let startButton: HTMLButtonElement;
    export let crc2: CanvasRenderingContext2D;
    export let kebabhouse: KebabHouse;
    export let animation: boolean = false;
    export let faces: Human;
    export let lahmacun: Lahmacun;

    let worker: number= 2;
    let customer: number = 3;
    let raw: number = 10;
    let container: number = 15;
    let unoccupied: number = 20;

    let moveables: Moveable[] = [];
    

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
        body.removeChild(form);
        
       
        kebabhouse = new KebabHouse();
        kebabhouse.draw();

        //let canvasWrap: HTMLDivElement = <HTMLDivElement>document.querySelector("#canva-wrap");
        //canvasWrap.classList.remove("is-hidden");

        lahmacun = new Lahmacun();
        lahmacun.draw();
        
        getSettings();

        createPeople();

        animation = true;
        

    }

    function getSettings(): void {
        let formData: FormData = new FormData(document.forms[0]); 

        worker = Number(formData.get("Worker"));
        customer = Number(formData.get("Customer"));
        raw = Number(formData.get("Raw"));
        container = Number(formData.get("Container"));
        unoccupied = Number(formData.get("Unoccupied"));
    }

    function createPeople(): void {
        let worker: Worker = new Worker(new Vector(600, 300));
        let customer: Customer = new Customer(new Vector(crc2.canvas.width / 2, 15));
        faces = new Human;
        // moveables.push(worker, customer);
        worker.draw();
        customer.draw();


    }

    function update(): void {

    }

    function giveFood(): void {

    }
}
