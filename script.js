document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulação de envio de mensagem
    document.getElementById("formMessage").textContent = "Obrigado por entrar em contato! Em breve responderemos.";
    document.getElementById("contactForm").reset();
});
<script>
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let counter = 0;

    function showSlide() {
        carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        counter = (counter + 1) % images.length;
        showSlide();
    });

    prevButton.addEventListener('click', () => {
        counter = (counter - 1 + images.length) % images.length;
        showSlide();
    });
</script>
