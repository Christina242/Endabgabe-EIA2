"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    window.addEventListener("load", handleLoad);
    let startButton;
    let crc2;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        startButton = document.querySelector("#start");
        startButton.addEventListener("click", startGame);
        let landingPage;
    }
    function startGame() {
        console.log("start");
    }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=main.js.map