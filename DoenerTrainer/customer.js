"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Customer extends DoenerTrainer.Human {
        position;
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.position = _position;
        }
        draw() {
            //
        }
        generateOrder() {
        }
    }
    DoenerTrainer.Customer = Customer;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=customer.js.map