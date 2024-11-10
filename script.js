document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulação de envio de mensagem
    document.getElementById("formMessage").textContent = "Obrigado por entrar em contato! Em breve responderemos.";
    document.getElementById("contactForm").reset();
});