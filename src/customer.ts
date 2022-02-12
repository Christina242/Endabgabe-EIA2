namespace DoenerTrainer {

    export class Customer extends Human {

        public order: Order;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
            
            this.order = allOrders[Math.floor(Math.random() * allOrders.length)];
            this.generateOrder();
        }

        public generateOrder(): void {
            crc2.fillStyle = "#000000";
            crc2.font = "15px Arial";
            crc2.fillText(this.order.name, this.position.x, this.position.y + 95);


        }
    }
}