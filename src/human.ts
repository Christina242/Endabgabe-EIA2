namespace DoenerTrainer {

    export class Human extends Moveable {

       
        
        constructor( _position: Vector, _velocity: Vector) {
            super(_position, _velocity);

           
        }

        public walk(endPosition: Vector): void {
            this.position.calculateVector(endPosition);
            
        }
        
        public draw(): void {
            //happyface
            //smiley
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(this.position.x + 45, this.position.y + 45, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //eyes
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 35, this.position.y + 35, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x + 55, this.position.y + 35, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(this.position.x + 45, this.position.y + 45, 30, 0, -1 * Math.PI);
            crc2.stroke();
            crc2.closePath();
        }
    }
}