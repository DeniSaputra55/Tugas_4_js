//fungsi operator
function tambah() {
    var angka = parseFloat(document.getElementById("angka").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    
    //menampilkan popup jika salah satu form tidak terisi
    if (isNaN(angka) || isNaN(angka2)) {
      alert("Mohon masukkan angka pada kedua input.");
      return;
    }
  
    document.getElementById("result").value = angka + angka2;
  }
  
  function kurang() {
    var angka = parseFloat(document.getElementById("angka").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
  
    if (isNaN(angka) || isNaN(angka2)) {
      alert("Mohon masukkan angka pada kedua input.");
      return;
    }
  
    document.getElementById("result").value = angka - angka2;
  }
  
  function bagi() {
    var angka = parseFloat(document.getElementById("angka").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
  
    if (isNaN(angka) || isNaN(angka2)) {
      alert("Mohon masukkan angka pada kedua input.");
      return;
    }
  
    if (angka2 === 0) {
      alert("Tidak dapat membagi dengan 0.");
      return;
    }
  
    document.getElementById("result").value = angka / angka2;
  }
  
  function kali() {
    var angka = parseFloat(document.getElementById("angka").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
  
    if (isNaN(angka) || isNaN(angka2)) {
      alert("Mohon masukkan angka pada kedua input.");
      return;
    }
  
    document.getElementById("result").value = angka * angka2;
  }
  
  function pangkat() {
    var angka = parseFloat(document.getElementById("angka").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
  
    if (isNaN(angka) || isNaN(angka2)) {
      alert("Mohon masukkan angka pada kedua input.");
      return;
    }
  
    document.getElementById("result").value = Math.pow(angka, angka2);
  }
  
  function hapus() {
    document.getElementById("angka").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("result").value = "";
  }
  