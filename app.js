// let nama = "Wunge";
// let umur = 23;
// let jabatan = "Programmer";
// let statusAktif = true;
// let kota = "Yogyakarta";
// let skorRisiko = 15;
// let departemen = "GRC";
// let levelRisiko = "Rendah";
// let memilikiAkses = false;

// console.log("Nama:", nama);
// console.log("Umur:", umur);
// console.log("Jabatan:", jabatan);
// console.log("Status Aktif:", statusAktif);
// console.log("Kota:", kota);
// console.log("Skor Risiko:", skorRisiko);
// console.log("Departemen:", departemen);
// console.log("Level Risiko:", levelRisiko);
// console.log("Punya Akses:", memilikiAkses);

// let likelihood = 3;
// let impact = 1;

// let skorRisiko = likelihood * impact;

// console.log("Likelihood:", likelihood);
// console.log("Impact:", impact);
// console.log("Skor Risiko:", skorRisiko);

// if (skorRisiko >= 17) {
//     console.log("Level Risiko: Sangat Tinggi");
// } else if (skorRisiko >= 13) {
//     console.log("Level Risiko: Tinggi");
// } else if (skorRisiko >= 8) {
//     console.log("Level Risiko: Sedang");
// } else if (skorRisiko >= 4) {
//     console.log("Level Risiko: Rendah");
// } else {
//     console.log("Level Risiko: Sangat Rendah");
// }

// let skor = 10;

// console.log(skor === 10);
// console.log(skor === "10");
// console.log(skor == "10");

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }

// let skorRisiko = [5, 12, 20, 7, 15];

// for (let i = 0; i < skorRisiko.length; i++) {
//     console.log(skorRisiko[i]);
// }

// let skorRisiko = [5, 12, 20, 7, 15];

// for (let i = 0; i < skorRisiko.length; i++) {
//     let skor = skorRisiko[i];

//     if (skor >= 17) {
//         console.log("Skor:", skor, "- Sangat Tinggi");
//     } else if (skor >= 13) {
//         console.log("Skor:", skor, "- Tinggi");
//     } else if (skor >= 8) {
//         console.log("Skor:", skor, "- Sedang");
//     } else if (skor >= 4) {
//         console.log("Skor:", skor, "- Rendah");
//     } else {
//         console.log("Skor:", skor, "- Sangat Rendah");
//     }
// }

// function sapa() {
//     console.log("Halo, Wunge!");
// }

// sapa();

// function sapa(nama) {
//     console.log("Halo,", nama);
// }
// sapa("Wunge");
// sapa("Ony");
// sapa("Sari");

// function hitungSkor(likelihood, impact) {
//     return likelihood * impact;
// }

// function tentukanLevelRisiko(skor) {
//     if (skor >= 17) {
//         return "Sangat Tinggi";
//     } else if (skor >= 13) {
//         return "Tinggi";
//     } else if (skor >= 8) {
//         return "Sedang";
//     } else if (skor >= 4) {
//         return "Rendah";
//     } else {
//         return "Sangat Rendah";
//     }
// }

// let likelihood = 5;
// let impact = 2;

// let skor = hitungSkor(likelihood, impact);
// let level = tentukanLevelRisiko(skor);

// console.log("Likelihood:", likelihood);
// console.log("Impact:", impact);
// console.log("Skor Risiko:", skor);
// console.log("Level Risiko:", level);

// let risiko = {
//     nama: "Phishing",
//     likelihood: 4,
//     impact: 5,
//     status: "Open"
// };
// console.log(risiko.nama);
// console.log(risiko.likelihood);
// console.log(risiko.impact);
// console.log(risiko.status);

function hitungSkor(risiko) {
    return risiko.likelihood * risiko.impact;
}

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

let risiko = {
    nama: "Kebocoran Data",
    likelihood: 3,
    impact: 2,
    status: "Open"
};

let skor = hitungSkor(risiko);
let level = tentukanLevelRisiko(skor);


console.log("Nama Risiko:", risiko.nama);
console.log("Likelihood:", risiko.likelihood);
console.log("Impact:", risiko.impact);
console.log("Skor Risiko:", skor);
console.log("Level Risiko:", level);
