let currentRoom = 1;

function checkAnswer(room, correctAnswer) {
    const userAnswer = document.getElementById(`answer-${room}`).value.toUpperCase();
    if (userAnswer === correctAnswer.toUpperCase()) {
        alert('Resposta correta! Você avançou para a próxima sala.');
        document.getElementById(room).classList.add('hidden');
        currentRoom++;
        const nextRoom = `room-${currentRoom}`;
        document.getElementById(nextRoom).classList.remove('hidden');
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
}

function playAudio(audioPath) {
    const audio = new Audio(audioPath);
    audio.play();
}

// Mostrar a primeira sala ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById(`room-${currentRoom}`).classList.remove('hidden');
});

