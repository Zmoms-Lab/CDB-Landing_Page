const isPageFolder = window.location.pathname.includes("/page/");
const basePath = isPageFolder ? "../" : "./";

function fixPath(html) {
    if (!isPageFolder) {
        return html;
    }

    return html
        .replaceAll("./images/", "../images/")
        .replaceAll("./page/", "./")
        .replaceAll("./index.html", "../index.html");
}

function pageUrl(fileName) {
    return basePath + "page/" + fileName;
}

function loadPage(url, saveHistory = true, target = null) {
    const content = document.getElementById("content");

    if (!content) {
        console.log("Khong tim thay #content");
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Khong tai duoc trang: " + url);
            }

            return response.text();
        })
        .then(html => {
            content.innerHTML = fixPath(html);

            if (url.includes("tuyendung-content.html") && typeof renderRecruitmentList === "function") {
                renderRecruitmentList();
            }

            if (url.includes("hoatdong-content.html") && typeof renderNewsList === "function") {
                renderNewsList();
            }

            if (url.includes("hoithao-content.html") && typeof renderSeminarList === "function") {
                renderSeminarList();
            }

            if (url.includes("tai-tro-qua-tang-content.html") && typeof initSponsorPage === "function") {
                initSponsorPage("gift-sponsor");
            }

            if (url.includes("tai-tro-hoi-thao-content.html") && typeof initSponsorPage === "function") {
                initSponsorPage("seminar-sponsor");
            }

            if (url.includes("tai-tro-hoi-thao-khoa-hoc-content.html") && typeof initSponsorPage === "function") {
                initSponsorPage("science-sponsor");
            }

            if (url.includes("phong-kham-content.html") && typeof initDistributionPage === "function") {
                initDistributionPage("clinic");
            }

            if (url.includes("benh-vien-content.html") && typeof initDistributionPage === "function") {
                initDistributionPage("hospital");
            }

            if (url.includes("truong-mam-non-content.html") && typeof initDistributionPage === "function") {
                initDistributionPage("preschool");
            }

            if (url.includes("uu-dai-thanh-vien-content.html") && typeof initMemberOfferPage === "function") {
                initMemberOfferPage();
            }

            if (url.includes("lienhe-content.html") && typeof initContactPage === "function") {
                initContactPage();
            }

            const scrollTarget = target ? document.getElementById(target) : content;
            (scrollTarget || content).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (saveHistory) {
                history.pushState({ page: url, target }, "", target ? "#" + target : "#about");
            }
        })
        .catch(error => {
            console.log("Loi load page:", error);

            content.innerHTML = `
                <section style="padding:40px;text-align:center;">
                    <h2>Khong tai duoc noi dung</h2>
                    <p>Kiem tra lai duong dan file hoac chay bang Live Server.</p>
                </section>
            `;
        });
}

