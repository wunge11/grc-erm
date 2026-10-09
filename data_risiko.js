// Ambil data risiko yang tersimpan.
let daftarRisiko =
    JSON.parse(localStorage.getItem("daftarRisiko")) || [];

// Simpan data risiko ke localStorage.
function simpanDaftarRisiko() {
    localStorage.setItem(
        "daftarRisiko",
        JSON.stringify(daftarRisiko)
    );
}

// Tentukan level berdasarkan skor risiko.
function tentukanLevelRisiko(skor) {
    if (skor >= 17) {
        return "Sangat Tinggi";
    } else if (skor >= 13) {
        return "Tinggi";
    } else if (skor >= 8) {
        return "Sedang";
    } else if (skor >= 4) {
        return "Rendah";
    }

    return "Sangat Rendah";
}

// Amankan teks sebelum dimasukkan ke HTML.
function amankanTeks(teks) {
    return String(teks)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Hitung jumlah risiko pada level tertentu.
function hitungJumlahLevel(level) {
    return daftarRisiko.filter(function (risiko) {
        return risiko.level === level;
    }).length;
}

// Hitung persentase risiko pada level tertentu.
function hitungPersentaseLevel(level) {
    if (daftarRisiko.length === 0) {
        return 0;
    }

    return (
        hitungJumlahLevel(level) / daftarRisiko.length
    ) * 100;
}

// Kumpulkan statistik risiko untuk dashboard dan analitik.
function ambilStatistikRisiko() {
    return {
        total: daftarRisiko.length,

        sangatTinggi: hitungJumlahLevel("Sangat Tinggi"),
        tinggi: hitungJumlahLevel("Tinggi"),
        sedang: hitungJumlahLevel("Sedang"),
        rendah: hitungJumlahLevel("Rendah"),
        sangatRendah: hitungJumlahLevel("Sangat Rendah"),

        persentaseSangatTinggi:
            hitungPersentaseLevel("Sangat Tinggi"),

        persentaseTinggi:
            hitungPersentaseLevel("Tinggi"),

        persentaseSedang:
            hitungPersentaseLevel("Sedang"),

        persentaseRendah:
            hitungPersentaseLevel("Rendah"),

        persentaseSangatRendah:
            hitungPersentaseLevel("Sangat Rendah"),

        rataRataSkor: daftarRisiko.length > 0
            ? daftarRisiko.reduce(function (total, risiko) {
                return total + risiko.skor;
            }, 0) / daftarRisiko.length
            : 0
    };
}