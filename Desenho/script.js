let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;
let corAtual = "black"; // Cor padrão
let usandoBorracha = false;

canvas.addEventListener("mousedown", function (event) {
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

canvas.addEventListener("mousemove", function (event) {
    if (desenhando) {
        contexto.lineWidth = 2;
        contexto.lineJoin = "round"; // Adicione esta linha para bordas mais suaves

        if (!usandoBorracha) {
            contexto.strokeStyle = corAtual;
            contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            contexto.stroke();
        } else {
            contexto.clearRect(
                event.clientX - canvas.offsetLeft - 10,
                event.clientY - canvas.offsetTop - 10,
                20,
                20
            );
        }
    }
});

canvas.addEventListener("mouseup", function (event) {
    desenhando = false;
});

document.getElementById("borracha").addEventListener("click", function () {
    usandoBorracha = true;
});

document.getElementById("caneta").addEventListener("click", function () {
    usandoBorracha = false;
    corAtual = "black"; // Volte para a cor preta (caneta)
});
