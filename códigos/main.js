/*
PROGRAMA NECESSITA DOS IDs.
INPUT: codigo
BUTTON: btnCod -> onclick="btnPress()"
P: textoVer

linklist deve ter OBRIGATOIAMENTE (https://www.)
*/


var list = ["", "", ""];
var linklist = ["", "", ""];
var code;

function veriCode() {
	for (let i = 0; i < list.length; i++) {
		if (code == list[i]) {
			window.open(linklist[i]);
		} else {
			console.log(i);
		}
	}
	//alert("Codigo '" + code + "' Inválido!")
}

function btnPress() {
	code = document.getElementById("codigo").value;
	//alert(code);
	veriCode();
}
