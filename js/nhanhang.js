const SPONSOR_PAGE_SIZE = 6;

const sponsorPageConfigs = {
    "gift-sponsor": {
        hash: "tai-tro-qua-tang",
        pageFile: "tai-tro-qua-tang-content.html",
        label: "Tài trợ quà tặng",
        eyebrow: "Cộng Đồng Bầu Partner",
        heading: "TÀI TRỢ QUÀ TẶNG",
        listLabel: "Danh sách tài trợ quà tặng",
        heroText: "Kết nối các thương hiệu đồng hành cùng mẹ và bé thông qua những phần quà thiết thực, phù hợp với từng giai đoạn thai kỳ và nuôi con.",
        ctaText: "Xem chương trình tài trợ"
    },
    "seminar-sponsor": {
        hash: "tai-tro-hoi-thao",
        pageFile: "tai-tro-hoi-thao-content.html",
        label: "Tài trợ hội thảo",
        eyebrow: "Cộng Đồng Bầu Event",
        heading: "TÀI TRỢ HỘI THẢO",
        listLabel: "Danh sách tài trợ hội thảo",
        heroText: "Không gian để thương hiệu đồng hành cùng các lớp tiền sản, workshop và hoạt động kết nối cộng đồng mẹ bầu.",
        ctaText: "Xem gói tài trợ"
    },
    "science-sponsor": {
        hash: "tai-tro-hoi-thao-khoa-hoc",
        pageFile: "tai-tro-hoi-thao-khoa-hoc-content.html",
        label: "Tài trợ hội thảo khoa học",
        eyebrow: "Cộng Đồng Bầu Science",
        heading: "TÀI TRỢ HỘI THẢO KHOA HỌC",
        listLabel: "Danh sách tài trợ khoa học",
        heroText: "Đồng hành cùng các chương trình chia sẻ kiến thức chuyên môn, nghiên cứu và truyền thông sức khỏe mẹ và bé.",
        ctaText: "Xem chuyên đề"
    }
};

