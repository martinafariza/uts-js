//perulangan array
let buah = ["pepaya","jeruk", "mangga", "mentega","durian"];
for ( let i in buah){
    alert(`buah ${buah [i]}`);
}


//function
function waktu (nama){
    var today = new Date();
    var hours = today.getHours();
    // var hours = 23;
    var minutes = today.getMinutes();
     if ( hours <=  11) {
        console.log(` Selamat Pagi ${nama} , Waktu sekarang ${hours}:${minutes < 10 ? "0" : ""}${minutes}`);
    }else if( hours <= 14 ){
        console.log(` Selamat Siang ${nama}, Waktu sekarang ${hours}:${minutes < 10 ? "0" : ""}${minutes}`);
    }else if ( hours <= 19){
        console.log(` Selamat Sore ${nama}, Waktu sekarang ${hours}:${minutes < 10 ? "0" : ""}${minutes}`);
     }else if (hours <= 24){
        console.log(` Selamat Malem ${nama}, Waktu sekarang ${hours}:${minutes < 10 ? "0" : ""}${minutes}`);
     }
   
    
}
//  waktu("martina fariza");

 //object
 let hotel = {
    namahotel : "DMAX Royal Solution",
    alamat : "766W+3GF, Jl. Bypass Bandara Int. Lombok, Batujai, Kec. Praya Bar., Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83516",
    jumlahKamar : 56,
    fasilitas : {
        1 : "kamar Mandi",
        2 : "Kolam Renang",
        3 : "CapFreeDay",
        4 : "Bar Minuman"
    },
    klasifikasiHotel : "Hotel Bintang Lima",
    booking : function (params, nama){
        if (params == true){
            return(`selamat anda telah Memboking hotel ${this.namahotel} dengan nama ${nama}`)
        }else {
            return(`Pembatalan telah diterima oleh Pihak ${this.namahotel} dengan nama ${nama}`)
        }
    }
}

console.log(hotel.booking(true,"martina"))