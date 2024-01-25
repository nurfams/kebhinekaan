const map = L.map('map').setView([-0.08, 116], 5);
const klik = "<a id='badui' href='#'>link</a>";

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// const marker = L.marker([-3.431978, 136.845703]).addTo(map)
//     .bindPopup(`<h3>Suku <h3> ${klik}`).on("click", function(){
      
//     });

L.marker([-6.659384, 106.390228]).addTo(map).bindPopup(`
    <h3>Suku Badui<h3> <img src="https://tangerangdaily.id/wp-content/uploads/2023/06/pakaian-adat-baduy-@kangkaldiibaduy.png" alt="" srcset="" style="height: 100px; width: 125px;">
        <h5 align="justify">Suku Badui adalah salah satu suku yang berasal Banten. Suku Baduy dikenal sebagai suku yang menolak modernisasi dan sangat menjaga warisan adat serta tanah nenek moyang mereka.<h5> 
            <b>Informasi lengkap : ${klik}</b>
    `).on("click", function(){
      fungsizoom(-6.659384, 106.390228);
});;

koordinat(
    -1.807272, 120.102539, 
    "Suku Bugis", 
    "Orang Bugis, juga dikenal sebagai Bugis, adalah kelompok etnis Austronesia—yang paling banyak jumlahnya dari tiga kelompok bahasa dan etnis utama di Sulawesi Selatan, di provinsi barat daya Sulawesi, pulau terbesar ketiga di Indonesia. Suku Bugis pada tahun 1605 masuk Islam dari Animisme.", 
    "https://wahananews.co/photo/berita/dir092022/mengenal-sejarah-budaya-dan-kisah-perantauan-suku-bugis_GvI56XETQn.jpeg", 
    "bugis"
    );

koordinat(-1.811194, 102.128906,
     "Suku Jambi",
      "Suku Jambi atau Melayu Jambi adalah suku bangsa pribumi yang berakar dari provinsi Jambi, Indonesia. Mereka menetap di kota Jambi dan beberapa kabupaten di sekitarnya. Keunikan budaya mereka tercermin dalam pola pemukiman dengan rumah-rumah berjejer di tepi sungai besar maupun kecil.", 
      "https://asset.kompas.com/crops/MroSJm_2j55l2jWoDnvOQy5T63E=/236x0:864x628/375x240/data/photo/2022/06/29/62bc2a5c65a95.png", 
      "jambi");

koordinat (-8.464704, 115.19165,
    "Suku Bali",
    "Suku Bali adalah suku bangsa yang sebagian besar masyarakatnya tinggal di pulau bali dan menganut ajaran agama Hindu.",
    "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2023/11/suku-di-bali.webp",
    "bali");

koordinat (-0.285764, 113.466797,
    "Suku Dayak",
    "Orang dayak adalah penduduk asli pulau Kalimantan. Dayak menjadi istilah umum untuk 200 sub kelompok lebih etnis suku yang umumnya tinggal di sungai atau pegunungan pedalaman bagian selatan dan tengah pulau Kalimantan.",
    "https://news.unair.ac.id/wp-content/uploads/2020/08/Tradisi-Dayak-Ngaju.jpg",
    "dayak");

koordinat(-3.072256, 119.772949,
    "Suku Toraja",
    "Suku Toraja adalah kelompok etnis yang berasal dari daerah pegunungan di Sulawesi Selatan, Indonesia. Jumlah penduduknya sekitar 1.100.000 jiwa, 450.000 jiwa di antaranya tinggal di Kabupaten Tana Toraja. Sebagian besar penduduknya beragama Kristen, dan sebagian lainnya beragama Islam atau menganut kepercayaan animisme lokal yang disebut aluk.",
    "https://upload.wikimedia.org/wikipedia/commons/2/23/C%C3%A9l%C3%A8bes_6543a.jpg",
    "toraja");

koordinat(1.989343, 99.547119,
    "Suku Batak",
    "Suku Batak merupakan suku yang berasal dari Sumatera Utara dari rumpun etnis yang mendiami sebagian besar wilayah di beberapa kabupaten di Sumatera Utara seperti Kabupaten Karo, Dairi, Simalungun, Asahan, dan Tapanuli Utara.",
    "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/10/2023/08/31/10-Fakta-Unik-Suku-Batak-Bisa-Menikah-Dengan-Sepupu-1-1064716917.jpg",
    "batak");

koordinat(-5.849238, 139.163818,
    "Suku Asmat",
    "Suku Asmat adalah kelompok etnis New Guinea, yang tinggal di provinsi Papua Selatan, Indonesia. Suku Asmat mendiami wilayah di pantai barat daya pulau yang berbatasan dengan Laut Arafura, dengan luas daratan sekitar 18.000 km² dan terdiri dari hutan bakau, rawa pasang surut, rawa air tawar, dan hutan hujan dataran rendah.",
    "https://www.goodnewsfromindonesia.id/uploads/images/2021/06/0806562021-WhatsApp-Image-2021-06-08-at-06.55.29(1).jpg",
    "asmat");
