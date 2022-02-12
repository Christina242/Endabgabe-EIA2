"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Human extends DoenerTrainer.Moveable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.mood = 100;
            this.destination = this.position;
        }
        ;
        walk(endPosition) {
            this.position.calculateVector(endPosition);
        }
        move(_timeslice) {
            let velocity = this.position.calculateVector(this.destination); //new Vector(this.destination.x / 10, this.destination.y / 10);
            let offset = velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        draw() {
            if (this.mood > 100) {
                this.drawAngray();
            }
            else if (this.mood < 50) {
                this.drawSleepy();
            }
            else {
                this.drawHappy();
            }
        }
        drawAngray() {
            //angryface
            //smiley
            DoenerTrainer.crc2.fillStyle = "red";
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
            DoenerTrainer.crc2.arc(this.position.x + 45, this.position.y + 70, 20, 0, 1 * Math.PI, true);
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
        }
        drawSleepy() {
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
        drawHappy() {
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