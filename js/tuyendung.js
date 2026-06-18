const recruitData = {
"recruit-1": {
title: "Cộng Đồng Bầu Tuyển Dụng Nhiều Vị Trí Năm 2026 - Ra Tết Đi Làm",
date: "Thứ Năm, 15/01/2026",
author: "Cộng Đồng Bầu",
thumbnail: "./images/news-1.png",
excerpt: "Cộng Đồng Bầu (CDB) thành lập năm 2015, hiện có 2 trụ sở chính tại TP. Hồ Chí Minh và Hà Nội. Năm 2026, CĐB mở rộng đội ngũ vận hành, truyền thông và chăm sóc khách hàng...",
blocks: [
{
type: "text",
value: "Cộng Đồng Bầu tuyển dụng nhiều vị trí trong năm 2026 nhằm mở rộng đội ngũ vận hành, truyền thông và chăm sóc khách hàng."
},
{
type: "image",
src: "./images/news-1.png",
alt: "Cộng Đồng Bầu tuyển dụng",
caption: "Gia nhập Cộng Đồng Bầu để cùng đồng hành với mẹ và bé."
},
{
type: "text",
value: "<strong>Vị trí tuyển dụng:</strong> Chuyên viên Chăm sóc Khách hàng, Nhân viên Content Marketing, Cộng tác viên Truyền thông và Thực tập sinh Sự kiện."
},
{
type: "text",
value: "<strong>Yêu cầu chung:</strong> Có tinh thần trách nhiệm, giao tiếp tốt, yêu thích lĩnh vực mẹ và bé, có khả năng làm việc nhóm và chủ động trong công việc."
},
{
type: "text",
value: "<strong>Thông tin ứng tuyển:</strong> Ứng viên gửi CV về <a href='mailto:cskh@congdongbau.com'>[cskh@congdongbau.com](mailto:cskh@congdongbau.com)</a> với tiêu đề <strong>[Vị trí ứng tuyển] - Họ và tên</strong>."
}
]
},

/*"recruit-2": {
    title: "Tuyển Dụng Thực Tập Sinh Sự Kiện - Góp Phần Kiến Tạo Trải Nghiệm Cho Mẹ",
    date: "Thứ Sáu, 20/01/2026",
    author: "Cộng Đồng Bầu",
    thumbnail: "./images/news-2.png",
    excerpt: "Bạn yêu thích sự kiện, thích làm việc cùng team và muốn tích lũy kinh nghiệm thực chiến trong môi trường chuyên nghiệp...",
    blocks: [
        {
            type: "text",
            value: "Cộng Đồng Bầu đang tìm kiếm các bạn Thực tập sinh Sự kiện để hỗ trợ lên kế hoạch, triển khai hoạt động và đồng hành trong các buổi offline/online."
        },
        {
            type: "image",
            src: "./images/news-2.png",
            alt: "Thực tập sinh sự kiện",
            caption: "Từ khâu chuẩn bị đến vận hành sự kiện - học hỏi mỗi ngày."
        },
        {
            type: "text",
            value: "<strong>Người phù hợp:</strong> Chủ động, có trách nhiệm, cẩn thận trong checklist, yêu thích hoạt động cộng đồng."
        },
        {
            type: "text",
            value: "<strong>Quyền lợi:</strong> Được hướng dẫn quy trình, tham gia vận hành cùng đội ngũ, có cơ hội tuyển dụng chính thức theo năng lực."
        },
        {
            type: "text",
            value: "<strong>Cách ứng tuyển:</strong> Gửi CV về <a href='mailto:cskh@congdongbau.com'>cskh@congdongbau.com</a> với tiêu đề <strong>[Thực tập sinh Sự kiện] - Họ và tên</strong>."
        }
    ]
},

"recruit-3": {
    title: "Tuyển Nhân Viên Content Marketing - Viết Bằng Trái Tim, Làm Bằng Dữ Liệu",
    date: "Thứ Ba, 28/01/2026",
    author: "Cộng Đồng Bầu",
    thumbnail: "./images/news-3.png",
    excerpt: "Nếu bạn thích viết, thích tìm hiểu kiến thức mẹ và bé và muốn nâng tầm nội dung theo hướng giá trị...",
    blocks: [
        {
            type: "text",
            value: "Cộng Đồng Bầu cần thêm Nhân viên Content Marketing để xây dựng hệ thống bài viết, kịch bản truyền thông và hỗ trợ chiến dịch theo kế hoạch."
        },
        {
            type: "image",
            src: "./images/news-3.png",
            alt: "Content Marketing",
            caption: "Nội dung rõ ràng - nguồn tham khảo tốt - hiệu quả đo lường."
        },
        {
            type: "text",
            value: "<strong>Yêu cầu:</strong> Có tư duy nội dung, biết cách viết headline, nắm cơ bản SEO/Copywriting; ưu tiên người có kinh nghiệm mảng mẹ và bé."
        },
        {
            type: "text",
            value: "<strong>Thông tin ứng tuyển:</strong> Gửi portfolio hoặc bài viết mẫu về <a href='mailto:cskh@congdongbau.com'>cskh@congdongbau.com</a> với tiêu đề <strong>[Content Marketing] - Họ và tên</strong>."
        }
    ]
}

*/
};