koordinat(-4.111779, 138.938599,
    "Suku Dani",
    "Suku Dani adalah kelompok etnis yang berasal dari Dataran Tinggi Tengah Papua Barat di Lembah Baliem, Dataran Tinggi Papua, Indonesia. Sekitar 100.000 jiwa mendiami Lembah Baliem, terdiri dari perwakilan suku Dani di bagian bawah dan atas lembah masing-masing 20.000 dan 50.000 di bagian tengah",
    "https://www.goodnewsfromindonesia.id/wp-content/uploads/images/source/kenditaagustin/20190207boombastis.com-suku-dani.jpg",
    "dani");
koordinat (-5.047585, 122.89032,
    "Suku Buton",
    "Masyarakat Buton merupakan istilah kolektif yang mencakup sejumlah suku bangsa Buton dan pulau-pulau tetangga di Sulawesi Tenggara. Seperti banyak suku lain di Sulawesi, suku Buton bermata pencaharian sebagai pelaut dan pedagang.",
    "https://blog.siamsite.com/wp-content/uploads/2023/02/sawal-dan-ditra-dari-suku-muna-dan-suku-buton-yang-emmiliki-mata-berwarna-biru_169.jpeg",
    "buton");
koordinat(-0.572037, 100.821533,
    "Suku Minang",
    "Suku Minang yang berasal dari Sumatera Barat ini memiliki budaya yang unik. Sejak abad ke-14, masyarakat Minang banyak merantau ke pesisir Timur Sumatera hingga Negeri Sembilan, Malaysia. Hal inilah yang menjadikan masyarakat Minang terkenal dengan budaya rantaunya.",
    "https://jurnalpost.com/wp-content/uploads/2021/03/Masyarakat-Minangkabau.jpg",
    "minang");
koordinat(0.115601, 116.288915,
    "Suku Kutai",
    "Suku Kutai, atau Urang Kutai adalah salah satu dari rumpun suku dayak yaitu Dayak Lawangan yang mendiami wilayah Kalimantan Timur yang mayoritas saat ini beragama Islam dan hidup di tepi sungai. Pada awalnya Kutai merupakan nama suatu teritori tempat bermukimnya masyarakat asli Kalimantan. Suku Kutai berdasarkan jenisnya adalah termasuk suku Dayak Islam yang banyak menyerap nilai nilai kebudayaan suku Banjar dan Melayu pesisir yang berada di Kalimantan Timur.",
    "https://imgs.search.brave.com/bU9spQW-4lSTcUBPvnYwgbhuvqC98gusWAGKFN_IL0w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuaW5kb3pvbmUu/bmV3cy9kb182OTJ4/NTE2L2NvbnRlbnQv/MjAxOS8wOC8yNy85/RHN6WGEvdF81ZDY0/ZDkxMGQzMThjXzcw/MC5qcGc",
    "kutai");
koordinat(-3.288344, 115.059573,
    "Suku Banjar",
    "Suku Banjar adalah suatu kelompok etnis yang berasal dari wilayah Banjar di Provinsi Kalimantan Selatan. Suku Banjar merupakan penutur Bahasa Banjar (dengan berbagai macam dialeknya), dan terikat dalam persamaan sejarah atau latar belakang serta kebudayaan.",
    "https://imgs.search.brave.com/E1VNLHUy8Gx9smxK3AddaTTPILczacbUikTim3Ucnmk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/aW5ld3MuY28uaWQv/bWVkaWEvODIyL2Zp/bGVzL2luZXdzX25l/dy8yMDIzLzAxLzIz/L3N1a3VfZGF5YWtf/a2V0dXJ1bmFuX2Fw/YS5qcGc",
    "banjar");
koordinat(-5.757812, 140.490357,
    "Suku Muyu",
    "Suku Muyu yaitu salah satu suku bangsa di Indonesia dan terdapat di Papua Selatan yang menempati daerah di sekitar Sungai Muyu dan terletak di sebelah timur laut Merauke. Bahasa yang mereka gunakan adalah bahasa Muyu. Istilah Muyu sendiri muncul dari dua perkiraan, yaitu muncul seiring dengan masuknya misi Katolik dan Pastor Petrus Hoeboer.",
    "https://imgs.search.brave.com/U2jmlg9ETiynxbtgSkp-L4NBBLvrixmcY5beRBIDmMg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icm9v/bmV0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wMS81/LXN1a3UtbXV5dS5q/cGc",
    "muyu");
