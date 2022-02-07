"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Lahmacun {
        draw() {
            //lahmacun
            console.log("lahmacun");
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#000000";
            DoenerTrainer.crc2.fillRect(50, 50, 100, 100);
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Lahmacun = Lahmacun;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Lahmacun.js.map