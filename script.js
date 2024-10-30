function iniciarJogo() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("sala1").style.display = "block";
}

function verificarResposta(sala) {
    const respostas = {
        1: "h2o",
        2: "101010",
        3: "caesar",
        4: "150",
        5: "97",
        6: "21",
        7: "15",
        8: "terra",
        9: "aegis",
        10: "sos",
        11: "20",
        12: "iugoslavia",
        13: "5",
        14: "orion",
        15: "memória de acesso aleatório",
        16: "8",
        17: "edison",
        18: "azul vermelho",
        19: "75",
        20: "0"
    };

    let resposta = document.getElementById(`respostaSala${sala}`).value.toLowerCase();
    let feedback = document.getElementById(`feedbackSala${sala}`);

    if (resposta === respostas[sala]) {
        feedback.textContent = "Correto! Avançando para a próxima sala...";
        setTimeout(() => {
            document.getElementById(`sala${sala}`).style.display = "none";
            if (sala < 20) {
                document.getElementById(`sala${sala + 1}`).style.display = "block";
            } else {
                feedback.textContent = "Parabéns! Você solucionou todos os enigmas e escapou do laboratório!";
            }
        }, 2000);
    } else {
        feedback.textContent = "Resposta incorreta, tente novamente.";
    }
}
