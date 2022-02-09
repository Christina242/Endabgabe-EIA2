"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    window.addEventListener("load", handleLoad);
    let startButton;
    DoenerTrainer.animation = false;
    let worker = 2;
    let customer = 3;
    let raw = 10;
    let container = 15;
    let unoccupied = 20;
    let moveables = [];
    function handleLoad() {
        let canvas = document.querySelector("#canvas");
        if (!canvas)
            return;
        DoenerTrainer.crc2 = canvas.getContext("2d");
        startButton = document.querySelector("#start");
        startButton.addEventListener("click", startGame);
    }
    function startGame() {
        console.log("start");
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        DoenerTrainer.kebabhouse = new DoenerTrainer.KebabHouse();
        DoenerTrainer.kebabhouse.draw();
        //let canvasWrap: HTMLDivElement = <HTMLDivElement>document.querySelector("#canva-wrap");
        //canvasWrap.classList.remove("is-hidden");
        DoenerTrainer.lahmacun = new DoenerTrainer.Lahmacun();
        DoenerTrainer.lahmacun.draw();
        getSettings();
        createPeople();
        DoenerTrainer.animation = true;
    }
    function getSettings() {
        let formData = new FormData(document.forms[0]);
        worker = Number(formData.get("Worker"));
        customer = Number(formData.get("Customer"));
        raw = Number(formData.get("Raw"));
        container = Number(formData.get("Container"));
        unoccupied = Number(formData.get("Unoccupied"));
    }
    function createPeople() {
        let worker = new Worker(new Vector(600, 300));
        let customer = new Customer(new Vector(DoenerTrainer.crc2.canvas.width / 2, 15));
        DoenerTrainer.faces = new DoenerTrainer.Human;
        // moveables.push(worker, customer);
        worker.draw();
        customer.draw();
    }
    function update() {
    }
    function giveFood() {
    }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=main.js.map