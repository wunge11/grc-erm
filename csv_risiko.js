
document.addEventListener("DOMContentLoaded", function () {
    const fileCSV = document.getElementById("fileCSV");
    const hasilRisiko = document.getElementById("hasilRisiko");

    function ambilDataRisiko() {
        return JSON.parse(localStorage.getItem("daftarRisiko")) || [];
    }

    // Mengekspor data risiko menjadi file CSV.
    window.eksporCSV = function () {
        const daftarRisiko = ambilDataRisiko();

        if (daftarRisiko.length === 0) {
            hasilRisiko.textContent = "Belum ada data risiko untuk diekspor.";
            return;
        }

        const kolom = [
            "Nama Risiko",
            "Likelihood",
            "Impact",
            "Skor",
            "Level Risiko"
        ];

        const barisData = daftarRisiko.map(function (risiko) {
            return [
                risiko.nama,
                risiko.likelihood,
                risiko.impact,
                risiko.skor,
                risiko.level
            ];
        });

        function formatCSV(nilai) {
            return '"' + String(nilai ?? "").replace(/"/g, '""') + '"';
        }

        const isiCSV = [kolom, ...barisData]
            .map(function (baris) {
                return baris.map(formatCSV).join(";");
            })
            .join("\r\n");

        const blob = new Blob(["\uFEFF" + isiCSV], {
            type: "text/csv;charset=utf-8;"
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "laporan-risiko-grc.csv";
        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);
        hasilRisiko.textContent = "File CSV berhasil dibuat.";
    };

    // Mengimpor data risiko dari file CSV.
    window.imporCSV = function () {
        const file = fileCSV.files[0];

        if (!file) {
            hasilRisiko.textContent = "Pilih file CSV terlebih dahulu.";
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {
            try {
                const teks = event.target.result.replace(/^\uFEFF/, "");
                const baris = teks.split(/\r?\n/).filter(function (item) {
                    return item.trim() !== "";
                });

                if (baris.length < 2) {
                    throw new Error("File CSV tidak memiliki data.");
                }

                function bacaBarisCSV(teksBaris) {
                    const hasil = [];
                    let nilai = "";
                    let dalamKutipan = false;

                    for (let i = 0; i < teksBaris.length; i++) {
                        const karakter = teksBaris[i];

                        if (karakter === '"') {
                            if (dalamKutipan && teksBaris[i + 1] === '"') {
                                nilai += '"';
                                i++;
                            } else {
                                dalamKutipan = !dalamKutipan;
                            }
                        } else if (
                            (karakter === ";" || karakter === ",") &&
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

                const dataLama = ambilDataRisiko();
                const dataBaru = [];
                let jumlahDuplikat = 0;

                for (let i = 1; i < baris.length; i++) {
                    const nilai = bacaBarisCSV(baris[i]);

                    if (nilai.length < 5) {
                        throw new Error(
                            "Jumlah kolom tidak valid pada baris " + (i + 1) + "."
                        );
                    }

                    const nama = nilai[0].trim();
                    const likelihood = Number(nilai[1]);
                    const impact = Number(nilai[2]);

                    if (
                        nama === "" ||
                        nilai[1].trim() === "" ||
                        nilai[2].trim() === "" ||
                        !Number.isInteger(likelihood) ||
                        !Number.isInteger(impact) ||
                        likelihood < 1 || likelihood > 5 ||
                        impact < 1 || impact > 5
                    ) {
                        throw new Error(
                            "Data tidak valid pada baris " + (i + 1) +
                            ". Likelihood dan Impact harus bilangan bulat 1–5."
                        );
                    }

                    const namaNormal = nama.toLowerCase();

                    const duplikat = [...dataLama, ...dataBaru].some(
                        function (risiko) {
                            return risiko.nama.trim().toLowerCase() === namaNormal &&
                                risiko.likelihood === likelihood &&
                                risiko.impact === impact;
                        }
                    );

                    if (duplikat) {
                        jumlahDuplikat++;
                        continue;
                    }

                    const skor = likelihood * impact;
                    let level;

                    if (skor >= 17) level = "Sangat Tinggi";
                    else if (skor >= 13) level = "Tinggi";
                    else if (skor >= 8) level = "Sedang";
                    else if (skor >= 4) level = "Rendah";
                    else level = "Sangat Rendah";

                    dataBaru.push({
                        id: Date.now() + i,
                        nama: nama,
                        likelihood: likelihood,
                        impact: impact,
                        skor: skor,
                        level: level
                    });
                }

                if (dataBaru.length === 0) {
                    hasilRisiko.textContent =
                        "Tidak ada data baru untuk diimpor. Duplikat dilewati: " +
                        jumlahDuplikat + ".";
                    return;
                }

                // Pastikan ID baru tidak sama dengan ID yang sudah ada.
                let idBaru = Date.now();

                dataBaru.forEach(function (risiko) {
                    while ([...dataLama, ...dataBaru].some(function (item) {
                        return item !== risiko && item.id === idBaru;
                    })) {
                        idBaru++;
                    }

                    risiko.id = idBaru++;
                });

                localStorage.setItem(
                    "daftarRisiko",
                    JSON.stringify([...dataLama, ...dataBaru])
                );

                hasilRisiko.textContent =
                    dataBaru.length + " risiko berhasil diimpor. " +
                    jumlahDuplikat + " duplikat dilewati. " +
                    "Buka ulang halaman daftar untuk melihat data terbaru.";

                fileCSV.value = "";
            } catch (error) {
                hasilRisiko.textContent = "Gagal mengimpor CSV: " + error.message;
            }
        };

        reader.onerror = function () {
            hasilRisiko.textContent = "File CSV gagal dibaca.";
        };

        reader.readAsText(file, "UTF-8");
    };
});