const DISTRIBUTION_PAGE_SIZE = 6;

const distributionPageConfigs = {
    clinic: {
        hash: "phong-kham",
        pageFile: "phong-kham-content.html",
        label: "Phòng khám",
        eyebrow: "Cộng Đồng Bầu Distribution",
        heading: "PHÒNG KHÁM",
        listLabel: "Danh sách phòng khám",
        heroText: "Danh sách phòng khám đồng hành cùng Cộng Đồng Bầu trong hoạt động chăm sóc sức khỏe mẹ và bé.",
        ctaText: "Xem phòng khám"
    },
    hospital: {
        hash: "benh-vien",
        pageFile: "benh-vien-content.html",
        label: "Bệnh viện",
        eyebrow: "Cộng Đồng Bầu Healthcare",
        heading: "BỆNH VIỆN",
        listLabel: "Danh sách bệnh viện",
        heroText: "Hệ thống bệnh viện hợp tác trong các chương trình thai sản, nhi khoa, hội thảo và chăm sóc cộng đồng.",
        ctaText: "Xem bệnh viện"
    },
    preschool: {
        hash: "truong-mam-non",
        pageFile: "truong-mam-non-content.html",
        label: "Trường mầm non",
        eyebrow: "Cộng Đồng Bầu Education",
        heading: "TRƯỜNG MẦM NON",
        listLabel: "Danh sách trường mầm non",
        heroText: "Các đơn vị giáo dục mầm non đồng hành cùng phụ huynh trong hành trình phát triển toàn diện của trẻ.",
        ctaText: "Xem trường mầm non"
    }
};

