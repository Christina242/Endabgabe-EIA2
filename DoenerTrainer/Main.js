"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    window.addEventListener("load", handleLoad);
    let startButton;
    DoenerTrainer.animation = false;
    let allCustomer = 0;
    let worker = 2;
    let customer = 3;
    let raw = 10;
    let container = 15;
    let unoccupied = 20;
    let moveables = [];
    let imgData;
    let usedIngredients = [];
    function handleLoad() {
        let canvas = document.querySelector("#canvas");
        if (!canvas)
            return;
        DoenerTrainer.crc2 = canvas.getContext("2d");
        startButton = document.querySelector("#start");
        startButton.addEventListener("click", startGame);
        canvas.addEventListener("mouseup", handleMouse);
    }
    function startGame() {
        console.log("start");
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        DoenerTrainer.kebabhouse = new DoenerTrainer.KebabHouse();
        DoenerTrainer.kebabhouse.draw();
        imgData = DoenerTrainer.crc2.getImageData(0, 0, 800, 600);
        DoenerTrainer.ingredients = new DoenerTrainer.Ingredients();
        DoenerTrainer.ingredients.draw();
        DoenerTrainer.lahmacun = new DoenerTrainer.Lahmacun();
        DoenerTrainer.lahmacun.draw();
        DoenerTrainer.doener = new DoenerTrainer.Doener();
        DoenerTrainer.doener.draw();
        DoenerTrainer.yufka = new DoenerTrainer.Yufka();
        DoenerTrainer.yufka.draw();
        let canvasWrap = document.querySelector("#canvas-wrap");
        canvasWrap.classList.remove("is-hidden");
        getSettings();
        createWorker();
        body.removeChild(form);
        DoenerTrainer.animation = true;
        window.setInterval(createCustomer, 60000 / customer);
        window.setInterval(update, 1000);
    }
    function getSettings() {
        let formData = new FormData(document.forms[0]);
        worker = Number(formData.get("Worker"));
        customer = Number(formData.get("Customer"));
        raw = Number(formData.get("Raw"));
        container = Number(formData.get("Container"));
        unoccupied = Number(formData.get("Unoccupied"));
        console.log(worker, customer, raw, container, unoccupied);
    }
    function createWorker() {
        for (let nWorker = 0; nWorker < worker; nWorker++) {
            let newWorker = new DoenerTrainer.Worker(new DoenerTrainer.Vector(nWorker * 200, 250), new DoenerTrainer.Vector(0, 0));
            newWorker.draw();
            moveables.push(newWorker);
        }
    }
    function createCustomer() {
        let newCustomer = new DoenerTrainer.Customer(new DoenerTrainer.Vector(allCustomer * 200, 0), new DoenerTrainer.Vector(0, 0));
        moveables.push(newCustomer);
        newCustomer.draw();
        allCustomer++;
    }
    function update() {
        DoenerTrainer.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.draw();
            if (moveable instanceof DoenerTrainer.Worker) {
                moveable.mood = moveable.mood - 50 / unoccupied;
            }
            if (moveable instanceof DoenerTrainer.Customer) {
                moveable.generateOrder();
            }
        }
        DoenerTrainer.ingredients.draw();
        DoenerTrainer.lahmacun.draw();
        DoenerTrainer.doener.draw();
        DoenerTrainer.yufka.draw();
    }
    function giveFood() {
    }
    function handleMouse(_event) {
        let position = new DoenerTrainer.Vector(_event.clientX - DoenerTrainer.crc2.canvas.offsetLeft, _event.clientY - DoenerTrainer.crc2.canvas.offsetTop);
        if (position.x > 50 && position.y > 130 && position.x < 50 + 70 && position.y < 130 + 100) {
            usedIngredients.push(DoenerTrainer.IngredientsList.tomato);
            console.log(usedIngredients);
        }
    }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Main.js.map