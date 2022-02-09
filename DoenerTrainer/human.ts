namespace DoenerTrainer {

    export class Human extends Moveable {

        public position: Vector;
        
        constructor( _position: Vector, _velocity: Vector) {
            super(_position, _velocity);

            this.position = _position;
        }

        public walk(endPosition: Vector): void {
            this.position.calculateVector(endPosition);
            
        }
    }
}