const distributionData = {
    clinic: {
        "phong-kham-1": {
            title: "[Hà Nội] Hợp tác mới: Phòng khám Sản Phụ khoa 43 Nguyễn Khang",
            date: "12/01/2026",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/phongkham01.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>[Hà Nội] - HỢP TÁC MỚI: Phòng khám Sản Phụ khoa 43 Nguyễn Khang</strong><br>Cộng Đồng Bầu chính thức mở rộng mạng lưới đồng hành cùng các cơ sở y tế uy tín, để hành trình mang thai - làm mẹ của các mẹ được chăm sóc trọn vẹn hơn, khoa học hơn và gần gũi hơn."
                },
                {
                    type: "text",
                    value: "Chiều ngày 12/01/2026, Ban lãnh đạo Cộng Đồng Bầu và Trung tâm 1.000 ngày vàng đầu đời IPD8, do CEO Trương Thụy Thu Quỳnh dẫn đầu, đã có buổi thăm quan - trao đổi hợp tác cùng Phòng khám Sản Phụ khoa 43 Nguyễn Khang (Hà Nội) - một trong những phòng khám được các mẹ bầu tin tưởng hàng đầu hiện nay."
                },
                {
                    type: "text",
                    value: "<strong>Phòng khám Sản Phụ khoa 43 Nguyễn Khang</strong><br>Là địa chỉ quen thuộc của rất nhiều mẹ bầu Hà Nội nhờ chất lượng dịch vụ chuyên môn cao, quy trình chăm sóc tận tâm, lấy mẹ bầu làm trung tâm, cùng sự phát triển bền vững và tăng trưởng tốt qua nhiều năm dù thị trường ngày càng nhiều thách thức."
                },
                {
                    type: "text",
                    value: "Tiếp đón đoàn, Dược sĩ Nguyễn Thị Minh Dân - CEO Phòng khám 43 Nguyễn Khang đã có buổi trao đổi cởi mở và đầy đồng điệu với Cộng Đồng Bầu về giá trị cốt lõi trong chăm sóc mẹ bầu, tầm nhìn dài hạn trong việc đồng hành cùng gia đình trẻ, cũng như mong muốn mang lại nhiều hơn những giá trị thật, bền vững và nhân văn cho cộng đồng mẹ và bé."
                },
                {
                    type: "text",
                    value: "<strong>Kế hoạch hợp tác 2026</strong><br>Kết thúc buổi làm việc, hai bên đã thống nhất kế hoạch hợp tác trong năm 2026 với mục tiêu mang đến nhiều chương trình ý nghĩa dành cho mẹ bầu và mẹ bỉm sữa, gia tăng quyền lợi, trải nghiệm và giá trị chăm sóc toàn diện cho khách hàng của phòng khám."
                },
                {
                    type: "text",
                    value: "Đặc biệt, kế hoạch hợp tác sẽ tập trung vào chăm sóc - giáo dục trẻ trong 1.000 ngày đầu đời, giai đoạn nền tảng quyết định tương lai của con."
                },
                {
                    type: "text",
                    value: "<strong>Tin vui dành cho các mẹ bầu Hà Nội</strong><br>Đây là một tin rất hot dành cho các mẹ đang mang thai và nuôi con nhỏ tại khu vực Hà Nội. Trong thời gian tới, Cộng Đồng Bầu sẽ tiếp tục mở rộng hợp tác với các phòng khám sản uy tín, để đến gần mẹ hơn, hiểu mẹ hơn và đồng hành cùng mẹ sát sao hơn trên từng chặng đường làm mẹ."
                },
                {
                    type: "text",
                    value: "Các mẹ hãy cùng chờ đón những hoạt động, hội thảo và quyền lợi đặc biệt sắp được triển khai tại Phòng khám Sản Phụ khoa 43 Nguyễn Khang nhé!"
                },
                {
                    type: "image",
                    src: "./images/phongkham01.png",
                    alt: "Cộng Đồng Bầu hợp tác cùng Phòng khám Sản Phụ khoa 43 Nguyễn Khang"
                }
            ]
        },
        "phong-kham-2": {
            title: "Phòng khám Bác sĩ Ngọc Lệ - Khởi đầu tuyệt vời nhất",
            date: "Đang cập nhật",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/phongkham02.png",
            blocks: [
                {
                    type: "image",
                    src: "./images/phongkham02.png",
                    alt: "Phòng khám Bác sĩ Ngọc Lệ đồng hành cùng Cộng Đồng Bầu"
                },
                {
                    type: "text",
                    value: "Phòng khám Bác sĩ Ngọc Lệ sẽ cùng Cộng Đồng Bầu mang đến những <strong>Khởi Đầu Tuyệt Vời Nhất</strong> cho các mẹ."
                },
                {
                    type: "text",
                    value: "Các mẹ bầu ở khu vực phường Bình Chiểu, Thủ Đức có thể đến Phòng khám Bác sĩ Ngọc Lệ để tư vấn và tham khảo chương trình."
                },
                {
                    type: "text",
                    value: "Mỗi hành trình làm mẹ đều xứng đáng được bắt đầu bằng yêu thương và trí thức."
                },
                {
                    type: "text",
                    value: "Mẹ ơi, Cộng Đồng Bầu gửi tặng mẹ gói thành viên khởi đầu - món quà đặc biệt giúp mẹ bước vào hành trình 1.000 ngày đầu đời cùng con thật nhẹ nhàng và trọn vẹn."
                },
                {
                    type: "text",
                    value: "<strong>Điều tuyệt vời #1 - Cho con thính giác tinh anh nhất</strong><br>Mẹ được truy cập 50 bản nhạc chuyên biệt dành cho thai nhi và trẻ nhỏ, giúp con thư giãn, phát triển thính giác và trí não mỗi ngày. Mở kho nhạc và dành tặng con những phút giây khởi đầu tuyệt vời nhất."
                },
                {
                    type: "text",
                    value: "<strong>Điều tuyệt vời #2 - Lớp học trải nghiệm “Hơi thở gắn kết mẹ và con”</strong><br>Mẹ được trò chuyện 1:1 cùng bác sĩ và chuyên gia giáo dục sớm từ Trung tâm 1.000 Ngày Vàng Đầu Đời để được giải đáp mọi băn khoăn trong thai kỳ và nuôi dạy con."
                },
                {
                    type: "text",
                    value: "Hãy đến tư vấn ngay tại Phòng khám Bác sĩ Ngọc Lệ và khám phá gói quà tặng <strong>“Khởi Đầu Tuyệt Vời Nhất”</strong> cho mẹ bầu!"
                }
            ]
        },
        "phong-kham-3": {
            title: "Phòng khám Sản Phụ khoa Bác sĩ Đoàn Định đồng hành cùng Cộng Đồng Bầu",
            date: "Đang cập nhật",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/phongkham03.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>CHÚC MỪNG PHÒNG KHÁM SẢN PHỤ KHOA BÁC SĨ ĐOÀN ĐỊNH TRỞ THÀNH ĐỐI TÁC ĐỒNG HÀNH VỚI CỘNG ĐỒNG BẦU</strong>"
                },
                {
                    type: "text",
                    value: "Phòng khám Sản Phụ khoa Bác sĩ Đoàn Định sẽ cùng Cộng Đồng Bầu mang đến những <strong>“Khởi Đầu Tuyệt Vời Nhất”</strong> cho các mẹ."
                },
                {
                    type: "text",
                    value: "Các mẹ bầu ở khu vực phường 13, Phú Nhuận có thể đến địa chỉ 138 Đặng Văn Ngữ để tư vấn và tham khảo chương trình."
                },
                {
                    type: "image",
                    src: "../images/phongkham03.png",
                    alt: "Phòng khám Sản Phụ khoa Bác sĩ Đoàn Định đồng hành cùng Cộng Đồng Bầu"
                },
                {
                    type: "text",
                    value: "Mỗi hành trình làm mẹ đều xứng đáng được bắt đầu bằng yêu thương và trí thức."
                },
                {
                    type: "text",
                    value: "Mẹ ơi, Cộng Đồng Bầu mời mẹ tham gia chương trình <strong>“Khởi Đầu Tuyệt Vời Nhất”</strong> với nhiều điều tuyệt vời giúp mẹ bước vào hành trình 1.000 ngày đầu đời cùng con thật nhẹ nhàng và trọn vẹn."
                },
                {
                    type: "text",
                    value: "<strong>Điều tuyệt vời #1 - Cho con thính giác tinh anh nhất</strong><br>Mẹ được truy cập 50 bản nhạc chuyên biệt dành cho thai nhi và trẻ nhỏ, giúp con thư giãn, phát triển thính giác và trí não mỗi ngày. Mở kho nhạc và dành tặng con những phút giây khởi đầu tuyệt vời nhất."
                },
                {
                    type: "text",
                    value: "<strong>Điều tuyệt vời #2 - Lớp học trải nghiệm “Hơi thở gắn kết mẹ và con”</strong><br>Mẹ được trò chuyện 1:1 cùng bác sĩ và chuyên gia giáo dục sớm từ Trung tâm 1.000 Ngày Vàng Đầu Đời để được giải đáp mọi băn khoăn trong thai kỳ và nuôi dạy con."
                },
                {
                    type: "text",
                    value: "Hãy đến tư vấn ngay tại Phòng khám Bác sĩ Đoàn Định và khám phá gói quà tặng <strong>“Khởi Đầu Tuyệt Vời Nhất”</strong> cho mẹ bầu!"
                }
            ]
        }
    },
    hospital: {
        "benh-vien-1": {
            title: "[Hà Nội] Hợp tác mới: Bệnh viện Nhi Hà Nội",
            date: "Thứ Tư, 21/01/2026",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/benhvien1.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>[Hà Nội] - HỢP TÁC MỚI: BỆNH VIỆN NHI HÀ NỘI</strong><br><strong>BỆNH VIỆN NHI HÀ NỘI ĐÓN CHÀO HỢP TÁC CÙNG CỘNG ĐỒNG BẦU & TRUNG TÂM 1.000 NGÀY VÀNG ĐẦU ĐỜI IPD8</strong>"
                },
                {
                    type: "text",
                    value: "Với mong muốn đồng hành sâu sát hơn trong hành trình chăm sóc - nuôi dưỡng - phát triển trẻ em Việt Nam, Cộng Đồng Bầu và Trung tâm 1.000 ngày vàng đầu đời IPD8 không ngừng mở rộng kết nối với các đơn vị y tế uy tín trên cả nước."
                },
                {
                    type: "text",
                    value: "Mới đây, Cộng Đồng Bầu và Trung tâm IPD8 đã có buổi làm việc và trao đổi hợp tác cùng Bệnh viện Nhi Hà Nội - bệnh viện Đa khoa chuyên ngành Nhi đầu tiên của hệ thống bệnh viện công lập Thủ đô."
                },
                {
                    type: "text",
                    value: "<strong>Bệnh viện Nhi Hà Nội</strong><br>Là bệnh viện được đầu tư mới với cơ sở vật chất khang trang - hiện đại, đội ngũ y bác sĩ trẻ trung, trình độ cao, năng động, hướng đến cung cấp dịch vụ y tế chất lượng cao cho bệnh nhi trên địa bàn Hà Nội và các khu vực lân cận."
                },
                {
                    type: "text",
                    value: "<strong>Sự đồng điệu trong tầm nhìn & sứ mệnh</strong><br>Đón tiếp đoàn, TS.BS Đỗ Thị Thúy Nga - Phó Giám đốc Bệnh viện Nhi Hà Nội đã bày tỏ sự đánh giá cao đối với tâm huyết của Cộng Đồng Bầu trong các hoạt động vì trẻ em Việt Nam, cùng những chương trình ý nghĩa mà Cộng Đồng Bầu & IPD8 đã và đang triển khai cùng Bệnh viện."
                },
                {
                    type: "text",
                    value: "Đặc biệt, TS.BS Thúy Nga dành nhiều sự quan tâm tới việc hợp tác cùng Trung tâm IPD8 nhằm đưa Chương trình giáo dục sớm 1.000 ngày đầu đời tiếp cận gần hơn với trẻ nhỏ, phù hợp với nhóm bệnh nhi chiếm tỷ lệ lớn tại Bệnh viện Nhi Hà Nội, góp phần xây dựng nền tảng phát triển toàn diện cho trẻ ngay từ những năm tháng đầu đời."
                },
                {
                    type: "text",
                    value: "<strong>Hướng tới hợp tác lâu dài năm 2026</strong><br>Buổi gặp gỡ diễn ra trong không khí thân mật, nghiêm túc và hiệu quả cao. Qua đó, hai bên đã thống nhất định hướng hợp tác thiết thực và bền vững trong năm 2026, mở ra nhiều chương trình ý nghĩa dành cho trẻ em và gia đình."
                },
                {
                    type: "text",
                    value: "<strong>Lan tỏa giá trị nhân văn</strong><br>Nhân dịp này, Cộng Đồng Bầu đã trao tặng 240 phần quà nhằm ủng hộ chương trình thiện nguyện của Bệnh viện Nhi Hà Nội tại Thanh Hóa, góp phần lan tỏa yêu thương và sẻ chia tới các em nhỏ có hoàn cảnh khó khăn."
                },
                {
                    type: "text",
                    value: "Cộng Đồng Bầu sẽ tiếp tục cập nhật tới các ba mẹ những chương trình hợp tác, hoạt động chuyên môn và dự án cộng đồng ý nghĩa cùng Bệnh viện Nhi Hà Nội trong thời gian tới."
                },
                {
                    type: "text",
                    value: "Cùng nhau, chúng ta đồng hành vì một thế hệ trẻ em Việt Nam khỏe mạnh - hạnh phúc - phát triển toàn diện."
                },
                {
                    type: "image",
                    src: "./images/benhvien1.png",
                    alt: "Cộng Đồng Bầu hợp tác cùng Bệnh viện Nhi Hà Nội - hình 1"
                }
                
            ]
        },
        
    }


}
   /* preschool: {
        "truong-mam-non-1": {
            title: "Trường Mầm non Việt Đức",
            date: "Đang cập nhật",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/news-1.png",
            blocks: [
                {
                    type: "text",
                    value: "Đơn vị giáo dục mầm non đồng hành cùng phụ huynh trong các chương trình ưu đãi và phát triển trẻ nhỏ."
                },
                {
                    type: "text",
                    value: "Thông tin chương trình, ưu đãi và điều kiện áp dụng được cập nhật theo từng đợt hợp tác."
                }
            ]
        },
        "truong-mam-non-2": {
            title: "Trường Mầm non Song ngữ Trẻ Sáng Tạo",
            date: "Đang cập nhật",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/news-2.png",
            blocks: [
                {
                    type: "text",
                    value: "Trường mầm non song ngữ đồng hành cùng Cộng Đồng Bầu trong hệ sinh thái giáo dục và chăm sóc trẻ."
                },
                {
                    type: "text",
                    value: "Các chương trình ưu đãi học phí, cơ sở vật chất và đồng phục sẽ được cập nhật trong chuyên mục thành viên."
                }
            ]
        },
        "truong-mam-non-3": {
            title: "Đối tác giáo dục mầm non",
            date: "Đang cập nhật",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/news-6.png",
            blocks: [
                {
                    type: "text",
                    value: "Danh sách đối tác giáo dục mầm non sẽ tiếp tục được bổ sung khi Cộng Đồng Bầu mở rộng mạng lưới phân phối."
                },
                {
                    type: "text",
                    value: "Các trường có thể đồng hành thông qua chương trình ưu đãi, workshop phụ huynh hoặc hoạt động trải nghiệm cho trẻ."
                }
            ]
        }
    }
};*/


