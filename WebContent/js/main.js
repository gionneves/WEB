var tel = ["iphone", "samsung", "asus", "motorola", "xiaomi", "Teste"];
var preco = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; /* <- Vetor de valores universal*/
var limitador = 2500,
	valorMaxAceito;
var inTel;
var min, max;
var total = 0;

function definePriceByPhone() {

	switch (inTel) {
		case tel[0]:
			min = 250;
			max = 600;
			for (let i = 0; i < preco.length; i++) {
				preco[i] = Math.floor(Math.random() * (min + max) + min);
				if (preco[i] < 0) {
					preco[i] += min;
				} else {

				}
			}


			break;
		case tel[1]:
			min = 300;
			max = 800;
			for (let i = 0; i < preco.length; i++) {
				preco[i] = Math.floor(Math.random() * (min + max) + min);
				if (preco[i] < 0) {
					preco[i] += min;
				} else {

				}
			}

			break;
		case tel[2]:
			min = 300;
			max = 800;
			for (let i = 0; i < preco.length; i++) {
				preco[i] = Math.floor(Math.random() * (min + max) + min);
				if (preco[i] < 0) {
					preco[i] += min;
				} else {

				}
			}

			break;
		case tel[3]:
			min = 300;
			max = 800;
			for (let i = 0; i < preco.length; i++) {
				preco[i] = Math.floor(Math.random() * (min + max) + min);
				if (preco[i] < 0) {
					preco[i] += min;
				} else {

				}
			}

			break;
		case tel[4]:
			min = 300;
			max = 800;
			for (let i = 0; i < preco.length; i++) {
				preco[i] = Math.floor(Math.random() * (min + max) + min);
				if (preco[i] < 0) {
					preco[i] += min;
				} else {

				}
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
	document.getElementById("tSeis").classList.remove("HoverPos");
	document.getElementById("tSete").classList.remove("HoverPos");
	document.getElementById("tOito").classList.remove("HoverPos");
	document.getElementById("tNove").classList.remove("HoverPos");
	document.getElementById("tDez").classList.remove("HoverPos");
	document.getElementById("tOnze").classList.remove("HoverPos");
	document.getElementById("tDoze").classList.remove("HoverPos");
	document.getElementById("tTreze").classList.remove("HoverPos");
	document.getElementById("tCatorze").classList.remove("HoverPos");
	document.getElementById("tQuinze").classList.remove("HoverPos");

	document.getElementById("tUm").classList.remove("HoverNeg");
	document.getElementById("tDois").classList.remove("HoverNeg");
	document.getElementById("tTres").classList.remove("HoverNeg");
	document.getElementById("tQuatro").classList.remove("HoverNeg");
	document.getElementById("tCinco").classList.remove("HoverNeg");
	document.getElementById("tSeis").classList.remove("HoverNeg");
	document.getElementById("tSete").classList.remove("HoverNeg");
	document.getElementById("tOito").classList.remove("HoverNeg");
	document.getElementById("tNove").classList.remove("HoverNeg");
	document.getElementById("tDez").classList.remove("HoverNeg");
	document.getElementById("tOnze").classList.remove("HoverNeg");
	document.getElementById("tDoze").classList.remove("HoverNeg");
	document.getElementById("tTreze").classList.remove("HoverNeg");
	document.getElementById("tCatorze").classList.remove("HoverNeg");
	document.getElementById("tQuinze").classList.remove("HoverNeg");

	document.getElementById("tUm").classList.remove("Pos");
	document.getElementById("tDois").classList.remove("Pos");
	document.getElementById("tTres").classList.remove("Pos");
	document.getElementById("tQuatro").classList.remove("Pos");
	document.getElementById("tCinco").classList.remove("Pos");
	document.getElementById("tSeis").classList.remove("Pos");
	document.getElementById("tSete").classList.remove("Pos");
	document.getElementById("tOito").classList.remove("Pos");
	document.getElementById("tNove").classList.remove("Pos");
	document.getElementById("tDez").classList.remove("Pos");
	document.getElementById("tOnze").classList.remove("Pos");
	document.getElementById("tDoze").classList.remove("Pos");
	document.getElementById("tTreze").classList.remove("Pos");
	document.getElementById("tCatorze").classList.remove("Pos");
	document.getElementById("tQuinze").classList.remove("Pos");

	document.getElementById("tUm").classList.remove("Neg");
	document.getElementById("tDois").classList.remove("Neg");
	document.getElementById("tTres").classList.remove("Neg");
	document.getElementById("tQuatro").classList.remove("Neg");
	document.getElementById("tCinco").classList.remove("Neg");
	document.getElementById("tSeis").classList.remove("Neg");
	document.getElementById("tSete").classList.remove("Neg");
	document.getElementById("tOito").classList.remove("Neg");
	document.getElementById("tNove").classList.remove("Neg");
	document.getElementById("tDez").classList.remove("Neg");
	document.getElementById("tOnze").classList.remove("Neg");
	document.getElementById("tDoze").classList.remove("Neg");
	document.getElementById("tTreze").classList.remove("Neg");
	document.getElementById("tCatorze").classList.remove("Neg");
	document.getElementById("tQuinze").classList.remove("Neg");

	document.getElementById("zUm").checked = false;
	document.getElementById("zDois").checked = false;
	document.getElementById("zTres").checked = false;
	document.getElementById("zQuatro").checked = false;
	document.getElementById("zCinco").checked = false;
	document.getElementById("zSeis").checked = false;
	document.getElementById("zSete").checked = false;
	document.getElementById("zOito").checked = false;
	document.getElementById("zNove").checked = false;
	document.getElementById("zDez").checked = false;
	document.getElementById("zOnze").checked = false;
	document.getElementById("zDoze").checked = false;
	document.getElementById("zTreze").checked = false;
	document.getElementById("zCatorze").checked = false;
	document.getElementById("zQuinze").checked = false;

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

			/* -- Ativa e desativa o Checkbox -- */
			document.getElementById("zUm").disabled = false;
			document.getElementById("zDois").disabled = true;
			document.getElementById("zTres").disabled = false;
			document.getElementById("zQuatro").disabled = true;
			document.getElementById("zCinco").disabled = true;
			document.getElementById("zSeis").disabled = false;
			document.getElementById("zSete").disabled = true;
			document.getElementById("zOito").disabled = false;
			document.getElementById("zNove").disabled = true;
			document.getElementById("zDez").disabled = true;
			document.getElementById("zOnze").disabled = false;
			document.getElementById("zDoze").disabled = true;
			document.getElementById("zTreze").disabled = false;
			document.getElementById("zCatorze").disabled = true;
			document.getElementById("zQuinze").disabled = true;


			/* -- Define o brilho, se está positivo ou negativo -- */
			document.getElementById("tUm").classList.add("Pos");
			document.getElementById("tDois").classList.add("Neg");
			document.getElementById("tTres").classList.add("Pos");
			document.getElementById("tQuatro").classList.add("Neg");
			document.getElementById("tCinco").classList.add("Neg");
			document.getElementById("tSeis").classList.add("Pos");
			document.getElementById("tSete").classList.add("Neg");
			document.getElementById("tOito").classList.add("Pos");
			document.getElementById("tNove").classList.add("Neg");
			document.getElementById("tDez").classList.add("Neg");
			document.getElementById("tOnze").classList.add("Pos");
			document.getElementById("tDoze").classList.add("Neg");
			document.getElementById("tTreze").classList.add("Pos");
			document.getElementById("tCatorze").classList.add("Neg");
			document.getElementById("tQuinze").classList.add("Neg");


			/* -- Define qual cor aparecera atras de cada opção*/
			document.getElementById("tUm").classList.add("HoverPos");
			document.getElementById("tDois").classList.add("HoverNeg");
			document.getElementById("tTres").classList.add("HoverPos");
			document.getElementById("tQuatro").classList.add("HoverNeg");
			document.getElementById("tCinco").classList.add("HoverNeg");
			document.getElementById("tSeis").classList.add("HoverPos");
			document.getElementById("tSete").classList.add("HoverNeg");
			document.getElementById("tOito").classList.add("HoverPos");
			document.getElementById("tNove").classList.add("HoverNeg");
			document.getElementById("tDez").classList.add("HoverNeg");
			document.getElementById("tOnze").classList.add("HoverPos");
			document.getElementById("tDoze").classList.add("HoverNeg");
			document.getElementById("tTreze").classList.add("HoverPos");
			document.getElementById("tCatorze").classList.add("HoverNeg");
			document.getElementById("tQuinze").classList.add("HoverNeg");


			/* -- Elemento Um (TELA) -- 00 -- */
			document.getElementById("zUm").onclick = function () {
				if (this.checked) {
					total += preco[0];
					document.getElementById("tUm").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[0];
					document.getElementById("tUm").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dois (Bateria) -- 00 -- */
			document.getElementById("zDois").onclick = function () {
				if (this.checked) {
					total += preco[1];
					document.getElementById("tDoist").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[1];
					document.getElementById("tDois").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Três (Botão Home) -- 00 -- */
			document.getElementById("zTres").onclick = function () {
				if (this.checked) {
					total += preco[2];
					document.getElementById("tTres").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[2];
					document.getElementById("tTres").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Quatro (Câmera) -- 00 -- */
			document.getElementById("zQuatro").onclick = function () {
				if (this.checked) {
					total += preco[3];
					document.getElementById("tQuatro").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[3];
					document.getElementById("tQuatro").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Cinco (Placa) -- 00 -- */
			document.getElementById("zCinco").onclick = function () {
				if (this.checked) {
					total += preco[4];
					document.getElementById("tCinco").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[4];
					document.getElementById("tCinco").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Seis (Câmera traseira) -- 00 -- */
			document.getElementById("zSeis").onclick = function () {
				if (this.checked) {
					total += preco[5];
					document.getElementById("tSeis").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[5];
					document.getElementById("tSeis").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Sete (Conector de carga) -- 00 -- */
			document.getElementById("zSete").onclick = function () {
				if (this.checked) {
					total += preco[6];
					document.getElementById("tSete").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[6];
					document.getElementById("tSete").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Oito (Microfone) -- 00 -- */
			document.getElementById("zOito").onclick = function () {
				if (this.checked) {
					total += preco[7];
					document.getElementById("tOito").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[7];
					document.getElementById("tOito").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Nove (Alto falante) -- 00 -- */
			document.getElementById("zNove").onclick = function () {
				if (this.checked) {
					total += preco[8];
					document.getElementById("tNove").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[8];
					document.getElementById("tNove").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dez (Alto falante auricular) -- 00 -- */
			document.getElementById("zDez").onclick = function () {
				if (this.checked) {
					total += preco[9];
					document.getElementById("tDez").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[9];
					document.getElementById("tDez").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Onze (Tampa trasera) -- 00 --*/
			document.getElementById("zOnze").onclick = function () {
				if (this.checked) {
					total += preco[10];
					document.getElementById("tOnze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[10];
					document.getElementById("tOnze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Doze (Conector de fone) -- 00 -- */
			document.getElementById("zDoze").onclick = function () {
				if (this.checked) {
					total += preco[11];
					document.getElementById("tDoze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[11];
					document.getElementById("tDoze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- elemento treze (Antena) -- 00 -- */
			document.getElementById("zTreze").onclick = function () {
				if (this.checked) {
					total += preco[12];
					document.getElementById("tTreze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[12];
					document.getElementById("tTreze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Catorze (Leitor de chip) -- 00 -- */
			document.getElementById("zCatorze").onclick = function () {
				if (this.checked) {
					total += preco[13];
					document.getElementById("tCatorze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[13];
					document.getElementById("tCatorze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento quinze (Senso de proximidade) -- 00 -- */
			document.getElementById("zQuinze").onclick = function () {
				if (this.checked) {
					total += preco[14];
					document.getElementById("tQuinze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[14];
					document.getElementById("tQuinze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}
			break;

		case tel[1]:
			/* -- Samsung -- Tel -- 01 -- */

			/* -- Ativa e desativa o Checkbox -- */
			document.getElementById("zUm").disabled = true;
			document.getElementById("zDois").disabled = true;
			document.getElementById("zTres").disabled = false;
			document.getElementById("zQuatro").disabled = true;
			document.getElementById("zCinco").disabled = false;
			document.getElementById("zSeis").disabled = false;
			document.getElementById("zSete").disabled = true;
			document.getElementById("zOito").disabled = false;
			document.getElementById("zNove").disabled = true;
			document.getElementById("zDez").disabled = true;
			document.getElementById("zOnze").disabled = false;
			document.getElementById("zDoze").disabled = true;
			document.getElementById("zTreze").disabled = false;
			document.getElementById("zCatorze").disabled = true;
			document.getElementById("zQuinze").disabled = true;

			/* -- Define o brilho, se está positivo ou negativo -- */
			document.getElementById("tUm").classList.add("Neg");
			document.getElementById("tDois").classList.add("Neg");
			document.getElementById("tTres").classList.add("Pos");
			document.getElementById("tQuatro").classList.add("Neg");
			document.getElementById("tCinco").classList.add("Pos");
			document.getElementById("tSeis").classList.add("Pos");
			document.getElementById("tSete").classList.add("Neg");
			document.getElementById("tOito").classList.add("Pos");
			document.getElementById("tNove").classList.add("Pos");
			document.getElementById("tDez").classList.add("Neg");
			document.getElementById("tOnze").classList.add("Pos");
			document.getElementById("tDoze").classList.add("Neg");
			document.getElementById("tTreze").classList.add("Pos");
			document.getElementById("tCatorze").classList.add("Neg");
			document.getElementById("tQuinze").classList.add("Neg");


			/* -- Define qual cor aparecera atras de cada opção*/
			document.getElementById("tUm").classList.add("HoverNeg");
			document.getElementById("tDois").classList.add("HoverNeg");
			document.getElementById("tTres").classList.add("HoverPos");
			document.getElementById("tQuatro").classList.add("HoverNeg");
			document.getElementById("tCinco").classList.add("HoverPos");
			document.getElementById("tSeis").classList.add("HoverPos");
			document.getElementById("tSete").classList.add("HoverNeg");
			document.getElementById("tOito").classList.add("HoverPos");
			document.getElementById("tNove").classList.add("HoverPos");
			document.getElementById("tDez").classList.add("HoverNeg");
			document.getElementById("tOnze").classList.add("HoverPos");
			document.getElementById("tDoze").classList.add("HoverNeg");
			document.getElementById("tTreze").classList.add("HoverPos");
			document.getElementById("tCatorze").classList.add("HoverNeg");
			document.getElementById("tQuinze").classList.add("HoverNeg");


			/* -- Elemento Um (TELA) -- 01 -- */
			document.getElementById("zUm").onclick = function () {
				if (this.checked) {
					total += preco[0];
					document.getElementById("tUm").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[0];
					document.getElementById("tUm").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dois (Bateria) -- 01 -- */
			document.getElementById("zDois").onclick = function () {
				if (this.checked) {
					total += preco[1];
					document.getElementById("tDoist").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[1];
					document.getElementById("tDois").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Três (Botão Home) -- 01 -- */
			document.getElementById("zTres").onclick = function () {
				if (this.checked) {
					total += preco[2];
					document.getElementById("tTres").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[2];
					document.getElementById("tTres").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Quatro (Câmera) -- 01 -- */
			document.getElementById("zQuatro").onclick = function () {
				if (this.checked) {
					total += preco[3];
					document.getElementById("tQuatro").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[3];
					document.getElementById("tQuatro").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Cinco (Placa) -- 01 -- */
			document.getElementById("zCinco").onclick = function () {
				if (this.checked) {
					total += preco[4];
					document.getElementById("tCinco").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[4];
					document.getElementById("tCinco").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Seis (Câmera traseira) -- 01 -- */
			document.getElementById("zSeis").onclick = function () {
				if (this.checked) {
					total += preco[5];
					document.getElementById("tSeis").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[5];
					document.getElementById("tSeis").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Sete (Conector de carga) -- 01 -- */
			document.getElementById("zSete").onclick = function () {
				if (this.checked) {
					total += preco[6];
					document.getElementById("tSete").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[6];
					document.getElementById("tSete").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Oito (Microfone) -- 01 -- */
			document.getElementById("zOito").onclick = function () {
				if (this.checked) {
					total += preco[7];
					document.getElementById("tOito").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[7];
					document.getElementById("tOito").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Nove (Alto falante) -- 01 -- */
			document.getElementById("zNove").onclick = function () {
				if (this.checked) {
					total += preco[8];
					document.getElementById("tNove").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[8];
					document.getElementById("tNove").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dez (Alto falante auricular) -- 01 -- */
			document.getElementById("zDez").onclick = function () {
				if (this.checked) {
					total += preco[9];
					document.getElementById("tDez").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[9];
					document.getElementById("tDez").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Onze (Tampa trasera) -- 01 --*/
			document.getElementById("zOnze").onclick = function () {
				if (this.checked) {
					total += preco[10];
					document.getElementById("tOnze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[10];
					document.getElementById("tOnze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Doze (Conector de fone) -- 01 -- */
			document.getElementById("zDoze").onclick = function () {
				if (this.checked) {
					total += preco[11];
					document.getElementById("tDoze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[11];
					document.getElementById("tDoze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- elemento treze (Antena) -- 01 -- */
			document.getElementById("zTreze").onclick = function () {
				if (this.checked) {
					total += preco[12];
					document.getElementById("tTreze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[12];
					document.getElementById("tTreze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Catorze (Leitor de chip) -- 01 -- */
			document.getElementById("zCatorze").onclick = function () {
				if (this.checked) {
					total += preco[13];
					document.getElementById("tCatorze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[13];
					document.getElementById("tCatorze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento quinze (Senso de proximidade) -- 01 -- */
			document.getElementById("zQuinze").onclick = function () {
				if (this.checked) {
					total += preco[14];
					document.getElementById("tQuinze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[14];
					document.getElementById("tQuinze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}
			break;

		case tel[2]:
			/* -- Asus -- Tel -- 02 -- */

			/* -- Ativa e desativa o Checkbox -- */
			document.getElementById("zUm").disabled = false;
			document.getElementById("zDois").disabled = true;
			document.getElementById("zTres").disabled = false;
			document.getElementById("zQuatro").disabled = false;
			document.getElementById("zCinco").disabled = false;
			document.getElementById("zSeis").disabled = false;
			document.getElementById("zSete").disabled = true;
			document.getElementById("zOito").disabled = true;
			document.getElementById("zNove").disabled = true;
			document.getElementById("zDez").disabled = true;
			document.getElementById("zOnze").disabled = false;
			document.getElementById("zDoze").disabled = false;
			document.getElementById("zTreze").disabled = false;
			document.getElementById("zCatorze").disabled = false;
			document.getElementById("zQuinze").disabled = true;

			/* -- Define o brilho, se está positivo ou negativo -- */
			document.getElementById("tUm").classList.add("Pos");
			document.getElementById("tDois").classList.add("Neg");
			document.getElementById("tTres").classList.add("Pos");
			document.getElementById("tQuatro").classList.add("Pos");
			document.getElementById("tCinco").classList.add("Pos");
			document.getElementById("tSeis").classList.add("Pos");
			document.getElementById("tSete").classList.add("Neg");
			document.getElementById("tOito").classList.add("Neg");
			document.getElementById("tNove").classList.add("Neg");
			document.getElementById("tDez").classList.add("Neg");
			document.getElementById("tOnze").classList.add("Pos");
			document.getElementById("tDoze").classList.add("Pos");
			document.getElementById("tTreze").classList.add("Pos");
			document.getElementById("tCatorze").classList.add("Pos");
			document.getElementById("tQuinze").classList.add("Neg");


			/* -- Define qual cor aparecera atras de cada opção*/
			document.getElementById("tUm").classList.add("HoverPos");
			document.getElementById("tDois").classList.add("HoverNeg");
			document.getElementById("tTres").classList.add("HoverPos");
			document.getElementById("tQuatro").classList.add("HoverPos");
			document.getElementById("tCinco").classList.add("HoverPos");
			document.getElementById("tSeis").classList.add("HoverPos");
			document.getElementById("tSete").classList.add("HoverNeg");
			document.getElementById("tOito").classList.add("HoverNeg");
			document.getElementById("tNove").classList.add("HoverNeg");
			document.getElementById("tDez").classList.add("HoverNeg");
			document.getElementById("tOnze").classList.add("HoverPos");
			document.getElementById("tDoze").classList.add("HoverPos");
			document.getElementById("tTreze").classList.add("HoverPos");
			document.getElementById("tCatorze").classList.add("HoverPos");
			document.getElementById("tQuinze").classList.add("HoverNeg");



			/* -- Elemento Um (TELA) -- 02 -- */
			document.getElementById("zUm").onclick = function () {
				if (this.checked) {
					total += preco[0];
					document.getElementById("tUm").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[0];
					document.getElementById("tUm").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dois (Bateria) -- 02 -- */
			document.getElementById("zDois").onclick = function () {
				if (this.checked) {
					total += preco[1];
					document.getElementById("tDoist").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[1];
					document.getElementById("tDois").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Três (Botão Home) -- 02 -- */
			document.getElementById("zTres").onclick = function () {
				if (this.checked) {
					total += preco[2];
					document.getElementById("tTres").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[2];
					document.getElementById("tTres").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Quatro (Câmera) -- 02 -- */
			document.getElementById("zQuatro").onclick = function () {
				if (this.checked) {
					total += preco[3];
					document.getElementById("tQuatro").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[3];
					document.getElementById("tQuatro").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Cinco (Placa) -- 02 -- */
			document.getElementById("zCinco").onclick = function () {
				if (this.checked) {
					total += preco[4];
					document.getElementById("tCinco").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[4];
					document.getElementById("tCinco").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Seis (Câmera traseira) -- 02 -- */
			document.getElementById("zSeis").onclick = function () {
				if (this.checked) {
					total += preco[5];
					document.getElementById("tSeis").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[5];
					document.getElementById("tSeis").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Sete (Conector de carga) -- 02 -- */
			document.getElementById("zSete").onclick = function () {
				if (this.checked) {
					total += preco[6];
					document.getElementById("tSete").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[6];
					document.getElementById("tSete").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Oito (Microfone) -- 02 -- */
			document.getElementById("zOito").onclick = function () {
				if (this.checked) {
					total += preco[7];
					document.getElementById("tOito").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[7];
					document.getElementById("tOito").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Nove (Alto falante) -- 02 -- */
			document.getElementById("zNove").onclick = function () {
				if (this.checked) {
					total += preco[8];
					document.getElementById("tNove").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[8];
					document.getElementById("tNove").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dez (Alto falante auricular) -- 02 -- */
			document.getElementById("zDez").onclick = function () {
				if (this.checked) {
					total += preco[9];
					document.getElementById("tDez").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[9];
					document.getElementById("tDez").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Onze (Tampa trasera) -- 02 --*/
			document.getElementById("zOnze").onclick = function () {
				if (this.checked) {
					total += preco[10];
					document.getElementById("tOnze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[10];
					document.getElementById("tOnze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Doze (Conector de fone) -- 02 -- */
			document.getElementById("zDoze").onclick = function () {
				if (this.checked) {
					total += preco[11];
					document.getElementById("tDoze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[11];
					document.getElementById("tDoze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- elemento treze (Antena) -- 02 -- */
			document.getElementById("zTreze").onclick = function () {
				if (this.checked) {
					total += preco[12];
					document.getElementById("tTreze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[12];
					document.getElementById("tTreze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Catorze (Leitor de chip) -- 02 -- */
			document.getElementById("zCatorze").onclick = function () {
				if (this.checked) {
					total += preco[13];
					document.getElementById("tCatorze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[13];
					document.getElementById("tCatorze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento quinze (Senso de proximidade) -- 02 -- */
			document.getElementById("zQuinze").onclick = function () {
				if (this.checked) {
					total += preco[14];
					document.getElementById("tQuinze").style.fontWeight = "bold";
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[14];
					document.getElementById("tQuinze").style.fontWeight = "normal";
					document.getElementById("total").textContent = total;
				}
			}
			break;

		case tel[3]:
			/* -- Motorola -- Tel -- 03 -- */

			/* -- Ativa e desativa o Checkbox -- */
			document.getElementById("zUm").disabled = false;
			document.getElementById("zDois").disabled = false;
			document.getElementById("zTres").disabled = false;
			document.getElementById("zQuatro").disabled = false;
			document.getElementById("zCinco").disabled = true;
			document.getElementById("zSeis").disabled = false;
			document.getElementById("zSete").disabled = true;
			document.getElementById("zOito").disabled = false;
			document.getElementById("zNove").disabled = false;
			document.getElementById("zDez").disabled = true;
			document.getElementById("zOnze").disabled = false;
			document.getElementById("zDoze").disabled = true;
			document.getElementById("zTreze").disabled = false;
			document.getElementById("zCatorze").disabled = true;
			document.getElementById("zQuinze").disabled = false;

			/* -- Define o brilho, se está positivo ou negativo -- */
			document.getElementById("tUm").classList.add("Pos");
			document.getElementById("tDois").classList.add("Pos");
			document.getElementById("tTres").classList.add("Pos");
			document.getElementById("tQuatro").classList.add("Pos");
			document.getElementById("tCinco").classList.add("Neg");
			document.getElementById("tSeis").classList.add("Pos");
			document.getElementById("tSete").classList.add("Neg");
			document.getElementById("tOito").classList.add("Pos");
			document.getElementById("tNove").classList.add("Pos");
			document.getElementById("tDez").classList.add("Neg");
			document.getElementById("tOnze").classList.add("Pos");
			document.getElementById("tDoze").classList.add("Neg");
			document.getElementById("tTreze").classList.add("Pos");
			document.getElementById("tCatorze").classList.add("Neg");
			document.getElementById("tQuinze").classList.add("Pos");


			/* -- Define qual cor aparecera atras de cada opção*/
			document.getElementById("tUm").classList.add("HoverPos");
			document.getElementById("tDois").classList.add("HoverPos");
			document.getElementById("tTres").classList.add("HoverPos");
			document.getElementById("tQuatro").classList.add("HoverPos");
			document.getElementById("tCinco").classList.add("HoverNeg");
			document.getElementById("tSeis").classList.add("HoverPos");
			document.getElementById("tSete").classList.add("HoverNeg");
			document.getElementById("tOito").classList.add("HoverPos");
			document.getElementById("tNove").classList.add("HoverPos");
			document.getElementById("tDez").classList.add("HoverNeg");
			document.getElementById("tOnze").classList.add("HoverPos");
			document.getElementById("tDoze").classList.add("HoverNeg");
			document.getElementById("tTreze").classList.add("HoverPos");
			document.getElementById("tCatorze").classList.add("HoverNeg");
			document.getElementById("tQuinze").classList.add("HoverPos");


			/* -- Elemento Um (TELA) -- 03 -- */
			document.getElementById("zUm").onclick = function () {
				if (this.checked) {
					total += preco[0];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[0];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dois (Bateria) -- 03 -- */
			document.getElementById("zDois").onclick = function () {
				if (this.checked) {
					total += preco[1];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[1];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Três (Botão Home) -- 03 -- */
			document.getElementById("zTres").onclick = function () {
				if (this.checked) {
					total += preco[2];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[2];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Quatro (Câmera) -- 03 -- */
			document.getElementById("zQuatro").onclick = function () {
				if (this.checked) {
					total += preco[3];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[3];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Cinco (Placa) -- 03 -- */
			document.getElementById("zCinco").onclick = function () {
				if (this.checked) {
					total += preco[4];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[4];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Seis (Câmera traseira) -- 03 -- */
			document.getElementById("zSeis").onclick = function () {
				if (this.checked) {
					total += preco[5];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[5];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Sete (Conector de carga) -- 03 -- */
			document.getElementById("zSete").onclick = function () {
				if (this.checked) {
					total += preco[6];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[6];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Oito (Microfone) -- 03 -- */
			document.getElementById("zOito").onclick = function () {
				if (this.checked) {
					total += preco[7];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[7];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Nove (Alto falante) -- 03 -- */
			document.getElementById("zNove").onclick = function () {
				if (this.checked) {
					total += preco[8];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[8];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dez (Alto falante auricular) -- 03 -- */
			document.getElementById("zDez").onclick = function () {
				if (this.checked) {
					total += preco[9];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[9];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Onze (Tampa trasera) -- 03 --*/
			document.getElementById("zOnze").onclick = function () {
				if (this.checked) {
					total += preco[10];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[10];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Doze (Conector de fone) -- 03 -- */
			document.getElementById("zDoze").onclick = function () {
				if (this.checked) {
					total += preco[11];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[11];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- elemento treze (Antena) -- 03 -- */
			document.getElementById("zTreze").onclick = function () {
				if (this.checked) {
					total += preco[12];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[12];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Catorze (Leitor de chip) -- 03 -- */
			document.getElementById("zCatorze").onclick = function () {
				if (this.checked) {
					total += preco[13];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[13];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento quinze (Senso de proximidade) -- 03 -- */
			document.getElementById("zQuinze").onclick = function () {
				if (this.checked) {
					total += preco[14];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[14];
					document.getElementById("total").textContent = total;
				}
			}
			break;

		case inTel[4]:
			/* -- Xiaomi -- Tel -- 04 -- */

			/* -- Ativa e desativa o Checkbox -- */
			document.getElementById("zUm").disabled = false;
			document.getElementById("zDois").disabled = false;
			document.getElementById("zTres").disabled = false;
			document.getElementById("zQuatro").disabled = true;
			document.getElementById("zCinco").disabled = false;
			document.getElementById("zSeis").disabled = false;
			document.getElementById("zSete").disabled = true;
			document.getElementById("zOito").disabled = false;
			document.getElementById("zNove").disabled = true;
			document.getElementById("zDez").disabled = true;
			document.getElementById("zOnze").disabled = false;
			document.getElementById("zDoze").disabled = true;
			document.getElementById("zTreze").disabled = false;
			document.getElementById("zCatorze").disabled = true;
			document.getElementById("zQuinze").disabled = true;

			/* -- Define o brilho, se está positivo ou negativo -- */
			document.getElementById("tUm").classList.add("Pos");
			document.getElementById("tDois").classList.add("Pos");
			document.getElementById("tTres").classList.add("Pos");
			document.getElementById("tQuatro").classList.add("Neg");
			document.getElementById("tCinco").classList.add("Pos");
			document.getElementById("tSeis").classList.add("Pos");
			document.getElementById("tSete").classList.add("Neg");
			document.getElementById("tOito").classList.add("Pos");
			document.getElementById("tNove").classList.add("Neg");
			document.getElementById("tDez").classList.add("Neg");
			document.getElementById("tOnze").classList.add("Pos");
			document.getElementById("tDoze").classList.add("Neg");
			document.getElementById("tTreze").classList.add("Pos");
			document.getElementById("tCatorze").classList.add("Neg");
			document.getElementById("tQuinze").classList.add("Neg");


			/* -- Define qual cor aparecera atras de cada opção*/
			document.getElementById("tUm").classList.add("HoverPos");
			document.getElementById("tDois").classList.add("HoverPos");
			document.getElementById("tTres").classList.add("HoverPos");
			document.getElementById("tQuatro").classList.add("HoverNeg");
			document.getElementById("tCinco").classList.add("HoverPos");
			document.getElementById("tSeis").classList.add("HoverPos");
			document.getElementById("tSete").classList.add("HoverNeg");
			document.getElementById("tOito").classList.add("HoverPos");
			document.getElementById("tNove").classList.add("HoverNeg");
			document.getElementById("tDez").classList.add("HoverNeg");
			document.getElementById("tOnze").classList.add("HoverPos");
			document.getElementById("tDoze").classList.add("HoverNeg");
			document.getElementById("tTreze").classList.add("HoverPos");
			document.getElementById("tCatorze").classList.add("HoverNeg");
			document.getElementById("tQuinze").classList.add("HoverNeg");


			/* -- Elemento Um (TELA) -- 04 -- */
			document.getElementById("zUm").onclick = function () {
				if (this.checked) {
					total += preco[0];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[0];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dois (Bateria) -- 04 -- */
			document.getElementById("zDois").onclick = function () {
				if (this.checked) {
					total += preco[1];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[1];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Três (Botão Home) -- 04 -- */
			document.getElementById("zTres").onclick = function () {
				if (this.checked) {
					total += preco[2];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[2];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Quatro (Câmera) -- 04 -- */
			document.getElementById("zQuatro").onclick = function () {
				if (this.checked) {
					total += preco[3];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[3];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Cinco (Placa) -- 04 -- */
			document.getElementById("zCinco").onclick = function () {
				if (this.checked) {
					total += preco[4];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[4];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Seis (Câmera traseira) -- 04 -- */
			document.getElementById("zSeis").onclick = function () {
				if (this.checked) {
					total += preco[5];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[5];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Sete (Conector de carga) -- 04 -- */
			document.getElementById("zSete").onclick = function () {
				if (this.checked) {
					total += preco[6];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[6];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Oito (Microfone) -- 04 -- */
			document.getElementById("zOito").onclick = function () {
				if (this.checked) {
					total += preco[7];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[7];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Nove (Alto falante) -- 04 -- */
			document.getElementById("zNove").onclick = function () {
				if (this.checked) {
					total += preco[8];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[8];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Dez (Alto falante auricular) -- 04 -- */
			document.getElementById("zDez").onclick = function () {
				if (this.checked) {
					total += preco[9];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[9];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Onze (Tampa trasera) -- 04 --*/
			document.getElementById("zOnze").onclick = function () {
				if (this.checked) {
					total += preco[10];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[10];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Doze (Conector de fone) -- 04 -- */
			document.getElementById("zDoze").onclick = function () {
				if (this.checked) {
					total += preco[11];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[11];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- elemento treze (Antena) -- 04 -- */
			document.getElementById("zTreze").onclick = function () {
				if (this.checked) {
					total += preco[12];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[12];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento Catorze (Leitor de chip) -- 04 -- */
			document.getElementById("zCatorze").onclick = function () {
				if (this.checked) {
					total += preco[13];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[13];
					document.getElementById("total").textContent = total;
				}
			}

			/* -- Elemento quinze (Senso de proximidade) -- 04 -- */
			document.getElementById("zQuinze").onclick = function () {
				if (this.checked) {
					total += preco[14];
					document.getElementById("total").textContent = total;
				} else {
					total -= preco[14];
					document.getElementById("total").textContent = total;
				}
			}
			break;
	}

}

/*6487*/

/* v. SNAPSHOT 0.5 */
