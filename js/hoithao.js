const SEMINAR_PAGE_SIZE = 6;

const seminarData = {
    "hoi-thao-19": {
        title: "[Âu Cơ] Lớp tiền sản miễn phí 20/06",
        date: "19/06/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao19thang6.png",
        blocks: [
            {
                type: "text",
                value: "<strong>🌷 [ÂU CƠ] LỚP TIỀN SẢN MIỄN PHÍ 20/06</strong>"
            },
            {
                type: "text",
                value: "Mang thai là hành trình đặc biệt, và kiến thức đúng sẽ giúp ba mẹ thêm tự tin trong quá trình chuẩn bị đón bé yêu."
            },
            {
                type: "text",
                value: "Tham gia Lớp Tiền sản Bệnh viện Âu Cơ để cùng các bác sĩ chuyên khoa cập nhật những thông tin hữu ích cho mẹ và bé."
            },
            {
                type: "text",
                value: "<strong>Một buổi học - hai bác sĩ chuyên khoa đồng hành:</strong><br>👩‍⚕️ <strong>Chủ đề 1:</strong> Bé yêu đang lớn đúng chuẩn hay chậm hơn tuổi thai?<br>ThS.BS.CKII Nguyễn Thị Thu Hà<br><em>Trưởng khoa Phụ Sản</em><br><br>👩‍⚕️ <strong>Chủ đề 2:</strong> Nhận biết sớm các bệnh thường gặp ở trẻ sơ sinh<br>TTƯT.BS.CKII Phạm Thị Thu Thủy<br><em>Chuyên gia Nhi khoa</em>"
            },
            {
                type: "text",
                value: "<strong>🎁 Đặc quyền dành riêng cho khách tham dự:</strong><br>✨ Ưu đãi lên đến <strong>3.500.000 VNĐ</strong><br>✨ <strong>Quà tặng + đặc quyền kép</strong> duy nhất tại lớp học"
            },
            {
                type: "text",
                value: "<strong>📅 Thời gian:</strong> 09:00 - 11:15 | Thứ Bảy, ngày 20/06/2026<br><strong>📍 Địa điểm:</strong> Hội trường lầu 3 - Bệnh viện Âu Cơ<br>(47/19A Đường Điểu Xiển, Khu phố 25, P. Long Bình, Đồng Nai)"
            },
            {
                type: "text",
                value: "📲 Quét mã <strong>QR</strong> để đăng ký Lớp Tiền sản ngay hôm nay!"
            },
            {
                type: "text",
                value: "💚 Một buổi học nhỏ - hành trang lớn, giúp ba mẹ thêm hiểu biết, chủ động và an tâm hơn trên hành trình chào đón con yêu."
            },
            {
                type: "text",
                value: "<strong>📞 Liên hệ:</strong> 0947 701 010<br>💬 Hoặc kết nối Zalo OA của Zmoms để được hỗ trợ nhanh hơn nhé!<br><strong>Zmoms - ĐỂ CON HƠN TÔI</strong>"
            },
            {
                type: "image",
                src: "./images/hoithao19thang6.png",
                alt: "Lớp tiền sản miễn phí 20/06 tại Bệnh viện Âu Cơ"
            }
        ]
    },
    "hoi-thao-18": {
        title: "Lớp học tiền sản miễn phí 13/06: BVĐK Xuyên Á",
        date: "11/06/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao11thang6_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>🌷 Lớp học tiền sản miễn phí 13/06: BVĐK Xuyên Á</strong>"
            },
            {
                type: "text",
                value: "Mỗi em bé chào đời là một hành trình đặc biệt. Lớp Tiền sản tháng 6 sẽ mang đến những kiến thức thực tế và kỹ năng hữu ích, giúp mẹ hiểu hơn về quá trình chuyển dạ, sinh nở và tự tin hơn trên hành trình vượt cạn."
            },
            {
                type: "text",
                value: "<strong>CHỦ ĐỀ: CHUẨN BỊ CHO HÀNH TRÌNH VƯỢT CẠN</strong>"
            },
            {
                type: "text",
                value: "<strong>📅 Thời gian:</strong> 08:00 - 10:00 | Thứ Bảy, ngày 13/06/2026<br><strong>📍 Địa điểm:</strong> Sảnh Khu khám VIP, BVĐK Xuyên Á<br>(42 Phan Văn Khải - Quốc lộ 22 cũ, ấp Chợ, xã Củ Chi, TP.HCM)"
            },
            {
                type: "text",
                value: "<strong>Diễn giả:</strong><br>- BS. CKI. Lê Ngọc Hiền - Khoa Sản Phụ Khoa BVĐK Xuyên Á TP.HCM<br>- BS.CKI. Đàm Lê Kim Xuyến - Khoa Sản Phụ Khoa BVĐK Xuyên Á TP.HCM<br>- NHST. Lê Thị Thu Hà - Khoa Sản Phụ Khoa BVĐK Xuyên Á TP.HCM"
            },
            {
                type: "text",
                value: "<strong>💡 Những nội dung hữu ích dành cho mẹ bầu:</strong><br>✔️ Dấu hiệu chuyển dạ, thời điểm nhập viện và những điều cần chuẩn bị trước sinh<br>✔️ Chồng có nên đồng hành trong phòng sinh? Những lợi ích mẹ cần biết<br>✔️ Tìm hiểu về bệnh trĩ trong thai kỳ và cách phòng ngừa hiệu quả<br>✔️ Hướng dẫn bài tập thở giúp giảm căng thẳng khi chuyển dạ<br>✔️ Thực hành các tư thế sinh và massage thai kỳ dưới sự hướng dẫn của điều dưỡng hộ sinh<br>✔️ Giao lưu, đặt câu hỏi trực tiếp với đội ngũ bác sĩ giàu kinh nghiệm"
            },
            {
                type: "text",
                value: "<strong>🎁 Đặc quyền dành cho khách tham dự:</strong><br>🎀 Nhận ngay set quà tặng trị giá <strong>800.000 đồng</strong><br>🎀 Ưu đãi <strong>10% - 15%</strong> gói thai sản khi đăng ký tại sự kiện"
            },
            {
                type: "text",
                value: "📲 Đăng ký tham dự ngay tại:<br><a href=\"https://forms.gle/SLY1QKyNuoCFzCfSA\" target=\"_blank\" rel=\"noopener\">https://forms.gle/SLY1QKyNuoCFzCfSA</a>"
            },
            {
                type: "text",
                value: "💖 Chuẩn bị tốt cho ngày sinh không chỉ giúp mẹ an tâm hơn mà còn mang đến cho bé yêu một khởi đầu trọn vẹn. Hẹn gặp mẹ tại Hội thảo Tiền sản tháng 6 nhé! 💖"
            },
            {
                type: "text",
                value: "<strong>📞 Liên hệ:</strong> 0325 171 734<br>💬 Hoặc kết nối Zalo OA để được hỗ trợ nhanh hơn nhé!<br><strong>Zmoms - ĐỂ CON HƠN TÔI</strong>"
            },
            {
                type: "image",
                src: "./images/hoithao11thang6_1.png",
                alt: "Lớp học tiền sản miễn phí 13/06 tại BVĐK Xuyên Á - hình 1"
            },

            {
                type: "image",
                src: "./images/hoithao11thang6_2.png",
                alt: "Lớp học tiền sản miễn phí 13/06 tại BVĐK Xuyên Á - hình 2"
            },
            {
                type: "image",
                src: "./images/hoithao11thang6_3.png",
                alt: "Lớp học tiền sản miễn phí 13/06 tại BVĐK Xuyên Á - hình 3"
            }
        ]
    },
    "hoi-thao-20": {
        title: "Recap lớp học tiền sản 30/05 tại Bệnh viện Shing Mark",
        date: "01/06/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao30thang5_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>🌸 RECAP LỚP HỌC TIỀN SẢN 30/05 TẠI BỆNH VIỆN SHING MARK 🌸</strong>"
            },
            {
                type: "text",
                value: "Ngày 30/05 vừa qua, ZMoms đã có cơ hội đồng hành cùng Bệnh viện Shing Mark trong lớp học tiền sản dành cho các mẹ bầu với nhiều kiến thức thiết thực và hữu ích."
            },
            {
                type: "image",
                src: "./images/hoithao30thang5_1.png",
                alt: "Lớp học tiền sản 30/05 tại Bệnh viện Shing Mark - hình 1"
            },
            {
                type: "text",
                value: "👩‍⚕️ Tại chương trình, các mẹ đã được lắng nghe những chia sẻ từ đội ngũ chuyên gia về thai kỳ, sinh nở và chăm sóc em bé, đồng thời giải đáp những băn khoăn thường gặp trong hành trình làm mẹ."
            },
            {
                type: "image",
                src: "./images/hoithao30thang5_2.png",
                alt: "Lớp học tiền sản 30/05 tại Bệnh viện Shing Mark - hình 2"
            },
            {
                type: "text",
                value: "💝 Không chỉ được trang bị thêm kiến thức, các mẹ còn nhận được những phần quà ý nghĩa từ chương trình và có cơ hội giao lưu, kết nối cùng cộng đồng mẹ bầu."
            },
            {
                type: "image",
                src: "./images/hoithao30thang5_3.png",
                alt: "Lớp học tiền sản 30/05 tại Bệnh viện Shing Mark - hình 3"
            },
            {
                type: "text",
                value: "ZMoms xin chân thành cảm ơn Bệnh viện Shing Mark cùng tất cả các mẹ đã dành thời gian tham dự, góp phần tạo nên một buổi học ấm áp và nhiều giá trị."
            },
            {
                type: "text",
                value: "💛 Hẹn gặp lại các mẹ trong những lớp học tiền sản tiếp theo để cùng chuẩn bị hành trang vững vàng chào đón con yêu nhé!"
            },
            {
                type: "image",
                src: "./images/hoithao30thang5_4.png",
                alt: "Lớp học tiền sản 30/05 tại Bệnh viện Shing Mark - hình 4"
            },
            {
                type: "image",
                src: "./images/hoithao30thang5_5.png",
                alt: "Lớp học tiền sản 30/05 tại Bệnh viện Shing Mark - hình 5"
            },
            {
                type: "image",
                src: "./images/hoithao30thang5_6.png",
                alt: "Lớp học tiền sản 30/05 tại Bệnh viện Shing Mark - hình 6"
            },
            {
                type: "image",
                src: "./images/hoithao30thang5_7.png",
                alt: "Lớp học tiền sản 30/05 tại Bệnh viện Shing Mark - hình 7"
            },
            {
                type: "image",
                src: "./images/hoithao30thang5_8.png",
                alt: "Lớp học tiền sản 30/05 tại Bệnh viện Shing Mark - hình 8"
            }
        ]
    },
    "hoi-thao-21": {
        title: "Lớp học tiền sản miễn phí 30/05: Bệnh viện Quốc tế City",
        date: "26/05/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao26thang5.png",
        blocks: [
            {
                type: "text",
                value: "<strong>LỚP HỌC TIỀN SẢN MIỄN PHÍ 30/05: BỆNH VIỆN QUỐC TẾ CITY 🌸</strong>"
            },
            {
                type: "text",
                value: "<strong>CHỦ ĐỀ: CÁC DẤU HIỆU NHẬN BIẾT CHUYỂN DẠ</strong>"
            },
            {
                type: "text",
                value: "<strong>ZMoms</strong> hân hạnh được đồng hành cùng <strong>Bệnh viện Quốc tế City (CIH)</strong> mang đến lớp học tiền sản miễn phí với chủ đề:<br><strong>✨ DINH DƯỠNG THAI KỲ KHOA HỌC ✨</strong><br>Cho mẹ khỏe - bé phát triển tối ưu 🤰👶"
            },
            {
                type: "text",
                value: "Thai kỳ khỏe mạnh bắt đầu từ chế độ dinh dưỡng đúng cách! Tham gia lớp học để được các chuyên gia đầu ngành chia sẻ kiến thức khoa học giúp mẹ:"
            },
            {
                type: "text",
                value: "✔️ Xây dựng chế độ dinh dưỡng phù hợp theo từng giai đoạn thai kỳ<br>✔️ Bổ sung đúng dưỡng chất cho mẹ khỏe - bé tăng trưởng tối ưu<br>✔️ Giải đáp trực tiếp những thắc mắc thường gặp về dinh dưỡng khi mang thai"
            },
            {
                type: "text",
                value: "<strong>👩‍⚕️ Diễn giả:</strong><br>🔹 TTND.PGS.TS.BS Huỳnh Nguyễn Khánh Trang<br>Trưởng Bộ môn Sản Phụ khoa, ĐH Y khoa Phạm Ngọc Thạch; Trưởng khối Sản, BV Hùng Vương<br><br>🔹 BS.CKII. Đỗ Thị Ngọc Diệp<br>Phó Chủ tịch Hội Dinh dưỡng Việt Nam; Nguyên Giám đốc Trung tâm Dinh dưỡng TP.HCM<br><br>🔹 BS.CKII. Nguyễn Vũ Mỹ Linh<br>Phó khoa Phụ Sản - Bệnh viện Quốc tế City"
            },
            {
                type: "text",
                value: "<strong>🎁 ƯU ĐÃI & QUÀ TẶNG DÀNH RIÊNG CHO MẸ THAM DỰ:</strong><br>💝 Nhận quà tặng cho tất cả mẹ tham gia<br>💝 Cập nhật kiến thức dinh dưỡng thai kỳ chuẩn khoa học<br>💝 Giao lưu, giải đáp trực tiếp cùng chuyên gia Sản & Dinh dưỡng<br>💝 Tham gia nhiều hoạt động thú vị<br>💝 Ưu đãi đến 15% dành cho mẹ tham dự"
            },
            {
                type: "text",
                value: "<strong>🕣 Thời gian:</strong> 8:30 - 11:30, THỨ 7, Ngày 30/05/2026<br><strong>📍 Địa điểm:</strong> Hội trường Diamond - Lầu 10, BV Quốc tế City<br>Số 3 Đường 17A, P. An Lạc, TP. HCM"
            },
            {
                type: "text",
                value: "📩 Đăng ký tham gia ngay tại:<br><a href=\"https://forms.gle/TtnaqHZnprg8GqRt6\" target=\"_blank\" rel=\"noopener\">https://forms.gle/TtnaqHZnprg8GqRt6</a>"
            },
            {
                type: "text",
                value: "💖 Hẹn gặp mẹ tại lớp học để cùng cập nhật thật nhiều kiến thức bổ ích và nhận những phần quà hấp dẫn nhé!"
            },
            {
                type: "text",
                value: "<strong>📞 Liên hệ:</strong> 0325 171 734<br>💬 Hoặc kết nối Zalo OA để được hỗ trợ nhanh hơn nhé!<br><strong>Zmoms - ĐỂ CON HƠN TÔI</strong>"
            },
            {
                type: "image",
                src: "./images/hoithao26thang5.png",
                alt: "Lớp học tiền sản miễn phí 30/05 tại Bệnh viện Quốc tế City"
            }
        ]
    },
    "hoi-thao-22": {
        title: "24/5 - Hội thảo tiền sản miễn phí tại Bệnh viện Hoàn Hảo Kei Mei Kai",
        date: "24/05/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao21thang5.png",
        blocks: [
            {
                type: "text",
                value: "<strong>24/5 - HỘI THẢO TIỀN SẢN MIỄN PHÍ TẠI BỆNH VIỆN HOÀN HẢO KEI MEI KAI</strong>"
            },
            {
                type: "text",
                value: "Mang thai là hành trình hạnh phúc nhưng cũng đầy những nỗi lo:<br>💕 “Mốc này cần khám gì?”<br>💕 “Xét nghiệm nào quan trọng cho bé?”<br>💕 “Vì sao có những kiểm tra phải làm đúng thời điểm?”"
            },
            {
                type: "text",
                value: "✨ Tất cả sẽ được bác sĩ giải đáp chi tiết trong buổi Hội thảo tiền sản dành riêng cho mẹ bầu và gia đình với chủ đề:<br><strong>“CÁC XÉT NGHIỆM QUAN TRỌNG TRONG THAI KỲ MÀ MẸ CẦN NHỚ”</strong>"
            },
            {
                type: "text",
                value: "👨‍⚕️ Chia sẻ cùng <strong>BS.CKI Bùi Văn Tùng</strong><br>(Chuyên khoa Sản - Hoàn Hảo Kei Mei Kai Nhật Bản)"
            },
            {
                type: "text",
                value: "<strong>⏰ Thời gian:</strong> 8:00 - 11:00 | Chủ nhật, ngày 24/05/2026<br><strong>🏥 Địa điểm:</strong> Bệnh viện Đa khoa Hoàn Hảo<br><strong>📍 Địa chỉ:</strong> 02 Kha Vạn Cân, KP Bình Đường 2, Phường Dĩ An, TP.HCM"
            },
            {
                type: "text",
                value: "<strong>Tham gia hội thảo, mẹ sẽ được:</strong><br>✔ Hiểu rõ các xét nghiệm quan trọng trong từng giai đoạn thai kỳ<br>✔ Biết các mốc khám thai cần nhớ để theo dõi bé yêu tốt hơn<br>✔ Được bác sĩ giải đáp trực tiếp những thắc mắc thường gặp khi mang thai<br>✔ Bổ sung thêm nhiều kiến thức hữu ích để an tâm vượt cạn"
            },
            {
                type: "text",
                value: "<strong>ĐẶC BIỆT:</strong><br>💖 Tham dự hoàn toàn <strong>MIỄN PHÍ</strong><br>💖 Nhận nhiều phần quà hấp dẫn dành riêng cho mẹ bầu"
            },
            {
                type: "text",
                value: "👉 Link đăng ký tham dự:<br><a href=\"https://forms.gle/S3uky9dg73R3XhBE7\" target=\"_blank\" rel=\"noopener\">https://forms.gle/S3uky9dg73R3XhBE7</a>"
            },
            {
                type: "text",
                value: "✨ Mẹ nhớ đăng ký sớm để giữ chỗ và chuẩn bị hành trang thật vững vàng cho hành trình chào đón bé yêu nhé!"
            },
            {
                type: "text",
                value: "<strong>📞 Liên hệ:</strong> 0325 171 734<br>💬 Hoặc kết nối Zalo OA để được hỗ trợ nhanh hơn nhé!<br><strong>Zmoms - ĐỂ CON HƠN TÔI</strong>"
            },
            {
                type: "image",
                src: "./images/hoithao21thang5.png",
                alt: "Hội thảo tiền sản miễn phí 24/5 tại Bệnh viện Hoàn Hảo Kei Mei Kai"
            }
        ]
    },
    "hoi-thao-23": {
        title: "Hoàn toàn miễn phí - Lớp tiền sản ngày 23/05",
        date: "19/05/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao23thang5.png",
        blocks: [
            {
                type: "text",
                value: "<strong>HOÀN TOÀN MIỄN PHÍ - LỚP TIỀN SẢN NGÀY 23/05</strong>"
            },
            {
                type: "text",
                value: "Mẹ bầu đã sẵn sàng cho hành trình vượt cạn an tâm chưa? 💕"
            },
            {
                type: "text",
                value: "Đừng bỏ lỡ lớp học tiền sản với những kiến thức cực kỳ hữu ích từ đội ngũ bác sĩ chuyên môn tại Bệnh viện Âu Cơ cùng <strong>Zmoms</strong> nhé!"
            },
            {
                type: "text",
                value: "✨ <strong>Chủ đề 1: THEO DÕI ĐÚNG MỐC - AN TÂM TRỌN HÀNH TRÌNH</strong><br>👨‍⚕️ BS. CKI Đặng Ngọc Tuyên - Khoa Chẩn đoán hình ảnh"
            },
            {
                type: "text",
                value: "✨ <strong>Chủ đề 2: BÍ QUYẾT VƯỢT CẠN ÊM ÁI CÙNG CHUYÊN GIA</strong><br>👨‍⚕️ THS. BS Nguyễn Hữu Anh - Trưởng khoa Gây mê hồi sức"
            },
            {
                type: "text",
                value: "<strong>🎁 ĐẶC QUYỀN DÀNH CHO MẸ THAM GIA:</strong><br>- Voucher ưu đãi lên đến <strong>3.500.000 VNĐ</strong><br>- Kiến thức hữu ích giúp mẹ vượt cạn nhẹ nhàng hơn<br>- Quà tặng đặc quyền hấp dẫn tại lớp học"
            },
            {
                type: "text",
                value: "<strong>🕘 Thời gian:</strong> 09:00 - 11:15 | Thứ Bảy, ngày 23/05/2026<br><strong>📍 Địa điểm:</strong> Hội trường lầu 3 - Bệnh viện Âu Cơ<br><strong>📌 Địa chỉ:</strong> 47/19A Đường Điểu Xiển, KP25, P. Long Bình, Đồng Nai"
            },
            {
                type: "text",
                value: "Đăng ký tham dự <strong>MIỄN PHÍ</strong> ngay bằng cách <strong>quét QR</strong> trên ảnh."
            },
            {
                type: "text",
                value: "<strong>📞 Liên hệ:</strong> 0947.701.010<br>💬 Hoặc kết nối Zalo OA để được hỗ trợ nhanh hơn nhé!<br><strong>Zmoms - ĐỂ CON HƠN TÔI</strong>"
            },
            {
                type: "image",
                src: "./images/hoithao23thang5.png",
                alt: "Lớp tiền sản miễn phí ngày 23/05 tại Bệnh viện Âu Cơ"
            }
        ]
    },
    "hoi-thao-24": {
        title: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương",
        date: "16/05/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao16thang5_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>💖 LỚP TIỀN SẢN 16/05 TẠI COLUMBIA ASIA BÌNH DƯƠNG 💖</strong>"
            },
            {
                type: "text",
                value: "Vừa qua, Cộng Đồng Bầu Zmoms đã đồng hành cùng các ba mẹ tại lớp tiền sản với vô vàn kiến thức bổ ích và khoảnh khắc đáng nhớ ✨"
            },
            {
                type: "text",
                value: "<strong>Không khí lớp học ngập tràn sự hào hứng khi các mẹ được:</strong><br>- Học hỏi thêm nhiều kiến thức chăm sóc mẹ & bé<br>- Giao lưu cùng chuyên gia và các ba mẹ khác<br>- Nhận vô số phần quà hấp dẫn với tổng giá trị cực xịn"
            },
            {
                type: "text",
                value: "Zmoms xin cảm ơn các ba mẹ đã dành thời gian tham gia và đồng hành cùng chương trình 💕"
            },
            {
                type: "text",
                value: "Chúc các mom luôn có một thai kỳ khỏe mạnh, thật nhiều năng lượng tích cực để sẵn sàng chào đón thiên thần nhỏ nhé! ✨"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_1.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 1"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_2.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 2"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_3.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 3"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_4.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 4"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_5.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 5"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_6.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 6"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_7.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 7"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_8.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 8"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_9.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 9"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_10.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 10"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_11.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 11"
            },
            {
                type: "image",
                src: "./images/hoithao16thang5_12.png",
                alt: "Lớp tiền sản 16/05 tại Columbia Asia Bình Dương - hình 12"
            }
        ]
    },
    "hoi-thao-25": {
        title: "Lớp học tiền sản 16/05: Học cách chăm sóc trẻ sơ sinh tại nhà cùng chuyên gia",
        date: "13/05/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao13thang5.png",
        blocks: [
            {
                type: "text",
                value: "<strong>LỚP HỌC TIỀN SẢN 16/05: HỌC CÁCH CHĂM SÓC TRẺ SƠ SINH TẠI NHÀ CÙNG CHUYÊN GIA</strong>"
            },
            {
                type: "text",
                value: "<strong>Cộng Đồng Bầu ZMoms</strong> hân hạnh đồng hành cùng ba mẹ trong hành trình chuẩn bị chào đón thiên thần nhỏ với <strong>lớp học tiền sản</strong> vô cùng hữu ích và thiết thực 🌷"
            },
            {
                type: "text",
                value: "🎁 Ngập tràn quà tặng với tổng giá trị hơn <strong>25.000.000 VNĐ</strong> dành cho ba mẹ tham dự chương trình!"
            },
            {
                type: "text",
                value: "<strong>📚 CHỦ ĐỀ LỚP HỌC</strong><br>- Chăm sóc trẻ sơ sinh tại nhà<br>👩‍⚕️ Diễn giả: <strong>ThS.BS Mai Đào Ái Như</strong> - Trưởng Khoa Nhi, Bệnh viện Columbia Asia Bình Dương<br><br>- Thực hành tắm bé chuẩn y khoa<br>👩‍⚕️ Hướng dẫn: <strong>Điều dưỡng Trần Thị Len</strong> - Khoa Nhi, Bệnh viện Columbia Asia Bình Dương"
            },
            {
                type: "text",
                value: "<strong>THÔNG TIN CHƯƠNG TRÌNH</strong><br>🕘 Thời gian: <strong>9h00 - 11h30</strong>, ngày 16/05/2026 (Thứ Bảy)<br>🏥 Địa điểm: Tầng 3 - <strong>Bệnh viện Quốc tế Columbia Asia Bình Dương</strong><br>📌 Địa chỉ: Đ. 22 Tháng 12 1, Khu Phố Hòa Lân, Thuận Giao, Hồ Chí Minh, Việt Nam"
            },
            {
                type: "text",
                value: "💞 Ba mẹ đừng bỏ lỡ cơ hội gặp gỡ chuyên gia, học thêm nhiều kiến thức chăm sóc bé sơ sinh chuẩn y khoa và mang về thật nhiều quà hấp dẫn nhé!"
            },
            {
                type: "text",
                value: "Đăng ký tham dự <strong>MIỄN PHÍ</strong> ngay bằng cách <strong>INBOX</strong> trực tiếp qua Fanpage."
            },
            {
                type: "text",
                value: "<strong>📞 Liên hệ:</strong> 0947.701.010<br>💬 Hoặc kết nối Zalo OA bằng cách scan QR trên ảnh để được hỗ trợ nhanh hơn nhé!<br><strong>Zmoms - ĐỂ CON HƠN TÔI</strong>"
            },
            {
                type: "image",
                src: "./images/hoithao13thang5.png",
                alt: "Lớp học tiền sản 16/05 tại Columbia Asia Bình Dương"
            }
        ]
    },
    "hoi-thao-26": {
        title: "[10/5] Lớp tiền sản tại Phòng khám Đa khoa Ái Nghĩa",
        date: "11/05/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao10thang5.png",
        blocks: [
            {
                type: "text",
                value: "<strong>[10/5] LỚP TIỀN SẢN TẠI PHÒNG KHÁM ĐA KHOA ÁI NGHĨA</strong>"
            },
            {
                type: "text",
                value: "Vừa qua, cộng đồng bầu Zmoms đã có mặt tại lớp tiền sản tổ chức tại Phòng khám Ái Nghĩa với thật nhiều khoảnh khắc ý nghĩa cùng các mẹ bầu 💕"
            },
            {
                type: "text",
                value: "Zmoms rất vui khi được đồng hành cùng các mẹ trên hành trình mang thai và chuẩn bị chào đón thiên thần nhỏ 💖"
            },
            {
                type: "text",
                value: "Cảm ơn các mẹ đã dành thời gian tham gia và lan tỏa thật nhiều năng lượng tích cực tại lớp tiền sản lần này. Hẹn gặp lại các mẹ trong những chương trình tiếp theo với nhiều hoạt động thú vị hơn nữa nhé! 🌸"
            },
            {
                type: "text",
                value: "<strong>📞 Liên hệ:</strong> 0947.701.010<br>💬 Kết nối Zalo OA bằng cách scan QR trên ảnh để được hỗ trợ nhanh hơn<br><strong>Zmoms - ĐỂ CON HƠN TÔI</strong>"
            },
            {
                type: "image",
                src: "./images/hoithao10thang5.png",
                alt: "Lớp tiền sản tại Phòng khám Đa khoa Ái Nghĩa - hình 1"
            },
            {
                type: "image",
                src: "./images/hoithao10thang5_1.png",
                alt: "Lớp tiền sản tại Phòng khám Đa khoa Ái Nghĩa - hình 2"
            }
        ]
    },
    "hoi-thao-27": {
        title: "Zmoms | Lớp tiền sản Xuyên Á - Hành trang cho mẹ an tâm về đích",
        date: "09/05/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao9thang5.png",
        blocks: [
            {
                type: "text",
                value: "<strong>🌿 Zmoms | Lớp tiền sản Xuyên Á - Hành trang cho mẹ an tâm về đích</strong>"
            },
            {
                type: "text",
                value: "Mang thai là một hành trình nhiều cảm xúc, nhưng cũng đi kèm không ít băn khoăn:<br>🤍 Khám khi nào là đúng?<br>🤍 Ăn uống sao cho đủ chất?<br>🤍 Khi nào cần đi khám ngay?"
            },
            {
                type: "text",
                value: "Hiểu được điều đó, <strong>Zmoms</strong> đồng hành cùng lớp tiền sản tại BVĐK Xuyên Á, mang đến những chia sẻ thiết thực từ đội ngũ bác sĩ giàu kinh nghiệm 💛"
            },
            {
                type: "text",
                value: "<strong>Sự góp mặt của 2 bác sĩ:</strong><br>👩‍⚕️ <strong>BS CKI. Đỗ Thị Thuý Nga</strong> - Khoa Sản phụ khoa, BVĐK Xuyên Á TP.HCM<br>Chuyên đề I: “Các mốc khám thai quan trọng, xét nghiệm sàng lọc dị tật & Dấu hiệu nguy hiểm cần đi khám ngay”<br><br>👩‍⚕️ <strong>BS CKII. Châu Thị Anh</strong> - Khoa Dinh dưỡng, BVĐK Xuyên Á TP.HCM<br>Chuyên đề II: “Dinh dưỡng trong thai kỳ và những điều nên tránh”"
            },
            {
                type: "text",
                value: "Với <strong>Zmoms</strong>, lớp tiền sản không chỉ là nơi cung cấp kiến thức, mà còn là nơi giúp mẹ cảm thấy an tâm và sẵn sàng hơn cho hành trình phía trước."
            },
            {
                type: "text",
                value: "Tham gia lớp để được lắng nghe trực tiếp từ bác sĩ và chuẩn bị tốt nhất cho ngày đón con yêu nhé!"
            },
            {
                type: "text",
                value: "👉 Đăng ký tham dự <strong>MIỄN PHÍ</strong> ngay tại:<br><a href=\"https://forms.gle/decSYgtEpxVnaXgw8\" target=\"_blank\" rel=\"noopener\">https://forms.gle/decSYgtEpxVnaXgw8</a>"
            },
            {
                type: "text",
                value: "<strong>📞 Liên hệ:</strong> 0947.701.010<br>💬 Hoặc kết nối Zalo OA để được hỗ trợ nhanh hơn nhé!"
            },
            {
                type: "image",
                src: "./images/hoithao9thang5.png",
                alt: "Lớp tiền sản Xuyên Á - Hành trang cho mẹ an tâm về đích"
            }
        ]
    },
    "hoi-thao-1": {
        title: " 🩺Trao yêu thương - Sáng biên cương",
        date: "Thứ Bảy, 21/01/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "../images/hoithao1_1.png",
        blocks: [
            {
                type: "text",
                value: "🩺<strong>TRAO YÊU THƯƠNG - SÁNG BIÊN CƯƠNG</strong><br><strong>KHÁM BỆNH MIỄN PHÍ CHO GẦN 1.000 TRẺ EM TẠI THANH HÓA</strong>"
            },
            {
                type: "text",
                value: "📌<strong>Ngày 17/01/2026</strong>, Cộng Đồng Bầu phối hợp cùng <strong>Bệnh viện Nhi Hà Nội và UBND xã Thiên Phủ (Thanh Hóa)</strong> đã tổ chức chương trình tình nguyện <strong>“Trao yêu thương - Sáng biên cương”</strong> tại xã miền núi Thiên Phủ, tỉnh Thanh Hóa."
            },
            {
                type: "text",
                value: "<strong>Gần 1.000 trẻ em được khám sức khỏe miễn phí</strong><br>Trong khuôn khổ chương trình, gần 1.000 học sinh mầm non và tiểu học tại các điểm trường trên địa bàn đã được khám sàng lọc sức khỏe tổng quát, tập trung vào các chuyên khoa thường gặp ở trẻ em như tai - mũi - họng, hô hấp, tiêu hóa, răng - hàm - mặt và dinh dưỡng học đường."
            },
            {
                type: "text",
                value: "Đội ngũ y, bác sĩ Bệnh viện Nhi Hà Nội đã trực tiếp thăm khám và tư vấn sức khỏe cho từng em nhỏ, hướng dẫn phụ huynh cách chăm sóc, vệ sinh cá nhân cho trẻ, đồng thời chia sẻ kiến thức phòng bệnh phù hợp với điều kiện sinh hoạt tại địa phương."
            },
            {
                type: "text",
                value: "<strong>Chia sẻ thiết thực - giảm gánh nặng cho gia đình</strong><br>Bên cạnh hoạt động khám bệnh, chương trình còn cấp phát thuốc miễn phí, thuốc bổ và trao tặng vật tư y tế thiết yếu cho trẻ em và gia đình."
            },
            {
                type: "text",
                value: "Những hỗ trợ này góp phần giảm chi phí chăm sóc sức khỏe cho người dân vùng sâu, vùng xa - nơi điều kiện tiếp cận dịch vụ y tế còn nhiều hạn chế."
            },
            {
                type: "text",
                value: "<strong>Lan tỏa yêu thương - thực hiện trách nhiệm cộng đồng</strong><br>“Trao yêu thương - Sáng biên cương” là hoạt động thể hiện rõ tinh thần trách nhiệm xã hội, sự sẻ chia và đồng hành của đội ngũ Cộng Đồng Bầu, cùng tấm lòng tận tâm của các y, bác sĩ Bệnh viện Nhi Hà Nội."
            },
            {
                type: "text",
                value: "Chương trình đã góp phần nâng cao nhận thức và chất lượng chăm sóc sức khỏe cho trẻ em tại những khu vực còn nhiều khó khăn, đúng với sứ mệnh mà Cộng Đồng Bầu luôn theo đuổi: vì một thế hệ trẻ em Việt Nam khỏe mạnh - được yêu thương - phát triển toàn diện."
            },
            {
                type: "text",
                value: "Cộng Đồng Bầu sẽ tiếp tục hành trình mang yêu thương, kiến thức và giá trị thiết thực đến với nhiều địa phương hơn nữa trong thời gian tới."
            },
            {
                type: "image",
                src: "../images/hoithao1_1.png",
                alt: "Trao yêu thương - Sáng biên cương tại Thanh Hóa"
            },
            {
                type: "image",
                src: "../images/hoithao1_2.png",
                alt: "Bác sĩ thăm khám sức khỏe cho trẻ em"
            },
            {
                type: "image",
                src: "../images/hoithao1_3.png",
                alt: "Cấp phát thuốc và vật tư y tế miễn phí"
            },
            {
                type: "image",
                src: "../images/hoithao1_4.png",
                alt: "Cộng Đồng Bầu lan tỏa yêu thương đến trẻ em vùng biên"
            },
            {
                type: "image",
                src: "../images/hoithao1_5.png",
                alt: "Cộng Đồng Bầu lan tỏa yêu thương đến trẻ em vùng biên"
            },
            {
                type: "image",
                src: "../images/hoithao1_6.png",
                alt: "Cộng Đồng Bầu lan tỏa yêu thương đến trẻ em vùng biên"
            }
        ]
    },
    "hoi-thao-2": {
        title: "Điều ước cho con",
        date: "21/01/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "../images/hoithao2_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>Hội thảo: “ĐIỀU ƯỚC CHO CON”</strong><br>Cộng Đồng Bầu đồng hành cùng Bệnh viện Đa khoa Hoàn Hảo Kei Mei Kai tổ chức hội thảo “Điều ước cho con”."
            },
            {
                type: "text",
                value: "Sáng ngày 12/01/2026, Cộng Đồng Bầu đã có buổi đồng hành cùng các mẹ bầu tại lớp tiền sản Bệnh viện Hoàn Hảo Kei Mei Kai. Chương trình không chỉ mang đến kiến thức hữu ích cho thai kỳ mà còn là nơi các mẹ chia sẻ và được lắng nghe nhiều hơn."
            },
            {
                type: "text",
                value: "<strong>Chủ đề chính: “Các xét nghiệm trong thai kỳ, mẹ cần ghi nhớ”</strong><br>Nội dung được chia sẻ bởi BS. CKI Võ Quốc Việt - Chuyên khoa Sản, Bệnh viện Đa khoa Hoàn Hảo Kei Mei Kai."
            },
            {
                type: "text",
                value: "Bác sĩ giúp mẹ nắm các xét nghiệm cần thiết ở từng giai đoạn, tự tin chăm sóc sức khỏe thai kỳ đúng cách và giải đáp mọi thắc mắc trực tiếp tại hội trường."
            },
            {
                type: "text",
                value: "<strong>Hiểu con để nuôi con dễ hơn</strong><br>Nội dung được chia sẻ bởi cô Nguyễn Mai Anh - Giám đốc đào tạo Trung tâm 1.000 ngày vàng IPD8 trực thuộc Cộng Đồng Bầu."
            },
            {
                type: "text",
                value: "Chuyên gia giúp mẹ hiểu về não bộ, giác quan, cảm xúc của thai nhi và trẻ nhỏ; đồng thời khám phá tiềm năng của con - cánh cửa đầu tiên cần mở trên hành trình nuôi dạy con."
            },
            {
                type: "text",
                value: "Để mẹ hiểu rõ hơn về giai đoạn thai kỳ, các mẹ có thể tham khảo Thẻ Digital dạy kỹ năng phát triển 8 loại hình thông minh của trẻ."
            },
            {
                type: "text",
                value: "<strong>12 thẻ Digital đồng hành cùng mẹ:</strong><br>Cho Con Khởi Đầu Tuyệt Vời Nhất<br>Cho Con Dinh Dưỡng Tuyệt Vời Nhất<br>Cho Con Thính Giác Tinh Anh Nhất<br>Cho Con Sự Chăm Sóc Khoa Học Nhất<br>Cho Con Khoảnh Khắc Tuyệt Vời Nhất<br>Cho Con Phương Pháp Kích Hoạt Trí Thông Minh Tuyệt Vời Nhất<br>Cho Con Sự Học Tuyệt Vời Nhất<br>Cho Con Trí Tuệ Tuyệt Vời Nhất 01<br>Cho Con Trí Tuệ Tuyệt Vời Nhất 02<br>Cho Con Trí Tuệ Tuyệt Vời Nhất 03<br>Cho Con Sự Phát Triển Tuyệt Vời Nhất<br>Cho Con Kỹ Năng Tuyệt Vời Nhất"
            },
            {
                type: "text",
                value: "Một buổi sáng nhẹ nhàng, nhiều kiến thức hữu ích và nhiều niềm vui dành riêng cho mẹ bầu tháng 12."
            },
            {
                type: "text",
                value: "Chương trình Điều ước còn tiếp tục tại Bệnh viện Hoàn Hảo vào tháng 1. Mời các mẹ hãy đến và chúc cho con những điều ước tuyệt vời nhé!"
            },
            {
                type: "image",
                src:  "../images/hoithao2_2.png",
                alt: "Hội thảo Điều ước cho con tại Bệnh viện Hoàn Hảo Kei Mei Kai"
            },
            {
                type: "image",
                src:  "../images/hoithao2_4.png",
                alt: "Hội thảo Điều ước cho con tại Bệnh viện Hoàn Hảo Kei Mei Kai"
            },
            {
                type: "image",
                src:  "../images/hoithao2_5.png",
                alt: "Hội thảo Điều ước cho con tại Bệnh viện Hoàn Hảo Kei Mei Kai"
            },
        ]
    },
    "hoi-thao-3": {
        title: "Điều ước cho con - Phòng Khám Bewell",
        date: "21/1/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao3_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>Hội thảo: “ĐIỀU ƯỚC CHO CON”</strong><br>Cộng Đồng Bầu đồng hành cùng Phòng Khám Bewell tổ chức hội thảo “Điều ước cho con”."
            },
            {
                type: "text",
                value: "Mẹ đang bước vào hành trình làm mẹ đầy thiêng liêng và muốn hiểu thật rõ về các xét nghiệm quan trọng trong thai kỳ? Chương trình “Điều Ước Cho Con” lần này chính là dành cho mẹ. Các mẹ hãy đến tham dự và viết những điều ước dành cho con của mình để Cộng Đồng Bầu biết và thực hiện cùng mẹ nha."
            },
            {
                type: "text",
                value: "<strong>Hiểu con để nuôi con dễ hơn</strong><br>Được chia sẻ bởi Bác sĩ CKI Sản Phụ Khoa Tăng Quang Thái. Chuyên gia sẽ giúp mẹ hiểu về não bộ, giác quan, cảm xúc của thai nhi và trẻ nhỏ; đồng thời khám phá tiềm năng của con - cánh cửa đầu tiên cần mở trên hành trình nuôi dạy con."
            },
            {
                type: "text",
                value: "Để mẹ hiểu rõ hơn về giai đoạn thai kỳ, các mẹ có thể tham khảo Thẻ Digital dạy kỹ năng phát triển 8 loại hình thông minh của trẻ."
            },
            {
                type: "text",
                value: "<strong>12 thẻ Digital đồng hành cùng mẹ:</strong><br>Cho Con Khởi Đầu Tuyệt Vời Nhất<br>Cho Con Dinh Dưỡng Tuyệt Vời Nhất<br>Cho Con Thính Giác Tinh Anh Nhất<br>Cho Con Sự Chăm Sóc Khoa Học Nhất<br>Cho Con Khoảnh Khắc Tuyệt Vời Nhất<br>Cho Con Phương Pháp Kích Hoạt Trí Thông Minh Tuyệt Vời Nhất<br>Cho Con Sự Học Tuyệt Vời Nhất<br>Cho Con Trí Tuệ Tuyệt Vời Nhất 01<br>Cho Con Trí Tuệ Tuyệt Vời Nhất 02<br>Cho Con Trí Tuệ Tuyệt Vời Nhất 03<br>Cho Con Sự Phát Triển Tuyệt Vời Nhất<br>Cho Con Kỹ Năng Tuyệt Vời Nhất"
            },
            {
                type: "text",
                value: "Một sáng Thứ Bảy thật ấm áp và an lành, khi ba mẹ cùng nhau tham gia buổi chia sẻ kiến thức thai giáo âm nhạc đúng cách - để hiểu con hơn và đồng hành trọn vẹn cùng con ngay từ những ngày đầu tiên của hành trình làm cha mẹ thiêng liêng."
            },
            {
                type: "text",
                value: "Cộng Đồng Bầu trân trọng cảm ơn đội ngũ Phòng khám Bewell đã phối hợp tận tâm, chu đáo để chương trình diễn ra trọn vẹn và đầy ý nghĩa."
            },
            {
                type: "text",
                value: "Ba mẹ đừng quên theo dõi fanpage Cộng Đồng Bầu để cập nhật sớm nhất lịch các sự kiện, workshop và hoạt động đồng hành cùng ba mẹ & bé trong thời gian tới nhé. Hẹn gặp lại ba mẹ trong những chương trình tiếp theo."
            },
            {
                type: "image",
                src: "./images/hoithao3_1.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 1"
            },
            {
                type: "image",
                src: "./images/hoithao3_2.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 2"
            },
            {
                type: "image",
                src: "./images/hoithao3_3.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 3"
            },
            {
                type: "image",
                src: "./images/hoithao3_4.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 4"
            },
            {
                type: "image",
                src: "./images/hoithao3_5.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 5"
            },
            {
                type: "image",
                src: "./images/hoithao3_6.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 6"
            },
            {
                type: "image",
                src: "./images/hoithao3_7.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 7"
            },
            {
                type: "image",
                src: "./images/hoithao3_8.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 8"
            },
            {
                type: "image",
                src: "./images/hoithao3_9.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 9"
            },
            {
                type: "image",
                src: "./images/hoithao3_10.png",
                alt: "Hội thảo Điều ước cho con tại Phòng Khám Bewell - hình 10"
            }
        ]
    },
    "hoi-thao-4": {
        title: "Khởi phát chuyển dạ - Thong thả sanh thường",
        date: "28/12/2025",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao4_13.png",
        blocks: [
            {
                type: "text",
                value: "<strong>Hội thảo: “KHỞI PHÁT CHUYỂN DẠ - THONG THẢ SANH THƯỜNG”</strong><br>Cộng Đồng Bầu đồng hành cùng Bệnh viện Đại học Y Dược ShingMark tổ chức hội thảo “Khởi phát chuyển dạ - Thong thả sanh thường” vào ngày 27/12/2025."
            },
            {
                type: "text",
                value: "Ngày 27/12/2025, hơn 200 mẹ bầu đã tham gia lớp tiền sản tại Bệnh viện Đại học Y Dược Shing Mark với chủ đề chính: “Khởi phát chuyển dạ - Thong thả sanh thường”."
            },
            {
                type: "text",
                value: "<strong>Diễn giả: BS. CKI Trần Thị Anh Thơ</strong><br>Bác sĩ hướng dẫn mẹ bầu những cách khởi phát chuyển dạ an toàn giúp cơ thể vào cuộc chuyển dạ tự nhiên nhất."
            },
            {
                type: "text",
                value: "Nội dung chia sẻ cũng giúp mẹ hiểu cách tăng khả năng sinh thường, giảm nguy cơ sinh mổ không cần thiết, đồng thời chuẩn bị tinh thần và thể chất để vượt cạn nhẹ nhàng hơn."
            },
            {
                type: "text",
                value: "<strong>Chủ đề phụ: Ngứa da thai kỳ</strong><br>Diễn giả BS. CKI Nguyễn Thị Dung chia sẻ lý do vì sao mẹ bầu dễ bị ngứa da, dấu hiệu nào là lành tính, dấu hiệu nào cần đi khám ngay và cách chăm sóc da đúng, an toàn cho mẹ."
            },
            {
                type: "text",
                value: "Dưới đây là một số hình ảnh nổi bật trong khi sự kiện diễn ra."
            },
            {
                type: "image",
                src: "./images/hoithao4_1.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 1"
            },
            {
                type: "image",
                src: "./images/hoithao4_2.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 2"
            },
            {
                type: "image",
                src: "./images/hoithao4_3.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 3"
            },
            {
                type: "image",
                src: "./images/hoithao4_4.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 4"
            },
            {
                type: "image",
                src: "./images/hoithao4_5.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 5"
            },
            {
                type: "image",
                src: "./images/hoithao4_6.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 6"
            },
            {
                type: "image",
                src: "./images/hoithao4_7.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 7"
            },
            {
                type: "image",
                src: "./images/hoithao4_8.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 8"
            },
            {
                type: "image",
                src: "./images/hoithao4_9.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 9"
            },
            {
                type: "image",
                src: "./images/hoithao4_10.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 10"
            },
            {
                type: "image",
                src: "./images/hoithao4_11.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 11"
            },
            {
                type: "image",
                src: "./images/hoithao4_13.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 13"
            },
            {
                type: "image",
                src: "./images/hoithao4_14.png",
                alt: "Hội thảo Khởi phát chuyển dạ - hình 14"
            }
        ]
    },
    "hoi-thao-5": {
        title: "Hành trình học làm mẹ cùng chuyên gia",
        date: "19/12/2025",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao5_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>Hội thảo: “HÀNH TRÌNH HỌC LÀM MẸ CÙNG CHUYÊN GIA”</strong><br>Cộng Đồng Bầu đồng hành cùng Bệnh viện Columbia Asia Bình Dương tổ chức hội thảo “Hành trình học làm mẹ cùng chuyên gia” vào ngày 19/12/2025."
            },
            {
                type: "text",
                value: "<strong>Từ nỗi lo thầm kín đến làm mẹ tự tin: Hành trình học làm mẹ cùng chuyên gia</strong><br>Sáng 20/12 vừa qua, lớp học tiền sản tại Bệnh viện Columbia Asia Bình Dương đã diễn ra với sự tham gia của nhiều mẹ bầu và gia đình. Không khí sôi nổi, những cái gật đầu tâm đắc và cả những nụ cười nhẹ nhõm chính là minh chứng rõ nhất cho sức hút của chủ đề về hành trình làm mẹ và nuôi con khỏe mạnh."
            },
            {
                type: "text",
                value: "Trong phần chia sẻ đầu tiên, BS.CKII Nguyễn Phi Hùng đã hệ thống lại những cột mốc quan trọng trong 40 tuần thai, giải thích rõ các thay đổi của cơ thể mẹ và quá trình phát triển của em bé, đồng thời phân tích ưu - nhược điểm của sinh thường và sinh mổ để mẹ hiểu và lựa chọn phù hợp."
            },
            {
                type: "text",
                value: "Bác sĩ Hùng cũng nhấn mạnh vai trò của chăm sóc hậu sản đúng cách để mẹ phục hồi sức khỏe thể chất và tinh thần sau sinh."
            },
            {
                type: "text",
                value: "Tiếp nối chương trình, KTV. Lê Thị Sao Biển thuộc Khoa Vật lý trị liệu mang đến phần hướng dẫn về tắc tia sữa. Thay vì lo sợ trước viễn cảnh đau đớn, mẹ được chia sẻ về nguyên nhân, dấu hiệu nhận biết sớm, cách xử lý đúng và các phương pháp phòng ngừa để bảo vệ món quà dinh dưỡng quý giá đầu đời cho con."
            },
            {
                type: "text",
                value: "Điểm nhấn của lớp học là phần bàn luận trực tiếp cùng chuyên gia. Mỗi câu hỏi cất lên không chỉ giải tỏa nỗi lo cho người hỏi mà còn là tiếng lòng chung của rất nhiều mẹ bầu khác trong khán phòng."
            },
            {
                type: "text",
                value: "Nhờ sự giải đáp cặn kẽ và gần gũi từ các chuyên gia, những băn khoăn không của riêng ai đã được gỡ rối trọn vẹn, giúp mẹ an tâm hơn trên hành trình sắp tới."
            },
            {
                type: "text",
                value: "Khép lại buổi sáng cuối tuần đầy ý nghĩa, mỗi gia đình ra về không chỉ mang theo hành trang kiến thức vững vàng mà còn là những phần quà hấp dẫn từ <a href=\"https://www.facebook.com/PigeonVietnam\" target=\"_blank\" rel=\"noopener\">Pigeon Vietnam</a>, <a href=\"https://www.facebook.com/congdongbau.com.vn\" target=\"_blank\" rel=\"noopener\">Cộng Đồng Bầu</a>, <a href=\"https://www.facebook.com/mommyspa.and.skincare\" target=\"_blank\" rel=\"noopener\">Mommy Spa</a> và <a href=\"https://www.facebook.com/pocarivietnam\" target=\"_blank\" rel=\"noopener\">Pocari Sweat Việt Nam</a>."
            },
            {
                type: "text",
                value: "Đây là lời tri ân, và cũng là lời chúc mẹ tròn con vuông thiết thực nhất mà Columbia Asia cùng các quý đối tác gửi gắm đến những gia đình có thiên thần nhỏ sắp chào đời."
            },
            {
                type: "text",
                value: "Sáng 20/12, Cộng Đồng Bầu rất vui khi được đồng hành và tham gia lớp học tiền sản tại Bệnh viện Columbia Asia Bình Dương."
            },
            {
                type: "text",
                value: "Tại lớp học, Cộng Đồng Bầu đã có cơ hội gặp gỡ rất nhiều mẹ bầu, lắng nghe những chia sẻ, băn khoăn thật dễ thương về hành trình mang thai, sinh nở và nuôi con bằng sữa mẹ. Không khí buổi sáng vô cùng ấm áp, gần gũi và đầy năng lượng tích cực."
            },
            {
                type: "text",
                value: "Mỗi cuộc trò chuyện đều là một sự kết nối, một động lực để Cộng Đồng Bầu tiếp tục mang thêm nhiều giá trị thiết thực nữa đến cho các gia đình."
            },
            {
                type: "image",
                src: "./images/hoithao5_1.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 1"
            },
            {
                type: "image",
                src: "./images/hoithao5_2.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 2"
            },
            {
                type: "image",
                src: "./images/hoithao5_3.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 3"
            },
            {
                type: "image",
                src: "./images/hoithao5_4.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 4"
            },
            {
                type: "image",
                src: "./images/hoithao5_5.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 5"
            },
            {
                type: "image",
                src: "./images/hoithao5_6.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 6"
            },
            {
                type: "image",
                src: "./images/hoithao5_7.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 7"
            },
            {
                type: "image",
                src: "./images/hoithao5_8.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 8"
            },
            {
                type: "image",
                src: "./images/hoithao5_9.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 9"
            },
            {
                type: "image",
                src: "./images/hoithao5_10.png",
                alt: "Hành trình học làm mẹ cùng chuyên gia - hình 10"
            }
        ]
    },
    "hoi-thao-6": {
        title: "Điều ước Giáng Sinh cho con",
        date: "21/12/2025",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao6_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>Hội thảo: “ĐIỀU ƯỚC GIÁNG SINH CHO CON”</strong><br>Cộng Đồng Bầu đồng hành cùng Bệnh viện Đa khoa Hoàn Hảo Kei Mei Kai tổ chức hội thảo “Điều ước Giáng Sinh cho con”."
            },
            {
                type: "text",
                value: "Mẹ đang bước vào hành trình làm mẹ đầy thiêng liêng và muốn hiểu thật rõ về các xét nghiệm quan trọng trong thai kỳ? Chương trình “Điều Ước Giáng Sinh Cho Con” lần này chính là dành cho mẹ. Các mẹ hãy đến tham dự và viết những điều ước Giáng Sinh dành cho con của mình để Cộng Đồng Bầu biết và thực hiện cùng mẹ nha."
            },
            {
                type: "text",
                value: "<strong>Chủ đề chính: “Các xét nghiệm trong thai kỳ, mẹ cần ghi nhớ”</strong><br>Nội dung được chia sẻ bởi BS. CKI Võ Quốc Việt - Chuyên khoa Sản, Bệnh viện Đa khoa Hoàn Hảo Kei Mei Kai. Bác sĩ sẽ giúp mẹ nắm các xét nghiệm cần thiết ở từng giai đoạn, tự tin chăm sóc sức khỏe thai kỳ đúng cách và giải đáp mọi thắc mắc trực tiếp tại hội trường."
            },
            {
                type: "text",
                value: "<strong>Hiểu con để nuôi con dễ hơn</strong><br>Nội dung được chia sẻ bởi cô Nguyễn Mai Anh - Giám đốc đào tạo Trung tâm 1.000 ngày vàng IPD8 trực thuộc Cộng Đồng Bầu."
            },
            {
                type: "text",
                value: "Chuyên gia sẽ giúp mẹ hiểu về não bộ, giác quan, cảm xúc của thai nhi và trẻ nhỏ; đồng thời khám phá tiềm năng của con - cánh cửa đầu tiên cần mở trên hành trình nuôi dạy con."
            },
            {
                type: "text",
                value: "Để mẹ hiểu rõ hơn về giai đoạn thai kỳ, các mẹ có thể tham khảo Thẻ Digital dạy kỹ năng phát triển 8 loại hình thông minh của trẻ."
            },
            {
                type: "text",
                value: "<strong>12 thẻ Digital đồng hành cùng mẹ:</strong><br>Cho Con Khởi Đầu Tuyệt Vời Nhất<br>Cho Con Dinh Dưỡng Tuyệt Vời Nhất<br>Cho Con Thính Giác Tinh Anh Nhất<br>Cho Con Sự Chăm Sóc Khoa Học Nhất<br>Cho Con Khoảnh Khắc Tuyệt Vời Nhất<br>Cho Con Phương Pháp Kích Hoạt Trí Thông Minh Tuyệt Vời Nhất<br>Cho Con Sự Học Tuyệt Vời Nhất<br>Cho Con Trí Tuệ Tuyệt Vời Nhất 01<br>Cho Con Trí Tuệ Tuyệt Vời Nhất 02<br>Cho Con Trí Tuệ Tuyệt Vời Nhất 03<br>Cho Con Sự Phát Triển Tuyệt Vời Nhất<br>Cho Con Kỹ Năng Tuyệt Vời Nhất"
            },
            {
                type: "text",
                value: "Một buổi sáng nhẹ nhàng, nhiều kiến thức hữu ích và nhiều niềm vui dành riêng cho mẹ bầu tháng 12."
            },
            {
                type: "text",
                value: "Chương trình Điều ước còn tiếp tục tại Bệnh viện Hoàn Hảo vào tháng 1. Mời các mẹ hãy đến và chúc cho con những điều ước tuyệt vời nhé!"
            },
            {
                type: "image",
                src: "./images/hoithao6_1.png",
                alt: "Điều ước Giáng Sinh cho con - hình 1"
            },
            {
                type: "image",
                src: "./images/hoithao6_2.png",
                alt: "Điều ước Giáng Sinh cho con - hình 2"
            },
            {
                type: "image",
                src: "./images/hoithao6_3.png",
                alt: "Điều ước Giáng Sinh cho con - hình 3"
            },
            {
                type: "image",
                src: "./images/hoithao6_4.png",
                alt: "Điều ước Giáng Sinh cho con - hình 4"
            },
            {
                type: "image",
                src: "./images/hoithao6_5.png",
                alt: "Điều ước Giáng Sinh cho con - hình 5"
            },
            {
                type: "image",
                src: "./images/hoithao6_6.png",
                alt: "Điều ước Giáng Sinh cho con - hình 6"
            },
            {
                type: "image",
                src: "./images/hoithao6_7.png",
                alt: "Điều ước Giáng Sinh cho con - hình 7"
            },
            {
                type: "image",
                src: "./images/hoithao6_8.png",
                alt: "Điều ước Giáng Sinh cho con - hình 8"
            },
            {
                type: "image",
                src: "./images/hoithao6_9.png",
                alt: "Điều ước Giáng Sinh cho con - hình 9"
            },
            {
                type: "image",
                src: "./images/hoithao6_10.png",
                alt: "Điều ước Giáng Sinh cho con - hình 10"
            },
            {
                type: "image",
                src: "./images/hoithao6_11.png",
                alt: "Điều ước Giáng Sinh cho con - hình 11"
            }
        ]
    },
    "hoi-thao-7": {
        title: "Điều ước Giáng Sinh cho con - Bệnh viện FV",
        date: "20/12/2025",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao7_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>Hội thảo: “ĐIỀU ƯỚC GIÁNG SINH CHO CON”</strong><br>Cộng Đồng Bầu đồng hành cùng Bệnh viện FV tổ chức hội thảo “Điều ước Giáng Sinh cho con”."
            },
            {
                type: "text",
                value: "Cộng Đồng Bầu xin gửi lời cảm ơn chân thành đến hơn 200 mẹ đã dành thời gian quý báu đến tham gia chương trình “Điều Ước Giáng Sinh Cho Con” tại Bệnh viện FV. Sự hiện diện của ba, mẹ và bé chính là yếu tố quan trọng nhất làm nên sự thành công rực rỡ của chương trình."
            },
            {
                type: "text",
                value: "Chúng tôi cũng xin cảm ơn Bệnh viện FV đã hợp tác và tạo cơ hội để các mẹ có một trải nghiệm tốt và lành mạnh."
            },
            {
                type: "text",
                value: "Những giá trị, kiến thức về y học và giáo dục chủ đề mẹ và bé trong giai đoạn 1.000 ngày vàng đầu đời mà Cộng Đồng Bầu và Bệnh viện FV mang lại hy vọng sẽ giúp ích cho mẹ và được mẹ ghi nhớ, áp dụng hằng ngày."
            },
            {
                type: "text",
                value: "Mẹ được thoải mái, thư giãn, con được vui khỏe, bình an chính là sứ mệnh mà chúng tôi luôn ao ước đạt được. Cộng Đồng Bầu luôn sẵn sàng là người dẫn đường, dìu dắt mẹ qua hành trình dài gian nan này. Nếu mẹ có khó khăn, cần giúp đỡ, đừng ngần ngại nhắn tin ngay cho chúng tôi để được hỗ trợ kịp thời và chính xác."
            },
            {
                type: "image",
                src: "./images/hoithao7_1.png",
                alt: "Điều ước Giáng Sinh cho con tại Bệnh viện FV - hình 1"
            },
            {
                type: "image",
                src: "./images/hoithao7_2.png",
                alt: "Điều ước Giáng Sinh cho con tại Bệnh viện FV - hình 2"
            },
            {
                type: "image",
                src: "./images/hoithao7_3.png",
                alt: "Điều ước Giáng Sinh cho con tại Bệnh viện FV - hình 3"
            },
            {
                type: "image",
                src: "./images/hoithao7_4.png",
                alt: "Điều ước Giáng Sinh cho con tại Bệnh viện FV - hình 4"
            },
            {
                type: "image",
                src: "./images/hoithao7_5.png",
                alt: "Điều ước Giáng Sinh cho con tại Bệnh viện FV - hình 5"
            }
        ]
    },
    "hoi-thao-8": {
        title: "Ngày hội Em Bé FV",
        date: "13/12/2025",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/news-14.png",
        blocks: [
            {
                type: "text",
                value: "<strong>SỰ KIỆN “NGÀY HỘI EM BÉ FV”</strong><br>Cộng Đồng Bầu đồng hành cùng Bệnh viện FV trong ngày hội “Em Bé FV” - nơi những ký ức được gọi tên."
            },
            {
                type: "text",
                value: "Ngày 13/12/2025, Ngày hội “Em Bé FV” đã chính thức diễn ra trong không khí ấm áp, xúc động và ngập tràn yêu thương, trở thành một cuộc hội ngộ đặc biệt giữa các gia đình và Bệnh viện FV - nơi khởi nguồn của hàng ngàn phép màu chào đời."
            },
            {
                type: "text",
                value: "Không chỉ là một sự kiện, đây là hành trình quay về ký ức. Nơi những em bé từng cất tiếng khóc đầu đời tại FV - dù còn nằm nôi hay đã trưởng thành - cùng cha mẹ trở lại gặp gỡ đội ngũ bác sĩ, nữ hộ sinh, điều dưỡng đã từng theo dõi, chăm sóc và nâng niu con trong những giây phút thiêng liêng nhất."
            },
            {
                type: "text",
                value: "<strong>Triển lãm ảnh “10.000 Em Bé FV”</strong> là điểm nhấn đầy cảm xúc của ngày hội. Mỗi bức ảnh là một câu chuyện, mỗi câu chuyện là một mảnh ghép của yêu thương và niềm hạnh phúc vỡ òa khi con chào đời."
            },
            {
                type: "text",
                value: "Nhiều gia đình đã lặng người khi nhìn lại khoảnh khắc năm xưa - nơi bàn tay bé xíu nắm lấy tay mẹ, đánh dấu sự khởi đầu của một hành trình làm cha mẹ không thể nào quên."
            },
            {
                type: "text",
                value: "Bên cạnh đó, khu vui chơi và các hoạt động gắn kết gia đình đã mang đến tiếng cười rộn rã, sự kết nối tự nhiên giữa các thế hệ và những kỷ niệm mới được tạo nên ngay trong chính không gian thân quen của FV."
            },
            {
                type: "image",
                src: "./images/hoithao8_1.png",
                alt: "Ngày hội Em Bé FV"
            },
            
        ]
    },
    "hoi-thao-9": {
        title: "Talkshow \"1000 ngày vàng đầu đời của con\" - Trang bị nền tảng vững chắc cho tương lai con trẻ",
        date: "17/04/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/news-hoithao9.png",
        blocks: [
            {
                type: "text",
                value: "<strong>TALKSHOW \"1000 NGÀY VÀNG ĐẦU ĐỜI CỦA CON\" - TRANG BỊ NỀN TẢNG VỮNG CHẮC CHO TƯƠNG LAI CON TRẺ</strong>"
            },
            {
                type: "text",
                value: "Trong hành trình lớn khôn của con, 1000 ngày vàng đầu đời chính là giai đoạn đặt nền móng quan trọng cho thể chất, trí tuệ và sức đề kháng về sau."
            },
            {
                type: "text",
                value: "Thế nhưng giữa thực tế hiện nay, không ít Ba Mẹ vẫn luôn băn khoăn:<br>🔷Đâu là thực phẩm sạch, đáng tin cậy cho con?<br>🔷Chăm sóc con thế nào mới đúng và đủ?<br>🔷Làm sao để xây dựng nền tảng vững chắc cho sự phát triển lâu dài của trẻ?"
            },
            {
                type: "text",
                value: "Nằm trong khuôn khổ sự kiện “Ươm Mầm Hữu Cơ”, Zmoms mong muốn mang đến cho Ba Mẹ một không gian kết nối, lắng nghe và cập nhật những kiến thức thiết thực trong hành trình nuôi con khỏe mạnh, an toàn và khoa học."
            },
            {
                type: "text",
                value: "Đặc biệt, talkshow “1000 ngày vàng đầu đời của con” sẽ là điểm nhấn nổi bật của chương trình, nơi Ba Mẹ được lắng nghe những chia sẻ giá trị từ các khách mời giàu chuyên môn và đầy tâm huyết:"
            },
            {
                type: "text",
                value: "👨‍⚕️ <strong>ThS.BS Nguyễn Tố Na</strong><br>- 15 năm công tác tại Bệnh viện Nhi Đồng II<br>- Chuyên sâu chăm sóc và điều trị trẻ sơ sinh: non tháng, nhẹ cân, bệnh lý<br>- Chuyên môn hồi sức sơ sinh nâng cao<br>- Khám Nhi tổng quát, Nhi phát triển, theo dõi trẻ nguy cơ cao<br>- Đào tạo chuyên môn tại ĐH Sydney, N.R.P, S.T.A.B.L.E, ĐH Boston"
            },
            {
                type: "text",
                value: "👩‍💼 <strong>Trần Ngọc Diệp</strong><br>- Co-founder Happy Vegi<br>- 10 năm kinh nghiệm trong lĩnh vực nông nghiệp hữu cơ<br>- Nền tảng chuyên môn: ThS-BS (ĐH Y Hà Nội), Coach ICF & John Maxwell Team"
            },
            {
                type: "text",
                value: "☘️ <strong>Chị Trường Thi</strong><br>- CEO Ba Lành<br>- Từ nỗi lo thực phẩm bẩn cho chính gia đình mình, chị đã xây dựng Ba Lành cách đây 8 năm<br>- Hiện nay, Ba Lành đang phục vụ bữa ăn cho hàng nghìn gia đình mỗi tháng với thực phẩm rõ nguồn gốc, đạt tiêu chuẩn chất lượng"
            },
            {
                type: "text",
                value: "Với sự đồng hành của những khách mời “có tâm - có tầm”, Zmoms tin rằng buổi trò chuyện sẽ mang đến cho Ba Mẹ nhiều góc nhìn giá trị, kiến thức thiết thực và nguồn cảm hứng tích cực trong hành trình chăm con từ những năm tháng đầu đời."
            },
            {
                type: "text",
                value: "👉 <strong>Đặc biệt, số lượng chỗ ngồi buổi sáng CÓ HẠN</strong><br>Cách thức đăng ký: Mẹ cmt “QUAN TÂM” để không bỏ lỡ những PHẦN QUÀ giá trị của chương trình!"
            },
            {
                type: "text",
                value: "<strong>THÔNG TIN CHI TIẾT SỰ KIỆN TP.HCM</strong><br>▪️ Hoạt động: Talkshow - Workshop - Gian hàng trưng bày - Khu trưng bày - Game show<br>▪️ Chặng TP. Hồ Chí Minh: Chủ Nhật, ngày 19.04.2026 - Phòng Hall, Tầng 3, AEON Mall Bình Tân, TP. HCM"
            },
            {
                type: "image",
                src: "./images/news-hoithao9.png",
                alt: "Talkshow 1000 ngày vàng đầu đời của con"
            }
        ]
    },
    "hoi-thao-10": {
        title: "[Sự kiện hoàn toàn MIỄN PHÍ] TP.HCM ơi, “Ươm Mầm Hữu Cơ” sắp có mặt rồi đây!",
        date: "Chủ Nhật, 17/04/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao10_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>[SỰ KIỆN HOÀN TOÀN MIỄN PHÍ] TP.HCM ƠI, “ƯƠM MẦM HỮU CƠ” SẮP CÓ MẶT RỒI ĐÂY!</strong>"
            },
            {
                type: "text",
                value: "Chỉ còn ít ngày nữa, “Ươm mầm hữu cơ” sẽ chính thức có mặt tại TP.HCM - mang theo một không gian trải nghiệm trọn vẹn dành cho gia đình và những ai quan tâm đến lối sống xanh 💚"
            },
            {
                type: "text",
                value: "<strong>Đến với sự kiện, bạn sẽ được:</strong><br>👶 <strong>Tham gia talkshow “1000 NGÀY VÀNG ĐẦU ĐỜI CỦA CON”</strong><br>Lắng nghe những chia sẻ quan trọng giúp cha mẹ hiểu đúng và chăm sóc con ngay từ giai đoạn nền tảng<br><br>📲 <strong>Khám phá khu trưng bày hữu cơ tích hợp AR</strong><br>Chạm - quét - trải nghiệm kiến thức hữu cơ theo cách hoàn toàn mới, trực quan và dễ hiểu"
            },
            {
                type: "image",
                src: "./images/hoithao10_2.png",
                alt: "Ươm Mầm Hữu Cơ tại TP.HCM"
            },
            {
                type: "text",
                value: "🎨 <strong>Workshop tô chậu - trồng sen đá</strong><br>Tự tay sáng tạo một chậu cây nhỏ xinh, mang về một “mầm xanh” cho riêng mình<br><br>🛍️ <strong>Tham quan gian hàng trải nghiệm hữu cơ</strong><br>Trải nghiệm đa dạng sản phẩm hướng tới lối sống lành mạnh cho cả gia đình<br><br>🎁 <strong>Minigame & quà tặng hấp dẫn</strong><br>Vừa chơi - vừa nhận quà, thêm niềm vui cho cả nhà"
            },
            {
                type: "text",
                value: "👉 <strong>Đặc biệt, số lượng chỗ ngồi buổi sáng CÓ HẠN</strong><br>Cách thức đăng ký: Mẹ cmt “QUAN TÂM” để không bỏ lỡ những PHẦN QUÀ giá trị của chương trình!"
            },
            {
                type: "text",
                value: "<strong>THÔNG TIN CHI TIẾT SỰ KIỆN TP.HCM</strong><br>▪️ Hoạt động: Talkshow - Workshop - Gian hàng trưng bày - Khu trưng bày - Game show.<br>▪️ Chặng TP. Hồ Chí Minh: Chủ Nhật, ngày 19.04.2026 - Phòng Hall, Tầng 3, AEON Mall Bình Tân, TP. HCM."
            },
            {
                type: "text",
                value: "🌿 Hẹn gặp bạn tại AEON Mall Bình Tân - nơi những “mầm xanh” bắt đầu được gieo từ những điều nhỏ nhất!"
            },
            {
                type: "image",
                src: "./images/hoithao10_1.png",
                alt: "Sự kiện Ươm Mầm Hữu Cơ"
            }
        ]
    },
    "hoi-thao-11": {
        title: "Cộng Đồng Bầu Zmoms & BV QT Green Hải Phòng",
        date: "16/03/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao11_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>CỘNG ĐỒNG BẦU ZMOMS & BV QT GREEN HẢI PHÒNG</strong><br>Cộng Đồng Bầu đồng hành cùng Hội thảo tiền sản bệnh viện quốc tế Green Hải Phòng."
            },
            {
                type: "image",
                src: "./images/hoithao11_1.png",
                alt: "Cộng Đồng Bầu Zmoms tại BV QT Green Hải Phòng"
            },
            {
                type: "text",
                value: "Bệnh viện quốc tế Green là một địa chỉ y tế chất lượng cao tại TP Hải Phòng được rất nhiều mẹ bầu tin tưởng và sử dụng dịch vụ thai sản. Các Hội thảo tiền sản của bệnh viện được tổ chức định kỳ với các nội dung chất lượng nên luôn thu hút được đông đảo các cha mẹ tham gia và phản hồi rất tốt."
            },
            {
                type: "image",
                src: "./images/hoithao11_2.png",
                alt: "Hội thảo tiền sản tại Bệnh viện quốc tế Green Hải Phòng"
            },
            {
                type: "text",
                value: "Hội thảo tiền sản tại BV Green sáng ngày 14/03 vui mừng có sự hiện diện lần đầu tiên của Cộng Đồng Bầu với chương trình tri ân Thành viên Bạc, cùng với phần chia sẻ nhanh về 1.000 ngày đầu đời và minigame rất cảm xúc đến từ chuyên gia giáo dục Nguyễn Mai Anh."
            },
            {
                type: "image",
                src: "./images/hoithao11_3.png",
                alt: "Chương trình tri ân Thành viên Bạc Cộng Đồng Bầu"
            },
            {
                type: "text",
                value: "Sau hội thảo, nhiều cha mẹ đã ngay lập tức đăng ký trở thành thành viên Bạc của Cộng Đồng Bầu, nhận những phần quà tri ân giá trị và chuẩn bị tham gia khóa học 1.000 ngày vàng đầu đời của Trung tâm IPD8, nuôi dạy con thông minh từ trong bụng mẹ."
            },
            {
                type: "image",
                src: "./images/hoithao11_4.png",
                alt: "Cha mẹ tham gia hội thảo và nhận quà tri ân"
            },
            {
                type: "text",
                value: "Bệnh viện Green là đối tác chiến lược của Cộng Đồng Bầu, hai bên sẽ hợp tác triển khai nhiều hoạt động mang lại lợi ích thiết thực cho mẹ và bé Hải Phòng trong thời gian tới."
            },
            {
                type: "image",
                src: "./images/hoithao11_5.png",
                alt: "Cộng Đồng Bầu và Bệnh viện Green hợp tác đồng hành cùng mẹ và bé"
            }
        ]
    },
    "hoi-thao-12": {
        title: "Lịch lớp học tiền sản tháng 03 - Cùng Bầu chăm sóc thai kỳ",
        date: "28/03/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao12_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>🌸 LỊCH LỚP HỌC TIỀN SẢN THÁNG 03 - CÙNG BẦU CHĂM SÓC THAI KỲ NHA!</strong>"
            },
            {
                type: "text",
                value: "Hành trình đón bé yêu sẽ trở nên nhẹ nhàng và an tâm hơn bao giờ hết. Ba Mẹ đừng quên lịch hẹn “vàng” cùng Bầu tại các bệnh viện đối tác trong tháng 3 này nhé."
            },
            {
                type: "image",
                src: "./images/hoithao12_1.png",
                alt: "Lịch lớp học tiền sản tháng 03 cùng Cộng Đồng Bầu"
            },
            {
                type: "text",
                value: "<strong>DANH SÁCH CÁC LỚP HỌC:</strong><br>🗓 24/03: BV Phụ sản Thái Bình<br>🗓 26/03: BV Sản nhi Quảng Ninh<br>🗓 28/03 (08:30): BV ĐH Y Dược Shing Mark<br>🗓 28/03 (08:30): BV Hoàn Hảo<br>🗓 31/03: BV Phụ sản Hải Dương"
            },
            {
                type: "text",
                value: "<strong>ĐẶC QUYỀN KHI THAM GIA:</strong><br>✅ Check-in nhận quà tặng hấp dẫn từ CĐB<br>✅ Tham gia Mini Game vui nhộn và nhận quà từ Cộng Đồng Bầu<br>✅ BỐC THĂM MAY MẮN: Cơ hội nhận ưu đãi khủng khi đặt cọc gói sanh ngay tại chương trình<br>✅ Giải đáp trực tiếp mọi thắc mắc cùng các bác sĩ chuyên khoa giàu kinh nghiệm"
            },
            {
                type: "text",
                value: "<strong>CÁCH THỨC ĐĂNG KÝ:</strong> Ba Mẹ vui lòng quét mã QR trên ảnh để điền thông tin giữ chỗ miễn phí nhé!"
            },
            {
                type: "text",
                value: "⚠️ Số lượng quà tặng có hạn, Mẹ nhanh tay đăng ký sớm.<br>💖 Ba mẹ nhớ follow page để cập nhật tin tức mới nhất nhé!"
            }
        ]
    },
    "hoi-thao-13": {
        title: "Cộng Đồng Bầu Zmoms & BV PS Tâm Phúc Hải Phòng",
        date: "08/03/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao13_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>CỘNG ĐỒNG BẦU ZMOMS & BV PS TÂM PHÚC HẢI PHÒNG</strong><br><strong>HỘI THẢO TIỀN SẢN TẠI BV PHỤ SẢN TÂM PHÚC - HẢI PHÒNG. CHÚC MỪNG NGÀY QUỐC TẾ PHỤ NỮ.</strong>"
            },
            {
                type: "image",
                src: "./images/hoithao13_1.png",
                alt: "Cộng Đồng Bầu Zmoms tại BV Phụ sản Tâm Phúc Hải Phòng"
            },
            {
                type: "text",
                value: "Sáng ngày 7/3, hơn một trăm bà bầu đã cùng với người thân đến tham dự buổi Hội thảo tiền sản rất ý nghĩa tại BV Phụ sản Tâm Phúc, thành phố Hải Phòng."
            },
            {
                type: "image",
                src: "./images/hoithao13_2.png",
                alt: "Hội thảo tiền sản tại BV Phụ sản Tâm Phúc Hải Phòng"
            },
            {
                type: "text",
                value: "Tại buổi hội thảo, chuyên gia Mai Anh và Cộng Đồng Bầu đã mang tới cho các mẹ những câu chuyện, những clip để truyền tải một cách nhẹ nhàng thông điệp về nuôi dạy con trong 1000 ngày đầu đời. Các mẹ bầu Hải Phòng đã thật sự đón nhận nhiệt tình nội dung này với những phản hồi tích cực trên trang tin của bệnh viện."
            },
            {
                type: "image",
                src: "./images/hoithao13_3.png",
                alt: "Chuyên gia Mai Anh chia sẻ tại hội thảo tiền sản"
            },
            {
                type: "text",
                value: "Rất nhiều mẹ bầu đã trở thành thành viên của Cộng Đồng Bầu và có những mẹ ngay lập tức đăng ký là thành viên bạc để có thể tiếp nhận những kiến thức về phương pháp Giáo dục sớm 1000 ngày đầu đời IPD8."
            },
            {
                type: "image",
                src: "./images/hoithao13_4.png",
                alt: "Các mẹ bầu tham gia chương trình thành viên Cộng Đồng Bầu"
            },
            {
                type: "text",
                value: "Nhân dịp ngày Quốc tế Phụ nữ 8/3, những món quà, những điều bổ ích Cộng Đồng Bầu mang đến với Hội thảo chính là lời chúc mừng và cũng là cam kết đồng hành sâu hơn nữa, rộng hơn nữa, chăm sóc nhiều hơn nữa với những người mẹ Việt Nam."
            },
            {
                type: "image",
                src: "./images/hoithao13_5.png",
                alt: "Cộng Đồng Bầu đồng hành cùng mẹ bầu Hải Phòng"
            }
        ]
    },
    "hoi-thao-15": {
        title: "Mẹ bầu ơi! Tháng 3 này cùng Cộng Đồng Bầu sẵn sàng cho hành trình chào đón bé yêu",
        date: "18/03/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithaothang3.png",
        blocks: [
            {
                type: "text",
                value: "<strong>MẸ BẦU ƠI! - THÁNG 3 NÀY CÙNG “CỘNG ĐỒNG BẦU” SẴN SÀNG CHO HÀNH TRÌNH CHÀO ĐÓN BÉ YÊU NHÉ!</strong>"
            },
            {
                type: "text",
                value: "Cộng Đồng Bầu hiểu rằng, hành trình mang thai là lúc cơ thể Mẹ trải qua những biến đổi vô cùng kỳ diệu. Và để đồng hành cùng những nỗi niềm đó, tháng 3 này, Bầu có kết hợp cùng Bệnh viện Columbia Asia Bình Dương trân trọng mời Ba Mẹ tham dự LỚP HỌC TIỀN SẢN cùng Bầu nha!"
            },
            {
                type: "image",
                src: "./images/hoithaothang3.png",
                alt: "Lớp học tiền sản cùng Cộng Đồng Bầu tại Bệnh viện Columbia Asia Bình Dương"
            },
            {
                type: "text",
                value: "Đây sẽ là nơi mang đến giải pháp chăm sóc toàn diện để Mẹ khỏe mạnh, Bé phát triển tối ưu hơn đó!"
            },
            {
                type: "text",
                value: "<strong>THÔNG TIN CHƯƠNG TRÌNH</strong><br>🕘 Thời gian: 9h00 - 11h00, Thứ Bảy, ngày 21/03/2026<br>📍 Địa điểm: Tầng 2 - Bệnh viện Quốc tế Columbia Asia Bình Dương"
            },
            {
                type: "text",
                value: "<strong>Tham gia lớp học, Ba Mẹ sẽ nhận được:</strong><br>✅ Kiến thức khoa học về chăm sóc và dinh dưỡng cho thai kỳ khỏe mạnh<br>✅ Hỗ trợ giảm đau cổ vai gáy & thắt lưng trong thai kỳ<br>✅ Chia sẻ trực tiếp từ chuyên gia - giải đáp mọi thắc mắc của mẹ<br>✅ Combo quà tặng hấp dẫn từ Cộng Đồng Bầu<br>✅ Minigame vui nhộn với nhiều phần quà xinh xắn"
            },
            {
                type: "text",
                value: "Đừng ngại comment hoặc inbox nếu Mẹ có câu hỏi nhé! Cộng Đồng Bầu luôn sẵn sàng đồng hành cùng mẹ trên hành trình thiêng liêng này."
            },
            {
                type: "text",
                value: "🎫 Chương trình miễn phí tham gia<br>Mẹ hãy đến sự kiện, và chuẩn bị hành trang chào đón các thiên thần của mình nhé!<br>Ba Mẹ lưu lại lịch tham gia ngay nhé!!!<br>☎️ Hotline: 0947.701.010"
            }
        ]
    },
    "hoi-thao-16": {
        title: "Đoàn công tác Cộng Đồng Bầu làm việc tại Trung tâm Chăm sóc ở cữ VinNest - Vinmec Smart City",
        date: "26/01/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao15_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>ĐOÀN CÔNG TÁC CỘNG ĐỒNG BẦU LÀM VIỆC TẠI TRUNG TÂM CHĂM SÓC Ở CỮ VINNEST - VINMEC SMART CITY</strong>"
            },
            {
                type: "text",
                value: "Vừa qua, Đoàn công tác Cộng Đồng Bầu đã có buổi đến thăm và làm việc tại Trung tâm Chăm sóc ở cữ VinNest - Bệnh viện Vinmec Smart City."
            },
            {
                type: "image",
                src: "./images/hoithao15_1.png",
                alt: "Cộng Đồng Bầu làm việc tại VinNest - Vinmec Smart City"
            },
            {
                type: "text",
                value: "Trong không khí trao đổi thân mật và cởi mở, đại diện Cộng Đồng Bầu đã chia sẻ tới các lãnh đạo khoa, đội ngũ y bác sĩ về Chương trình đào tạo liên ngành Y học - Giáo dục sớm trong 1.000 ngày đầu đời, với trọng tâm là sự phối hợp chặt chẽ giữa chăm sóc y khoa, nuôi dưỡng cảm xúc và giáo dục sớm khoa học cho mẹ và em bé ngay từ giai đoạn thai kỳ - sơ sinh."
            },
            {
                type: "text",
                value: "Chương trình nhận được sự quan tâm và đón nhận tích cực từ phía các y bác sĩ Vinmec, đặc biệt ở góc nhìn liên ngành, nhân văn và dự phòng sớm, góp phần nâng cao chất lượng chăm sóc toàn diện cho mẹ và bé trong giai đoạn nền tảng của cuộc đời."
            },
            {
                type: "image",
                src: "./images/hoithao15_2.png",
                alt: "Đoàn công tác Cộng Đồng Bầu trao đổi cùng đội ngũ VinNest - Vinmec Smart City"
            },
            {
                type: "text",
                value: "Buổi làm việc đã mở ra nhiều cơ hội hợp tác tiềm năng giữa Cộng Đồng Bầu và VinNest - Vinmec Smart City trong thời gian tới, hướng tới mục tiêu chung:<br>👉 Đồng hành cùng cha mẹ kiến tạo nền tảng thể chất - trí tuệ - cảm xúc vững vàng cho trẻ ngay từ 1.000 ngày đầu đời."
            },
            {
                type: "text",
                value: "Cộng Đồng Bầu trân trọng cảm ơn sự tiếp đón nồng hậu và tinh thần hợp tác cởi mở từ Ban lãnh đạo cùng đội ngũ y bác sĩ VinNest - Vinmec Smart City."
            },
            {
                type: "text",
                value: "Chúng tôi tin rằng, với sự kết nối giữa Y học hiện đại và Giáo dục sớm khoa học, hành trình làm cha mẹ của các gia đình Việt sẽ ngày càng vững vàng và an tâm hơn."
            },
            {
                type: "image",
                src: "./images/hoithao15_3.png",
                alt: "Cộng Đồng Bầu kết nối Y học hiện đại và Giáo dục sớm khoa học"
            }
        ]
    },
    "hoi-thao-17": {
        title: "Chúng ta có hẹn ở Câu lạc bộ Cộng Đồng Bầu ba mẹ nhé",
        date: "21/01/2026",
        author: "Cộng Đồng Bầu",
        thumbnail: "./images/hoithao17_1.png",
        blocks: [
            {
                type: "text",
                value: "<strong>⏰ CHÚNG TA CÓ HẸN Ở CÂU LẠC BỘ CỘNG ĐỒNG BẦU BA MẸ NHÉ ⏰</strong>"
            },
            {
                type: "text",
                value: "Ba mẹ ơi, Câu lạc bộ CĐB diễn ra vào thứ 7 này hiện đã gần kín chỗ. BTC xin chốt danh sách sớm để đảm bảo chất lượng chương trình."
            },
            {
                type: "text",
                value: "🗓 <strong>Thời gian:</strong> 09h00 - 11h00 | Thứ 7, ngày 24.01.2026"
            },
            {
                type: "text",
                value: "✨ Chia sẻ kiến thức thai giáo đúng cách<br>✨ Hiểu con - đồng hành cùng con ngay từ 1.000 ngày đầu đời<br>✨ Giao lưu cộng đồng ba mẹ & nhận quà tặng từ CĐB"
            },
            {
                type: "text",
                value: "📌 Ưu tiên ba mẹ đăng ký sớm - hết chỗ BTC sẽ đóng form"
            },
            {
                type: "text",
                value: "👉 Ba mẹ nhanh tay quét mã bên dưới bài viết hoặc inbox fanpage CĐB để giữ chỗ ngay hôm nay."
            },
            {
                type: "text",
                value: "CĐB hẹn gặp ba mẹ vào sáng thứ 7 thật ấm áp và ý nghĩa."
            },
            {
                type: "image",
                src: "./images/hoithao17_1.png",
                alt: "Câu lạc bộ Cộng Đồng Bầu"
            }
        ]
    }
};
function getSeminarTime(dateText) {
    const match = String(dateText || "").match(/(\d{1,2})[/.](\d{1,2})[/.](\d{4})/);

    if (!match) {
        return 0;
    }

    const [, day, month, year] = match;

    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
}

