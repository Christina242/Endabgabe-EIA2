namespace DoenerTrainer {

    export class KebabHouse {
        
        draw(): void {
            console.log("Kebab Haus");

            //customer Field
            crc2.beginPath();
            crc2.fillStyle = "#ffffff";
            crc2.fillRect(0, 0, 800, 100);
            crc2.closePath();

            //Counter
            crc2.beginPath();
            crc2.fillStyle = "#A3A3A3";
            crc2.fillRect(0, 100, 800, 150);
            crc2.closePath();

            //Worker Field
            crc2.beginPath();
            crc2.fillStyle = "#FFD5c6";
            crc2.fillRect(0, 250, 800, 100);
            crc2.closePath();

            //Kitchen
            crc2.beginPath();
            crc2.fillStyle = "#A3A3A3";
            crc2.fillRect(0, 350, 800, 150);
            crc2.closePath();

            //Door
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(0, 0, 100, 20);
            crc2.closePath();
        }
    }

}