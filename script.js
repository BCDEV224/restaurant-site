const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animation apparition scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold:0.3 };

const appearOnScroll = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Slider témoignages
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

setInterval(() => {
    testimonials[index].classList.remove('active');
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add('active');
}, 3000);

// Modal réservation
const modal = document.getElementById('reservationModal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.onclick = () => modal.style.display = 'flex';
closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// Formulaire
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function(e){
    e.preventDefault();
    message.textContent = "Merci pour votre message ! Nous vous répondrons rapidement.";
    form.reset();
});
