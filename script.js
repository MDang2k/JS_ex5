// bài 1 

const diemChuan = document.querySelector("#diemChuan"),
    khuVuc = document.querySelector("#khuVuc"),
    doiTuong = document.querySelector("#doiTuong"),
    diemMon1 = document.querySelector("#diemMon1"),
    diemMon2 = document.querySelector("#diemMon2"),
    diemMon3 = document.querySelector("#diemMon3"),
    btn_ex1 = document.querySelector(".btn_ex1"),
    result_ex1 = document.querySelector(".result_ex1")

function tinhDiemUuTien(diemUuTien) {
    switch (diemUuTien) {
        case "A":
            return 2
        case "B":
            return 1
        case "C":
            return 0.5
    }
}

function tinhDiemDoiTuong(diemDoiTuong) {
    switch (diemDoiTuong) {
        case "1":
            return 2.5
        case "2":
            return 1.5
        case "3":
            return 1
    }
}

btn_ex1.addEventListener("click", () => {


    let diemTong = diemMon1.value * 1 + diemMon2.value * 1 + diemMon3.value * 1 + tinhDiemDoiTuong(doiTuong.value) * 1 + tinhDiemUuTien(khuVuc.value) * 1

    if (diemTong >= diemChuan.value * 1) {
        result_ex1.innerHTML = `Tổng điểm là ${diemTong} - Bạn đã đậu`
    } else {
        result_ex1.innerHTML = `Tổng điểm là ${diemTong} - Bạn đã rớt`
    }

})

// bài 2 

const name = document.querySelector("#name"),
    kw = document.querySelector("#kw"),
    btn_ex2 = document.querySelector(".btn_ex2"),
    result_ex2 = document.querySelector(".result_ex2")

function tinhTienDien(soKw) {
    if (soKw <= 50) {
        return soKw * 500
    } else if (soKw <= 100) {
        return 50 * 500 + (soKw - 50) * 650
    } else if (soKw <= 150) {
        return 50 * 500 + 50 * 650 + (soKw - 100) * 850
    } else if (soKw <= 200) {
        return 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100
    } else {
        return 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKw - 200) * 1300
    }
}

btn_ex2.addEventListener("click", () => {

    result_ex2.innerHTML = `${name.value} cần thanh toán ${tinhTienDien(kw.value*1)} VND`
})