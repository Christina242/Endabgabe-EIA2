namespace DoenerTrainer {

    export enum IngredientsList {
        bread, tomato, onion, cucumber, meat, corn, cabbage
    }
    export class Ingredients {
        public maxIngredients: number; 
        public maxRawIngredients: number; 

        public usedTomatos: number = 0;
        public usedRawTomatos: number = 0;

        draw(): void {
            //console.log("ingredients")
            //Tomato
            crc2.beginPath();
            crc2.fillStyle = "#FF0000";
            crc2.fillRect(50, 130+100*this.usedTomatos/this.maxIngredients, 70, 100 - 100*this.usedTomatos/this.maxIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Tomaten", 50, 120);
            crc2.closePath();

            //Cucumber
            crc2.beginPath();
            crc2.fillStyle = "#008800";
            crc2.fillRect(150, 130, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Gurken", 150, 120);
            crc2.closePath();

            //Corn
            crc2.beginPath();
            crc2.fillStyle = "#FFFF00";
            crc2.fillRect(250, 130, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Mais", 250, 120);
            crc2.closePath();

            //Meat
            crc2.beginPath();
            crc2.fillStyle = "#b47d49";
            crc2.fillRect(350, 130, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Fleisch", 350, 120);
            crc2.closePath();

            //Onion
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fillRect(450, 130, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Zwiebeln", 450, 120);
            crc2.closePath();

            //Cabbage
            crc2.beginPath();
            crc2.fillStyle = "#A640FF";
            crc2.fillRect(550, 130, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Rotkraut", 550, 120);
            crc2.closePath();

            //Tomato Raw
            crc2.beginPath();
            crc2.fillStyle = "#FF0000";
            crc2.fillRect(50, 380+ 100*this.usedRawTomatos/this.maxRawIngredients, 70, 100- 100*this.usedRawTomatos/this.maxRawIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Tomaten", 50, 370);
            crc2.closePath();

            //Cucumber Raw
            crc2.beginPath();
            crc2.fillStyle = "#008800";
            crc2.fillRect(150, 380, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Gurken", 150, 370);
            crc2.closePath();

            //Corn Raw
            crc2.beginPath();
            crc2.fillStyle = "#FFFF00";
            crc2.fillRect(250, 380, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Mais", 250, 370);
            crc2.closePath();

            //Meat Raw
            crc2.beginPath();
            crc2.fillStyle = "#b47d49";
            crc2.fillRect(350, 380, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Fleisch", 350, 370);
            crc2.closePath();

            //Onion Raw
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fillRect(450, 380, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Zwiebeln", 450, 370);
            crc2.closePath();

            //Cabbage Raw
            crc2.beginPath();
            crc2.fillStyle = "#A640FF";
            crc2.fillRect(550, 380, 70, 100);
            crc2.font = "18px Arial";
            crc2.fillText("Rotkraut", 550, 370);
            crc2.closePath();
        }

    }

}
