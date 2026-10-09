
document.addEventListener("DOMContentLoaded", function () {
    const formRisiko = document.getElementById("formRisiko");
    const namaRisiko = document.getElementById("namaRisiko");
    const likelihood = document.getElementById("likelihood");
    const impact = document.getElementById("impact");
    const tambahRisiko = document.getElementById("tambahRisiko");
    const batalEdit = document.getElementById("batalEdit");
    const hasilRisiko = document.getElementById("hasilRisiko");

    // ID ini disimpan oleh halaman Daftar Risiko saat pengguna memilih Edit.
    const kunciEdit = "editRisikoId";
    let idEdit = localStorage.getItem(kunciEdit);

    if (idEdit !== null) {
        idEdit = Number(idEdit);

        const risiko = daftarRisiko.find(function (item) {
            return item.id === idEdit;
        });

        if (risiko) {
            namaRisiko.value = risiko.nama;
            likelihood.value = risiko.likelihood;
            impact.value = risiko.impact;

            tambahRisiko.textContent = "Simpan Perubahan";
            batalEdit.hidden = false;
        } else {
            localStorage.removeItem(kunciEdit);
            idEdit = null;
        }
    }

    // Simpan risiko baru atau perubahan risiko.
    formRisiko.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = namaRisiko.value.trim();
        const nilaiLikelihood = Number(likelihood.value);
        const nilaiImpact = Number(impact.value);

        if (
            nama === "" ||
            likelihood.value === "" ||
            impact.value === ""
        ) {
            hasilRisiko.textContent = "Semua data risiko harus diisi.";
            return;
        }

        if (
            !Number.isInteger(nilaiLikelihood) ||
            !Number.isInteger(nilaiImpact) ||
            nilaiLikelihood < 1 || nilaiLikelihood > 5 ||
            nilaiImpact < 1 || nilaiImpact > 5
        ) {
            hasilRisiko.textContent =
                "Likelihood dan Impact harus berupa bilangan bulat 1–5.";
            return;
        }

        const namaNormal = nama.toLowerCase();

        const duplikat = daftarRisiko.some(function (risiko) {
            return (
                risiko.nama.trim().toLowerCase() === namaNormal &&
                risiko.likelihood === nilaiLikelihood &&
                risiko.impact === nilaiImpact &&
                risiko.id !== idEdit
            );
        });

        if (duplikat) {
            hasilRisiko.textContent =
                "Risiko dengan nama, likelihood, dan impact yang sama sudah ada.";
            return;
        }

        const skor = nilaiLikelihood * nilaiImpact;

        const dataRisiko = {
            id: idEdit === null ? Date.now() : idEdit,
            nama: nama,
            likelihood: nilaiLikelihood,
            impact: nilaiImpact,
            skor: skor,
            level: tentukanLevelRisiko(skor)
        };

        if (idEdit === null) {
            daftarRisiko.push(dataRisiko);
        } else {
            const index = daftarRisiko.findIndex(function (risiko) {
                return risiko.id === idEdit;
            });

            if (index === -1) {
                hasilRisiko.textContent =
                    "Risiko yang akan diedit tidak ditemukan.";
                return;
            }

            daftarRisiko[index] = dataRisiko;
        }

        simpanDaftarRisiko();
        localStorage.removeItem(kunciEdit);

        idEdit = null;
        formRisiko.reset();
        tambahRisiko.textContent = "Simpan Risiko";
        batalEdit.hidden = true;

        hasilRisiko.textContent =
            "Risiko " + dataRisiko.nama + " berhasil disimpan. Skor: " + skor +
            " | Level: " + tentukanLevelRisiko(skor);
    });

    // Batalkan proses edit dan kosongkan form.
    batalEdit.addEventListener("click", function () {
        localStorage.removeItem(kunciEdit);

        idEdit = null;
        formRisiko.reset();
        tambahRisiko.textContent = "Simpan Risiko";
        batalEdit.hidden = true;

        hasilRisiko.textContent = "Perubahan dibatalkan.";
    });
});