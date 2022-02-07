"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    window.addEventListener("load", handleLoad);
    let startButton;
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
        DoenerTrainer.doenerbude = new DoenerTrainer.KebabHouse();
        DoenerTrainer.doenerbude.draw();
    }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=main.js.map