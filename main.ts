namespace DoenerTrainer {

    window.addEventListener("load", handleLoad);
    
    let startButton: HTMLButtonElement;
    export let crc2: CanvasRenderingContext2D;
    export let doenerbude: KebabHouse;

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

        doenerbude = new KebabHouse();
        doenerbude.draw();
        

    }
}