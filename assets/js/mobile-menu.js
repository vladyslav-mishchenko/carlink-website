const offcanvas = document.getElementById('offcanvasMenu');
const openBtn = document.getElementById('offcanvasToggle');
const closeBtn = document.getElementById('offcanvasClose');
const backdrop = document.querySelector('.offcanvas-backdrop');
const toggleIcons = document.querySelectorAll('.toggle-icon');

function showOffcanvas() {
    offcanvas.classList.add('show');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideOffcanvas() {
    offcanvas.classList.remove('show');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
}

openBtn.addEventListener('click', showOffcanvas);
closeBtn.addEventListener('click', hideOffcanvas);
backdrop.addEventListener('click', hideOffcanvas);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offcanvas.classList.contains('show')) {
        hideOffcanvas();
    }
});

toggleIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = icon.closest('.accordion-item');
        const content = item.querySelector('.accordion-content');

        document.querySelectorAll('.accordion-content').forEach(c => {
            if (c !== content) {
                c.style.maxHeight = null;
                const i = c.closest('.accordion-item').querySelector('.toggle-icon');
                if (i) i.style.transform = 'rotate(0deg)';
            }
        });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.style.transform = 'rotate(180deg)';
        }
    });
});








