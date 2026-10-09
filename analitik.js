
document.addEventListener("DOMContentLoaded", function () {
    const chartRisiko = document.getElementById("chartRisiko");

    const persentaseSangatTinggi = document.getElementById("persentaseSangatTinggi");
    const persentaseTinggi = document.getElementById("persentaseTinggi");
    const persentaseSedang = document.getElementById("persentaseSedang");
    const persentaseRendah = document.getElementById("persentaseRendah");
    const persentaseSangatRendah = document.getElementById("persentaseSangatRendah");

    const daftarRisiko =
        JSON.parse(localStorage.getItem("daftarRisiko")) || [];

    function hitungJumlahLevel(level) {
        return daftarRisiko.filter(function (risiko) {
            return risiko.level === level;
        }).length;
    }

    function hitungPersentase(level) {
        if (daftarRisiko.length === 0) {
            return 0;
        }

        return (hitungJumlahLevel(level) / daftarRisiko.length) * 100;
    }

    const levelRisiko = [
        "Sangat Tinggi",
        "Tinggi",
        "Sedang",
        "Rendah",
        "Sangat Rendah"
    ];

    const jumlahRisiko = levelRisiko.map(function (level) {
        return hitungJumlahLevel(level);
    });

    const grafikRisiko = new Chart(chartRisiko, {
        type: "bar",
        data: {
            labels: levelRisiko,
            datasets: [{
                label: "Jumlah Risiko",
                data: jumlahRisiko,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });

    persentaseSangatTinggi.textContent =
        hitungPersentase("Sangat Tinggi").toFixed(1) + "%";

    persentaseTinggi.textContent =
        hitungPersentase("Tinggi").toFixed(1) + "%";

    persentaseSedang.textContent =
        hitungPersentase("Sedang").toFixed(1) + "%";

    persentaseRendah.textContent =
        hitungPersentase("Rendah").toFixed(1) + "%";

    persentaseSangatRendah.textContent =
        hitungPersentase("Sangat Rendah").toFixed(1) + "%";
});