namespace DoenerTrainer {
    export abstract class Moveable {
        protected posX: number;
        protected posY: number;
    
        protected velocityX: number;
        protected velocityY: number;
    
        constructor(_position: Vector, _velocity: Vector) {
              this.posX = _position.x; 
              this.posY = _position.y; 
    
              this.velocityX = _velocity.x;
              this.velocityY = _velocity.y;
        }
    
        public update(): void {
            //
        }
    
        protected draw(): void {
            //
        }
    }
}