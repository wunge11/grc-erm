let judul = document.getElementById("judul");
let tombol = document.getElementById("tombol");
let daftarRisiko = JSON.parse(localStorage.getItem("daftarRisiko")) || [];
let idEdit = null;
let namaRisiko = document.getElementById("namaRisiko");
let likelihood = document.getElementById("likelihood");
let impact = document.getElementById("impact");
let batalEdit = document.getElementById("batalEdit");
let tambahRisiko = document.getElementById("tambahRisiko");
let hasilRisiko = document.getElementById("hasilRisiko");
let cariRisiko = document.getElementById("cariRisiko");
let filterLevel = document.getElementById("filterLevel");
let urutkanRisiko = document.getElementById("urutkanRisiko");
let rataRataSkor = document.getElementById("rataRataSkor");
let chartRisiko = document.getElementById("chartRisiko");
let totalRisiko = document.getElementById("totalRisiko");
let jumlahSangatTinggi = document.getElementById("jumlahSangatTinggi");
let jumlahTinggi = document.getElementById("jumlahTinggi");
let jumlahSedang = document.getElementById("jumlahSedang");
let jumlahRendah = document.getElementById("jumlahRendah");
let jumlahSangatRendah = document.getElementById("jumlahSangatRendah");
let persentaseSangatTinggi = document.getElementById("persentaseSangatTinggi");
let persentaseTinggi = document.getElementById("persentaseTinggi");
let persentaseSedang = document.getElementById("persentaseSedang");
let persentaseRendah = document.getElementById("persentaseRendah");
let persentaseSangatRendah = document.getElementById("persentaseSangatRendah");


batalEdit.addEventListener("click", function () {
    idEdit = null;

    namaRisiko.value = "";
    likelihood.value = "";
    impact.value = "";

    tambahRisiko.textContent = "Tambah Risiko";
    batalEdit.style.display = "none";
});

tombol.addEventListener("click", function () {
    tombol.textContent = "Makasii dah klik aku!";
    judul.textContent = "Risiko berhasil diproses!";
});

function tentukanLevelRisiko(skor) {
    if (skor >= 17) {
        return "Sangat Tinggi";
    } else if (skor >= 13) {
        return "Tinggi";
    } else if (skor >= 8) {
        return "Sedang";
    } else if (skor >= 4) {
        return "Rendah";
    } else {
        return "Sangat Rendah";
    }
}

function hapusRisiko(id) {
    let risiko = daftarRisiko.find(function (risiko) {
        return risiko.id === id;
    });

    if (!risiko) {
        return;
    }

    let index = daftarRisiko.findIndex(function (risiko) {
        return risiko.id === id;
    });

    let yakin = confirm(
        "Apakah kamu yakin ingin menghapus risiko " + risiko.nama + "?"
    );

    if (yakin) {
        daftarRisiko.splice(index, 1);

        localStorage.setItem("daftarRisiko", JSON.stringify(daftarRisiko));

        prosesFilter();
        updateDashboard();
        updateChart();
    }
}

