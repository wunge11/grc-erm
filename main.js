console.log("hi ciyoo")

// let statistikRisiko = {
//     sangatTinggi: hitungJumlahLevel("Sangat Tinggi"),
//     tinggi: hitungJumlahLevel("Tinggi"),
//     sedang: hitungJumlahLevel("Sedang"),
//     rendah: hitungJumlahLevel("Rendah"),
//     sangatRendah: hitungJumlahLevel("Sangat Rendah")
// };
// console.log(statistikRisiko);

// let totalRisiko = document.getElementById("totalRisiko");
// totalRisiko.textContent = daftarRisiko.length;

// let jumlahSangatTinggi = document.getElementById("jumlahSangatTinggi");
// jumlahSangatTinggi.textContent = hitungJumlahLevel("Sangat Tinggi");

// let jumlahTinggi = document.getElementById("jumlahTinggi");
// jumlahTinggi.textContent = hitungJumlahLevel("Tinggi");

// let jumlahSedang = document.getElementById("jumlahSedang");
// jumlahSedang.textContent = hitungJumlahLevel("Sedang");

// let jumlahRendah = document.getElementById("jumlahRendah");
// jumlahRendah.textContent = hitungJumlahLevel("Rendah");

// let jumlahSangatRendah = document.getElementById("jumlahSangatRendah");
// jumlahSangatRendah.textContent = hitungJumlahLevel("Sangat Rendah");

// localStorage.setItem("test", "Halo Wunge");

// let data = [
//     { nama: "Phishing", skor: 15 },
//     { nama: "DDoS", skor: 20 }
// ];

// localStorage.setItem("dataRisiko", JSON.stringify(data));
// let dataTersimpan = JSON.parse(localStorage.getItem("dataRisiko"));
// console.log(dataTersimpan);
// let data = JSON.parse(localStorage.getItem("daftarRisiko"));

// console.log(data[0]);
// console.log(data[0].nama);

// let risikoTinggi = data.filter(function(risiko) {
//     return risiko.level === "Tinggi";
// });
// console.log(risikoTinggi);
// console.log(risikoTinggi.length);

// let jumlahSangatTinggi = data.filter(function(risiko) {
//     return risiko.level === "Sangat Tinggi";
// }).length;

// console.log(jumlahSangatTinggi);

cariRisiko.addEventListener("input", function () {

    // let kataKunci = cariRisiko.value.toLowerCase();

    // let hasilPencarian = daftarRisiko.filter(function (risiko) {
    //     return risiko.nama.toLowerCase().includes(kataKunci);
    // });

    // tampilkanRisiko(hasilPencarian);
    prosesFilter();
});

filterLevel.addEventListener("change", function () {
    // let levelDipilih = filterLevel.value;

    // let hasilFilter;

    // if (levelDipilih === "Semua") {
    //     hasilFilter = daftarRisiko;
    // } else {
    //     hasilFilter = daftarRisiko.filter(function (risiko) {
    //         return risiko.level === levelDipilih;
    //     });
    // }

    // //console.log(hasilFilter);
    // tampilkanRisiko(hasilFilter);
    prosesFilter();
});

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

// function hitungSkor(risiko) {
//     return risiko.likelihood * risiko.impact;
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

// let risiko = {
//     nama: "Kebocoran Data",
//     likelihood: 3,
//     impact: 2,
//     status: "Open"
// };

// let skor = hitungSkor(risiko);
// let level = tentukanLevelRisiko(skor);


// console.log("Nama Risiko:", risiko.nama);
// console.log("Likelihood:", risiko.likelihood);
// console.log("Impact:", risiko.impact);
// console.log("Skor Risiko:", skor);
// console.log("Level Risiko:", level);

// let daftarRisiko = [
//     {
//         nama: "Phishing",
//         likelihood: 4,
//         impact: 5,
//         status: "Open"
//     },
//     {
//         nama: "Kebocoran Data",
//         likelihood: 3,
//         impact: 2,
//         status: "Open"
//     },
//     {
//         nama: "Serangan DDoS",
//         likelihood: 5,
//         impact: 3,
//         status: "Open"
//     }
// ];

// // console.log(daftarRisiko);
// // console.log(daftarRisiko[0].nama);
// // console.log(daftarRisiko[1].impact);
// // console.log(daftarRisiko[2].status);