function getDistributionEntries(type) {
    return Object.entries(distributionData[type] || {});
}

function getDistributionTypeById(itemId) {
    return Object.keys(distributionData).find(type => distributionData[type][itemId]);
}

function getDistributionItem(itemId) {
    const type = getDistributionTypeById(itemId);

    if (!type) {
        return null;
    }

    return {
        type,
        item: distributionData[type][itemId]
    };
}

function renderDistributionSidebar() {
    return `
        <aside class="news-sidebar">
            <h2>DANH MỤC TIN TỨC</h2>

            <ul class="news-category">
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

                <li><a href="#hoat-dong" data-page="activity" class="category-link">Tin tức</a></li>
                <li><a href="#hoi-thao" data-page="seminar" class="category-link">Hội thảo</a></li>
                <li><a href="#uu-dai-thanh-vien" data-page="member-offer" class="category-link">Thành viên</a></li>

                <li class="category-item open">
                    <button class="category-toggle" type="button">
                        <span>Kênh phân phối</span>
                        <span class="category-arrow">▾</span>
                    </button>

                    <ul class="category-submenu">
                        <li><a href="#phong-kham" data-page="clinic">Phòng khám</a></li>
                        <li><a href="#benh-vien" data-page="hospital">Bệnh viện</a></li>
                        <li><a href="#truong-mam-non" data-page="preschool">Trường mầm non</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
    `;
}