const sponsorData = {
    "gift-sponsor": {
        "tai-tro-qua-tang-1": {
            title: "Comfort Baby - Nâng niu từng sợi vải, gửi trao yêu thương",
            date: "Thứ Năm, ngày 29/05/2025",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/cdb-x-comfort.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>Chương Trình Đồng Hành Cùng Mẹ Bầu: Comfort Baby - Nâng Niu Từng Sợi Vải, Gửi Trao Yêu Thương</strong>"
                },
                {
                    type: "text",
                    value: "Từ năm 2020 đến nay, Cộng Đồng Bầu đã phối hợp cùng thương hiệu nước xả vải Comfort Baby triển khai chương trình tặng nước xả vải miễn phí đến các bà mẹ mang thai và sau sinh tại hơn 30 bệnh viện sản - nhi trên toàn quốc."
                },
                {
                    type: "text",
                    value: "Đây là một hoạt động thiết thực nhằm hỗ trợ các mẹ trong việc chăm sóc quần áo cho bé yêu, giúp việc giặt giũ trở nên dễ dàng và an toàn hơn."
                },
                {
                    type: "image",
                    src: "./images/taitroquatang1.png",
                    alt: "Cộng Đồng Bầu hợp tác cùng Bệnh viện Nhi Hà Nội - hình 1"
                },
                {
                    type: "text",
                    value: "<strong>Mục tiêu của chương trình</strong><br>Hỗ trợ mẹ bầu và mẹ sau sinh: giảm bớt gánh nặng chi phí trong giai đoạn đầu chăm sóc bé."
                },
                {
                    type: "text",
                    value: "Nâng cao nhận thức: cung cấp thông tin và kiến thức về việc lựa chọn sản phẩm giặt xả an toàn cho trẻ sơ sinh."
                },
                {
                    type: "text",
                    value: "Đồng hành cùng mẹ: tạo dựng niềm tin và sự an tâm cho mẹ bầu trong hành trình làm mẹ."
                },
                 {
                    type: "image",
                    src: "./images/taitroquatang2.png",
                    alt: "Cộng Đồng Bầu hợp tác cùng Bệnh viện Nhi Hà Nội - hình 1"
                },
                {
                    type: "text",
                    value: "<strong>Comfort Baby - Lựa chọn an toàn cho làn da nhạy cảm của bé</strong><br>Thương hiệu nước xả vải Comfort Baby đã đồng hành cùng chương trình, mang đến những sản phẩm chất lượng cao, phù hợp với nhu cầu của mẹ và bé."
                },
                {
                    type: "text",
                    value: "Thành phần an toàn: sản phẩm được kiểm nghiệm và chứng nhận an toàn bởi Hiệp hội Da Liễu Anh Quốc và Bệnh viện Da Liễu Trung Ương Việt Nam, cực kỳ an toàn với làn da nhạy cảm của trẻ sơ sinh và trẻ nhỏ."
                },
                {
                    type: "text",
                    value: "Mùi hương dịu nhẹ: hương phấn thơm nhẹ nhàng giúp ngăn ngừa mùi hôi sữa hay chất bẩn dính trên áo quần bé, không ảnh hưởng đến khứu giác non yếu của bé."
                },
                {
                    type: "text",
                    value: "Làm mềm vải hiệu quả: công thức làm mềm quần áo gấp đôi giúp quần áo của bé luôn mềm mại, nhẹ nhàng, dễ dàng bao bọc làn da bé, tránh gây tổn thương hay kích ứng."
                },
                {
                    type: "text",
                    value: "Phù hợp cho cả gia đình: sản phẩm phù hợp cho cả giặt tay và giặt máy, giúp mẹ tiện lợi hơn trong việc giặt giũ hàng ngày."
                },
                {
                    type: "text",
                    value: "<strong>Chia sẻ từ các mẹ bầu</strong><br>Chị Lan Anh (Hà Nội) chia sẻ: “Mình rất bất ngờ khi nhận được phần quà là nước xả vải Comfort Baby từ chương trình. Sản phẩm rất dịu nhẹ, không gây kích ứng da cho bé. Cảm ơn Cộng Đồng Bầu và Comfort Baby đã mang đến món quà ý nghĩa này.”"
                },
                 {
                    type: "image",
                    src: "./images/taitroquatang3.png",
                    alt: "Cộng Đồng Bầu hợp tác cùng Bệnh viện Nhi Hà Nội - hình 1"
                },
                {
                    type: "text",
                    value: "Chương trình không chỉ là một hoạt động chăm sóc sức khỏe mà còn là cầu nối yêu thương, thể hiện sự quan tâm của xã hội đối với mẹ và bé."
                },
                {
                    type: "text",
                    value: "Hy vọng trong tương lai, sẽ có nhiều chương trình ý nghĩa như vậy được tổ chức, góp phần nâng cao chất lượng cuộc sống cho cộng đồng mẹ và bé."
                }
            ]
        },
        "tai-tro-qua-tang-2": {
            title: "Chương trình tặng tã sơ sinh Molfix",
            date: "Thứ Năm, 29/05/2025",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/cdb-x-molfix.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>Chương Trình Tặng Tã Sơ Sinh Molfix: Hành Trình Lan Tỏa Yêu Thương Đến 300.000 Mẹ Việt</strong>"
                },
                {
                    type: "text",
                    value: "Năm 2024 đánh dấu một cột mốc ý nghĩa khi CDB (Cộng Đồng Bầu) phối hợp cùng thương hiệu tã giấy Molfix - thuộc tập đoàn Hayat Kimya - triển khai chương trình tặng tã sơ sinh miễn phí đến 300.000 bà mẹ mang thai và sinh con tại hơn 30 bệnh viện Sản - Nhi trên toàn quốc, và hàng loạt các chương trình hội thảo tiền sản trên toàn quốc."
                },
                {
                    type: "image",
                    src: "./images/taitroquatang3.png",
                    alt: "Chương trình tặng tã sơ sinh Molfix"
                },
                 {
                    type: "image",
                    src: "./images/taitroquatang4.png",
                    alt: "Chương trình tặng tã sơ sinh Molfix"
                },
                {
                    type: "text",
                    value: "<strong>Sự kết hợp đầy nhân văn giữa CDB và Molfix</strong><br>Với sứ mệnh đồng hành cùng mẹ bầu trong suốt hành trình mang thai và chăm sóc bé yêu, CDB đã không ngừng nỗ lực mang đến những giá trị thiết thực."
                },
                {
                    type: "text",
                    value: "Việc hợp tác với Molfix - thương hiệu tã giấy hàng đầu thế giới - không chỉ là một hoạt động thiện nguyện mà còn là lời cam kết mạnh mẽ trong việc nâng cao chất lượng chăm sóc trẻ sơ sinh tại Việt Nam."
                },
                {
                    type: "text",
                    value: "<strong>Molfix - Tã giấy được tin dùng trên toàn thế giới</strong><br>Được sản xuất bởi tập đoàn Hayat Kimya - một trong những nhà sản xuất tã giấy lớn nhất thế giới, Molfix đã có mặt tại hơn 100 quốc gia và được hàng triệu bà mẹ tin tưởng."
                },
                {
                    type: "text",
                    value: "Tại Việt Nam, Molfix đã đầu tư nhà máy sản xuất hiện đại tại khu công nghiệp Becamex - Bình Phước, nhằm cung cấp sản phẩm chất lượng cao với giá cả hợp lý cho người tiêu dùng trong nước và khu vực Đông Nam Á."
                },
                {
                    type: "text",
                    value: "<strong>Điểm nổi bật của tã giấy Molfix</strong><br>Chất liệu tự nhiên: sử dụng sợi tre và cotton hữu cơ, an toàn cho làn da nhạy cảm của bé sơ sinh."
                },
                {
                    type: "text",
                    value: "Công nghệ Air-Soft mang lại cảm giác mềm mại và thoáng khí, giúp da bé luôn khô ráo và thoải mái."
                },
                {
                    type: "text",
                    value: "Vạch báo ướt thông minh giúp mẹ dễ dàng nhận biết thời điểm cần thay tã cho bé."
                },
                {
                    type: "text",
                    value: "Thiết kế linh hoạt với đai lưng co giãn 360 độ ôm sát cơ thể bé, ngăn ngừa tràn hiệu quả."
                },
                {
                    type: "text",
                    value: "Sản phẩm không chứa paraben, BPA và các chất gây kích ứng da."
                },
                {
                    type: "image",
                    src: "./images/taitroquatang5.png",
                    alt: "Chương trình tặng tã sơ sinh Molfix"
                },
                {
                    type: "text",
                    value: "<strong>Chia sẻ từ các mẹ bầu</strong><br>Chị Lan Anh (Hà Nội) chia sẻ: “Mình rất bất ngờ khi nhận được phần quà là tã Molfix từ chương trình. Tã rất mềm mại, thấm hút tốt và không gây hăm da cho bé. Cảm ơn CDB và Molfix đã mang đến món quà ý nghĩa này.”"
                },
                {
                    type: "text",
                    value: "<strong>Hành trình lan tỏa yêu thương</strong><br>Chương trình không chỉ dừng lại ở việc tặng quà, mà còn là hành trình lan tỏa yêu thương, chia sẻ và đồng hành cùng các mẹ bầu trên khắp mọi miền đất nước."
                },
                {
                    type: "image",
                    src: "./images/taitroquatang6.png",
                    alt: "Chương trình tặng tã sơ sinh Molfix"
                },
                {
                    type: "text",
                    value: "Với sự hỗ trợ từ các bệnh viện và đội ngũ y bác sĩ, chương trình đã tiếp cận và hỗ trợ kịp thời cho hàng trăm nghìn mẹ bầu, góp phần nâng cao nhận thức về chăm sóc sức khỏe mẹ và bé."
                },
                {
                    type: "text",
                    value: "CDB và Molfix cam kết sẽ tiếp tục đồng hành cùng các mẹ bầu trong hành trình làm mẹ, mang đến những sản phẩm chất lượng và những chương trình ý nghĩa hơn nữa trong tương lai."
                }
            ]
        }
    },
    "seminar-sponsor": {
        "tai-tro-hoi-thao-1": {
            title: "Cộng Đồng Bầu x Obimin: Hội thảo tiền sản dành cho mẹ bầu",
            date: "Thứ Ba, 17/06/2025",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/cdb-x-obimin.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>Cộng Đồng Bầu x Obimin: Hội Thảo Tiền Sản Dành Cho Mẹ Bầu</strong>"
                },
                {
                    type: "text",
                    value: "<strong>Dự án:</strong> Hội Thảo Tiền Sản Dành Cho Mẹ Bầu<br><strong>Đối tác:</strong> Obimin"
                },
                {
                    type: "text",
                    value: "Obimin là dòng sản phẩm vitamin tổng hợp uy tín dành cho phụ nữ dự định mang thai, đang mang thai và đang cho con bú, do Công ty United International Pharma (Việt Nam) sản xuất."
                },
                {
                    type: "text",
                    value: "<strong>Sản phẩm giúp:</strong><br>Bổ sung đầy đủ các loại vitamin (A, B1, B2, B6, B12, C, D, niacinamide, axit folic) và khoáng chất (sắt fumarate, calci, đồng, iod, magie...) thiết yếu trong giai đoạn mang thai và hậu sản."
                },
                {
                    type: "text",
                    value: "Đặc biệt ở dòng Obimin Plus, bổ sung thêm DHA & EPA (omega-3) giúp phát triển não bộ, thị giác và hệ thần kinh của bé."
                },
                {
                    type: "text",
                    value: "Hỗ trợ phòng ngừa thiếu máu, dị tật ống thần kinh, tăng cường hệ miễn dịch, giúp xương chắc khỏe nhờ vitamin D - calci, đồng thời giảm mệt mỏi, chuột rút, viêm nhiễm thường gặp khi mang thai."
                },
                {
                    type: "text",
                    value: "<strong>Quy cách & xuất xứ:</strong><br>Obimin Multivitamins: dạng viên nén bao phim, gồm 3 vỉ x 10 viên, mỗi viên chứa acid folic 1mg, sắt fumarate 90mg, vitamin A 3.000 IU, vitamin D 400 IU..."
                },
                {
                    type: "text",
                    value: "Obimin Plus: dạng viên nang mềm có thêm DHA/EPA, thích hợp cho cả thai kỳ và giai đoạn cho con bú."
                },
                {
                    type: "text",
                    value: "<strong>Lợi ích cho mẹ và bé:</strong><br>Cho bé phát triển toàn diện - hỗ trợ não bộ, hệ thần kinh, mắt, hệ xương và phòng ngừa dị tật bẩm sinh từ đầu thai kỳ."
                },
                {
                    type: "text",
                    value: "Củng cố sức khỏe mẹ - chống thiếu máu, mệt mỏi, hỗ trợ miễn dịch và giảm triệu chứng viêm nhiễm thường gặp."
                },
                {
                    type: "text",
                    value: "Chuẩn hóa dinh dưỡng - nhờ sự kết hợp giữa vitamin nhóm B, C, D, A, khoáng chất và omega-3 giúp mẹ yên tâm dùng xuyên thai kỳ và sau sinh."
                },
                {
                    type: "text",
                    value: "<strong>Một số hình ảnh tiêu biểu của dự án:</strong>"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang7.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 1"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang8.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 2"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang9.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 3"
                },
                 {
                    type: "image",
                    src: "./images/taitroquatang10.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 3"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang11.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 3"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang12.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 3"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang13.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 3"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang14.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 3"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang15.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 3"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang16.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 3"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang17.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Obimin - hình 3"
                },

            ]
        },
        "tai-tro-hoi-thao-2": {
            title: "Cộng Đồng Bầu x Khăn Ướt Nuna & Bệnh Viện Tâm Phúc Hải Phòng",
            date: "Thứ Ba, 17/06/2025",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/nuna2.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>Cộng Đồng Bầu x Khăn Ướt Nuna & Bệnh Viện Tâm Phúc Hải Phòng: Hội Thảo Tiền Sản Dành Cho Mẹ Bầu</strong>"
                },
                {
                    type: "text",
                    value: "<strong>Dự án:</strong> Hội Thảo Tiền Sản Dành Cho Mẹ Bầu<br><strong>Đối tác:</strong> Khăn Ướt Nuna"
                },
                {
                    type: "text",
                    value: "Nuna là thương hiệu khăn ướt chất lượng cao dành cho trẻ sơ sinh và trẻ nhỏ, thuộc Công ty TNHH Yahon - Việt Nam, với dây chuyền sản xuất khép kín trong phòng sạch, đảm bảo an toàn cho da bé."
                },
                {
                    type: "text",
                    value: "<strong>Sản phẩm giúp:</strong><br>Sử dụng vải không dệt mềm mại (Rayon) kết hợp với chiết xuất lô hội giúp làm mát, giữ ẩm mà không gây nhờn da; khăn dai, mềm mịn, không rách hay để lại sợi vải trên da."
                },
                {
                    type: "text",
                    value: "Dùng nước tinh khiết R.O, không cồn, không paraben, không hóa chất như huỳnh quang, Phenoxyethanol hay MIT - hoàn toàn dịu nhẹ cho làn da nhạy cảm và da bé sơ sinh."
                },
                {
                    type: "text",
                    value: "Khăn không mùi hoặc có mùi phấn nhẹ tùy dòng, an toàn cho da, phù hợp lau người, tay, mặt, khi thay tã hay dã ngoại."
                },
                {
                    type: "text",
                    value: "<strong>Quy cách & xuất xứ:</strong><br>Kích thước trung bình 150x200mm, mỗi gói 100 miếng, sản xuất tại Việt Nam, hạn sử dụng 3 năm."
                },
                {
                    type: "text",
                    value: "<strong>Lợi ích cho bé và mẹ:</strong><br>Bảo vệ da bé - làm sạch nhẹ nhàng, duy trì độ ẩm, giảm nguy cơ kích ứng nhờ thành phần tự nhiên."
                },
                {
                    type: "text",
                    value: "Tiện dụng mọi lúc mọi nơi - gói nhỏ gọn có nắp giữ ẩm, dễ mang theo khi ra ngoài hoặc lúc cần thay tã nhanh."
                },
                {
                    type: "text",
                    value: "An toàn lâu dài - công nghệ sản xuất nghiêm ngặt, không chứa hóa chất độc hại, giúp mẹ yên tâm dùng hàng ngày."
                },
                {
                    type: "text",
                    value: "<strong>Một số hình ảnh tiêu biểu của dự án:</strong>"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang18.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Khăn Ướt Nuna - hình 1"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang19.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Khăn Ướt Nuna - hình 1"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang20.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Khăn Ướt Nuna - hình 1"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang21.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Khăn Ướt Nuna - hình 1"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang22.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Khăn Ướt Nuna - hình 1"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang23.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Khăn Ướt Nuna - hình 1"
                },
                {
                    type: "image",
                    src: "./images/taitroquatang24.png",
                    alt: "Hội thảo tiền sản Cộng Đồng Bầu x Khăn Ướt Nuna - hình 1"
                },
            ]
        },
       
    },
    "science-sponsor": {
        "tai-tro-hoi-thao-khoa-hoc-1": {
            title: "Cộng Đồng Bầu x Johnson's Baby: Đào tạo cho hơn 300 nữ hộ sinh",
            date: "Thứ Hai, 14/07/2025",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/bvpstw.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>Cộng Đồng Bầu x Johnson's Baby & Bệnh Viện Phụ Sản Trung Ương: CHƯƠNG TRÌNH ĐÀO TẠO CHO HƠN 300 NỮ HỘ SINH</strong>"
                },
                {
                    type: "text",
                    value: "<strong>Dự án:</strong> Chương Trình Đào Tạo Liên Tục Dành Cho Hơn 300 Nữ Hộ Sinh<br><strong>Đối tác:</strong> Johnson's Baby & Bệnh Viện Phụ Sản Trung Ương"
                },
                {
                    type: "text",
                    value: "Chiều ngày 11/07/2025, hơn 300 nữ hộ sinh và cán bộ y tế của Bệnh viện Phụ sản Trung ương đã cùng nhau tham gia chương trình đào tạo liên tục với chủ đề thiêng liêng “Người bảo hộ da bé” - một hành trình vừa chuyên môn, vừa đầy yêu thương và nhân văn."
                },
                {
                    type: "text",
                    value: "Chương trình được phối hợp tổ chức bởi Hội Nữ Hộ sinh Việt Nam, Công ty Cộng Đồng Bầu và sự đồng hành ý nghĩa từ Johnson's Baby, mang lại một không gian học tập sôi nổi, cảm hứng và đầy tính thực tiễn."
                },
                {
                    type: "text",
                    value: "<strong>Phần 1 - Cập nhật kiến thức chuyên môn</strong><br>ĐD CKI. Lê Thị Vân - Điều dưỡng trưởng Trung tâm Sơ sinh, chia sẻ về “Chăm sóc da sơ sinh theo chuẩn quốc tế” - một chủ đề thiết thực và quan trọng trong chăm sóc trẻ nhỏ."
                },
                {
                    type: "text",
                    value: "DS. Nguyễn Anh Thái - Đại diện nhãn hàng Johnson's Baby, mang đến góc nhìn khoa học về “Sữa và gạo trong chăm sóc da nhũ nhi” - giúp mở rộng hiểu biết về các sản phẩm lành tính và phù hợp với làn da mong manh của bé."
                },
                {
                    type: "text",
                    value: "<strong>Phần 2 - Cuộc thi thực hành tắm bé</strong><br>Không khí trở nên rộn ràng hơn bao giờ hết khi các đội bước vào phần thi thực hành: từ cách lau người, vệ sinh, đến việc lựa chọn sản phẩm đúng với từng loại da bé."
                },
                {
                    type: "text",
                    value: "Mỗi động tác đều thể hiện sự tận tâm, chính xác và đầy tính nhân văn của người làm nghề."
                },
                {
                    type: "text",
                    value: "PGS.TS Lê Hoài Chương - Phó Giám đốc Bệnh viện đã gửi lời khen ngợi sâu sắc đến Hội Nữ Hộ sinh Việt Nam, Cộng Đồng Bầu và Johnson's Baby vì đã kiến tạo một chương trình bài bản, ý nghĩa."
                },
                {
                    type: "text",
                    value: "Đặc biệt, tinh thần cầu thị, ham học hỏi của đội ngũ hộ sinh và điều dưỡng chính là minh chứng cho khát vọng không ngừng nâng cao chất lượng chăm sóc sơ sinh tại bệnh viện."
                },
                {
                    type: "text",
                    value: "Đây không chỉ là buổi đào tạo, mà là nơi kết nối, chia sẻ và cùng nhìn lại hành trình chăm sóc da bé - từ những điều nhỏ nhất, ta cùng nhau làm nên điều lớn lao: trao cho con khởi đầu êm ái và an toàn nhất."
                },
                {
                    type: "text",
                    value: "Cộng Đồng Bầu rất vinh dự khi được đồng hành trong hành trình nâng tầm nghề chăm sóc - lan tỏa sứ mệnh nhân văn vì thế hệ tương lai."
                },
                {
                    type: "image",
                    src: "./images/taitroquatang25.png",
                    alt: "Cộng Đồng Bầu x Johnson's Baby đào tạo nữ hộ sinh"
                },
                 {
                    type: "image",
                    src: "./images/taitroquatang26.png",
                    alt: "Cộng Đồng Bầu x Johnson's Baby đào tạo nữ hộ sinh"
                },
                 {
                    type: "image",
                    src: "./images/taitroquatang27.png",
                    alt: "Cộng Đồng Bầu x Johnson's Baby đào tạo nữ hộ sinh"
                 },
                 {
                    type: "image",
                    src: "./images/taitroquatang30.png",
                    alt: "Cộng Đồng Bầu x Johnson's Baby đào tạo nữ hộ sinh"
                },
                 {
                    type: "image",
                    src: "./images/taitroquatang31.png",
                    alt: "Cộng Đồng Bầu x Johnson's Baby đào tạo nữ hộ sinh"
                },
                 {
                    type: "image",
                    src: "./images/taitroquatang32.png",
                    alt: "Cộng Đồng Bầu x Johnson's Baby đào tạo nữ hộ sinh"
                },
            ]
        },
        "tai-tro-hoi-thao-khoa-hoc-2": {
            title: "Cộng Đồng Bầu x Elevit: Lớp Học Làm Cha Mẹ",
            date: "Thứ Ba, 17/06/2025",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/cdb-x-elevit.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>Cộng Đồng Bầu x Elevit: Lớp Học Làm Cha Mẹ</strong>"
                },
                {
                    type: "text",
                    value: "<strong>Dự án:</strong> Lớp Học Làm Cha Mẹ<br><strong>Đối tác:</strong> Cộng Đồng Bầu"
                },
                {
                    type: "text",
                    value: "Elevit là thương hiệu viên uống bổ sung vitamin và khoáng chất dành cho phụ nữ mang thai và cho con bú, thuộc tập đoàn Bayer (Đức) - một trong những tập đoàn dược phẩm hàng đầu thế giới."
                },
                {
                    type: "text",
                    value: "Sản phẩm giúp bổ sung đầy đủ các dưỡng chất cần thiết cho sức khỏe của mẹ và sự phát triển toàn diện của thai nhi trong suốt thai kỳ và giai đoạn sau sinh."
                },
                {
                    type: "text",
                    value: "Elevit Pronatal là dòng sản phẩm phổ biến nhất trên thị trường Việt Nam."
                },
                {
                    type: "text",
                    value: "<strong>Elevit giúp:</strong><br>Bổ sung đầy đủ 12 loại vitamin và 8 loại khoáng chất quan trọng."
                },
                {
                    type: "text",
                    value: "Hỗ trợ sự phát triển não bộ, tim mạch, xương, hệ miễn dịch của bé."
                },
                {
                    type: "text",
                    value: "Tăng cường sức khỏe cho mẹ, giảm mệt mỏi khi mang thai và sau sinh."
                },
                {
                    type: "text",
                    value: "<strong>Một số hình ảnh tiêu biểu của dự án:</strong>"
                },
                {
                    type: "image",
                    src: "./images/taitrohoithaokhoahoc_1.png",
                    alt: "Cộng Đồng Bầu x Elevit: Lớp Học Làm Cha Mẹ"
                },
                {
                    type: "image",
                    src: "./images/taitrohoithaokhoahoc_2.png",
                    alt: "Cộng Đồng Bầu x Elevit: Lớp Học Làm Cha Mẹ"
                },
                {
                    type: "image",
                    src: "./images/taitrohoithaokhoahoc_3.png",
                    alt: "Cộng Đồng Bầu x Elevit: Lớp Học Làm Cha Mẹ"
                },
                {
                    type: "image",
                    src: "./images/taitrohoithaokhoahoc_4.png",
                    alt: "Cộng Đồng Bầu x Elevit: Lớp Học Làm Cha Mẹ"
                },
                {
                    type: "image",
                    src: "./images/taitrohoithaokhoahoc_5.png",
                    alt: "Cộng Đồng Bầu x Elevit: Lớp Học Làm Cha Mẹ"
                },
                
            ]
        },
        "tai-tro-hoi-thao-khoa-hoc-3": {
            title: "Chương Trình Đồng Hành Cùng Mẹ Và Bé: Johnson's Baby - Nâng Niu Làn Da Bé Yêu",
            date: "Thứ Năm, 29/05/2025",
            author: "Cộng Đồng Bầu",
            thumbnail: "./images/cdb-x-johnson.png",
            blocks: [
                {
                    type: "text",
                    value: "<strong>Chương Trình Đồng Hành Cùng Mẹ Và Bé: Johnson's Baby - Nâng Niu Làn Da Bé Yêu</strong>"
                },
                {
                    type: "text",
                    value: "Từ năm 2020 đến nay, Công ty OTB đã phối hợp cùng thương hiệu sữa tắm Johnson's Baby triển khai chương trình tài trợ sữa tắm nguyên năm cho các bệnh viện sản - nhi lớn trên toàn quốc. Đây là một hoạt động thiết thực nhằm hỗ trợ các mẹ trong việc chăm sóc làn da nhạy cảm của bé yêu, giúp việc tắm gội trở nên dễ dàng và an toàn hơn."
                },
                {
                    type: "image",
                    src: "./images/taitrokhoahoc_6.png",
                    alt: "Chương Trình Đồng Hành Cùng Mẹ Và Bé: Johnson's Baby – Nâng Niu Làn Da Bé Yêu"
                },
                {
                    type: "text",
                    value: "<strong>Mục tiêu của chương trình</strong><br>Hỗ trợ mẹ bầu và mẹ sau sinh: Giảm bớt gánh nặng chi phí trong giai đoạn đầu chăm sóc bé."
                },
                {
                    type: "text",
                    value: "Nâng cao nhận thức: Cung cấp thông tin và kiến thức về việc lựa chọn sản phẩm tắm gội an toàn cho trẻ sơ sinh."
                },
                {
                    type: "text",
                    value: "Đồng hành cùng mẹ: Tạo dựng niềm tin và sự an tâm cho mẹ bầu trong hành trình làm mẹ."
                },
                {
                    type: "text",
                    value: "<strong>Johnson's Baby - Lựa chọn an toàn cho làn da nhạy cảm của bé</strong><br>Thương hiệu sữa tắm Johnson's Baby đã đồng hành cùng chương trình, mang đến những sản phẩm chất lượng cao, phù hợp với nhu cầu của mẹ và bé."
                },
                {
                    type: "text",
                    value: "Công thức dịu nhẹ: Được thiết kế đặc biệt để làm sạch nhẹ nhàng làn da mỏng manh của trẻ sơ sinh mà không gây kích ứng."
                },
                {
                    type: "text",
                    value: "Độ pH cân bằng: Giúp duy trì độ ẩm tự nhiên của da, bảo vệ làn da bé khỏi tình trạng khô ráp."
                },
                {
                    type: "text",
                    value: "Không chứa chất gây hại: Sản phẩm không chứa parabens, phthalates và sulfates, đảm bảo an toàn cho làn da nhạy cảm của bé."
                },
                {
                    type: "text",
                    value: "Hương thơm dịu nhẹ: Mang lại cảm giác thư giãn cho cả mẹ và bé trong mỗi lần tắm."
                },
                 {
                    type: "image",
                    src: "./images/taitrokhoahoc_7.png",
                    alt: "Chương Trình Đồng Hành Cùng Mẹ Và Bé: Johnson's Baby – Nâng Niu Làn Da Bé Yêu"
                },
                {
                    type: "text",
                    value: "<strong>Chia sẻ từ các mẹ bầu</strong><br>Chị Lan Anh (Hà Nội) chia sẻ: \"Mình rất bất ngờ khi nhận được phần quà là sữa tắm Johnson's Baby từ chương trình. Sản phẩm rất dịu nhẹ, không gây kích ứng da cho bé. Cảm ơn OTB và Johnson's Baby đã mang đến món quà ý nghĩa này.\""
                },
                {
                    type: "text",
                    value: "Chương trình không chỉ là một hoạt động chăm sóc sức khỏe mà còn là cầu nối yêu thương, thể hiện sự quan tâm của xã hội đối với mẹ và bé. Hy vọng trong tương lai, sẽ có nhiều chương trình ý nghĩa như vậy được tổ chức, góp phần nâng cao chất lượng cuộc sống cho cộng đồng mẹ và bé."
                }
            ]
        }
    }
};

