function iniciarJogo() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("sala1").style.display = "block";
}

function verificarResposta(sala) {
    const respostasCorretas = {
        1: "H2O",
        // Adicione as respostas corretas para as outras salas aqui
    };

    const respostaUsuario = document.getElementById(`respostaSala${sala}`).value;
    const feedback = document.getElementById(`feedbackSala${sala}`);
    
    if (respostaUsuario.toLowerCase() === respostasCorretas[sala].toLowerCase()) {
        feedback.textContent = "Correto! Você pode avançar.";
        document.getElementById(`sala${sala}`).style.display = "none";
        // Lógica para avançar para a próxima sala
    } else {
        feedback.textContent = "Tente novamente!";
    }
}
