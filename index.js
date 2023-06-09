/*variables*/
let area= document.querySelector(".area")
let encriptar= document.querySelector(".encriptar")
let desencriptar= document.querySelector(".desencriptar")
let animacion= document.querySelector(".animacion")
let subtitulo= document.querySelector(".subtitulo")
let parrafo= document.querySelector(".parrafo")
let mensaje= document.querySelector(".mensaje")
let copiar= document.querySelector(".copiar")
let borrar= document.querySelector(".borrar")
const textarea = document.querySelector('.area');

/*colocar cursor en entrada*/
area.focus()
textarea.addEventListener('focus', () => {
  textarea.removeAttribute('placeholder');
});
textarea.addEventListener('blur', () => {
  textarea.setAttribute('placeholder', 'Ingrese el texto aquí');
});

/*funciones*/
function validarEntrada(texto) {
    let regex= /[a-z\ñ\s]+$/ /*expresión regular*/
    if (regex.test(texto)) {
        return area.value
    }
    else {
        return alert("Solo letras minúsculas y sin acentos")
    }
}
function encriptarTexto() {
    let texto= validarEntrada(area.value)
    area.focus()
    let encriptado= texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    mensaje.value= encriptado
    ocultaranimacion()
}
function desencriptarTexto() {
    let texto= area.value
    let desencriptado= texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    mensaje.value= desencriptado
    ocultaranimacion()
}
function ocultaranimacion() {
    animacion.classList.add("ocultar")
    subtitulo.classList.add("ocultar")
    parrafo.classList.add("ocultar")
}
function copiarTexto() {
    let texto= mensaje.value
    navigator.clipboard.writeText(texto)
    let area= document.querySelector(".area")
    area.focus()
    pegarTexto()
}
function borrarTexto() {
    mensaje.value= ""
    let area= document.querySelector(".area")
    area.value= ""
    area.focus()
}
function pegarTexto() {
    navigator.clipboard.readText().then(texto => {
        area.value= texto
    })
}

/*llamar función*/
encriptar.onclick= encriptarTexto
desencriptar.onclick= desencriptarTexto
copiar.onclick= copiarTexto
borrar.onclick= borrarTexto
