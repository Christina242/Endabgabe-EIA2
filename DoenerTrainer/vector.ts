namespace DoenerTrainer {

    export class Vector {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public calculateVector(destination: Vector): Vector {
            let newX: number = destination.x - this.x;
            let newY: number = destination.y - this.y;

            return new Vector(newX, newY);
        }
    }
}