function renderDistributionCard(type, id, item) {
    return `
        <article class="news-card">
            <a href="#${id}" data-page="distribution-detail" data-id="${id}" class="news-card-link">
                <div class="news-thumb">
                    <img src="${getNewsImageSrc(item.thumbnail)}" alt="${item.title}">
                </div>

                <div class="news-card-body">
                    <span class="news-date">${item.date}</span>
                    <h2>${item.title}</h2>
                    <p>${getNewsExcerpt(item)}</p>
                    <span class="news-readmore">Xem chi tiết →</span>
                </div>
            </a>
        </article>
    `;
}

function renderDistributionPagination(type, currentPage, totalPages) {
    if (totalPages <= 1) {
        return "";
    }

    const pageButtons = Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return `
            <button
                type="button"
                class="news-page-btn ${page === currentPage ? "active" : ""}"
                data-distribution-type="${type}"
                data-distribution-page="${page}"
                aria-label="Trang ${page}"
            >
                ${page}
            </button>
        `;
    }).join("");

    return `
        <div class="news-pagination" aria-label="Chuyển trang kênh phân phối">
            <button type="button" class="news-page-btn" data-distribution-type="${type}" data-distribution-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}>
                Trước
            </button>
            ${pageButtons}
            <button type="button" class="news-page-btn" data-distribution-type="${type}" data-distribution-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""}>
                Sau
            </button>
        </div>
    `;
}

