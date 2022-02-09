"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Lahmacun {
        draw() {
            //lahmacun
            console.log("lahmacun");
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#9C6B30";
            DoenerTrainer.crc2.fillRect(650, 130, 100, 100);
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Lahmacun = Lahmacun;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Lahmacun.js.map