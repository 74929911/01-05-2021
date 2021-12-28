const link = document.querySelector(".link");
setInterval(() => {
    link.classList.toggle("desaparece")
}, 600)
const locked = document.getElementById("locked");
const text = document.getElementById("texto");
const archivo_a = document.querySelector(".archivo_a");
let rec;
if (!("webkitSpeechRecognition" in window)) {
    alert("disculpas, no puedes usar la API");
} else {
    rec = new webkitSpeechRecognition();
    rec.lang = "es-AR";
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result", iniciar);
}
function iniciar(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
        let name = event.results[i][0].transcript;
        if (String(name) == "abrir archivo." || String(name) == "Abrir archivo." || String(name) == "ABRIR ARCHIVO." || String(name) == "abrir archivo" || String(name) == "Abrir archivo" || String(name) == "ABRIR ARCHIVO") {
            locked.setAttribute("value", "Descargando...")
            link.textContent = "Muy bien , ahora abre el archivo"
            link.classList.remove("desaparece");
            link.classList.add("god")
            archivo_a.click()
            setTimeout(() => {
                link.remove(true)
            },10000)
        } else {
            alert("Incorrecto , vuelve a intentarlo")
        }
    }
}
rec.start();