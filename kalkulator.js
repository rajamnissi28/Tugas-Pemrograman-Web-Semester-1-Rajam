// Mengambil Elemen Dari HTML
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let output = document.getElementById("output");

// Fungsi penjumlahan
function tambah() {
    let bilangan1 = Number(input1.value);
    let bilangan2 = Number(input2.value);

    output.value = bilangan1 + bilangan2;
}

// Fungsi Pengurangan
function kurang() {
    let bilangan1 = Number(input1.value);
    let bilangan2 = Number(input2.value);

    output.value = bilangan1 - bilangan2;
}

// Fungsi Perkalian
function kali() {
    let bilangan1 = Number(input1.value);
    let bilangan2 = Number(input2.value);

    output.value = bilangan1 * bilangan2;
}

// Fungsi Pembagian
function bagi() {
    let bilangan1 = Number(input1.value);
    let bilangan2 = Number(input2.value);

    if (bilangan2 === 0) {
        output.value = "Tidak bisa dibagi 0";
    } else {
        output.value = bilangan1 / bilangan2;
    }
}