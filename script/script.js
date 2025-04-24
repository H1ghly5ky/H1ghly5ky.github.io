document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Добавляем/убираем класс scrolled при прокрутке
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Прячем header при прокрутке вниз, показываем при прокрутке вверх
        if (currentScroll <= 0) {
            header.classList.remove('hidden');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('hidden')) {
            header.classList.add('hidden');
        } else if (currentScroll < lastScroll && header.classList.contains('hidden')) {
            header.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });

    // Остальной код (мобильное меню и т.д.) остается без изменений
});