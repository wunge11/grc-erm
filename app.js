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





let judul = document.getElementById("judul");
let tombol = document.getElementById("tombol");
// let daftarRisiko = [];
let daftarRisiko = JSON.parse(localStorage.getItem("daftarRisiko")) || [];
let idEdit = null;
let namaRisiko = document.getElementById("namaRisiko");
let likelihood = document.getElementById("likelihood");
let impact = document.getElementById("impact");
let tambahRisiko = document.getElementById("tambahRisiko");
let hasilRisiko = document.getElementById("hasilRisiko");
let cariRisiko = document.getElementById("cariRisiko");
let filterLevel = document.getElementById("filterLevel");
let urutkanRisiko = document.getElementById("urutkanRisiko");

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

    let index = daftarRisiko.findIndex(function (risiko) {
        return risiko.id === id;
    });

    let yakin = confirm(
        "Apakah kamu yakin ingin menghapus risiko " + risiko.nama + "?"
    );

    if (yakin) {
        daftarRisiko.splice(index, 1);

        localStorage.setItem("daftarRisiko", JSON.stringify(daftarRisiko));

        tampilkanRisiko();
    }
}

function editRisiko(id) {
    let risiko = daftarRisiko.find(function (risiko) {
        return risiko.id === id;
    });

    idEdit = id;

    namaRisiko.value = risiko.nama;
    likelihood.value = risiko.likelihood;
    impact.value = risiko.impact;

    tambahRisiko.textContent = "Simpan Perubahan";
}

function tampilkanRisiko(dataRisiko = daftarRisiko) {
    let daftarHTML = "";

    dataRisiko.forEach(function (risiko, index) {
        daftarHTML += "<tr>" +
            "<td>" + risiko.nama + "</td>" +
            "<td>" + risiko.likelihood + "</td>" +
            "<td>" + risiko.impact + "</td>" +
            "<td>" + risiko.skor + "</td>" +
            "<td class='level-" + risiko.level.toLowerCase().replaceAll(" ", "-") + "'>" +
            risiko.level + "</td>" +
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

    console.log(hasilFilter);
    tampilkanRisiko(hasilFilter);
}

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

urutkanRisiko.addEventListener("change", function () {
    prosesFilter();
});

tambahRisiko.addEventListener("click", function () {

    if (
        namaRisiko.value === "" ||
        likelihood.value === "" ||
        impact.value === ""
    ) {
        alert("Semua data risiko harus diisi!");
        return;
    }

    let nilaiLikelihood = Number(likelihood.value);
    let nilaiImpact = Number(impact.value);

    if (
        nilaiLikelihood < 1 || nilaiLikelihood > 5 ||
        nilaiImpact < 1 || nilaiImpact > 5
    ) {
        alert("Likelihood dan Impact harus bernilai 1 sampai 5!");
        return;
    }

    let skor = nilaiLikelihood * nilaiImpact;

    let risikoBaru = {
        id: idEdit === null ? Date.now() : idEdit,
        nama: namaRisiko.value,
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
    }

    localStorage.setItem("daftarRisiko", JSON.stringify(daftarRisiko));

    prosesFilter();

    hasilRisiko.textContent = "Risiko: " + namaRisiko.value +
        " | Skor Risiko: " + skor +
        " | Level Risiko: " + tentukanLevelRisiko(skor);

    namaRisiko.value = "";
    likelihood.value = "";
    impact.value = "";

});

prosesFilter();

// localStorage.setItem("test", "Halo Wunge");

// let data = [
//     { nama: "Phishing", skor: 15 },
//     { nama: "DDoS", skor: 20 }
// ];

// localStorage.setItem("dataRisiko", JSON.stringify(data));
// let dataTersimpan = JSON.parse(localStorage.getItem("dataRisiko"));
// console.log(dataTersimpan);
let data = JSON.parse(localStorage.getItem("daftarRisiko"));

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

function hitungJumlahLevel(level) {
    return data.filter(function(risiko) {
        return risiko.level === level;
    }).length;
}
console.log("Jumlah Risiko Sangat Tinggi:", hitungJumlahLevel("Sangat Tinggi"));
console.log("Jumlah Risiko Tinggi:", hitungJumlahLevel("Tinggi"));
console.log("Jumlah Risiko Sedang:", hitungJumlahLevel("Sedang"));
console.log("Jumlah Risiko Rendah:", hitungJumlahLevel("Rendah"));
console.log("Jumlah Risiko Sangat Rendah:", hitungJumlahLevel("Sangat Rendah"));
console.log("Total Risiko:", data.length);