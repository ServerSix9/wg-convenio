// Início do carregamento
document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');

    // Força o loader por 2 segundos
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // Tempo da transição de opacidade
    }, 2000); // 2 segundos (2000 milissegundos)
});