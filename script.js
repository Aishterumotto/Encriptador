let inputMensaje = document.querySelector("#mensaje");
let inputResultado = document.querySelector("#resultado");
let btnEncriptar = document.querySelector("#btnEncriptar");
let btnDesencriptar = document.querySelector("#btnDesencriptar");
let btnCopiar = document.querySelector("#btnCopy");
let btnEscuchar = document.querySelector("#btnEscuchar");
const tarjeta1 = document.querySelector("#section1");

function validarMensaje() {
    // Borrar mensajes previos.
    let erroresPrevios = tarjeta1.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        tarjeta1.removeChild(err);
    }
    // Validar mensajes.
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    let no_valido = false;

    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra) || isNaN(letra) == false) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = `La letra ${letra} no es válida`;
            mensajeError.appendChild(p);
            no_valido = true;
        }
    }

    if (no_valido == true) {
        tarjeta1.appendChild(mensajeError);
        return false;
    }
    else {
        if (mensajeError.children.length === 0) {
            return true;
        }
    }
}

function encriptar() {
    if (!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
        .replaceAll("e", "enter")
        .replaceAll("o", "ober")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");

    inputResultado.value = mensajeEncriptado;
}

function desencriptar() {
    if (!validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value.toLowerCase();
    var mensaje = mensajeEncriptado
        .replaceAll("enter", "e")
        .replaceAll("ober", "o")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");

    inputResultado.value = mensaje;
}

function copiar() {
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}

function escuchar() {
    var mensajeEncriptado = inputResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnEscuchar.onclick = escuchar;
