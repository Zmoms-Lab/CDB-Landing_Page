const { newsData } = require("../script");

function renderNewsSidebar() {
    return `
        <aside class="news-sidebar">
            <h2>DANH MỤC TIN TỨC</h2>

            <ul class="news-category">
                <li>
                    <a href="#about" data-page="about">Giới thiệu</a>
                    <span>⌄</span>
                </li>

                <li><a href="#">Thẻ CĐB</a></li>
                <li><a href="#hoat-dong" data-page="activity">Hội thảo</a></li>
                <li><a href="#">Thành viên</a></li>

                <li>
                    <a href="#">Nhãn hàng</a>
                    <span>⌄</span>
                </li>

                <li>
                    <a href="#">Kênh phân phối</a>
                    <span>⌄</span>
                </li>
            </ul>
        </aside>
    `;
}

function renderNewsBlocks(blocks) {
    return blocks.map(block => {
        if (block.type === "text") {
            return `<p>${block.value}</p>`;
        }

        if (block.type === "image") {
            return `
                <img 
                    src="${block.src}" 
                    alt="${block.alt || ""}" 
                    class="news-detail-image"
                >
            `;
        }

        return "";
    }).join("");
}

function renderRelatedNews(currentId) {
    const related = Object.entries(newsData)
        .filter(([id]) => id !== currentId)
        .slice(0, 3);

    return `
        <section class="related-news">
            <h2>TIN LIÊN QUAN</h2>

            <div class="related-news-grid">
                ${related.map(([id, item]) => `
                    <article class="related-news-card">
                        <a href="#${id}" data-page="news-detail" data-id="${id}">
                            <img src="${item.thumbnail}" alt="${item.title}">
                            <span>${item.date}</span>
                            <h3>${item.title}</h3>
                        </a>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

function renderNewsDetail(newsId, saveHistory = true) {
    const content = document.getElementById("content");
    const news = newsData[newsId];

    if (!content) return;

    if (!news) {
        content.innerHTML = `
            <section class="news-not-found">
                <h2>Không tìm thấy tin tức</h2>
                <a href="#hoat-dong" data-page="activity">Quay lại danh sách tin tức</a>
            </section>
        `;
        return;
    }

    content.innerHTML = `
        <div class="news-detail-page" id="${newsId}">

            <div class="news-breadcrumb-bar">
                <div class="news-container">
                    <a href="./index.html">Trang chủ</a>
                    <span>/</span>
                    <a href="#hoat-dong" data-page="activity">Tin tức</a>
                    <span>/</span>
                    <strong>${news.title}</strong>
                </div>
            </div>

            <div class="news-detail-wrapper">

                ${renderNewsSidebar()}

                <article class="news-detail-content">
                    <span class="news-detail-date">${news.date}</span>

                    <h1>${news.title}</h1>

                    <div class="news-meta">
                        Đăng bởi: ${news.author}
                    </div>

                    ${renderNewsBlocks(news.blocks)}

                    <a href="#hoat-dong" data-page="activity" class="back-news">
                        ← Quay lại danh sách tin tức
                    </a>

                    ${renderRelatedNews(newsId)}
                </article>

            </div>

        </div>
    `;

    const detailPage = document.getElementById(newsId);

    if (detailPage) {
        detailPage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (saveHistory) {
        history.pushState(
            {
                page: "news-detail",
                newsId: newsId
            },
            "",
            "#" + newsId
        );
    }
}