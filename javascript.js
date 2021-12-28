const button_comprobar = document.getElementById("button_comprobar");
const contraseña = document.getElementById("contraseña");
// const ver_contraseña = document.getElementById("ver_contraseña");
// let ver = 0;
// ver_contraseña.addEventListener("click", (e) => {
//     e.preventDefault()
//     if (ver == 0) {
//         contraseña.setAttribute("type", "text");
//         ver = 1;
//     } else {
//         contraseña.setAttribute("type", "password");
//         ver = 0;
//     }
// })
button_comprobar.addEventListener("click", (e) => {
    e.preventDefault();
    let contreseña_value = contraseña.value;
    if (contreseña_value == "caly123456789") {
        speechSynthesis.speak(new SpeechSynthesisUtterance("Contraseña correcta"));
        setTimeout(() => {
            location.href = "./home.html"
        },1700)
    } else {
        speechSynthesis.speak(new SpeechSynthesisUtterance("Contraseña incorrecta"));
        setTimeout(() => {
            alert("contraseña incorrecta")
        },1700)
    }
})
