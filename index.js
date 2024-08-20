const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnHtmlCopiar = document.querySelector(".btn-copiar");

// 'La letra "e" es convertida para "enter"'
// 'La letra "i" es convertida para "imes"'
// 'La letra "a" es convertida para "ai"'
// 'La letra "o" es convertida para "ober"'
// 'La letra "u" es convertida para "ufat"'

const matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"]];
const invalidCharRegex = new RegExp(/[^a-zA-ZñÑ\s]/);

function encriptar(stringEncriptado) {

    stringEncriptado = stringEncriptado.toLowerCase()

    for (let index = 0; index < matrixCode.length; index++){
        if(stringEncriptado.includes(matrixCode[index][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrixCode[index][0], matrixCode[index][1])
        }
    }

    return stringEncriptado
}


function desencriptar(stringDesencriptado) {
 
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for (let index = 0; index < matrixCode.length; index++){
        if(stringDesencriptado.includes(matrixCode[index][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrixCode[index][1], matrixCode[index][0])
        }
    }

    return stringDesencriptado

}

function postAction(){
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    btnHtmlCopiar.style.display="block";

}

function btnEncriptar(){

    if (checkValidInput(textArea.value)){
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value =  textoEncriptado
        postAction()
    }
    else{
        actionInvalidInput();
    }
}

function btnDesencriptar(){
    if (checkValidInput(textArea.value)){
        const textDesencriptado = desencriptar(textArea.value)
        mensaje.value =  textDesencriptado
        postAction()
    }
    else{
        actionInvalidInput();
    }
}


function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}


function checkValidInput(inputString){
    if (invalidCharRegex.test(inputString)){
        return false;
    }
    else{
        return true;
    }
}

function actionInvalidInput(){
    alert('A ingresado un caracter invalido.');
}