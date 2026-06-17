const isPageFolder = window.location.pathname.includes("/page/");
const basePath = isPageFolder ? "../" : "./";

/* Sửa đường dẫn ảnh/link khi load header footer */
function fixPath(html) {
    if (isPageFolder) {
        return html
            .replaceAll("./images/", "../images/")
            .replaceAll("./page/", "./")
            .replaceAll("./index.html", "../index.html");
    }

    return html;
}

/* Load nội dung vào main */
function loadPage(url, saveHistory = true, target = null) {
    const content = document.getElementById("content");

    if (!content) {
        console.log("Không tìm thấy #content");
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Không tải được trang: " + url);
            }

            return response.text();
        })
        .then(html => {
            content.innerHTML = html;

            if (target) {
                const section = document.getElementById(target);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }

            if (saveHistory) {
                const hash = target ? "#" + target : "#about";

                history.pushState(
                    {
                        page: url,
                        target: target
                    },
                    "",
                    hash
                );
            }
        })
        .catch(error => {
            console.log("Lỗi load page:", error);

            content.innerHTML = `
                <section style="padding: 40px; text-align: center;">
                    <h2>Không tải được nội dung</h2>
                    <p>Kiểm tra lại đường dẫn file hoặc chạy bằng Live Server.</p>
                </section>
            `;
        });
}

/* Bắt sự kiện click menu */
function setupPageLinks() {
    document.addEventListener("click", function (e) {
        const link = e.target.closest("a[data-page]");

        if (!link) return;

        e.preventDefault();

        const page = link.getAttribute("data-page");
        const target = link.getAttribute("data-target");

        if (page === "about") {
            loadPage("./page/gioithieu-content.html", true, target);
        }

        const navMenu = document.getElementById("navMenu");
        const menuToggle = document.getElementById("menuToggle");

        if (navMenu && navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }
        }
    });
}

/* Load Header */
function loadHeader() {
    fetch(basePath + "container/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Không tìm thấy header.html");
            }

            return response.text();
        })
        .then(data => {
            const header = document.getElementById("header");

            if (!header) return;

            header.innerHTML = fixPath(data);

            const menuToggle = document.getElementById("menuToggle");
            const navMenu = document.getElementById("navMenu");

            if (menuToggle && navMenu) {
                menuToggle.addEventListener("click", () => {
                    navMenu.classList.toggle("show");

                    if (navMenu.classList.contains("show")) {
                        menuToggle.textContent = "×";
                    } else {
                        menuToggle.textContent = "☰";
                    }
                });
            }
        })
        .catch(error => {
            console.log("Không load được header:", error);
        });
}

/* Load Footer */
function loadFooter() {
    fetch(basePath + "container/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Không tìm thấy footer.html");
            }

            return response.text();
        })
        .then(data => {
            const footer = document.getElementById("footer");

            if (!footer) return;

            footer.innerHTML = fixPath(data);
        })
        .catch(error => {
            console.log("Không load được footer:", error);
        });
}

/* Xử lý nút Back/Forward */
window.addEventListener("popstate", function (event) {
    if (event.state && event.state.page) {
        loadPage(event.state.page, false, event.state.target);
    }
});

/* Load theo hash khi mở link trực tiếp */
function loadPageFromHash() {
    const hash = window.location.hash;

    if (hash === "#about") {
        loadPage("./page/gioithieu-content.html", false);
    }

    if (hash === "#hoat-dong") {
        loadPage("./page/gioithieu-content.html", false, "hoat-dong");
    }

    if (hash === "#tuyen-dung") {
        loadPage("./page/gioithieu-content.html", false, "tuyen-dung");
    }
}

/* Khởi chạy */
loadHeader();
loadFooter();
setupPageLinks();
loadPageFromHash();