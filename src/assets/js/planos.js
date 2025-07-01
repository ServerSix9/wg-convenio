document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("planModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalList = document.getElementById("modalList");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalBottomCloseBtn = document.getElementById("modalBottomCloseBtn");

    // Mostrar só os primeiros 5 itens em cada plano
    document.querySelectorAll(".plan-card").forEach(planCard => {
        const items = planCard.querySelectorAll(".plan-body ul li");
        items.forEach((li, index) => {
            if (index >= 5) {
                li.style.display = "none";
            }
        });
    });

    // Botão "Ver detalhes"
    document.querySelectorAll(".details-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            const planCard = e.target.closest(".plan-card");
            const planTitle = planCard.querySelector(".plan-header h2").textContent;
            const allItems = planCard.querySelectorAll(".plan-body ul li");

            modalTitle.textContent = planTitle;
            modalList.innerHTML = ""; // limpa lista do modal

            allItems.forEach(li => {
                const clone = li.cloneNode(true);
                clone.style.display = "list-item"; // garante que aparece no modal
                modalList.appendChild(clone);
            });

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    };

    // Fechar modal com botão X
    modalCloseBtn.addEventListener("click", closeModal);

    // Fechar modal com botão FECHAR
    modalBottomCloseBtn.addEventListener("click", closeModal);

    // Fechar modal clicando fora da caixa
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
});