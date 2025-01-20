// This section is for the toogle on mobile screen Navbar
const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });

// This function is for the google translator section
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,fr,it,es,de',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }

// This section is for the Image popup that when the users clicks on IDBTransaction, it shows
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const gridItems = document.querySelectorAll('.grid-item');
    let currentIndex = 0;

    // Open lightbox
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            currentIndex = parseInt(this.dataset.index);
            const imgSrc = this.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Close on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Previous image
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + gridItems.length) % gridItems.length;
        const imgSrc = gridItems[currentIndex].querySelector('img').src;
        lightboxImg.src = imgSrc;
    });

    // Next image
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % gridItems.length;
        const imgSrc = gridItems[currentIndex].querySelector('img').src;
        lightboxImg.src = imgSrc;
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'Escape') {
            closeBtn.click();
        }
    });
});
