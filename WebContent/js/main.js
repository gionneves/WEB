var tel = ["iphone", "samsung", "asus", "motorola", "xiaomi", "Teste"];
var preco = [0, 0, 0, 0, 0]; /* <- Vetor de valores universal*/
var inTel;
var min, max;
var total = 0;

function definePriceByPhone() {

    switch (inTel) {
        case tel[0]:
            min = 250;
            max = 600;
            console.log(tel[0]);
            for (let i = 0; i < preco.length; i++) {
                preco[i] = Math.floor(Math.random() * (min + -max) + min);
                console.log(preco[i]);
            }

            break;
        case tel[1]:
            min = 300;
            max = 800;
            for (let i = 0; i < preco.length; i++) {
                preco[i] = Math.floor(Math.random() * (min + max) + min);
                console.log(preco[i]);
            }

            break;
        case tel[2]:
            for (let i = 0; i < preco.length; i++) {
                preco[i] = Math.floor(Math.random() * (min + max) + min);
                console.log(preco[i]);
            }

            break;
        case tel[3]:

            for (let i = 0; i < preco.length; i++) {
                preco[i] = Math.floor(Math.random() * (min + max) + min);
                console.log(preco[i]);
            }

            break;
        case tel[4]:

            for (let i = 0; i < preco.length; i++) {
                preco[i] = Math.floor(Math.random() * (min + max) + min);
                console.log(preco[i]);
            }

            break;
    }
}

function clearClasses() {

    document.getElementById("tUm").classList.remove("HoverPos");
    document.getElementById("tDois").classList.remove("HoverPos");
    document.getElementById("tTres").classList.remove("HoverPos");
    document.getElementById("tQuatro").classList.remove("HoverPos");
    document.getElementById("tCinco").classList.remove("HoverPos");

    document.getElementById("tUm").classList.remove("HoverNeg");
    document.getElementById("tDois").classList.remove("HoverNeg");
    document.getElementById("tTres").classList.remove("HoverNeg");
    document.getElementById("tQuatro").classList.remove("HoverNeg");
    document.getElementById("tCinco").classList.remove("HoverNeg");

    document.getElementById("tUm").classList.remove("Pos");
    document.getElementById("tDois").classList.remove("Pos");
    document.getElementById("tTres").classList.remove("Pos");
    document.getElementById("tQuatro").classList.remove("Pos");
    document.getElementById("tCinco").classList.remove("Pos");

    document.getElementById("tUm").classList.remove("Neg");
    document.getElementById("tDois").classList.remove("Neg");
    document.getElementById("tTres").classList.remove("Neg");
    document.getElementById("tQuatro").classList.remove("Neg");
    document.getElementById("tCinco").classList.remove("Neg");

    document.getElementById("zUm").checked = false;
    document.getElementById("zDois").checked = false;
    document.getElementById("zTres").checked = false;
    document.getElementById("zQuatro").checked = false;
    document.getElementById("zCinco").checked = false;

    total = 0;
    document.getElementById("total").textContent = total;

}

