namespace DoenerTrainer {

    window.addEventListener("load", handleLoad);

    let startButton: HTMLButtonElement;
    let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        startButton = <HTMLButtonElement>document.querySelector("#start");
        startButton.addEventListener("click", startGame);
        let landingPage: HTMLDivElement;
    }

    function startGame(): void {
        console.log("start");
    }
}