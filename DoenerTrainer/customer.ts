namespace DoenerTrainer {

    export class Customer extends Human {

        public position: Vector;
        
        constructor( _position: Vector, _velocity: Vector) {
            super(_position, _velocity);

            this.position = _position;
        }

        public draw(): void {
            //
        }

        public generateOrder(): void {
            
        }
    }
}