function getTextFromInput() {

    clearClasses();

    inTel = document.getElementById("phones").value;
    inTel = inTel.toLowerCase();
    definePriceByPhone();

    switch (inTel) {
        case tel[0]:
            /* -- iPhone -- Tel -- 00 -- */
            document.getElementById("zUm").disabled = false;
            document.getElementById("zDois").disabled = true;
            document.getElementById("zTres").disabled = false;
            document.getElementById("zQuatro").disabled = true;
            document.getElementById("zCinco").disabled = true;

            document.getElementById("tUm").classList.add("Pos");
            document.getElementById("tDois").classList.add("Neg");
            document.getElementById("tTres").classList.add("Pos");
            document.getElementById("tQuatro").classList.add("Neg");
            document.getElementById("tCinco").classList.add("Neg");

            document.getElementById("tUm").classList.add("HoverPos");
            document.getElementById("tDois").classList.add("HoverNeg");
            document.getElementById("tTres").classList.add("HoverPos");
            document.getElementById("tQuatro").classList.add("HoverNeg");
            document.getElementById("tCinco").classList.add("HoverNeg");


            /* -- Elemento Um (TELA) -- 00 -- */
            document.getElementById("zUm").onclick = function () {
                if (this.checked) {
                    total += preco[0];
                    document.getElementById("total").textContent = total;
                } else {
                    total -= preco[0];
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Dois (Bateria) -- 00 -- */
            document.getElementById("zDois").onclick = function () {
                if (this.checked) {
                    total += preco[1];
                    document.getElementById("total").textContent = total;
                } else {
                    total -= preco[1];
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Três (Botão Home) -- 00 -- */
            document.getElementById("zTres").onclick = function () {
                if (this.checked) {
                    total += preco[2];
                    document.getElementById("total").textContent = total;
                } else {
                    total -= preco[2];
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Quatro (Câmera) -- 00 -- */
            document.getElementById("zQuatro").onclick = function () {
                if (this.checked) {
                    total += preco[3];
                    document.getElementById("total").textContent = total;
                } else {
                    total -= preco[3];
                    document.getElementById("total").textContent = total;
                }
            }
            /* -- Elemento Cinco (Placa) -- 00 -- */
            document.getElementById("zCinco").onclick = function () {
                if (this.checked) {
                    total += preco[4];
                    document.getElementById("total").textContent = total;
                } else {
                    total -= preco[4];
                    document.getElementById("total").textContent = total;
                }
            }
            break;

        case tel[1]:
            /* -- Samsung -- Tel -- 01 -- */
            document.getElementById("zUm").disabled = true;
            document.getElementById("zDois").disabled = false;
            document.getElementById("zTres").disabled = false;
            document.getElementById("zQuatro").disabled = true;
            document.getElementById("zCinco").disabled = true;

            document.getElementById("tUm").classList.add("Neg");
            document.getElementById("tDois").classList.add("Pos");
            document.getElementById("tTres").classList.add("Pos");
            document.getElementById("tQuatro").classList.add("Neg");
            document.getElementById("tCinco").classList.add("Neg");

            document.getElementById("tUm").classList.add("HoverNeg");
            document.getElementById("tDois").classList.add("HoverPos");
            document.getElementById("tTres").classList.add("HoverPos");
            document.getElementById("tQuatro").classList.add("HoverNeg");
            document.getElementById("tCinco").classList.add("HoverNeg");


            /* -- Elemento Um (TELA) -- 01 -- */
            document.getElementById("zUm").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Dois (Bateria) -- 01 -- */
            document.getElementById("zDois").onclick = function () {
                if (this.checked) {
                    total += 3;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 3;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Três (Botão Home) -- 01 -- */
            document.getElementById("zTres").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Quatro (Câmera) -- 01 -- */
            document.getElementById("zQuatro").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }
            /* -- Elemento Cinco (Placa) -- 01 -- */
            document.getElementById("zCinco").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }
            break;

        case tel[2]:
            /* -- Asus -- Tel -- 02 -- */
            document.getElementById("zUm").disabled = false;
            document.getElementById("zDois").disabled = false;
            document.getElementById("zTres").disabled = true;
            document.getElementById("zQuatro").disabled = false;
            document.getElementById("zCinco").disabled = true;

            document.getElementById("tUm").classList.add("Pos");
            document.getElementById("tDois").classList.add("Pos");
            document.getElementById("tTres").classList.add("Neg");
            document.getElementById("tQuatro").classList.add("Pos");
            document.getElementById("tCinco").classList.add("Neg");

            document.getElementById("tUm").classList.add("HoverPos");
            document.getElementById("tDois").classList.add("HoverPos");
            document.getElementById("tTres").classList.add("HoverNeg");
            document.getElementById("tQuatro").classList.add("HoverPos");
            document.getElementById("tCinco").classList.add("HoverNeg");


            /* -- Elemento Um (TELA) -- 02 -- */
            document.getElementById("zUm").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Dois (Bateria) -- 02 -- */
            document.getElementById("zDois").onclick = function () {
                if (this.checked) {
                    total += 5;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 5;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Três (Botão Home) -- 02 -- */
            document.getElementById("zTres").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Quatro (Câmera) -- 02 -- */
            document.getElementById("zQuatro").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }
            /* -- Elemento Cinco ()-- 02 -- */
            document.getElementById("zCinco").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }
            break;

        case tel[3]:
            /* -- Motorola -- Tel -- 03 -- */
            document.getElementById("zUm").disabled = false;
            document.getElementById("zDois").disabled = false;
            document.getElementById("zTres").disabled = false;
            document.getElementById("zQuatro").disabled = true;
            document.getElementById("zCinco").disabled = false;

            document.getElementById("tUm").classList.add("Pos");
            document.getElementById("tDois").classList.add("Pos");
            document.getElementById("tTres").classList.add("Pos");
            document.getElementById("tQuatro").classList.add("Neg");
            document.getElementById("tCinco").classList.add("Pos");

            document.getElementById("tUm").classList.add("HoverPos");
            document.getElementById("tDois").classList.add("HoverPos");
            document.getElementById("tTres").classList.add("HoverPos");
            document.getElementById("tQuatro").classList.add("HoverNeg");
            document.getElementById("tCinco").classList.add("HoverPos");


            /* -- Elemento Um (TELA) -- 03 -- */
            document.getElementById("zUm").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Dois (Bateria) -- 03 -- */
            document.getElementById("zDois").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Três (Botão Home) -- 03 -- */
            document.getElementById("zTres").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Quatro (Câmera) -- 03 -- */
            document.getElementById("zQuatro").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }
            /* -- Elemento Cinco (Placa) -- 03 -- */
            document.getElementById("zCinco").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }
            break;

        case inTel[4]:
            /* -- Xiaomi -- Tel -- 04 -- */
            document.getElementById("zUm").disabled = false;
            document.getElementById("zDois").disabled = true;
            document.getElementById("zTres").disabled = false;
            document.getElementById("zQuatro").disabled = true;
            document.getElementById("zCinco").disabled = true;

            document.getElementById("tUm").classList.add("Pos");
            document.getElementById("tDois").classList.add("Neg");
            document.getElementById("tTres").classList.add("Pos");
            document.getElementById("tQuatro").classList.add("Neg");
            document.getElementById("tCinco").classList.add("Neg");

            document.getElementById("tUm").classList.add("HoverPos");
            document.getElementById("tDois").classList.add("HoverNeg");
            document.getElementById("tTres").classList.add("HoverPos");
            document.getElementById("tQuatro").classList.add("HoverNeg");
            document.getElementById("tCinco").classList.add("HoverNeg");


            /* -- Elemento Um (TELA) -- 04 -- */
            document.getElementById("zUm").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Dois (Bateria) -- 04 -- */
            document.getElementById("zDois").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Três (Botão Home) -- 04 -- */
            document.getElementById("zTres").onclick = function () {
                if (this.checked) {
                    total += 2;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 2;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Quatro (Câmera) -- 04 -- */
            document.getElementById("zQuatro").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }

            /* -- Elemento Cinco (Placa) -- 04 -- */
            document.getElementById("zCinco").onclick = function () {
                if (this.checked) {
                    total += 1;
                    document.getElementById("total").textContent = total;
                } else {
                    total -= 1;
                    document.getElementById("total").textContent = total;
                }
            }
    }

}
/* v. SNAPSHOT 0.4 */
