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
}

window.initMemberOfferPage = initMemberOfferPage;
