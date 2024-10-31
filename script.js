// Função para mostrar o próximo enigma
function showNextEnigma(id) {
    document.querySelectorAll('.enigma-container').forEach(function(enigma) {
        enigma.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

