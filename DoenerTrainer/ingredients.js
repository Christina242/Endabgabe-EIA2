"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    let IngredientsList;
    (function (IngredientsList) {
        IngredientsList[IngredientsList["bread"] = 0] = "bread";
        IngredientsList[IngredientsList["tomato"] = 1] = "tomato";
        IngredientsList[IngredientsList["onion"] = 2] = "onion";
        IngredientsList[IngredientsList["cucumber"] = 3] = "cucumber";
        IngredientsList[IngredientsList["meat"] = 4] = "meat";
        IngredientsList[IngredientsList["corn"] = 5] = "corn";
        IngredientsList[IngredientsList["cabbage"] = 6] = "cabbage";
    })(IngredientsList = DoenerTrainer.IngredientsList || (DoenerTrainer.IngredientsList = {}));
    class Ingredients {
        draw() {
            //console.log("ingredients")
            //Tomato
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FF0000";
            DoenerTrainer.crc2.fillRect(50, 130, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Tomaten", 50, 120);
            DoenerTrainer.crc2.closePath();
            //Cucumber
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#008800";
            DoenerTrainer.crc2.fillRect(150, 130, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Gurken", 150, 120);
            DoenerTrainer.crc2.closePath();
            //Corn
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFF00";
            DoenerTrainer.crc2.fillRect(250, 130, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Mais", 250, 120);
            DoenerTrainer.crc2.closePath();
            //Meat
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#b47d49";
            DoenerTrainer.crc2.fillRect(350, 130, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Fleisch", 350, 120);
            DoenerTrainer.crc2.closePath();
            //Onion
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFFFF";
            DoenerTrainer.crc2.fillRect(450, 130, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Zwiebeln", 450, 120);
            DoenerTrainer.crc2.closePath();
            //Cabbage
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#A640FF";
            DoenerTrainer.crc2.fillRect(550, 130, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Rotkraut", 550, 120);
            DoenerTrainer.crc2.closePath();
            //Tomato Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FF0000";
            DoenerTrainer.crc2.fillRect(50, 380, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Tomaten", 50, 370);
            DoenerTrainer.crc2.closePath();
            //Cucumber Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#008800";
            DoenerTrainer.crc2.fillRect(150, 380, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Gurken", 150, 370);
            DoenerTrainer.crc2.closePath();
            //Corn Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFF00";
            DoenerTrainer.crc2.fillRect(250, 380, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Mais", 250, 370);
            DoenerTrainer.crc2.closePath();
            //Meat Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#b47d49";
            DoenerTrainer.crc2.fillRect(350, 380, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Fleisch", 350, 370);
            DoenerTrainer.crc2.closePath();
            //Onion Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFFFF";
            DoenerTrainer.crc2.fillRect(450, 380, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Zwiebeln", 450, 370);
            DoenerTrainer.crc2.closePath();
            //Cabbage Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#A640FF";
            DoenerTrainer.crc2.fillRect(550, 380, 70, 100);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Rotkraut", 550, 370);
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Ingredients = Ingredients;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=ingredients.js.map