const msj = document.querySelector(".texto_a_encriptar");
const act_msj = document.querySelector(".texto_encriptado");

function btnEncriptar() {
    if (containsUppercase(msj.value)) {
        alert("La cadena de texto contiene una letra en mayúscula!");
        act_msj.value = "";
        msj.value = "";
        act_msj.style.backgroundImage = "url('./img/muneco.png')";
    } else {
        const textoEncriptado = Encriptar(msj.value)
        act_msj.value = textoEncriptado
        msj.value = ""
        act_msj.style.backgroundImage = "none";
    }

}

function btnDesencriptar() {
    const textoDesencriptado = Desencriptar(msj.value)
    act_msj.value = textoDesencriptado
    msj.value = ""
}

function Encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    
    for (let i = 0; i<matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }       
    }
    return stringEncriptada
}

function Desencriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    
    for (let i = 0; i<matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }       
    }
    return stringEncriptada
}

function copyToClipBoard() {
    var content = document.getElementById('texto_encriptado');    
    content.select();
    document.execCommand('copy');
}

function containsUppercase(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            return true;
        }
    }
    return false;
}

