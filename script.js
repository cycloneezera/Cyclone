// Data do início do relacionamento: 19/10/2024 às 20:15
const startDate = new Date(2024, 9, 19, 20, 15, 0); // Mês 9 = Outubro

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    // Cálculo do tempo
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualiza o HTML
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Atualiza a cada segundo
setInterval(updateCounter, 1000);
updateCounter(); // Inicia imediatamente

function updateScores() {
    document.querySelector('#herScore .score').textContent = herScore;
    document.querySelector('#yourScore .score').textContent = yourScore;
    
    // Atualiza a barra de amor com gradiente dinâmico
    const total = herScore + yourScore;
    const herPercentage = total > 0 ? (herScore / total) * 100 : 50;
    const yourPercentage = total > 0 ? (yourScore / total) * 100 : 50;
    
    // Ajusta o gradiente para mostrar proporção
    document.getElementById('loveBar').style.background = 
        `linear-gradient(90deg, #ff66b3 ${herPercentage}%, #5d9cec ${herPercentage}%)`;