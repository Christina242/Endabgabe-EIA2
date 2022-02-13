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
    let doneOrder = 0;
    let happyCustomer = 0;
    let angryCustomer = 0;
    let happyWorker = 0;
    let unHappyWorker = 0;
    let statsDiv;
    function countWorkerMood() {
        happyWorker = 0;
        unHappyWorker = 0;
        for (let moveable of moveables) {
            if (moveable instanceof DoenerTrainer.Worker) {
                if (moveable.mood > 150 || moveable.mood < 50) {
                    unHappyWorker = unHappyWorker + 1;
                }
                else {
                    happyWorker = happyWorker + 1;
                }
            }
        }
    }
    function handleLoad() {
        statsDiv = document.getElementById("stats");
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
        let orderTomatoButton = document.getElementById("orderTomato");
        let orderCucumberButton = document.getElementById("orderCucumber");
        let orderCornButton = document.getElementById("orderCorn");
        let orderMeatButton = document.getElementById("orderMeat");
        let orderOnionButton = document.getElementById("orderOnion");
        let orderCabbageButton = document.getElementById("orderCabbage");
        orderTomatoButton.addEventListener("click", orderTomato);
        orderCucumberButton.addEventListener("click", orderCucumber);
        orderCornButton.addEventListener("click", orderCorn);
        orderMeatButton.addEventListener("click", orderMeat);
        orderOnionButton.addEventListener("click", orderOnion);
        orderCabbageButton.addEventListener("click", orderCabbage);
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
        createCustomer();
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
        if (allCustomer < 5) {
            let newCustomer = new DoenerTrainer.Customer(new DoenerTrainer.Vector(allCustomer * 200, 0), new DoenerTrainer.Vector(0, 0));
            moveables.push(newCustomer);
            newCustomer.draw();
            allCustomer++;
        }
    }
    // 
    function update() {
        DoenerTrainer.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.draw();
            if (moveable instanceof DoenerTrainer.Worker) {
                moveable.mood = moveable.mood - 50 / unoccupied / 50;
                moveable.move(0.15);
            }
            if (moveable instanceof DoenerTrainer.Customer) {
                moveable.mood = moveable.mood - 50 / unoccupied / 50;
                moveable.generateOrder();
                moveable.move(0.15);
                if (moveable.done == true) {
                    console.log(moveable);
                    moveables.splice(moveables.indexOf(moveable), 1);
                    allCustomer = allCustomer - 1;
                }
                if (moveable.mood < 50 && moveable.haveOrder == false) {
                    moveable.destination = new DoenerTrainer.Vector(350 - 100 / 2, moveable.position.y);
                    moveable.haveOrder = true;
                    angryCustomer = angryCustomer + 1;
                }
            }
        }
        countWorkerMood();
        statsDiv.innerHTML = "verkaufte Gerichte: " + doneOrder + "<br> glückliche Personen : " + (happyCustomer + happyWorker) + "<br> unzufriedene Personen: " + (angryCustomer + unHappyWorker);
        DoenerTrainer.ingredients.draw();
        DoenerTrainer.lahmacun.draw();
        DoenerTrainer.doener.draw();
        DoenerTrainer.yufka.draw();
    }
    function giveFood(_customer) {
        let allIngredients = usedIngredients.slice();
        let order = _customer.order.ingredients.slice();
        if (allIngredients.length == 0) {
            console.log("falsche bestellung");
            _customer.destination = new DoenerTrainer.Vector(350 - 100 / 2, _customer.position.y);
            _customer.mood = 0;
            _customer.haveOrder = true;
            usedIngredients = [];
            angryCustomer = angryCustomer + 1;
            return;
        }
        for (let j = order.length; j >= 0; j--) {
            let index = -1;
            for (let i = 0; i < allIngredients.length; i++) {
                if (allIngredients[i] == _customer.order.ingredients[j]) {
                    index = i;
                }
            }
            if (index >= 0) {
                allIngredients.splice(index, 1);
                order.splice(j, 1);
            }
        }
        if (allIngredients.length == 0 && order.length == 0) {
            _customer.destination = new DoenerTrainer.Vector(350, _customer.position.y);
            if (_customer.mood > 50) {
                happyCustomer = happyCustomer + 1;
            }
            else {
                angryCustomer = angryCustomer + 1;
            }
            _customer.mood = 200;
            _customer.haveOrder = true;
            usedIngredients = [];
            doneOrder = doneOrder + 1;
            return;
        }
        else {
            _customer.destination = new DoenerTrainer.Vector(350, _customer.position.y);
            _customer.mood = 0;
            _customer.haveOrder = true;
            usedIngredients = [];
            doneOrder = doneOrder + 1;
            angryCustomer = angryCustomer + 1;
        }
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
                if (moveable.position.x < position.x && moveable.position.x + 80 > position.x && moveable.position.y < position.y && moveable.position.y + 80 > position.y) {
                    giveFood(moveable);
                }
            }
        }
        if (activeWorker == undefined) {
            return;
        }
        //Tomaten 
        if (position.x > 50 && position.y > 130 && position.x < 50 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedTomatos < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.tomato);
                DoenerTrainer.ingredients.usedTomatos = DoenerTrainer.ingredients.usedTomatos + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Tomaten sind leer!");
            }
        }
        if (position.x > 50 && position.y > 380 && position.x < 50 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillTomatos, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Gurken
        if (position.x > 150 && position.y > 130 && position.x < 150 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedCucumbers < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.cucumber);
                DoenerTrainer.ingredients.usedCucumbers = DoenerTrainer.ingredients.usedCucumbers + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Gurken sind leer!");
            }
        }
        if (position.x > 150 && position.y > 380 && position.x < 150 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillCucumber, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Mais
        if (position.x > 250 && position.y > 130 && position.x < 250 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedCorn < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.corn);
                DoenerTrainer.ingredients.usedCorn = DoenerTrainer.ingredients.usedCorn + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Mais ist leer!");
            }
        }
        if (position.x > 250 && position.y > 380 && position.x < 250 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillCorn, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Fleisch
        if (position.x > 350 && position.y > 130 && position.x < 350 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedMeat < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.meat);
                DoenerTrainer.ingredients.usedMeat = DoenerTrainer.ingredients.usedMeat + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Fleisch ist leer!");
            }
        }
        if (position.x > 350 && position.y > 380 && position.x < 350 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillMeat, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Zwiebeln
        if (position.x > 450 && position.y > 130 && position.x < 450 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedOnions < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.onion);
                DoenerTrainer.ingredients.usedOnions = DoenerTrainer.ingredients.usedOnions + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Zwiebeln sind leer!");
            }
        }
        if (position.x > 450 && position.y > 380 && position.x < 450 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillOnion, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Rotkraut
        if (position.x > 550 && position.y > 130 && position.x < 550 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedCabbage < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.cabbage);
                DoenerTrainer.ingredients.usedCabbage = DoenerTrainer.ingredients.usedCabbage + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Rotkraut ist leer!");
            }
        }
        if (position.x > 550 && position.y > 380 && position.x < 550 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillCabbage, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        if (position.x > 640 && position.y > 110 && position.x < 640 + 40 && position.y < 110 + 40) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            usedIngredients.push(DoenerTrainer.IngredientsList.lahmacun);
            activeWorker.mood = activeWorker.mood + 5;
            console.log("Lahmacun");
        }
        if (position.x > 640 && position.y > 155 && position.x < 640 + 40 && position.y < 155 + 40) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            usedIngredients.push(DoenerTrainer.IngredientsList.doener);
            activeWorker.mood = activeWorker.mood + 5;
            console.log("Döner");
        }
        if (position.x > 640 && position.y > 200 && position.x < 640 + 40 && position.y < 200 + 40) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            usedIngredients.push(DoenerTrainer.IngredientsList.yufka);
            activeWorker.mood = activeWorker.mood + 5;
            console.log("Yufka");
        }
    }
    function fillTomatos() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedTomatos < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawTomatos > 0) {
            DoenerTrainer.ingredients.usedRawTomatos = DoenerTrainer.ingredients.usedRawTomatos + 1;
            DoenerTrainer.ingredients.usedTomatos = DoenerTrainer.ingredients.usedTomatos - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawTomatos <= 0) {
            window.alert("Tomaten müssen nachbestellt werden!");
        }
    }
    function fillCucumber() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedCucumbers < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCucumbers > 0) {
            DoenerTrainer.ingredients.usedRawCucumbers = DoenerTrainer.ingredients.usedRawCucumbers + 1;
            DoenerTrainer.ingredients.usedCucumbers = DoenerTrainer.ingredients.usedCucumbers - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCucumbers <= 0) {
            window.alert("Gurken müssen nachbestellt werden!");
        }
    }
    function fillCorn() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedCorn < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCorn > 0) {
            DoenerTrainer.ingredients.usedRawCorn = DoenerTrainer.ingredients.usedRawCorn + 1;
            DoenerTrainer.ingredients.usedCorn = DoenerTrainer.ingredients.usedCorn - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCorn <= 0) {
            window.alert("Mais müssen nachbestellt werden!");
        }
    }
    function fillMeat() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedMeat < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawMeat > 0) {
            DoenerTrainer.ingredients.usedRawMeat = DoenerTrainer.ingredients.usedRawMeat + 1;
            DoenerTrainer.ingredients.usedMeat = DoenerTrainer.ingredients.usedMeat - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawMeat <= 0) {
            window.alert("Fleisch müssen nachbestellt werden!");
        }
    }
    function fillOnion() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedOnions < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawOnions > 0) {
            DoenerTrainer.ingredients.usedRawOnions = DoenerTrainer.ingredients.usedRawOnions + 1;
            DoenerTrainer.ingredients.usedOnions = DoenerTrainer.ingredients.usedOnions - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawOnions <= 0) {
            window.alert("Zwiebeln müssen nachbestellt werden!");
        }
    }
    function fillCabbage() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedCabbage < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCabbage > 0) {
            DoenerTrainer.ingredients.usedRawCabbage = DoenerTrainer.ingredients.usedRawCabbage + 1;
            DoenerTrainer.ingredients.usedCabbage = DoenerTrainer.ingredients.usedCabbage - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCabbage <= 0) {
            window.alert("Rotkraut müssen nachbestellt werden!");
        }
    }
    function orderTomato() {
        setTimeout(fillRowTomato, 5000);
    }
    function fillRowTomato() {
        DoenerTrainer.ingredients.usedRawTomatos = 0;
    }
    function orderCucumber() {
        setTimeout(fillRowCucumber, 5000);
    }
    function fillRowCucumber() {
        DoenerTrainer.ingredients.usedRawCucumbers = 0;
    }
    function orderCorn() {
        setTimeout(fillRowCorn, 5000);
    }
    function fillRowCorn() {
        DoenerTrainer.ingredients.usedRawCorn = 0;
    }
    function orderMeat() {
        setTimeout(fillRowMeat, 5000);
    }
    function fillRowMeat() {
        DoenerTrainer.ingredients.usedRawMeat = 0;
    }
    function orderOnion() {
        setTimeout(fillRowOnion, 5000);
    }
    function fillRowOnion() {
        DoenerTrainer.ingredients.usedRawOnions = 0;
    }
    function orderCabbage() {
        setTimeout(fillRowCabbage, 5000);
    }
    function fillRowCabbage() {
        DoenerTrainer.ingredients.usedRawCabbage = 0;
    }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Main.js.map