function getSponsorEntries(type) {
    return Object.entries(sponsorData[type] || {});
}

function getSponsorTypeById(sponsorId) {
    return Object.keys(sponsorData).find(type => sponsorData[type][sponsorId]);
}

function getSponsorItem(sponsorId) {
    const type = getSponsorTypeById(sponsorId);

    if (!type) {
        return null;
    }

    return {
        type,
        item: sponsorData[type][sponsorId]
    };
}

function renderSponsorSidebar() {
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
                        <span>Nhãn hàng</span>
                        <span class="category-arrow">▾</span>
                    </button>

                    <ul class="category-submenu">
                        <li><a href="#tai-tro-qua-tang" data-page="gift-sponsor">Tài trợ quà tặng</a></li>
                        <li><a href="#tai-tro-hoi-thao" data-page="seminar-sponsor">Tài trợ hội thảo</a></li>
                        <li><a href="#tai-tro-hoi-thao-khoa-hoc" data-page="science-sponsor">Tài trợ hội thảo khoa học</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
    `;
}

function renderSponsorCard(type, id, item) {
    return `
        <article class="news-card">
            <a href="#${id}" data-page="sponsor-detail" data-id="${id}" class="news-card-link">
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

function renderSponsorPagination(type, currentPage, totalPages) {
    if (totalPages <= 1) {
        return "";
    }

    const pageButtons = Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return `
            <button
                type="button"
                class="news-page-btn ${page === currentPage ? "active" : ""}"
                data-sponsor-type="${type}"
                data-sponsor-page="${page}"
                aria-label="Trang ${page}"
            >
                ${page}
            </button>
        `;
    }).join("");

    return `
        <div class="news-pagination" aria-label="Chuyển trang nhãn hàng">
            <button type="button" class="news-page-btn" data-sponsor-type="${type}" data-sponsor-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}>
                Trước
            </button>

            ${pageButtons}

            <button type="button" class="news-page-btn" data-sponsor-type="${type}" data-sponsor-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""}>
                Sau
            </button>
        </div>
    `;
}

