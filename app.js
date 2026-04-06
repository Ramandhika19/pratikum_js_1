const btn = document.getElementById("btnHitung");
const outputBox = document.getElementById("hasil");

// Fungsi hitung total
const hitungTotal = () => {
  const nama = document.getElementById("namaBarang").value;
  const harga = Number(document.getElementById("hargaBarang").value);
  const jumlah = Number(document.getElementById("jumlahBeli").value);

  // Validasi input
  if (nama === "" || harga <= 0 || jumlah <= 0) {
    outputBox.innerHTML =
      "<span class='text-danger'>Mohon lengkapi data dengan benar!</span>";
    outputBox.className = "";
    return;
  }

  const subtotal = harga * jumlah;

  let diskon = 0;
  let subtotalAfterDiskon = subtotal;

  // Hitung diskon
  if (subtotal > 1000000) {
    diskon = subtotal * 0.05;
    subtotalAfterDiskon = subtotal - diskon;
  }

  const pajak = subtotalAfterDiskon * 0.11;
  const totalBayar = subtotalAfterDiskon + pajak;

  let html = `
    <div class="text-success">Perhitungan Berhasil:</div>
    <hr>
    Item: <strong>${nama}</strong> <br>
    Subtotal: Rp ${subtotal.toLocaleString("id-ID")} <br>
  `;

  if (diskon > 0) {
    html += `
      Diskon (5%): -Rp ${diskon.toLocaleString("id-ID")} <br>
      Subtotal setelah diskon: Rp ${subtotalAfterDiskon.toLocaleString("id-ID")} <br>
    `;
  }

  html += `
    Pajak (11%): Rp ${pajak.toLocaleString("id-ID")} <br>
    <hr>
    <strong>Total Bayar: Rp ${totalBayar.toLocaleString("id-ID")}</strong>
  `;

  outputBox.innerHTML = html;
  outputBox.className = diskon > 0 ? "output-with-discount" : "";

  console.log(`Transaksi ${nama} berhasil diproses.`);
};

const resetForm = () => {
  document.getElementById("namaBarang").value = "";
  document.getElementById("hargaBarang").value = "";
  document.getElementById("jumlahBeli").value = "";

  outputBox.innerHTML =
    "<p id='labelHasil'>Hasil perhitungan akan muncul di sini.</p>";
  outputBox.className = "";

  console.log("Form berhasil direset.");
};

btn.addEventListener("click", hitungTotal);
document.getElementById("btnReset").addEventListener("click", resetForm);