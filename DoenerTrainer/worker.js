"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Worker extends DoenerTrainer.Human {
        position;
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.position = _position;
        }
        draw() {
            //happyface
            //smiley
            DoenerTrainer.crc2.fillStyle = "yellow";
            DoenerTrainer.crc2.strokeStyle = "black";
            DoenerTrainer.crc2.lineWidth = 5;
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(320, 240, 200, 0, 2 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            //eyes
            DoenerTrainer.crc2.fillStyle = "black";
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(270, 175, 30, 0, 2 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(370, 175, 30, 0, 2 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            //mouth
            DoenerTrainer.crc2.strokeStyle = "black";
            DoenerTrainer.crc2.lineWidth = 5;
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(320, 240, 150, 0, -1 * Math.PI);
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Worker = Worker;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=worker.js.map