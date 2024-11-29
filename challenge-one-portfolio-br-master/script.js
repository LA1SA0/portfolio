// Mostrar o botão de "Voltar ao topo" quando o usuário rolar a página
window.onscroll = function() {
    let topButton = document.getElementById("topButton");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topButton.style.display = "block"; // Exibe o botão
    } else {
        topButton.style.display = "none"; // Esconde o botão
    }
};

// Função para voltar ao topo da página
document.getElementById("topButton").onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
};

// Adiciona uma animação ao clicar nos links de projetos
const projetoLinks = document.querySelectorAll('.projetos__botao');

projetoLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const projetoNome = event.target.previousElementSibling.previousElementSibling.innerText;
        alert(`Abrindo o projeto: ${projetoNome}`);
    });
});

