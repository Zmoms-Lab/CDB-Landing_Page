function initContactPage() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("contactFormStatus");

    if (!form || !status) {
        return;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();

        status.textContent = "Cảm ơn bạn đã gửi thông tin. Cộng Đồng Bầu sẽ liên hệ lại sớm nhất.";
        form.reset();
    });
}

window.initContactPage = initContactPage;