function getSeminarEntries() {
    return Object.entries(seminarData)
        .map((entry, index) => ({ entry, index }))
        .sort((current, next) => {
            const dateDiff = getSeminarTime(next.entry[1].date) - getSeminarTime(current.entry[1].date);

            return dateDiff || current.index - next.index;
        })
        .map(({ entry }) => entry);
}

function renderSeminarCard(id, seminar) {
    return `
        <article class="news-card">
            <a href="#${id}" data-page="seminar-detail" data-id="${id}" class="news-card-link">
                <div class="news-thumb">
                    <img src="${getNewsImageSrc(seminar.thumbnail)}" alt="${seminar.title}">
                </div>

                <div class="news-card-body">
                    <span class="news-date">${seminar.date}</span>
                    <h2>${seminar.title}</h2>
                    <p>${getNewsExcerpt(seminar)}</p>
                    <span class="news-readmore">Xem chi tiết →</span>
                </div>
            </a>
        </article>
    `;
}

function renderSeminarPagination(currentPage, totalPages) {
    if (totalPages <= 1) {
        return "";
    }

    const pageButtons = Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return `
            <button
                type="button"
                class="news-page-btn ${page === currentPage ? "active" : ""}"
                data-seminar-page="${page}"
                aria-label="Trang ${page}"
            >
                ${page}
            </button>
        `;
    }).join("");

    return `
        <div class="news-pagination" aria-label="Chuyển trang hội thảo">
            <button type="button" class="news-page-btn" data-seminar-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}>
                Trước
            </button>

            ${pageButtons}

            <button type="button" class="news-page-btn" data-seminar-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""}>
                Sau
            </button>
        </div>
    `;
}

