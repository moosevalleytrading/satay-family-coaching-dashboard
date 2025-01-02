document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.water-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = e.currentTarget.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    });
});
