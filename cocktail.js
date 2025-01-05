document.addEventListener("DOMContentLoaded", () => {
    const posters = document.querySelectorAll(".poster");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.getElementById("close-modal");

    posters.forEach(poster => {
        poster.addEventListener("click", () => {
            // Ottieni l'immagine e la descrizione dai data-attributes
            const imageSrc = poster.getAttribute("data-image");
            const description = poster.getAttribute("data-description");

            // Assegna i valori al modale
            modalImage.src = imageSrc;
            modalDescription.textContent = description;

            // Mostra il modale
            modal.style.display = "flex";
        });
    });

    // Chiudi il modale
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Chiudi il modale cliccando fuori dal contenuto
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
