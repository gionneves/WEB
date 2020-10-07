/*

Criando numeros aleatorios para senha
senha pode variar por isso é aleatorio
nada contra mas isso deixa mais desafiador

*/

var rng = 0;
var Us = "Test00";

function 


/*

A função gerar, serve para criar um RNG para a senha e dependendo desse numero pode vir coisas diferentes.

exemplo a se seguir > se for maior que 400 e menor que 700 pode ajudar na variação de dificuldade.

nesta função utiliza-se apenas como exemplo e valores aleatorios de produtos de 3º.

*/

function gerar() {
	while (rng < 777) {
        for (let i = 0; i < 10; i++) {
            rng = Math.floor(Math.random() * (999 + 1) + 1);
            //console.log(rng + " - for");
        }
        console.log(rng);
	}
	//console.log(rng)
}

/*

vBotao serve para verificar o botão quando pressionado, é ele que retorna o resultado apos a formatação.

*/

function vBotao(){
    //console.log(x);
	if (document.getElementById("inpPa").value == rng && document.getElementById("inpUs").value == Us) {
        //console.log("Pass");
        
         document.getElementById("divTxt").style.borderColor = "lime";
        
    } else {
        //console.log("Error");
        
        if (document.getElementById("inpPa").value != rng) {
            alert("Senha incorreta!");
        } else {
            alert("Login incorreto!");
        }
        
        document.getElementById("divTxt").style.borderColor = "red";
    }
}


gerar();