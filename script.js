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
}function playAudio(src) {
    let audio = new Audio(src);
    audio.play();
}

function checkAnswer(roomId, correctAnswer) {
    const answerInput = document.querySelector(`#${roomId} input`).value.toUpperCase();
    if (answerInput === correctAnswer) {
        alert("Correto! Você desbloqueou a próxima sala.");
        nextRoom(roomId);
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}

function nextRoom(currentRoomId) {
    const currentRoom = document.getElementById(currentRoomId);
    currentRoom.classList.add("hidden");

    const nextRoom = currentRoom.nextElementSibling;
    if (nextRoom && nextRoom.classList.contains("room")) {
        nextRoom.classList.remove("hidden");
    } else {
        alert("Parabéns! Você completou o desafio.");
    }
}
