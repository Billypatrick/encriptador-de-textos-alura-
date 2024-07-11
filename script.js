const texto_encriptado = document.querySelector(".texto-encriptado");
const texto_mensaje = document.querySelector(".texto-mensaje");
const boton__copiar = document.querySelector(".boton__Copiar");
const advertencia = document.getElementById("advertencia");
const boton__encriptar = document.querySelector(".boton__Encriptar");
const boton__desencriptar = document.querySelector(".boton__Desencriptar");


document.addEventListener("click", function (event) {
    if (advertencia.style.display === "block" && !advertencia.contains(event.target) &&
        !boton__encriptar.contains(event.target) && !boton__desencriptar.contains(event.target)) {
        closeWarning();
    }
});

const matrix_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function boton__Encriptar() {
    encriptar(texto_encriptado.value);
}

function boton__Desencriptar() {
    desencriptar(texto_encriptado.value);
}

function encriptar(frase) {
    if (isEmpty()) {
        advertencia.style.display = "block";
    } else {
        checkWidth();
        for (let i = 0; i < matrix_code.length; i++) {
            if (frase.includes(matrix_code[i][0])) {
                frase = frase.replaceAll(matrix_code[i][0], matrix_code[i][1]);
            }
        }
        clean();
        texto_mensaje.value = frase;
    }
}

function desencriptar(frase) {
    if (isEmpty()) {
        advertencia.style.display = "block";
    } else {
        checkWidth();
        for (let i = 0; i < matrix_code.length; i++) {
            if (frase.includes(matrix_code[i][1])) {
                frase = frase.replaceAll(matrix_code[i][1], matrix_code[i][0]);
            }
        }
        clean();
        texto_mensaje.value = frase;
    }
}

function copiar() {
    texto_encriptado.value  = texto_mensaje.value;
    texto_mensaje.value = "";
    boton__copiar.style.display = "none";
    let windowWidth = window.innerWidth;
    if (windowWidth > 800) {
        texto_mensaje.style.backgroundImage = "url('imagenes/Muñeco.png')";
    }else{
        let campo_desencriptado = document.querySelector(".campo-desencriptado");
        campo_desencriptado.style.height = "10vh";
    }
}

function checkWidth() {
    let windowWidth = window.innerWidth;
    if (windowWidth < 800) {
        let campo_desencriptado = document.querySelector(".campo-desencriptado");
        campo_desencriptado.style.height = "35vh";
    }
}

function isEmpty() {
    return texto_encriptado.value === "";
}

function closeWarning() {
    var advertencia = document.getElementById("advertencia");
    advertencia.style.display = "none";
}

function clean() {
    texto_encriptado.value = "";
    texto_mensaje.style.backgroundImage = "none";
    boton__copiar.style.display = "inline-block";
}