function renderRecruitSidebar() {
return ` <aside class="recruit-sidebar"> <h2>DANH MỤC TIN TỨC</h2>


        <ul class="recruit-category">

            <li class="category-item">
                <button class="category-toggle" type="button">
                    <span>Giới thiệu</span>
                    <span class="category-arrow">▾</span>
                </button>

                <ul class="category-submenu">
                    <li><a href="#about" data-page="about">Về chúng tôi</a></li>
                    <li><a href="#tuyen-dung" data-page="recruitment">Tuyển dụng</a></li>
                </ul>
            </li>

            <li>
                <a href="#" class="category-link">Thẻ CĐB</a>
            </li>

            <li>
                <a href="#hoat-dong" data-page="activity" class="category-link">Hội thảo</a>
            </li>

            <li>
                <a href="#" class="category-link">Thành viên</a>
            </li>

            <li class="category-item">
                <button class="category-toggle" type="button">
                    <span>Nhãn hàng</span>
                    <span class="category-arrow">▾</span>
                </button>

                <ul class="category-submenu">
                    <li><a href="#">Đối tác thương hiệu</a></li>
                    <li><a href="#">Chương trình nhãn hàng</a></li>
                </ul>
            </li>

            <li class="category-item">
                <button class="category-toggle" type="button">
                    <span>Kênh phân phối</span>
                    <span class="category-arrow">▾</span>
                </button>

                <ul class="category-submenu">
                    <li><a href="#">Hệ thống phân phối</a></li>
                    <li><a href="#">Điểm bán liên kết</a></li>
                </ul>
            </li>

        </ul>
    </aside>
`;


}

function renderRecruitmentList() {
const list = document.getElementById("recruitList");


if (!list) return;

list.innerHTML = Object.entries(recruitData).map(([id, item]) => `
    <article class="recruit-card">
        <a href="#${id}" data-page="recruit-detail" data-id="${id}" class="recruit-card-link">

            <div class="recruit-thumb">
                <img src="${item.thumbnail}" alt="${item.title}">
            </div>

            <span class="recruit-date">${item.date}</span>

            <h2>${item.title}</h2>

            <p>${item.excerpt}</p>
        </a>
    </article>
`).join("");


}

function renderRecruitBlocks(blocks) {
if (!blocks || blocks.length === 0) {
return "";
}


return blocks.map(block => {
    if (block.type === "text") {
        return `<p>${block.value}</p>`;
    }

    if (block.type === "image") {
        return `
            <figure class="recruit-figure">
                <img 
                    src="${block.src}" 
                    alt="${block.alt || ""}" 
                    class="recruit-detail-image"
                >

                ${
                    block.caption
                    ? `<figcaption class="recruit-caption">${block.caption}</figcaption>`
                    : ""
                }
            </figure>
        `;
    }

    return "";
}).join("");


}

function renderRecruitDetail(recruitId, saveHistory = true) {
const content = document.getElementById("content");
const recruit = recruitData[recruitId];


if (!content) return;

if (!recruit) {
    content.innerHTML = `
        <section class="recruit-not-found" style="padding:40px;text-align:center;">
            <h2>Không tìm thấy tin tuyển dụng</h2>
            <a href="#tuyen-dung" data-page="recruitment">Quay lại trang tuyển dụng</a>
        </section>
    `;
    return;
}

content.innerHTML = `
    <div class="recruit-detail-page" id="${recruitId}">

        <div class="recruit-breadcrumb-bar">
            <div class="recruit-container">
                <a href="./index.html">Trang chủ</a>
                <span>»</span>
                <a href="#tuyen-dung" data-page="recruitment">Tuyển dụng</a>
                <span>»</span>
                <strong>${recruit.title}</strong>
            </div>
        </div>

        <div class="recruit-detail-wrapper">

            ${renderRecruitSidebar()}

            <article class="recruit-detail-content">
                <span class="recruit-detail-date">${recruit.date}</span>

                <h1>${recruit.title}</h1>

                <div class="recruit-meta">
                    Đăng bởi: ${recruit.author}
                </div>

                ${renderRecruitBlocks(recruit.blocks)}

                <a href="#tuyen-dung" data-page="recruitment" class="back-recruit">
                    ← Quay lại tuyển dụng
                </a>
            </article>

        </div>

    </div>
`;

const detailPage = document.getElementById(recruitId);

if (detailPage) {
    detailPage.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

if (saveHistory) {
    history.pushState(
        {
            page: "recruit-detail",
            recruitId: recruitId
        },
        "",
        "#" + recruitId
    );
}


}

/* Cho script.js gọi được các hàm này */
window.recruitData = recruitData;
window.renderRecruitSidebar = renderRecruitSidebar;
window.renderRecruitmentList = renderRecruitmentList;
window.renderRecruitBlocks = renderRecruitBlocks;
window.renderRecruitDetail = renderRecruitDetail;
