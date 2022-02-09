namespace DoenerTrainer {

    export class Worker extends Human {

        public position: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);

            this.position = _position;
        }

        public draw(): void {
            //happyface
            //smiley
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(320, 240, 200, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //eyes
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(270, 175, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(370, 175, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(320, 240, 150, 0, -1 * Math.PI);
            crc2.stroke();
            crc2.closePath();
        }
    }
}