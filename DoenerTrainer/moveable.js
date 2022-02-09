"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Moveable {
        posX;
        posY;
        velocityX;
        velocityY;
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        update() {
            //
        }
        draw() {
            //
        }
    }
    DoenerTrainer.Moveable = Moveable;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=moveable.js.map