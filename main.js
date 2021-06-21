var getElm = function (id) {
  return document.getElementById(id);
};

var danhSachSoNguyen = [];
function nhanSoNguyen() {
  var ipSoNguyen = getElm("ipSoNguyen").value;
  if (ipSoNguyen == "") {
    alert("Không được để trống");
    return;
  } else if (ipSoNguyen != parseInt(ipSoNguyen)) {
    alert("Không được nhập khác số nguyên");
    return;
  } else if (ipSoNguyen > 100) {
    alert("Không được nhập quá 100");
  }

  danhSachSoNguyen.push(ipSoNguyen);
  opSoNguyen.innerHTML = danhSachSoNguyen;
}

// bài 1
var opBaiMot = getElm("opBaiMot");

function tinhTongSoDuong() {
  var tongSoNguyen = 0;
  for (var i = 0; i < danhSachSoNguyen.length; i++)
    if (danhSachSoNguyen[i] > 0) {
      tongSoNguyen += Number(danhSachSoNguyen[i]);
    }
  opBaiMot.innerHTML = "Tổng các số dương là: " + tongSoNguyen;
}

// bài 2
var opBaiHai = getElm("opBaiHai");
function demSoDuong() {
  var tongSoDuong = 0;
  for (i = 0; i < danhSachSoNguyen.length; i++) {
    if (danhSachSoNguyen[i] > 0) {
      tongSoDuong++;
    }
  }
  opBaiHai.innerHTML = "Số dương đếm được là: " + tongSoDuong;
}

// bài 3
var opSoNhoNhat = getElm("opSoNhoNhat");
function timSoNhoNhat() {
  var small = Math.min.apply(Math, danhSachSoNguyen);
  opSoNhoNhat.innerHTML = "Số nhỏ nhất trong mảng là: " + small;
}

// bài 4
var opSoDuongLonNhat = getElm("opSoDuongLonNhat");
function timSoDuongNhoNhat() {
  var arrSoDuong = [];
  for (i = 0; i < danhSachSoNguyen.length; i++) {
    if (danhSachSoNguyen[i] >= 0) {
      arrSoDuong.push(danhSachSoNguyen[i]);
    }
  }
  for (i = 0; i < arrSoDuong.length; i++) {
    var soDuongNhoNhat = Math.min.apply(Math, arrSoDuong);
  }
  opSoDuongLonNhat.innerHTML =
    "Số dương nhỏ nhất trong mảng lầ: " + soDuongNhoNhat;
}

// bài 5
var opSoChan = getElm("opSoChan");
function timSoChanTrongMang() {
  var soChan = -1;
  for (i = 0; i <= danhSachSoNguyen.length; i++) {
    if (danhSachSoNguyen[i] % 2 == 0) {
      soChan = danhSachSoNguyen[i];
    }
  }
  opSoChan.innerHTML = "Kết quả là: " + soChan;
}

// Bài 6
var opDoiCho = getElm("opDoiCho");
function changePosition() {
  var viTriMot = getElm("viTriMot").value;
  var viTriHai = getElm("viTriHai").value;
  if (viTriHai == "" || viTriMot == "") {
    alert("Vui lòng nhập đủ vị trí");
    return;
  }
  var firstNumberToChange = danhSachSoNguyen[viTriMot - 1];
  var secondNumberToChange = danhSachSoNguyen[viTriHai - 1];

  danhSachSoNguyen.splice(viTriMot - 1, 1, [secondNumberToChange]);
  danhSachSoNguyen.splice(viTriHai - 1, 1, [firstNumberToChange]);
  opDoiCho.innerHTML = danhSachSoNguyen;
}

// bài 7
var opTangDan = getElm("opTangDan");
function DemTangDan() {
  danhSachSoNguyen.sort(function (a, b) {
    return a - b;
  });
  opTangDan.innerHTML = danhSachSoNguyen;
}

// bài 8
var opSoNguyenTo = getElm("opSoNguyenTo");
function timSoNguyenTo() {
  var soNguyenTo = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  var soNguyenToDau = [-1];
  for (i = 0; i <= danhSachSoNguyen.length; i++) {
    for (j = 0; j < soNguyenTo.length; j++) {
      if (danhSachSoNguyen[i] == soNguyenTo[j]) {
        soNguyenToDau.unshift(danhSachSoNguyen[i]);
      }
    }
  }
  if (soNguyenToDau.length > 2) {
    opSoNguyenTo.innerHTML =
      "Số đầu nguyên tố đầu tiên là: " + soNguyenToDau.slice(-2, -1);
  } else {
    opSoNguyenTo.innerHTML = soNguyenToDau;
  }
}

// bài 9
var opMangSoThuc = getElm("opMangSoThuc");
var opEveryNumber = getElm("opEveryNumber");
var danhSachSoThuc = [];
function nhanSoThuc() {
  var everyNumber = getElm("everyNumber").value;

  danhSachSoThuc.push(everyNumber);

  opMangSoThuc.innerHTML = everyNumber;
}
function timBaoNhieuSoNguyen() {
  var tongSoNguyenMot = 0;
  var tongSoNguyenHai = 0;
  var maxSoNguyen;

  for (i = 0; i < danhSachSoNguyen.length; i++) {
    tongSoNguyenMot = tongSoNguyenMot + 1;
  }

  for (i = 0; i < danhSachSoThuc.length; i++) {
    if (danhSachSoThuc[i] == parseInt(danhSachSoThuc[i])) {
      tongSoNguyenHai++;
    }
  }

  maxSoNguyen = tongSoNguyenHai + tongSoNguyenMot;
  opEveryNumber.innerHTML =
    "Tổng các số nguyên cả hai mảng số là: " + maxSoNguyen;
}

// bài 10
var opSoSanhAmDuong = getElm('opSoSanhAmDuong')
function demSoLuongAmDuong() {
  var soDuong = 0,
    soAm = 0,


  for (i = 0; i < danhSachSoNguyen.length; i++) {
    if (danhSachSoNguyen[i] > 0) {
      soDuong++
    }
    if (danhSachSoNguyen[i] < 0) {
      soAm++
    }
  }
  for (i = 0; i < danhSachSoNguyen.length; i++) {
    if (danhSachSoThuc[i] > 0) {
      soDuong++
    }
    if (danhSachSoThuc[i] < 0) {
      soAm++
    }
  }
  if (soAm < soDuong) {
    opSoSanhAmDuong.innerHTML = soDuong
  }
  if (soAm > soDuong) {
    opSoSanhAmDuong.innerHTML = soAm
  }
}
