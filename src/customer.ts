namespace DoenerTrainer {

    export class Customer extends Human {

        public order: Order;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
            this.generateOrder();
        }

        public generateOrder(): void {
            this.order = allOrders[Math.floor(Math.random() * allOrders.length)];
            crc2.fillText(this.order.name, this.position.x, this.position.y);

        }
    }
}