// for (let i = 0; i < daftarRisiko.length; i++) {
// //    console.log("Risiko:", daftarRisiko[i].nama, "- Status:", daftarRisiko[i].status);
// function hitungSkor(risiko) {
//     return risiko.likelihood * risiko.impact;
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
// let skor = hitungSkor(daftarRisiko[i]);
// let level = tentukanLevelRisiko(skor);

// console.log("Risiko:", daftarRisiko[i].nama, "| Skor Risiko:", skor, "| Level Risiko:", level);
// }

// let daftarRisiko = [
//     {
//         nama: "Phishing",
//         likelihood: 4,
//         impact: 5,
//         status: "Open"
//     },
//     {
//         nama: "Kebocoran Data",
//         likelihood: 3,
//         impact: 2,
//         status: "Open"
//     }
// ];

// daftarRisiko.push({
//     nama: "Serangan DDoS",
//     likelihood: 5,
//     impact: 3,
//     status: "Open"
// });

// console.log(daftarRisiko);

// let daftarRisiko = [
//     {
//         nama: "Phishing",
//         likelihood: 4,
//         impact: 5,
//         status: "Open"
//     },
//     {
//         nama: "Kebocoran Data",
//         likelihood: 3,
//         impact: 2,
//         status: "Open"              
//     },
//     {
//         nama: "Serangan DDoS",
//         likelihood: 5,
//         impact: 3,
//         status: "Open"  
//     }
// ];

// let statusRisiko = daftarRisiko.map(function(risiko) {
//     return risiko.status;   
// });

// let skorRisiko = daftarRisiko.map(function(risiko) {
//     return risiko.likelihood * risiko.impact;
// });


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

// let levelRisiko = daftarRisiko.map(function(risiko) {
//     let skor = risiko.likelihood * risiko.impact;
//     return tentukanLevelRisiko(skor);
// });

// console.log(levelRisiko);

// let levelRisiko = daftarRisiko.map(function(risiko) {
//     return risiko.likelihood * risiko.impact >= 17 ? "Sangat Tinggi" :
//            risiko.likelihood * risiko.impact >= 13 ? "Tinggi" :
//            risiko.likelihood * risiko.impact >= 8 ? "Sedang" :
//            risiko.likelihood * risiko.impact >= 4 ? "Rendah" : "Sangat Rendah";   
// });


//console.log(statusRisiko);
// console.log(skorRisiko);

// let risikoImpactTinggi = daftarRisiko.filter(function(risiko) {
//     // if (risiko.impact >= 4) {
//     //     return risiko.nama;
//     // }
//     return risiko.impact >= 4;
// });

// let risikoStatusOpen = daftarRisiko.filter(function(risiko) {
//     return risiko.status === "Open";
// });

// console.log(risikoImpactTinggi.map(r => r.nama));
// console.log(risikoImpactTinggi);

// let risikoSkorTinggi = daftarRisiko.filter(function(risiko) {
//     return risiko.likelihood * risiko.impact >= 13;
// });     

// console.log(risikoSkorTinggi.map(r => r.nama));

// let skorPhising = daftarRisiko.find(function(risiko) {
//     return risiko.nama === "Phishing";
// });

// console.log(skorPhising.likelihood * skorPhising.impact);   

// let risikoPhishing = daftarRisiko.find(function(risiko) {
//     return risiko.nama === "Phishing";
// });

// let skorPhishing = risikoPhishing.likelihood * risikoPhishing.impact;

// console.log(skorPhishing);

// let risikoDicari = daftarRisiko.find(function(risiko) {
//     return risiko.nama === "Serangan DDoS";
// });


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

// let risikoDicari = daftarRisiko.find(function(risiko) {
//     return risiko.nama === "Malware"; // Ganti dengan nama risiko yang ingin dicari
// });


// if (risikoDicari !== undefined) {
//     let skor = risikoDicari.likelihood * risikoDicari.impact;
//     console.log(
//         "Nama Risiko:", risikoDicari.nama,
//         "| Skor Risiko:", skor,
//         "| Level Risiko:", tentukanLevelRisiko(skor)
//         );
// } else {
//     console.log("Risiko tidak ditemukan");
// }

// let angka = [10, 20, 30, 40];

// let hasil = angka.reduce(function(total, angka) {
//     return total + angka;
// }, 0);

// console.log(hasil);

// let totalSkor = daftarRisiko.reduce(function(total, risiko) {
//     return total + (risiko.likelihood * risiko.impact);
// }, 0);

// console.log(totalSkor);

// let judul = document.getElementById("judul");

// console.log(judul);



