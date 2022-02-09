"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    //tomato
    const tomato = document.getElementById("tomatoBarButton");
    const zerotomato = document.getElementById("outoftomato");
    const tomatotimer = document.getElementById("inprogress");
    let tomatoMaxBar = 15;
    let tomatoMaxStore = 10;
    let tomatoButton = false;
    // let tomatoSpan: Boolean = false;
    tomato.addEventListener("click", function () {
        if (tomatoMaxBar == 1) {
            tomatoButton = true;
            tomato.classList.add("is-hidden");
            zerotomato.classList.remove("is-hidden");
            window.alert("Füll die Tomaten auf!");
        }
        tomatoMaxBar--;
        tomatoAmount();
        // outOfTomato();
    });
    zerotomato.addEventListener("click", function () {
        if (tomatoButton == true) {
            tomatoMaxStore--;
            zerotomato.classList.add("is-hidden");
            tomatotimer.classList.remove("is-hidden");
            tomatoAmountStore();
            tomatoAmount();
            setTimeout(function () {
                tomato.classList.remove("is-hidden");
                tomatotimer.classList.add("is-hidden");
                tomatoMaxBar = 15;
                tomatoAmount();
            }, 5000);
        }
    });
    function tomatoAmount() {
        document.querySelector(".tomato").innerHTML = "" + tomatoMaxBar;
    }
    function tomatoAmountStore() {
        document.querySelector(".tomatoRaw").innerHTML = "" + tomatoMaxStore;
    }
    //     function outOfTomato(): void {
    //         if (tomatoSpan == true) {
    //             tomatoButton =
    //         }
    //     }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Ingredients.js.map