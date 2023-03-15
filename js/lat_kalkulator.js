function hitung() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;
    var operasi = document.getElementById("operasi").value;
    var hasil = document.getElementById("hasil");

    if (angka1 == "" || angka2 == "") {
        alert("Mohon isi semua angka terlebih dahulu!");
    } else {
        switch (operasi) {
            case "tambah":
                hasil.value = parseFloat(angka1) + parseFloat(angka2);
                break;
            case "kurang":
                hasil.value = parseFloat(angka1) - parseFloat(angka2);
                break;
            case "kali":
                hasil.value = parseFloat(angka1) * parseFloat(angka2);
                break;
            case "bagi":
                if (angka2 == 0) {
                    alert("Tidak bisa melakukan pembagian dengan angka 0!");
                    hasil.value = "";
                } else {
                    hasil.value = parseFloat(angka1) / parseFloat(angka2);
                }
                break;
            case "pangkat":
                hasil.value = Math.pow(parseFloat(angka1), parseFloat(angka2));
                break;
            default:
                alert("Operasi yang dipilih tidak valid!");
                hasil.value = "";
                break;
        }
    }
    
}