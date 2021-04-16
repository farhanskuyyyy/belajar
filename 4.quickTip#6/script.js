// // setTimeout()
// // menjalankan sesuatu setelah waktu yang di tentukan habis 

// // contoh sederhana setTimeout()
// setTimeout(function() {
//     console.log('ok');
// }, 3000);


// // contoh untuk memberhentikan timeout 
// const tes = setTimeout(function(){
//     console.log('ok');
// }, 3000);

// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click',function(){
//     clearTimeout(tes);  // jadi ketika timeout ini di berhentikan ,fungsi tersebut tidak akan dijalankan 
//     console.log('selesai');
// })



// // setInterval()
// // menjalankan sesuatu dengan waktu yang di tentukan seperti looping 

// // contoh sederhana
// setInterval(function(){
//     console.log('hallo');
// },2000)

// const tes2 = setInterval(function(){
//     console.log('hallo');
// },2000);

// const tombol2 = document.getElementById('tombol2');

// tombol2.addEventListener('click',function(){
//     clearInterval(tes2);  // jadi ketika timeout ini di berhentikan ,fungsi tersebut tidak akan dijalankan 
//     console.log('selesai');
// })


// // membuat aplikasi hitung mundur 

// const tanggalTujuan = new Date('Feb 18, 2021 16:35:00').getTime();

// const hitungMundur = setInterval(function(){
//     const sekarang = new Date().getTime();
//     const selisih = tanggalTujuan - sekarang ;
    
//     const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
//     const jam =  Math.floor(selisih % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60 ));
//     const menit =  Math.floor(selisih % (1000 * 60 * 60 ) / (1000 * 60 ));
//     const detik =  Math.floor(selisih % (1000 * 60 ) / (1000));
    
//     const teks = document.getElementById('teks');
    
//     teks.innerHTML = 'Waktu Anda Tersisa : '+ hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik Lagi!';

//     if(selisih <= 0 ){
//         clearInterval(hitungMundur);
//         teks.innerHTML = 'Waktu Anda Telah Habis!';
//     }
// },1000)