function renderSponsorList(type, page = 1) {
    const grid = document.querySelector(".news-grid");

    if (!grid || !sponsorPageConfigs[type]) {
        return;
    }

    const entries = getSponsorEntries(type);
    const count = document.getElementById("sponsorCount");

    if (count) {
        count.textContent = String(entries.length);
    }

    const totalPages = Math.max(1, Math.ceil(entries.length / SPONSOR_PAGE_SIZE));
    const currentPage = Math.min(Math.max(Number(page) || 1, 1), totalPages);
    const start = (currentPage - 1) * SPONSOR_PAGE_SIZE;
    const visibleEntries = entries.slice(start, start + SPONSOR_PAGE_SIZE);

    grid.innerHTML = visibleEntries.map(([id, item]) => renderSponsorCard(type, id, item)).join("");

    let pagination = document.querySelector(".news-pagination");

    if (!pagination) {
        pagination = document.createElement("div");
        grid.insertAdjacentElement("afterend", pagination);
    }

    pagination.outerHTML = renderSponsorPagination(type, currentPage, totalPages);

    document.querySelectorAll(".news-page-btn[data-sponsor-page]").forEach(button => {
        button.addEventListener("click", () => {
            if (button.disabled) {
                return;
            }

            renderSponsorList(button.getAttribute("data-sponsor-type"), button.getAttribute("data-sponsor-page"));

            const sectionHead = document.getElementById(type + "-list");
            (sectionHead || grid).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

function initSponsorPage(type) {
    const page = document.querySelector("[data-sponsor-type]");
    const sponsorType = type || (page && page.getAttribute("data-sponsor-type"));

    if (sponsorType) {
        renderSponsorList(sponsorType);
    }
}

function renderRelatedSponsors(type, currentId) {
    const related = getSponsorEntries(type)
        .filter(([id]) => id !== currentId)
        .slice(0, 3);

    if (related.length === 0) {
        return "";
    }

    return `
        <section class="related-news">
            <h2>CHƯƠNG TRÌNH LIÊN QUAN</h2>

            <div class="related-news-grid">
                ${related.map(([id, item]) => `
                    <article class="related-news-card">
                        <a href="#${id}" data-page="sponsor-detail" data-id="${id}">
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

function renderSponsorDetail(sponsorId, saveHistory = true) {
    const content = document.getElementById("content");
    const result = getSponsorItem(sponsorId);

    if (!content) return;

    if (!result) {
        content.innerHTML = `
            <section class="news-not-found">
                <h2>Không tìm thấy chương trình</h2>
                <a href="#tai-tro-qua-tang" data-page="gift-sponsor">Quay lại danh sách tài trợ</a>
            </section>
        `;
        return;
    }

    const config = sponsorPageConfigs[result.type];
    const item = result.item;

    content.innerHTML = `
        <div class="news-detail-page" id="${sponsorId}">
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
                ${renderSponsorSidebar()}

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

                    ${renderRelatedSponsors(result.type, sponsorId)}
                </article>
            </div>
        </div>
    `;

    const detailPage = document.getElementById(sponsorId);

    if (detailPage) {
        detailPage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (saveHistory) {
        history.pushState(
            {
                page: "sponsor-detail",
                sponsorId: sponsorId
            },
            "",
            "#" + sponsorId
        );
    }
}
