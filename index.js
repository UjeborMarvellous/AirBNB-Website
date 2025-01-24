// This section is for the toogle on mobile screen Navbar
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Set initial state based on screen size
function updateMenuVisibility() {
    if (window.innerWidth > 768) { // desktop breakpoint
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

// Handle menu toggle click
menuToggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) { // Only toggle on mobile
        menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
    }
});

// Update on window resize
window.addEventListener('resize', updateMenuVisibility);

// Set initial state
updateMenuVisibility();

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

// Email Js section
function sendEmail(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Collect form data
    const params = {
      fullName: document.getElementById("fullName").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      email: document.getElementById("email").value,
      dateAndTime: document.getElementById("dateAndTime").value,
      message: document.getElementById("message").value,
    };
  
    // Send the email
    emailjs
      .send("service_t4qc2lk", "template_g5as9pr", params)
      .then(() => {
        alert("Thank you for your request, we will answer soon!");

        document.getElementById("reservationForm").reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again.");
      });
  }