koordinat(-6.201987, 106.826846,
    "Suku Betawi",
    "Suku Betawi (Betawi: Orang Betawi) adalah salah satu suku bangsa di Indonesia yang memiliki kekerabatan etnis dengan Melayu, Sunda, dan Jawa. Umumnya, Orang Betawi mendiami wilayah Jakarta dan daerah sekitarnya. Kemunculan Betawi pertama kali pada abad ke-18 sebagai suatu komunitas dari beberapa etnis yang menetap di Batavia.",
    "https://imgs.search.brave.com/O2hBi0bvyUfYSh5bk4L3EzfVe9iE6_nqxDWPUbvndhg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibHVl/Lmt1bXBhcmFuLmNv/bS9pbWFnZS91cGxv/YWQvZmxfcHJvZ3Jl/c3NpdmUsZmxfbG9z/c3ksY19maWxsLHFf/YXV0bzpiZXN0LHdf/NjQwL3YxNTAwOTM5/MzA3L2xudnh1emZ4/eXVzc2J3bWp5aTB6/LmpwZw",
    "betawi");
koordinat(-7.373349, 109.636834,
    "Suku Jawa",
    "Suku Jawa / Wong Jawa (ngoko) adalah suku bangsa Austronesia terbesar di Indonesia yang berasal dari Jawa Tengah, Jawa Timur, dan Daerah Istimewa Yogyakarta. Pada tahun 2010, setidaknya 40,22% penduduk Indonesia merupakan etnis Jawa.",
    "https://imgs.search.brave.com/shgfn7D1LBNBuAphC2PKuo-sGcX_NpsqhuMkpIULNX4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYWRh/cm11a29tdWtvLmRp/c3dheS5pZC91cGxv/YWQvODAxMTk3YWYz/NzVmZTc2MjM3YTdk/OTgyMjMwMGYyMzAu/anBn",
    "jawa");

$('body').on("click", function(i){
    switch (i.target.id) {
        case "jambi":
            linkLokasi(1500, "https://sites.google.com/view/proyek-it-development/home/pulau-jawa/suku-badui?authuser=0");
            break;
        case "minang":
            linkLokasi(1500, "https://www.google.com");
            break;
        case "batak":
            linkLokasi(1500, "https://www.google.com");
            break;
        case "badui":
                linkLokasi(1500, "https://www.google.com");
                break;
        case "jawa":
                linkLokasi(1500,"https://sites.google.com/view/proyek-it-development/home/pulau-kalimantan/suku-dayak?authuser=0");
                break;
        case "betawi":
                linkLokasi(1500,"https://www.google.com");
                break;
        case "bugis":
                linkLokasi(1500,"a");
                break;
        case "buton":
                linkLokasi(1500,"");
                break;
        case "toraja":
                linkLokasi(1500,"");
                break;
        case "dayak":
                linkLokasi(1500,"");
                break;
        case "banjar":
                linkLokasi(1500,"");
                break;
        case "kutai":
                linkLokasi(1500,"");
                break;
        case "asmat":
                linkLokasi(1500,"");
                break;
        case "dani":
                linkLokasi(1500,"");
                break;
        case "muyu":
                linkLokasi(1500,"");
                break;
        case "bali":
                linkLokasi(1500,"");
                break;
    }
});

const popup = L.popup()
    .setLatLng([0.66, 116])
    .setContent('I am a standalone popup.');

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.toString()}`)
        .openOn(map);
}

// map.on('click', function(i){
//     console.log(i.target);
// });

map.on('click', onMapClick);
// map.on('click', function() {

//     map.zoomIn();
 
//  });

function linkLokasi(param1, param2) {
    $("#map").fadeOut(param1, function() {
        window.location.assign(param2);
    });
}

function koordinat(koorLong, Koorlang, judul, konten ,gambar, link) {
    L.marker([koorLong, Koorlang]).addTo(map).bindPopup(`
    <h3>${judul}<h3> <img src="${gambar}" alt="" srcset="" style="height: 100px; width: 125px;">
        <h5 align="justify">${konten}<h5> 
            <b>Informasi lengkap : <a id='${link}' href='#'>link</a>
    `).on("click", function(){
      fungsizoom(koorLong, Koorlang);
});;
}

function fungsizoom(param, param2) {
    map.setView([param, param2],
    //     pan: {
    //         animate: true,
    //         duration: 1
    //     },
    //     zoom: {
    //         animate: true
    //     }
    // });
        map.getZoom(), {
        "animate": true,
        "pan": {
          "duration": 1.5
        }
      });
    
      setTimeout(function(){
        map.setView([param, param2], 10)
      }, 1000);
    // setTimeout(function(){
    //     map.zoomIn();
    // }, 1000);
    // setTimeout(function(){
    //     map.zoomIn();
    // }, 1800);
}