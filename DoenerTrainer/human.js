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
            // crc2.fillStyle = "yellow";
            // crc2.strokeStyle = "black";
            // crc2.lineWidth = 5;
            // crc2.beginPath();
            // crc2.arc(this.position.x + 45, this.position.y + 45, 40, 0, 2 * Math.PI);
            // crc2.fill();
            // crc2.stroke();
            // crc2.closePath();
            // //eyes
            // crc2.fillStyle = "black";
            // crc2.beginPath();
            // crc2.arc(this.position.x + 35, this.position.y + 35, 6, 0, 2 * Math.PI);
            // crc2.fill();
            // crc2.stroke();
            // crc2.closePath();
            // crc2.beginPath();
            // crc2.arc(this.position.x + 55, this.position.y + 35, 6, 0, 2 * Math.PI);
            // crc2.fill();
            // crc2.stroke();
            // crc2.closePath();
            // //mouth
            // crc2.strokeStyle = "black";
            // crc2.lineWidth = 5;
            // crc2.beginPath();
            // crc2.arc(this.position.x + 45, this.position.y + 45, 30, 0, -1 * Math.PI);
            // crc2.stroke();
            // crc2.closePath();
            //angryface
            //smiley
            // crc2.fillStyle = "red";
            // crc2.strokeStyle = "black";
            // crc2.lineWidth = 5;
            // crc2.beginPath();
            // crc2.arc(this.position.x + 45, this.position.y + 45, 40, 0, 2 * Math.PI);
            // crc2.fill();
            // crc2.stroke();
            // crc2.closePath();
            // //eyes
            // crc2.fillStyle = "black";
            // crc2.beginPath();
            // crc2.arc(this.position.x + 35, this.position.y + 35, 6, 0, 2 * Math.PI);
            // crc2.fill();
            // crc2.stroke();
            // crc2.closePath();
            // crc2.beginPath();
            // crc2.arc(this.position.x + 55, this.position.y + 35, 6, 0, 2 * Math.PI);
            // crc2.fill();
            // crc2.stroke();
            // crc2.closePath();
            // //mouth
            // crc2.strokeStyle = "black";
            // crc2.lineWidth = 5;
            // crc2.beginPath();
            // crc2.arc(this.position.x + 45, this.position.y + 70, 20, 0, 1 * Math.PI, true);
            // crc2.stroke();
            // crc2.closePath();
            //sleepyface
            //smiley
            DoenerTrainer.crc2.fillStyle = "lightblue";
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
            DoenerTrainer.crc2.arc(this.position.x + 35, this.position.y + 35, 6, 0, 1 * Math.PI);
            // crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(this.position.x + 55, this.position.y + 35, 6, 0, 1 * Math.PI);
            // crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            //mouth
            DoenerTrainer.crc2.strokeStyle = "black";
            DoenerTrainer.crc2.lineWidth = 5;
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.moveTo(this.position.x + 25, this.position.y + 55);
            DoenerTrainer.crc2.lineTo(this.position.x + 65, this.position.y + 55);
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Human = Human;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=human.js.map