function amankanTeks(teks) {
    return String(teks)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function editRisiko(id) {
    let risiko = daftarRisiko.find(function (risiko) {
        return risiko.id === id;
    });

    if (!risiko) {
        return;
    }

    idEdit = id;

    namaRisiko.value = risiko.nama;
    likelihood.value = risiko.likelihood;
    impact.value = risiko.impact;

    tambahRisiko.textContent = "Simpan Perubahan";
    batalEdit.style.display = "inline-block";
}

function tampilkanRisiko(dataRisiko = daftarRisiko) {
    let daftarHTML = "";

    dataRisiko.forEach(function (risiko) {
        daftarHTML += "<tr>" +
            "<td>" + amankanTeks(risiko.nama) + "</td>" +
            "<td>" + risiko.likelihood + "</td>" +
            "<td>" + risiko.impact + "</td>" +
            "<td>" + risiko.skor + "</td>" +
            "<td class='level-" + amankanTeks(risiko.level).toLowerCase().replaceAll(" ", "-") + "'>" +
            amankanTeks(risiko.level) + "</td>" +
            "<td>" +
            "<button onclick='editRisiko(" + risiko.id + ")'>Edit</button> " +
            "<button onclick='hapusRisiko(" + risiko.id + ")'>Hapus</button>" +
            "</td>" +
            "</tr>";
    });
    document.getElementById("daftarRisiko").innerHTML = daftarHTML;
}

function prosesFilter() {

    let kataKunci = cariRisiko.value.toLowerCase();
    let levelDipilih = filterLevel.value;
    let urutanDipilih = urutkanRisiko.value;
    let hasilFilter = daftarRisiko.filter(function (risiko) {
        let cocokNama = risiko.nama.toLowerCase().includes(kataKunci);
        let cocokLevel = levelDipilih === "Semua" || risiko.level === levelDipilih;

        return cocokNama && cocokLevel;
    });

    hasilFilter.sort(function (a, b) {
        if (urutanDipilih === "terbesar") {
            return b.skor - a.skor;
        } else {
            return a.skor - b.skor;
        }
    });
    tampilkanRisiko(hasilFilter);
}

cariRisiko.addEventListener("input", function () {
    prosesFilter();
});

filterLevel.addEventListener("change", function () {
    prosesFilter();
});

urutkanRisiko.addEventListener("change", function () {
    prosesFilter();
});

tambahRisiko.addEventListener("click", function () {

    if (
        namaRisiko.value.trim() === "" ||
        likelihood.value === "" ||
        impact.value === ""
    ) {
        alert("Semua data risiko harus diisi!");
        return;
    }

    let nilaiLikelihood = Number(likelihood.value);
    let nilaiImpact = Number(impact.value);

    if (isNaN(nilaiLikelihood) || isNaN(nilaiImpact)) {
        alert("Likelihood dan Impact harus berupa angka!");
        return;
    }

    if (
        !Number.isInteger(nilaiLikelihood) ||
        !Number.isInteger(nilaiImpact) ||
        nilaiLikelihood < 1 || nilaiLikelihood > 5 ||
        nilaiImpact < 1 || nilaiImpact > 5
    ) {
        alert("Likelihood dan Impact harus bernilai 1 sampai 5!");
        return;
    }

    const namaNormal = namaRisiko.value.trim().toLowerCase();

    const duplikat = daftarRisiko.some(function (risiko) {
        return (
            risiko.nama.trim().toLowerCase() === namaNormal &&
            risiko.likelihood === nilaiLikelihood &&
            risiko.impact === nilaiImpact &&
            risiko.id !== idEdit
        );
    });

    if (duplikat) {
        alert("Risiko dengan nama, likelihood, dan impact yang sama sudah ada!");
        return;
    }

    let skor = nilaiLikelihood * nilaiImpact;

    let risikoBaru = {
        id: idEdit === null ? Date.now() : idEdit,
        nama: namaRisiko.value.trim(),
        likelihood: nilaiLikelihood,
        impact: nilaiImpact,
        skor: skor,
        level: tentukanLevelRisiko(skor)
    };

    if (idEdit === null) {
        daftarRisiko.push(risikoBaru);
    } else {
        let index = daftarRisiko.findIndex(function (risiko) {
            return risiko.id === idEdit;
        });
        daftarRisiko[index] = risikoBaru;

        idEdit = null;
        tambahRisiko.textContent = "Tambah Risiko";
        batalEdit.style.display = "none";
    }

    localStorage.setItem("daftarRisiko", JSON.stringify(daftarRisiko));

    prosesFilter();
    updateDashboard();
    updateChart();

    hasilRisiko.textContent = "Risiko: " + namaRisiko.value +
        " | Skor Risiko: " + skor +
        " | Level Risiko: " + tentukanLevelRisiko(skor);

    namaRisiko.value = "";
    likelihood.value = "";
    impact.value = "";

});

function hitungJumlahLevel(level) {
    return daftarRisiko.filter(function (risiko) {
        return risiko.level === level;
    }).length;
}

function hitungPersentaseLevel(level) {
    if (daftarRisiko.length === 0) {
        return 0;
    }
    return (hitungJumlahLevel(level) / daftarRisiko.length) * 100;
}

function ambilStatistikRisiko() {
    return {
        sangatTinggi: hitungJumlahLevel("Sangat Tinggi"),
        tinggi: hitungJumlahLevel("Tinggi"),
        sedang: hitungJumlahLevel("Sedang"),
        rendah: hitungJumlahLevel("Rendah"),
        sangatRendah: hitungJumlahLevel("Sangat Rendah"),

        persentaseSangatTinggi: hitungPersentaseLevel("Sangat Tinggi"),
        persentaseTinggi: hitungPersentaseLevel("Tinggi"),
        persentaseSedang: hitungPersentaseLevel("Sedang"),
        persentaseRendah: hitungPersentaseLevel("Rendah"),
        persentaseSangatRendah: hitungPersentaseLevel("Sangat Rendah")
    };
}

function updateDashboard() {
    let statistik = ambilStatistikRisiko();

    persentaseSangatTinggi.textContent =
        statistik.persentaseSangatTinggi.toFixed(1) + "%";

    persentaseTinggi.textContent =
        statistik.persentaseTinggi.toFixed(1) + "%";

    persentaseSedang.textContent =
        statistik.persentaseSedang.toFixed(1) + "%";

    persentaseRendah.textContent =
        statistik.persentaseRendah.toFixed(1) + "%";

    persentaseSangatRendah.textContent =
        statistik.persentaseSangatRendah.toFixed(1) + "%";

    totalRisiko.textContent = daftarRisiko.length;

    jumlahSangatTinggi.textContent = statistik.sangatTinggi;
    jumlahTinggi.textContent = statistik.tinggi;
    jumlahSedang.textContent = statistik.sedang;
    jumlahRendah.textContent = statistik.rendah;
    jumlahSangatRendah.textContent = statistik.sangatRendah;

    let totalSkor = daftarRisiko.reduce(function (total, risiko) {
        return total + risiko.skor;
    }, 0);

    let rataRata = daftarRisiko.length > 0
        ? totalSkor / daftarRisiko.length
        : 0;

    rataRataSkor.textContent = rataRata.toFixed(1);
}

let grafikRisiko = new Chart(chartRisiko, {
    type: "bar",
    data: {
        labels: [
            "Sangat Tinggi",
            "Tinggi",
            "Sedang",
            "Rendah",
            "Sangat Rendah"
        ],
        datasets: [{
            label: "Jumlah Risiko",
            data: [
                hitungJumlahLevel("Sangat Tinggi"),
                hitungJumlahLevel("Tinggi"),
                hitungJumlahLevel("Sedang"),
                hitungJumlahLevel("Rendah"),
                hitungJumlahLevel("Sangat Rendah")
            ]
        }]
    }
});

prosesFilter();
updateDashboard();
updateChart();

function updateChart() {
    let statistik = ambilStatistikRisiko();

    grafikRisiko.data.datasets[0].data = [
        statistik.sangatTinggi,
        statistik.tinggi,
        statistik.sedang,
        statistik.rendah,
        statistik.sangatRendah
    ];

    grafikRisiko.update();
}

function eksporCSV() {
    if (daftarRisiko.length === 0) {
        alert("Belum ada data risiko untuk diekspor!");
        return;
    }

    const kolom = [
        "Nama Risiko",
        "Likelihood",
        "Impact",
        "Skor",
        "Level Risiko"
    ];

    const baris = daftarRisiko.map(risiko => [
        risiko.nama,
        risiko.likelihood,
        risiko.impact,
        risiko.skor,
        risiko.level
    ]);

    const isiCSV = [kolom, ...baris]
        .map(baris =>
            baris.map(nilai =>
                `"${String(nilai ?? "").replace(/"/g, '""')}"`
            ).join(";")
        )
        .join("\r\n");

    const blob = new Blob(
        ["\uFEFF" + isiCSV],
        { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "laporan-risiko-grc.csv";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
}

function imporCSV() {
    const fileInput = document.getElementById("fileCSV");
    const file = fileInput.files[0];

    if (!file) {
        alert("Pilih file CSV terlebih dahulu!");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const teks = event.target.result.replace(/^\uFEFF/, "");
        const baris = teks.split(/\r?\n/);

        // Membaca kolom CSV, termasuk teks yang memakai tanda kutip.
        function bacaBarisCSV(teksBaris) {
            const hasil = [];
            let nilai = "";
            let dalamKutipan = false;

            for (let i = 0; i < teksBaris.length; i++) {
                const karakter = teksBaris[i];

                if (karakter === '"') {
                    if (
                        dalamKutipan &&
                        teksBaris[i + 1] === '"'
                    ) {
                        nilai += '"';
                        i++;
                    } else {
                        dalamKutipan = !dalamKutipan;
                    }

                } else if (
                    (karakter === "," || karakter === ";") &&
                    !dalamKutipan
                ) {
                    hasil.push(nilai);
                    nilai = "";
                } else {
                    nilai += karakter;
                }
            }

            hasil.push(nilai);
            return hasil;
        }

        if (baris.length < 2) {
            alert("File CSV tidak memiliki data risiko!");
            return;
        }

        const dataBaru = [];
        let jumlahDuplikat = 0;

        for (let i = 1; i < baris.length; i++) {
            if (baris[i].trim() === "") continue;

            const nilai = bacaBarisCSV(baris[i]);

            if (nilai.length < 5) {
                alert(
                    `Baris ${i + 1} hanya terbaca ${nilai.length} kolom: ` +
                    JSON.stringify(nilai)
                );
                return;
            }

            const nama = nilai[0].trim();
            const l = Number(nilai[1]);
            const im = Number(nilai[2]);

            if (
                nama === "" ||
                nilai[1].trim() === "" ||
                nilai[2].trim() === "" ||
                !Number.isInteger(l) ||
                !Number.isInteger(im) ||
                l < 1 || l > 5 ||
                im < 1 || im > 5
            ) {
                alert(`Data tidak valid pada baris ${i + 1}.`);
                return;
            }


            const skor = l * im;

            // Cek apakah risiko sudah ada, tanpa membedakan huruf besar-kecil.
            const namaNormal = nama.toLowerCase();

            const sudahAda = daftarRisiko.some(r =>
                r.nama.trim().toLowerCase() === namaNormal &&
                r.likelihood === l &&
                r.impact === im
            );

            const duplikatDiImpor = dataBaru.some(r =>
                r.nama.trim().toLowerCase() === namaNormal &&
                r.likelihood === l &&
                r.impact === im
            );

            if (sudahAda || duplikatDiImpor) {
                jumlahDuplikat++;
                continue;
            }

            dataBaru.push({
                nama: nama,
                likelihood: l,
                impact: im,
                skor: skor,
                level: tentukanLevelRisiko(skor)
            });
        }

        if (dataBaru.length === 0) {
            alert("Tidak ada data risiko yang bisa diimpor!");
            return;
        }

        // Buat ID yang tidak bentrok dengan data yang sudah ada.
        let idBaru = Date.now();

        dataBaru.forEach(function (risiko) {
            while (
                daftarRisiko.some(r => r.id === idBaru) ||
                dataBaru.some(r => r !== risiko && r.id === idBaru)
            ) {
                idBaru++;
            }

            risiko.id = idBaru++;
        });

        daftarRisiko.push(...dataBaru);

        localStorage.setItem(
            "daftarRisiko",
            JSON.stringify(daftarRisiko)
        );

        prosesFilter();
        updateDashboard();
        updateChart();

        alert(
            `${dataBaru.length} risiko berhasil diimpor.\n` +
            `${jumlahDuplikat} data duplikat dilewati.`
        );
        fileInput.value = "";
    };

    reader.readAsText(file, "UTF-8");
}


window.addEventListener("storage", function (event) {
    // Jalankan hanya jika data risiko berubah di tab lain.
    if (event.key !== "daftarRisiko") {
        return;
    }

    // Ambil ulang data terbaru dari localStorage.
    daftarRisiko = event.newValue
        ? JSON.parse(event.newValue)
        : [];

    // Perbarui seluruh tampilan dashboard.
    prosesFilter();
    updateDashboard();
    updateChart();
});
