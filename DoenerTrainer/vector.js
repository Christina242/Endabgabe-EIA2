"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Vector {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        calculateVector(destination) {
            let newX = destination.x - this.x;
            let newY = destination.y - this.y;
            return new Vector(newX, newY);
        }
    }
    DoenerTrainer.Vector = Vector;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=vector.js.map