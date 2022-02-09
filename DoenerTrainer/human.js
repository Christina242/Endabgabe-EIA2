"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Human extends DoenerTrainer.Moveable {
        position;
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.position = _position;
        }
        walk(endPosition) {
            this.position.calculateVector(endPosition);
        }
    }
    DoenerTrainer.Human = Human;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=human.js.map