
document.addEventListener("DOMContentLoaded", function () {
    const tabelRisiko = document.getElementById("daftarRisiko");
    const cariRisiko = document.getElementById("cariRisiko");
    const filterLevel = document.getElementById("filterLevel");
    const urutkanRisiko = document.getElementById("urutkanRisiko");

    const hasilRisiko = document.getElementById("hasilRisiko");
    const fileCSV = document.getElementById("fileCSV");

    // Ambil data yang sama dengan halaman Tambah Risiko.
    function ambilDaftarRisiko() {
        return JSON.parse(localStorage.getItem("daftarRisiko")) || [];
    }

    function amankanTeks(teks) {
        return String(teks)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function tampilkanRisiko() {
        const daftarRisiko = ambilDaftarRisiko();
        const kataKunci = cariRisiko.value.trim().toLowerCase();
        const levelDipilih = filterLevel.value;
        const urutan = urutkanRisiko.value;

        const hasilFilter = daftarRisiko.filter(function (risiko) {
            const cocokNama = String(risiko.nama)
                .toLowerCase()
                .includes(kataKunci);

            const cocokLevel =
                levelDipilih === "Semua" ||
                risiko.level === levelDipilih;

            return cocokNama && cocokLevel;
        });

        hasilFilter.sort(function (a, b) {
            return urutan === "asc"
                ? a.skor - b.skor
                : b.skor - a.skor;
        });

        if (hasilFilter.length === 0) {
            tabelRisiko.innerHTML =
                '<tr><td colspan="7">Belum ada risiko yang cocok.</td></tr>';
            return;
        }

        tabelRisiko.innerHTML = hasilFilter.map(function (risiko, index) {
            const kelasLevel = String(risiko.level)
                .toLowerCase()
                .replace(/\s+/g, "-");

            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${amankanTeks(risiko.nama)}</td>
                    <td>${Number(risiko.likelihood)}</td>
                    <td>${Number(risiko.impact)}</td>
                    <td>${Number(risiko.skor)}</td>
                    <td class="level-${amankanTeks(kelasLevel)}">
                        ${amankanTeks(risiko.level)}
                    </td>
                    <td>
                        <button type="button" data-aksi="edit" data-id="${Number(risiko.id)}">
                            Edit
                        </button>
                        <button type="button" data-aksi="hapus" data-id="${Number(risiko.id)}">
                            Hapus
                        </button>
                    </td>
                </tr>
            `;
        }).join("");
    }

    cariRisiko.addEventListener("input", tampilkanRisiko);
    filterLevel.addEventListener("change", tampilkanRisiko);
    urutkanRisiko.addEventListener("change", tampilkanRisiko);

    // Aksi tombol pada tabel.
    tabelRisiko.addEventListener("click", function (event) {
        const tombol = event.target.closest("button[data-aksi]");

        if (!tombol) return;

        const id = Number(tombol.dataset.id);
        const aksi = tombol.dataset.aksi;
        const daftarRisiko = ambilDaftarRisiko();

        const risiko = daftarRisiko.find(function (item) {
            return item.id === id;
        });

        if (!risiko) {
            hasilRisiko.textContent = "Data risiko tidak ditemukan.";
            tampilkanRisiko();
            return;
        }

        if (aksi === "edit") {
            localStorage.setItem("editRisikoId", String(id));
            window.location.href = "tambah-risiko.html";
            return;
        }

        if (aksi === "hapus") {
            const yakin = confirm(
                "Yakin ingin menghapus risiko " + risiko.nama + "?"
            );

            if (!yakin) return;

            const dataTersisa = daftarRisiko.filter(function (item) {
                return item.id !== id;
            });

            localStorage.setItem(
                "daftarRisiko",
                JSON.stringify(dataTersisa)
            );

            hasilRisiko.textContent = "Risiko berhasil dihapus.";
            tampilkanRisiko();
        }
    });

    tampilkanRisiko();
});