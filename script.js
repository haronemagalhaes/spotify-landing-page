document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const searchInput = document.getElementById('search-input');
    const homeLink = document.querySelector('a[href="#"]');
    const playlistButtons = document.querySelectorAll('.section-playlist__button');

    // Toggle da sidebar (mobile)
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            const isActive = sidebar.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });

        // Clica fora fecha o menu
        document.addEventListener('click', (e) => {
            if (
                sidebar.classList.contains('active') &&
                !sidebar.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {
                sidebar.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Tecla ESC fecha o menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Foco automático na busca ao carregar
    if (searchInput) {
        searchInput.focus();
    }

    // Scroll suave para o topo ao clicar em "Início"
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Ações de botões de playlist/podcast
    playlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Função "${button.textContent.trim()}" ainda será implementada 😉`);
        });
    });

    // Enter na busca dispara alerta
    searchInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            alert(`Buscando por: "${searchInput.value}"`);
        }
    });
});