function renderDistributionList(type, page = 1) {
    const grid = document.querySelector(".news-grid");

    if (!grid || !distributionPageConfigs[type]) {
        return;
    }

    const entries = getDistributionEntries(type);
    const count = document.getElementById("distributionCount");

    if (count) {
        count.textContent = String(entries.length);
    }

    const totalPages = Math.max(1, Math.ceil(entries.length / DISTRIBUTION_PAGE_SIZE));
    const currentPage = Math.min(Math.max(Number(page) || 1, 1), totalPages);
    const start = (currentPage - 1) * DISTRIBUTION_PAGE_SIZE;
    const visibleEntries = entries.slice(start, start + DISTRIBUTION_PAGE_SIZE);

    grid.innerHTML = visibleEntries.map(([id, item]) => renderDistributionCard(type, id, item)).join("");

    let pagination = document.querySelector(".news-pagination");

    if (!pagination) {
        pagination = document.createElement("div");
        grid.insertAdjacentElement("afterend", pagination);
    }

    pagination.outerHTML = renderDistributionPagination(type, currentPage, totalPages);

    document.querySelectorAll(".news-page-btn[data-distribution-page]").forEach(button => {
        button.addEventListener("click", () => {
            if (button.disabled) {
                return;
            }

            renderDistributionList(button.getAttribute("data-distribution-type"), button.getAttribute("data-distribution-page"));

            const sectionHead = document.getElementById(type + "-list");
            (sectionHead || grid).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

function initDistributionPage(type) {
    const page = document.querySelector("[data-distribution-type]");
    const distributionType = type || (page && page.getAttribute("data-distribution-type"));

    if (distributionType) {
        renderDistributionList(distributionType);
    }
}

function renderRelatedDistributions(type, currentId) {
    const related = getDistributionEntries(type)
        .filter(([id]) => id !== currentId)
        .slice(0, 3);

    if (related.length === 0) {
        return "";
    }

    return `
        <section class="related-news">
            <h2>ĐƠN VỊ LIÊN QUAN</h2>

            <div class="related-news-grid">
                ${related.map(([id, item]) => `
                    <article class="related-news-card">
                        <a href="#${id}" data-page="distribution-detail" data-id="${id}">
                            <img src="${getNewsImageSrc(item.thumbnail)}" alt="${item.title}">
                            <span>${item.date}</span>
                            <h3>${item.title}</h3>
                        </a>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

function renderDistributionDetail(itemId, saveHistory = true) {
    const content = document.getElementById("content");
    const result = getDistributionItem(itemId);

    if (!content) return;

    if (!result) {
        content.innerHTML = `
            <section class="news-not-found">
                <h2>Không tìm thấy đơn vị</h2>
                <a href="#phong-kham" data-page="clinic">Quay lại danh sách kênh phân phối</a>
            </section>
        `;
        return;
    }

    const config = distributionPageConfigs[result.type];
    const item = result.item;

    content.innerHTML = `
        <div class="news-detail-page" id="${itemId}">
            <div class="news-breadcrumb-bar">
                <div class="news-container">
                    <a href="./index.html">Trang chủ</a>
                    <span>/</span>
                    <a href="#${config.hash}" data-page="${result.type}">${config.label}</a>
                    <span>/</span>
                    <strong>${item.title}</strong>
                </div>
            </div>

            <div class="news-detail-wrapper">
                ${renderDistributionSidebar()}

                <article class="news-detail-content">
                    <span class="news-detail-date">${item.date}</span>
                    <h1>${item.title}</h1>

                    <div class="news-meta">
                        Đăng bởi: ${item.author}
                    </div>

                    ${renderNewsBlocks(item.blocks)}

                    <a href="#${config.hash}" data-page="${result.type}" class="back-news">
                        ← Quay lại ${config.label.toLowerCase()}
                    </a>

                    ${renderRelatedDistributions(result.type, itemId)}
                </article>
            </div>
        </div>
    `;

    const detailPage = document.getElementById(itemId);

    if (detailPage) {
        detailPage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (saveHistory) {
        history.pushState(
            {
                page: "distribution-detail",
                distributionId: itemId
            },
            "",
            "#" + itemId
        );
    }
}
