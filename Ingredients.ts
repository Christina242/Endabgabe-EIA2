namespace DoenerTrainer{

    //tomato
    const tomato: Element = (document.getElementById("tomatoBarButton") as HTMLInputElement);
    const zerotomato: Element = (document.getElementById("outoftomato") as HTMLInputElement);
    const tomatotimer: Element = (document.getElementById("inprogress")as HTMLInputElement);
    let tomatoMaxBar: number = 15;
    let tomatoMaxStore: number = 10;
    let tomatoButton: Boolean = false;
    // let tomatoSpan: Boolean = false;

    tomato.addEventListener("click", function(): void {
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

    zerotomato.addEventListener("click", function(): void {
        if (tomatoButton == true) {
            tomatoMaxStore--;
            zerotomato.classList.add("is-hidden");
            tomatotimer.classList.remove("is-hidden");
            tomatoAmountStore();
            tomatoAmount();

            setTimeout(function (): void {
                tomato.classList.remove("is-hidden");
                tomatotimer.classList.add("is-hidden");
                tomatoMaxBar = 15;
                tomatoAmount();
            },                 5000);
        }
    });


    function tomatoAmount(): void {
        (document.querySelector(".tomato") as HTMLInputElement).innerHTML = "" + tomatoMaxBar;
    }

    function tomatoAmountStore(): void {
        (document.querySelector(".tomatoRaw") as HTMLInputElement).innerHTML = "" + tomatoMaxStore;
    }

//     function outOfTomato(): void {
//         if (tomatoSpan == true) {
//             tomatoButton =
//         }
//     }
}