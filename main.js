// Seleciona os elementos do menu hambúrguer e da lista de navegação
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Função para abrir e fechar o menu ao clicar no hambúrguer
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha o menu automaticamente quando o usuário clica em qualquer link interna do site
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});