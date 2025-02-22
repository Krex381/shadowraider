ScrollReveal().reveal('h1', {
    duration: 2000,
    distance: '50px',
    origin: 'top',
    delay: 200
});

ScrollReveal().reveal('.btn-primary', {
    duration: 1500,
    distance: '30px',
    origin: 'bottom',
    delay: 600,
    interval: 200
});

ScrollReveal().reveal('.feature-card', {
    duration: 1000,
    distance: '20px',
    origin: 'bottom',
    delay: 200,
    interval: 100
});

ScrollReveal().reveal('.stat-card', {
    duration: 1000,
    scale: 0.85,
    delay: 100,
    interval: 100
});

function toggleLanguage() {
    const trElements = document.querySelectorAll('.lang-tr');
    const enElements = document.querySelectorAll('.lang-en');
    
    trElements.forEach(el => el.classList.toggle('hidden'));
    enElements.forEach(el => el.classList.toggle('hidden'));
    
    document.documentElement.lang = document.documentElement.lang === 'tr' ? 'en' : 'tr';
    
    localStorage.setItem('preferredLanguage', document.documentElement.lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'en') {
        toggleLanguage();
    }
});