function renderSeminarList(page = 1) {
    const grid = document.querySelector(".news-grid");

    if (!grid) {
        return;
    }

    const entries = getSeminarEntries();
    const count = document.getElementById("seminarCount");

    if (count) {
        count.textContent = String(entries.length);
    }

    const totalPages = Math.max(1, Math.ceil(entries.length / SEMINAR_PAGE_SIZE));
    const currentPage = Math.min(Math.max(Number(page) || 1, 1), totalPages);
    const start = (currentPage - 1) * SEMINAR_PAGE_SIZE;
    const visibleEntries = entries.slice(start, start + SEMINAR_PAGE_SIZE);

    grid.innerHTML = visibleEntries.map(([id, seminar]) => renderSeminarCard(id, seminar)).join("");

    let pagination = document.querySelector(".news-pagination");

    if (!pagination) {
        pagination = document.createElement("div");
        grid.insertAdjacentElement("afterend", pagination);
    }

    pagination.outerHTML = renderSeminarPagination(currentPage, totalPages);

    document.querySelectorAll(".news-page-btn[data-seminar-page]").forEach(button => {
        button.addEventListener("click", () => {
            if (button.disabled) {
                return;
            }

            renderSeminarList(button.getAttribute("data-seminar-page"));

            const sectionHead = document.getElementById("seminar-list");
            (sectionHead || grid).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

function renderRelatedSeminars(currentId) {
    const related = getSeminarEntries()
        .filter(([id]) => id !== currentId)
        .slice(0, 3);

    if (related.length === 0) {
        return "";
    }

    return `
        <section class="related-news">
            <h2>HỘI THẢO LIÊN QUAN</h2>

            <div class="related-news-grid">
                ${related.map(([id, item]) => `
                    <article class="related-news-card">
                        <a href="#${id}" data-page="seminar-detail" data-id="${id}">
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

function renderSeminarDetail(seminarId, saveHistory = true) {
    const content = document.getElementById("content");
    const seminar = seminarData[seminarId];

    if (!content) return;

    if (!seminar) {
        content.innerHTML = `
            <section class="news-not-found">
                <h2>Không tìm thấy hội thảo</h2>
                <a href="#hoi-thao" data-page="seminar">Quay lại danh sách hội thảo</a>
            </section>
        `;
        return;
    }

    content.innerHTML = `
        <div class="news-detail-page" id="${seminarId}">

            <div class="news-breadcrumb-bar">
                <div class="news-container">
                    <a href="./index.html">Trang chủ</a>
                    <span>/</span>
                    <a href="#hoi-thao" data-page="seminar">Hội thảo</a>
                    <span>/</span>
                    <strong>${seminar.title}</strong>
                </div>
            </div>

            <div class="news-detail-wrapper">

                ${renderNewsSidebar()}

                <article class="news-detail-content">
                    <span class="news-detail-date">${seminar.date}</span>

                    <h1>${seminar.title}</h1>

                    <div class="news-meta">
                        Đăng bởi: ${seminar.author}
                    </div>

                    ${renderNewsBlocks(seminar.blocks)}

                    <a href="#hoi-thao" data-page="seminar" class="back-news">
                        ← Quay lại danh sách hội thảo
                    </a>

                    ${renderRelatedSeminars(seminarId)}
                </article>

            </div>

        </div>
    `;

    const detailPage = document.getElementById(seminarId);

    if (detailPage) {
        detailPage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (saveHistory) {
        history.pushState(
            {
                page: "seminar-detail",
                seminarId: seminarId
            },
            "",
            "#" + seminarId
        );
    }
}
