"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Human extends DoenerTrainer.Moveable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        walk(endPosition) {
            this.position.calculateVector(endPosition);
        }
        draw() {
            //happyface
            //smiley
            DoenerTrainer.crc2.fillStyle = "yellow";
            DoenerTrainer.crc2.strokeStyle = "black";
            DoenerTrainer.crc2.lineWidth = 5;
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(this.position.x + 45, this.position.y + 45, 40, 0, 2 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            //eyes
            DoenerTrainer.crc2.fillStyle = "black";
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(this.position.x + 35, this.position.y + 35, 6, 0, 2 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(this.position.x + 55, this.position.y + 35, 6, 0, 2 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            //mouth
            DoenerTrainer.crc2.strokeStyle = "black";
            DoenerTrainer.crc2.lineWidth = 5;
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(this.position.x + 45, this.position.y + 45, 30, 0, -1 * Math.PI);
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Human = Human;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=human.js.map