function setupPageLinks() {
    document.addEventListener("click", function (e) {
        const categoryToggle = e.target.closest(".category-toggle");

        if (categoryToggle) {
            e.preventDefault();

            const currentItem = categoryToggle.closest(".category-item");

            document.querySelectorAll(".category-item.open").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("open");
                }
            });

            currentItem.classList.toggle("open");
            return;
        }

        const link = e.target.closest("a[data-page]");

        if (!link) {
            return;
        }

        e.preventDefault();

        const page = link.getAttribute("data-page");
        const target = link.getAttribute("data-target");
        const itemId = link.getAttribute("data-id");

        if (page === "about") {
            loadPage(pageUrl("gioithieu-content.html"), true, target || "about");
        }

        if (page === "activity") {
            loadPage(pageUrl("hoatdong-content.html"), true, "hoat-dong");
        }

        if (page === "seminar") {
            loadPage(pageUrl("hoithao-content.html"), true, "hoi-thao");
        }

        if (page === "recruitment") {
            loadPage(pageUrl("tuyendung-content.html"), true, "tuyen-dung");
        }

        if (page === "member-offer") {
            loadPage(pageUrl("uu-dai-thanh-vien-content.html"), true, "uu-dai-thanh-vien");
        }

        if (page === "gift-sponsor") {
            loadPage(pageUrl("tai-tro-qua-tang-content.html"), true, "tai-tro-qua-tang");
        }

        if (page === "seminar-sponsor") {
            loadPage(pageUrl("tai-tro-hoi-thao-content.html"), true, "tai-tro-hoi-thao");
        }

        if (page === "science-sponsor") {
            loadPage(pageUrl("tai-tro-hoi-thao-khoa-hoc-content.html"), true, "tai-tro-hoi-thao-khoa-hoc");
        }

        if (page === "clinic") {
            loadPage(pageUrl("phong-kham-content.html"), true, "phong-kham");
        }

        if (page === "hospital") {
            loadPage(pageUrl("benh-vien-content.html"), true, "benh-vien");
        }

        if (page === "preschool") {
            loadPage(pageUrl("truong-mam-non-content.html"), true, "truong-mam-non");
        }

        if (page === "privacy") {
            loadPage(pageUrl("chinhsachbaomat-content.html"), true, "chinh-sach-bao-mat");
        }

        if (page === "contact") {
            loadPage(pageUrl("lienhe-content.html"), true, "lien-he");
        }

        if (page === "news-detail") {
            if (typeof renderNewsDetail === "function") {
                renderNewsDetail(itemId, true);
            } else {
                console.log("Chua co renderNewsDetail. Kiem tra file ./js/news.js");
            }
        }

        if (page === "seminar-detail") {
            if (typeof renderSeminarDetail === "function") {
                renderSeminarDetail(itemId, true);
            } else {
                console.log("Chua co renderSeminarDetail. Kiem tra file ./js/news.js");
            }
        }

        if (page === "sponsor-detail") {
            if (typeof renderSponsorDetail === "function") {
                renderSponsorDetail(itemId, true);
            } else {
                console.log("Chua co renderSponsorDetail. Kiem tra file ./js/nhanhang.js");
            }
        }

        if (page === "distribution-detail") {
            if (typeof renderDistributionDetail === "function") {
                renderDistributionDetail(itemId, true);
            } else {
                console.log("Chua co renderDistributionDetail. Kiem tra file ./js/kenhphanphoi.js");
            }
        }

        if (page === "recruit-detail") {
            if (typeof renderRecruitDetail === "function") {
                renderRecruitDetail(itemId, true);
            } else {
                console.log("Chua co renderRecruitDetail. Kiem tra file ./js/tuyendung.js");
            }
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

let heroSliderTimer = null;

function initHeroSlider() {
    const slides = document.querySelectorAll(".hero-header .slide");

    if (!slides.length) {
        return;
    }

    let currentSlide = 0;

    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === 0);
    });

    if (heroSliderTimer) {
        clearInterval(heroSliderTimer);
    }

    heroSliderTimer = setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 4000);
}

function loadHeader() {
    fetch(basePath + "container/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Khong tim thay header.html");
            }

            return response.text();
        })
        .then(data => {
            const header = document.getElementById("header");

            if (!header) {
                return;
            }

            header.innerHTML = fixPath(data);
            initHeroSlider();

            const menuToggle = document.getElementById("menuToggle");
            const navMenu = document.getElementById("navMenu");

            if (menuToggle && navMenu) {
                menuToggle.addEventListener("click", () => {
                    navMenu.classList.toggle("show");
                    menuToggle.textContent = navMenu.classList.contains("show") ? "×" : "☰";
                });
            }
        })
        .catch(error => {
            console.log("Khong load duoc header:", error);
        });
}

function loadFooter() {
    fetch(basePath + "container/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Khong tim thay footer.html");
            }

            return response.text();
        })
        .then(data => {
            const footer = document.getElementById("footer");

            if (footer) {
                footer.innerHTML = fixPath(data);
            }
        })
        .catch(error => {
            console.log("Khong load duoc footer:", error);
        });
}

