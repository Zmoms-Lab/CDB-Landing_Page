function initMemberOfferPage() {
    const filterButtons = document.querySelectorAll(".member-filter-btn");
    const offerCards = document.querySelectorAll(".member-offer-card");

    if (!filterButtons.length || !offerCards.length) {
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            filterButtons.forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            offerCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });

    document.querySelectorAll(".member-detail-btn").forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".member-offer-card");

            if (!card) {
                return;
            }

            const isOpen = card.classList.toggle("open");
            button.setAttribute("aria-expanded", String(isOpen));
            button.textContent = isOpen ? "Thu gọn" : "Xem chi tiết";
        });
    });
}

window.initMemberOfferPage = initMemberOfferPage;
