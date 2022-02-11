"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Customer extends DoenerTrainer.Human {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.generateOrder();
        }
        generateOrder() {
            this.order = DoenerTrainer.allOrders[Math.floor(Math.random() * DoenerTrainer.allOrders.length)];
            DoenerTrainer.crc2.fillText(this.order.name, this.position.x, this.position.y);
        }
    }
    DoenerTrainer.Customer = Customer;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=customer.js.map