window.addEventListener("popstate", function (event) {
    if (!event.state) {
        loadPageFromHash();
        return;
    }

    if (event.state.page === "news-detail" && typeof renderNewsDetail === "function") {
        renderNewsDetail(event.state.newsId, false);
        return;
    }

    if (event.state.page === "seminar-detail" && typeof renderSeminarDetail === "function") {
        renderSeminarDetail(event.state.seminarId, false);
        return;
    }

    if (event.state.page === "sponsor-detail" && typeof renderSponsorDetail === "function") {
        renderSponsorDetail(event.state.sponsorId, false);
        return;
    }

    if (event.state.page === "distribution-detail" && typeof renderDistributionDetail === "function") {
        renderDistributionDetail(event.state.distributionId, false);
        return;
    }

    if (event.state.page) {
        loadPage(event.state.page, false, event.state.target);
    }
});

function loadPageFromHash() {
    const hash = window.location.hash.replace("#", "");

    if (hash === "about") {
        loadPage(pageUrl("gioithieu-content.html"), false, "about");
        return;
    }

    if (hash === "tuyen-dung") {
        loadPage(pageUrl("tuyendung-content.html"), false, "tuyen-dung");
        return;
    }

    if (hash === "hoat-dong") {
        loadPage(pageUrl("hoatdong-content.html"), false, "hoat-dong");
        return;
    }

    if (hash === "hoi-thao") {
        loadPage(pageUrl("hoithao-content.html"), false, "hoi-thao");
        return;
    }

    if (hash === "uu-dai-thanh-vien") {
        loadPage(pageUrl("uu-dai-thanh-vien-content.html"), false, "uu-dai-thanh-vien");
        return;
    }

    if (hash === "tai-tro-qua-tang") {
        loadPage(pageUrl("tai-tro-qua-tang-content.html"), false, "tai-tro-qua-tang");
        return;
    }

    if (hash === "tai-tro-hoi-thao") {
        loadPage(pageUrl("tai-tro-hoi-thao-content.html"), false, "tai-tro-hoi-thao");
        return;
    }

    if (hash === "tai-tro-hoi-thao-khoa-hoc") {
        loadPage(pageUrl("tai-tro-hoi-thao-khoa-hoc-content.html"), false, "tai-tro-hoi-thao-khoa-hoc");
        return;
    }

    if (hash === "phong-kham") {
        loadPage(pageUrl("phong-kham-content.html"), false, "phong-kham");
        return;
    }

    if (hash === "benh-vien") {
        loadPage(pageUrl("benh-vien-content.html"), false, "benh-vien");
        return;
    }

    if (hash === "truong-mam-non") {
        loadPage(pageUrl("truong-mam-non-content.html"), false, "truong-mam-non");
        return;
    }

    if (hash === "chinh-sach-bao-mat" || hash === "chinhsachbaomat") {
        loadPage(pageUrl("chinhsachbaomat-content.html"), false, "chinh-sach-bao-mat");
        return;
    }

    if (hash === "lien-he") {
        loadPage(pageUrl("lienhe-content.html"), false, "lien-he");
        return;
    }

    if (typeof newsData !== "undefined" && newsData[hash] && typeof renderNewsDetail === "function") {
        renderNewsDetail(hash, false);
        return;
    }

    if (typeof seminarData !== "undefined" && seminarData[hash] && typeof renderSeminarDetail === "function") {
        renderSeminarDetail(hash, false);
        return;
    }

    if (typeof getSponsorItem === "function" && getSponsorItem(hash) && typeof renderSponsorDetail === "function") {
        renderSponsorDetail(hash, false);
        return;
    }

    if (typeof getDistributionItem === "function" && getDistributionItem(hash) && typeof renderDistributionDetail === "function") {
        renderDistributionDetail(hash, false);
        return;
    }

    if (typeof recruitData !== "undefined" && recruitData[hash] && typeof renderRecruitDetail === "function") {
        renderRecruitDetail(hash, false);
    }
}

loadHeader();
loadFooter();
setupPageLinks();
loadPageFromHash();
