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
    let activeWorker;
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
        DoenerTrainer.ingredients.maxIngredients = container;
        DoenerTrainer.ingredients.maxRawIngredients = raw;
        body.removeChild(form);
        DoenerTrainer.animation = true;
        window.setInterval(createCustomer, 60000 / customer);
        window.setInterval(update, 20);
    }
    function getSettings() {
        let formData = new FormData(document.forms[0]);
        worker = Number(formData.get("Worker"));
        customer = Number(formData.get("Customer"));
        raw = Number(formData.get("Raw"));
        container = Number(formData.get("Container"));
        unoccupied = Number(formData.get("Unoccupied"));
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
                moveable.mood = moveable.mood - 50 / unoccupied / 50;
                moveable.move(0.15);
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
    function giveFood(_customer) {
        let allIngredients = usedIngredients;
        for (let j = 0; j < _customer.order.ingredients.length; j++) {
            let index = -1;
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
    function handleMouse(_event) {
        let position = new DoenerTrainer.Vector(_event.clientX - DoenerTrainer.crc2.canvas.offsetLeft, _event.clientY - DoenerTrainer.crc2.canvas.offsetTop);
        for (let moveable of moveables) {
            if (moveable instanceof DoenerTrainer.Worker) {
                if (moveable.position.x < position.x && moveable.position.x + 80 > position.x && moveable.position.y < position.y && moveable.position.y + 80 > position.y) {
                    activeWorker = moveable;
                }
            }
        }
        for (let moveable of moveables) {
            if (moveable instanceof DoenerTrainer.Customer) {
                giveFood(moveable);
            }
        }
        if (activeWorker == undefined) {
            return;
        }
        //Tomaten 
        //Worker position 
        if (position.x > 50 && position.y > 130 && position.x < 50 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedTomatos < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.tomato);
                DoenerTrainer.ingredients.usedTomatos = DoenerTrainer.ingredients.usedTomatos + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Tomaten sind leer!");
            }
        }
        if (position.x > 50 && position.y > 380 && position.x < 50 + 70 && position.y < 380 + 100) {
            setTimeout(fillTomatos, 500);
            activeWorker.mood = activeWorker.mood + 3;
        }
        //Gurken
        //Worker position
        if (position.x > 150 && position.y > 130 && position.x < 150 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedCucumbers < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.cucumber);
                DoenerTrainer.ingredients.usedCucumbers = DoenerTrainer.ingredients.usedCucumbers + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Gurken sind leer!");
            }
        }
        if (position.x > 150 && position.y > 380 && position.x < 150 + 70 && position.y < 380 + 100) {
            setTimeout(fillCucumber, 500);
            activeWorker.mood = activeWorker.mood + 3;
        }
        //Mais
        //Worker position
        if (position.x > 250 && position.y > 130 && position.x < 250 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedCorn < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.corn);
                DoenerTrainer.ingredients.usedCorn = DoenerTrainer.ingredients.usedCorn + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Mais ist leer!");
            }
        }
        if (position.x > 250 && position.y > 380 && position.x < 250 + 70 && position.y < 380 + 100) {
            setTimeout(fillCorn, 500);
            activeWorker.mood = activeWorker.mood + 3;
        }
        //Fleisch
        //Worker position
        if (position.x > 350 && position.y > 130 && position.x < 350 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedMeat < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.meat);
                DoenerTrainer.ingredients.usedMeat = DoenerTrainer.ingredients.usedMeat + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Fleisch ist leer!");
            }
        }
        if (position.x > 350 && position.y > 380 && position.x < 350 + 70 && position.y < 380 + 100) {
            setTimeout(fillMeat, 500);
            activeWorker.mood = activeWorker.mood + 3;
        }
        //Zwiebeln
        //Worker position
        if (position.x > 450 && position.y > 130 && position.x < 450 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedOnions < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.onion);
                DoenerTrainer.ingredients.usedOnions = DoenerTrainer.ingredients.usedOnions + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Zwiebeln sind leer!");
            }
        }
        if (position.x > 450 && position.y > 380 && position.x < 450 + 70 && position.y < 380 + 100) {
            setTimeout(fillOnion, 500);
            activeWorker.mood = activeWorker.mood + 3;
        }
        //Rotkraut
        //Worker position
        if (position.x > 550 && position.y > 130 && position.x < 550 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedCabbage < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.cabbage);
                DoenerTrainer.ingredients.usedCabbage = DoenerTrainer.ingredients.usedCabbage + 1;
                activeWorker.mood = activeWorker.mood + 3;
            }
            else {
                window.alert("Rotkraut ist leer!");
            }
        }
        if (position.x > 550 && position.y > 380 && position.x < 550 + 70 && position.y < 380 + 100) {
            setTimeout(fillCabbage, 500);
            activeWorker.mood = activeWorker.mood + 3;
        }
    }
    function fillTomatos() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedTomatos <= DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawTomatos > 0) {
            DoenerTrainer.ingredients.usedRawTomatos = DoenerTrainer.ingredients.usedRawTomatos + 1;
            DoenerTrainer.ingredients.usedTomatos = DoenerTrainer.ingredients.usedTomatos - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawTomatos <= 0) {
            window.alert("Tomaten müssen nachbestellt werden!");
        }
    }
    function fillCucumber() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedCucumbers <= DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCucumbers > 0) {
            DoenerTrainer.ingredients.usedRawCucumbers = DoenerTrainer.ingredients.usedRawCucumbers + 1;
            DoenerTrainer.ingredients.usedCucumbers = DoenerTrainer.ingredients.usedCucumbers - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCucumbers <= 0) {
            window.alert("Gurken müssen nachbestellt werden!");
        }
    }
    function fillCorn() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedCorn <= DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCorn > 0) {
            DoenerTrainer.ingredients.usedRawCorn = DoenerTrainer.ingredients.usedRawCorn + 1;
            DoenerTrainer.ingredients.usedCorn = DoenerTrainer.ingredients.usedCorn - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCorn <= 0) {
            window.alert("Mais müssen nachbestellt werden!");
        }
    }
    function fillMeat() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedMeat <= DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawMeat > 0) {
            DoenerTrainer.ingredients.usedRawMeat = DoenerTrainer.ingredients.usedRawMeat + 1;
            DoenerTrainer.ingredients.usedMeat = DoenerTrainer.ingredients.usedMeat - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawMeat <= 0) {
            window.alert("Fleisch müssen nachbestellt werden!");
        }
    }
    function fillOnion() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedOnions <= DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawOnions > 0) {
            DoenerTrainer.ingredients.usedRawOnions = DoenerTrainer.ingredients.usedRawOnions + 1;
            DoenerTrainer.ingredients.usedOnions = DoenerTrainer.ingredients.usedOnions - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawOnions <= 0) {
            window.alert("Zwiebeln müssen nachbestellt werden!");
        }
    }
    function fillCabbage() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedCabbage <= DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCabbage > 0) {
            DoenerTrainer.ingredients.usedRawCabbage = DoenerTrainer.ingredients.usedRawCabbage + 1;
            DoenerTrainer.ingredients.usedCabbage = DoenerTrainer.ingredients.usedCabbage - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCabbage <= 0) {
            window.alert("Rotkraut müssen nachbestellt werden!");
        }
    }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Main.js.map