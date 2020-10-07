var tel = ["iphone", "samsung", "asus", "motorola", "xiaomi", "Teste"];
var inTel;

function clearClasses() {
    
    document.getElementById("tUm").classList.remove("HoverPos");
    document.getElementById("tDois").classList.remove("HoverPos");
    document.getElementById("tTres").classList.remove("HoverPos");
    document.getElementById("tQuatro").classList.remove("HoverPos");
    
    document.getElementById("tUm").classList.remove("HoverNeg");
    document.getElementById("tDois").classList.remove("HoverNeg");
    document.getElementById("tTres").classList.remove("HoverNeg");
    document.getElementById("tQuatro").classList.remove("HoverNeg");
    
    document.getElementById("tUm").classList.remove("Pos");
    document.getElementById("tDois").classList.remove("Pos");
    document.getElementById("tTres").classList.remove("Pos");
    document.getElementById("tQuatro").classList.remove("Pos");
    
    document.getElementById("tUm").classList.remove("Neg");
    document.getElementById("tDois").classList.remove("Neg");
    document.getElementById("tTres").classList.remove("Neg");
    document.getElementById("tQuatro").classList.remove("Neg");
    
}

function getTextFromInput() {
    
    clearClasses();
    
    inTel = document.getElementById("phones").value;
    inTel = inTel.toLowerCase();
    
    switch(inTel){
        case tel[0]:
            document.getElementById("zUm").disabled = false;
            document.getElementById("zDois").disabled = true;
            document.getElementById("zTres").disabled = false;
            document.getElementById("zQuatro").disabled = true;
            
            document.getElementById("tUm").classList.add("Pos");
            document.getElementById("tDois").classList.add("Neg");
            document.getElementById("tTres").classList.add("Pos");
            document.getElementById("tQuatro").classList.add("Neg");
            
            document.getElementById("tUm").classList.add("HoverPos");
            document.getElementById("tDois").classList.add("HoverNeg");
            document.getElementById("tTres").classList.add("HoverPos");
            document.getElementById("tQuatro").classList.add("HoverNeg");
            break;
            
        case tel[1]:
            document.getElementById("zUm").disabled = true;
            document.getElementById("zDois").disabled = false;
            document.getElementById("zTres").disabled = false;
            document.getElementById("zQuatro").disabled = true;
            
            document.getElementById("tUm").classList.add("Neg");
            document.getElementById("tDois").classList.add("Neg");
            document.getElementById("tTres").classList.add("Pos");
            document.getElementById("tQuatro").classList.add("Neg");
            
            document.getElementById("tUm").classList.add("HoverNeg");
            document.getElementById("tDois").classList.add("HoverPos");
            document.getElementById("tTres").classList.add("HoverPos");
            document.getElementById("tQuatro").classList.add("HoverNeg");
            break;
            
        case tel[2]:
            document.getElementById("zUm").disabled = false;
            document.getElementById("zDois").disabled = false;
            document.getElementById("zTres").disabled = true;
            document.getElementById("zQuatro").disabled = false;
            
            document.getElementById("tUm").classList.add("Pos");
            document.getElementById("tDois").classList.add("Pos");
            document.getElementById("tTres").classList.add("Neg");
            document.getElementById("tQuatro").classList.add("Pos");
            
            document.getElementById("tUm").classList.add("HoverPos");
            document.getElementById("tDois").classList.add("HoverPos");
            document.getElementById("tTres").classList.add("HoverNeg");
            document.getElementById("tQuatro").classList.add("HoverPos");
            break;
            
    }
    
}