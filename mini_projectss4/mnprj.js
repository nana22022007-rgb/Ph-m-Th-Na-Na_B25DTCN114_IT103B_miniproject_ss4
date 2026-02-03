let attempts = 0;
let flag = false;

while (attempts < 3) {
    let account = prompt("Nhập tài khoản");
    let password = prompt("Nhập mật khẩu");

    if (account !== "admin" && password !== "12345") {
        attempts++;
        alert("Sai cả tài khoản và mật khẩu! Bạn còn " + (3 - attempts) + " lần thử.");
    }
    else if (account !== "admin") {
        attempts++;
        alert("Sai tài khoản! Bạn còn " + (3 - attempts) + " lần thử.");
    }
    else if (password !== "12345") {
        attempts++;
        alert("Sai mật khẩu! Bạn còn " + (3 - attempts) + " lần thử.");
    }
    else {
        alert("Đăng nhập thành công");
        flag = true;
        break;
    }
}
if (flag === false) {
    alert("Tài khoản đã bị khóa");
}

if (flag === true) {
    let choice;
    do {
        choice = +prompt("-------MENU---------\n" +
            "1.Phân loại mã số sách (Số nguyên chẵn/lẻ)\n" +
            "2.Thiết kế bản đồ kho sách (Dạng lưới)\n" +
            "3.Dự toán phí bảo trì sách theo năm.\n" +
            "4.Tìm mã số sách may mắn (Số nguyên tố/Số đặc biệt)\n" +
            "5.Thoát."
        )

        switch (choice) {
            case 1:
                let count = 0;
                let even = 0;
                let odd = 0;

                while (true) {
                    let code = parseInt(prompt("Nhập mã số sách (nhập 0 để dừng)"));
                    if (code === 0) {
                        break;
                    }
                    count++;
                    if (code % 2 === 0) {
                        even++;
                    } else {
                        odd++;
                    }
                }

                console.log("--- Kết quả phân loại mã sách ---");
                console.log("Tổng số lượng mã sách đã nhập:", count);
                console.log("Số mã chẵn (Sách khoa học):", even);
                console.log("Số mã lẻ (Sách nghệ thuật):", odd);
                alert("Đã phân loại xong! Xem kết quả tại Console (F12).");

            case 2:
                let row;
                let column;
                do {
                    row = parseInt(prompt("Nhập số hàng"));
                    column = parseInt(prompt("Nhập số cột"));
                    if (isNaN(row) || isNaN(column) || row < 1 || column < 1) {
                        alert("Số hàng hoặc cột phải là số dương");
                    }
                } while (isNaN(row) || isNaN(column) || row < 1 || column < 1);

                for (let i = 1; i <= row; i++) {
                    for (let j = 1; j <= column; j++) {
                        if (i === j) {
                            console.log(`[${i} - ${j}](Kệ ưu tiên)`);
                        } else {
                            console.log(`[${i} - ${j}]`);
                        }
                    }
                }
                break;
            case 3:
                let books = parseInt(prompt("Nhập số lượng sách"));
                let cost = parseInt(prompt("Nhập phí bảo trì 1 cuốn / năm"));
                let years = parseInt(prompt("Nhập số năm dự toán"));
                console.log("=== BẢNG DỰ TOÁN BẢO TRÌ ===");
                for (let i = 1; i <= years; i++) {
                    let totalCost = cost * books;
                    console.log("Năm" + i + ":" + totalCost + "đ\n");
                    cost = Math.round(cost * 1.1);


                }
                break;
            case 4:
                let N = parseInt(prompt("Nhập số N"));
                let luckyNumber = 0;
                let list = "";
                for (let i = 1; i <= N; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        luckyNumber++;
                        list += i + " ";
                    }
                }
                console.log("Tổng số mã may mắn: ", luckyNumber);
                console.log("Các số may mắn là:", list);


                break;
            case 5:
                alert("Hệ thống đang đăng xuất...");

                break;

            default:
                alert("Vui lòng lựa chọn từ 1-5");
                break;
        }
    } while (choice !== 5);
}





