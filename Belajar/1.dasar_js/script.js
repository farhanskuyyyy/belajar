// // POPUP BOX

// // console.log(x);

// // alert meberikan informasi 
// alert("variable = " + x);

// // prompt untuk menerima inputan 
// prompt("masukkan nama : ");

// // confirm untuk menerima hasil boolean 
// confirm('Apakah ada yakin ?');

// var konfirmasi = false;
// while (konfirmasi === false) {
//     var nama = prompt("Masukkan Nama Anda");
//     var konfirmasi = confirm("Apakah Anda yakin ? ");
//     if(konfirmasi == true){
//         alert("Nama Anda " + nama);
//     }else{
//         konfirmasi = true;
//     }
// }

// /////////////////////////////////////////////////

// WHILE (Pengulangan)

// var nilaiAwal = 1;
// while (nilaiAwal <=10) {
//     console.log('Angkot No. '+ nilaiAwal + ' berhasil berangkat');
//     nilaiAwal ++;
// }

// //////////////////////////////////////////////////

// FOR (Pengulangan)

// for(var nilaiAwal = 0 ;nilaiAwal <= 10 ;nilaiAwal++){
//     console.log("Hello world " + nilaiAwal);
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 7;
// var noAngkot = 1;

// while (noAngkot <= angkotBeroperasi) {
//     console.log('Angkot No '+ noAngkot + ' Beroperasi');
//     noAngkot ++;
// }

// for(var noAngkot = angkotBeroperasi + 1 ; noAngkot <=jmlAngkot ; noAngkot ++){
//     console.log('Ankot No '+ noAngkot + ' tidak Beroperasi ')
// }

// //////////////////////////////////////////////////////

// IF (Kondisi)
// var jmlAnkot = 10;
// var angkotBeroperasi = 8;

// for(var noAngkot = 1;noAngkot <= jmlAnkot ;noAngkot++){
//     if(noAngkot <= angkotBeroperasi){
//         console.log('Angkot no '+ noAngkot + ' Beroperasi');
//     }else{
//         console.log('Angkot no '+ noAngkot + ' Tidak Beroperasi');
//     }

// }

// var angka = 1;

// if(angka % 2 == 0){
//     console.log('angka genap');
// }else{
//     console.log('angka ganjil');
// }

// //////////////////////////////////////////////////////

// // ELSE IF (kondisi)

// var angka = prompt("Masukkan Angka ! ");

// if (angka % 2  == 0) {
//     console.log('angka genap');
// }else if(angka % 2 == 1){
//     console.log('angka ganjil');
// }else{
//     console.log('Masukinnya angka bos!');
// }

// var jmlAnkot = 10;
// var angkotBeroperasi = 6;
// var lembur = 8;

// for(var noAngkot = 1;noAngkot <= jmlAnkot ;noAngkot++){
//     if(noAngkot <= angkotBeroperasi){
//         console.log('Angkot no '+ noAngkot + ' Beroperasi');
//     }else if(noAngkot == lembur){
//         console.log('Angkot no '+ noAngkot + ' Sedang Lembur');
//     }else{
//         console.log('Angkot no '+ noAngkot + ' Tidak Beroperasi');
//     }

// }


// /////////////////////////////////////////////////////////////
// SWITH (Kondisi)

// var angka = prompt("masukkan angka ");

// switch (angka) {
//     case '1': //kenapa string , karena default tipe data dari prompt adalah string 
//         console.log('angka 1');
//         break;
        
//         case '2':
//         console.log('angka 2');
        
//         break;
        
//         case '3':
//         console.log('angka 3');
        
//         break;
        
//         default:
//             console.log('salah u');
//             break;
// }

// var item = prompt("masukkan inputan \n cth(nasi,daging,burger,fanta) ");

// switch (item) {
//     case 'nasi':  //bisa dijadiin kaya gini jg kalo aksi dari kondisinya sama ,gausah pake break 
//     case 'daging':
//     console.log('SEHAT');
//     break;
    
//     case 'burger':
//     case 'fanta':
//     console.log('TIDAK SEHAT');
//     break;
    
//     default:
//     console.log('salah u');
//     break;
// }

// ///////////////////////////////////////////////////////////////////
// // PENGULANGAN BERSARANG 

// // menampilkan 

// // *
// // **
// // ***
// // ****
// // *****

// // source code

// var s = '';
// for(var i = 0 ; i < 5 ; i++){
//     for(var j = 0 ; j <= i ;j++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// // menampilkan 

// // *****
// // ****
// // ***
// // **
// // *

// // source code
// var s = '';
// for(var i = 5 ; i > 0 ; i--){
//     for(var j = 0 ; j < i ;j++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);


// /////////////////////////////////////////////////////////////

// // Membuat Suit Jawa

// var main = true;
// while (main) { 

//     //variable 
//     var p = prompt("Masukkan Pilihan Anda : \n(gajah,semut,orang)");
//     var com = Math.random();
    
//     //komputer
//     if (com < 0.34) {
//         com = 'gajah';
//     }else if (com < 0.67) {
//         com = 'semut';
//     }else{
//         com = 'orang';
//     }
    
//     //kondisi 
//     if (p == com) {
//         hasil = 'seri';
//     }else if(p == 'gajah'){
//         (com == 'orang') ? hasil = 'Menang ! ' : hasil = 'Kalah!';
//     }else if(p == 'orang'){
//         (com == 'semut') ? hasil = 'Menang ! ' : hasil = 'Kalah!';
//     }else if(p == 'semut'){
//         (com == 'gajah') ? hasil = 'Menang ! ' : hasil = 'Kalah!';
//     }else{
//         hasil = 'masukkin yang bener';
//     }
    
//     //hasil
//     alert('Kamu : ' + p + ' Komp : ' + com + '\n Kamu : ' + hasil );
    
//     main = confirm('Lagi ?');
// }

// ////////////////////////////////////////////////////////////////////////

// // membuat tebak angka 

// var main = true; 
// while (main) {
//     //variable 
//     var angka = Math.floor(Math.random() * 11);
    
//     //kondisi 
//     salah = true;
//     while (salah) {
//         var tebak = prompt('Tebak angka 1-10');
        
//         if (tebak == angka) {
//             hasil = 'Anda Benar , Angkanya adalah : '+ angka;
//             alert(hasil);
//             salah = false;
//         }else if (tebak < angka){
//             hasil = 'Anda Salah , Angka Anda Kekecilan';
//             alert(hasil);
//             salah = true;
//         }else if (tebak > angka){
//             hasil = 'Anda Salah , Angka Anda Kebesaran';
//             alert(hasil);
//             salah = true;
//         }else{
//             hasil = 'Masukin yang bener kocak';
//             alert(hasil);
//             salah = true;
//         }
//     }

//     main = confirm("lagi ?");
// }


// ///////////////////////////////////////////////////

// // Function 

// // function adalah sub program dalam suatu program 

// // contoh function 

// // function namaFunction(param1,param2){
// //     aksi/return;
// // }

// // function ekspresi ( nama function nya duluan )

// var penjumlahan = function(angka1,angka2){
//     hasil = angka1 + angka2;
    
//     return hasil;
// }

// //function deklarasi 
// function penjumlahan(angka1,angka2){
//     hasil = angka1 + angka2;

//     return hasil;
// }

// //cara menjalankan function 
// alert(penjumlahan(1,5));

// ////////////////////////////////////////////////////////////

// // buat function menghitung volume kubus 
// var sisi = prompt('masukkan sisi ngab :');

// function volumeKubus(sisi){
//     var sisi = sisi;
//     hasil = sisi * sisi * sisi;

//     return hasil;
// }

// alert(volumeKubus(sisi));


// //////////////////////////////////////////////////////////
// // PARAMETER DAN ARGUMENT

// function tambah(a,b,c){
//             //  ^parameter^
//     return a + b ;
// }

// var hasil = tambah(1,2);
//                 // ^argument^

// console.log(hasil);

// // kalo argumentnya kurang , maka akan menghasilkan nilai default undefined untuk parameter yang tidak memiliki argument
// // kalo argumentnya kelebihan , itu gapapa , dia ga bakalan di proses sama func 


// // jadi kalo di js , argument yang dikirim itu selain masuk ke func yang dituju , dia jg masuk ke sudo func arguments()

// // bisa jadi gini coy 

// function tambah(){
//     var hasil = 0 
//     for(var i = 0 ; i < arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil ;
// }

// var coba = tambah(2,33,4,5,32,2)
// console.log(coba);


// /////////////////////////////////////////////////////////////////////

// // refactoring 

// // from this 
// var sisi = prompt('masukkan sisi ngab :');

// function volumeKubus(sisi){
//     var sisi = sisi;
//     hasil = sisi * sisi * sisi;

//     return hasil;
// }

// alert(volumeKubus(sisi));

// // to this 

// function volumeKubus(sisi){
//     return sisi * sisi * sisi;
// }

// alert(volumeKubus(sisi));

// ///////////////////////////////////////////////////////////////////////
// // SCOPE 

// // block scope vs function scope 

// // block scope itu sederhananya scope yang hanya bisa diakses di dalam scope itu sendiri 
// // bisa seperti di dalam { scope }

// // function scope itu bisa akses di dalam function scope dan jg bisa akses ke global scope 


// //////////// global scope js 

// var a = 1; 

// console.log(window);        //global

// console.log(a);             //variable yang di buat di luar , masuk ke global scope 
// console.log(window.a);      


// //////////// function scope 

// var a = 12 ;         // ini variable global yang bisa di akses di dalam function jg 

// function scope(){
//     var a = 1;          // ini bisa disebut variable lokal ,yang hanya bisa diakses di function saja 
//     // a = 1 ;             // jika gaada var nya , maka ini otomatis menjadi variable global.
//                             // kalau mau auto membuat variable local , gunakan "use strict" diluar function 
//     console.log(a);  
// }

// scope()

// //////////////////////////////////////////////////////////////////////////////

// // function rekursif 

// // function yang menjalankan dirinya sendiri , sederhananya seperti looping 
// // ada beberapa case yang tidak bisa di jalankan dengan looping , tetapi bisa di jalankan di func rekursif 

// // contoh function rekursif ,menghitung faktorial 

// function faktorial(n){
//     if (n === 0 ) return 1;
//     return n * faktorial(n-1);
// }

// // dalam looping 
// function faktorial2(n){
//     var hasil = 1;
//     for(var i = n ; i > 0 ; i--){
//         hasil *= i ;
//     }
//     return hasil;

// }

// console.log(faktorial2(3));
// console.log(faktorial(3));

// //////////////////////////////////////////////////////////////////////////////

// // function expression dan declaration 

// // function declaration yaitu fungsi yang biasa di tulis seperti diatas 
// // ada beberapa kelebihannya yaitu : 
// // fungsi ini akan langsung di simpan di memori , jadi saat pemanggilan fungsi itu lebih fleksibel 

// // function expression yaitu fungsi yang di simpan di dalam sebuah variable atau lainnya 
// // fungsi ini kurang fleksibel karena saat dipanggil ,harus terlebih dahulu di deklarasikan 

// // contoh function expression 

// var fungsi = function (param1){
//     return param1;
// }

// console.log(fungsi('hello'));

// // nama function menjadi opsional untuk function expression 

// // contoh function declaration 

// function fungsi2(param1){
//     return param1;
// }

// console.log(fungsi2('hello')); 

// ////////////////////////////////////////////////////////////////////

// // ARRAY

// // array adalah tipe data yang tiap tiap elemennya memiliki index 

// // contoh array

// var myArr = ['string',10,false,'myfunc',[1,2,3]];   // indeks array dimulai dari 0 

// console.log(myArr.length);   // cara menghitung jumlah array 
// console.log(myArr[4][2]);   // cara memanggil array 

// // array di javascript bisa menyimpan tipe data yang berbeda (string,int,boolean,func,array,dll)

// /////////////////////////////////////////

// //Manipulasi Array 

// var siswa = ['farhan','arfianto','aan'];
// var angka = [1,2,4,3,6,5,8,6,7,10,20];

// // 1. Tambah array manual 
// siswa[3] = 'siswa3';
// console.log(siswa);

// // 2. Hapus array manual 
// siswa[3] = undefined;
// console.log(siswa);

// // 3. Menampilkan isi Array 

// for(i = 0 ; i < siswa.length ; i++){
//     console.log(siswa[i]);
// }

// // 4. Array Method 

// // a. Join 

// console.log(siswa.join(' - ')); // untuk menggabungkan array menjadi string 

// // b. push and pop 

// // Push 
// siswa.push('dodi','risma');     // menambahkan array yang terakhir

// //// Pop
// siswa.pop();                    // menghilangkan  array yang terakhir 

// console.log(siswa.join(' - '));


// // c. unshift and shift

// // unshift 
// siswa.unshift('anjay');             // Menambahkan value array di depan 

// //shift
// siswa.shift('anjay');             // Menghilangkan value array di depan 

// console.log(siswa.join(' - '));


// // d. splice 
// // menambah element baru array sesuai yang diinginkan 

// // siswa.splice(indexAwal,mauDihapusBerapa,elemenBaru1,elemenBaru2);

// siswa.splice(1,0,'hahaha','hehehe');
// console.log(siswa.join(' - '));


// // e. slice
// // slice untuk mengambil element untuk di jadikan array baru 

// // siswa.slice(indexAwal,indexAkhir);       // index akhir itu sama sepert < (kurang dari)

// var sliceArr = siswa.slice(0,2);
// console.log(sliceArr.join(' - '));


// // f. forEach
// // method array untuk looping 

// // syntax dasar
// // array.forEach(function(currentValue, index, arr), thisValue)

// // contohnya

// siswa.forEach(function (e,i) {
//     console.log('Siswa ke-' + (i+1) + ' adalah '+ e)
// });

// // atau bisa seperti

// function cetak(e,i){
//     console.log('Siswa ke-' + (i+1) + ' adalah '+ e)
// }

// siswa.forEach(cetak); // gausah diisi param gapapa ,karena ini akan otomatis masuk 


// // g. map 

// // map sama seperti foreach ,tapi bedanya map menghasilkan nilai array 
// // array.map(function(currentValue, index, arr), thisValue)

// var angka2 = angka.map(function (e) {
//     return e ;
//     // return e * 2 ;      // ini juga bisa di jumlahkan 
// })

// console.log(angka2);


// // h . sort 

// // sort buuat ngurutin , tapi ati ati karena dia ngurutin kaya abjad , jadi setelah 1 , itu 10 bukan 2 

// console.log(angka);

// angka.sort();

// // solusi
// angka.sort(function (a,b) {
//     return a-b;
// });


// console.log(angka);


// // i. filter 
// // mencari nilai yang diinginkan ,dan mengembalikan array 
// angka3 = angka.filter(function(x){
//     return x > 5
// })
 
// console.log(angka3);


// // j. find 
// // mencari nilai yang diinginkan ,dan mengembalikan string 
// angka3 = angka.find(function(x){
//     return x > 5
// })
 
// console.log(angka3);

// ///////////////////////////////////////////////////////////

// //Membuat program sederhana pencatatan penumpang angkot

// var penumpang = ['farhan'];
// var tambahPenumpang = function(namaPenumpang, penumpang){
//     if( penumpang.length == 0){
//         penumpang.push(namaPenumpang);
//         return penumpang;
    
//     }else{
//         for(i = 0 ; i < penumpang.length ; i ++){
//             if (penumpang[i] == undefined) {
//                 penumpang[i] = namaPenumpang;
//                 return penumpang;

//             }else if(penumpang[i] == namaPenumpang){
//                 console.log(namaPenumpang + ' sudah ada di dalam');
//                 return penumpang;

//             }else if(i == penumpang.length - 1){
//                 penumpang.push(namaPenumpang);
//                 return penumpang;
            
//             }
//         }   
//     }
// }

// var hapusPenumpang = function(namaPenumpang,penumpang){
//     if (penumpang.length == 0 ) {
//         console.log('angkot kosong');
//         return penumpang;
//     }else{
//         for(i = 0 ; i < penumpang.length ; i++){
//             if (penumpang[i] == namaPenumpang) {
//                 penumpang[i] = undefined;
//                 return penumpang;
//             }else if ( i == penumpang.length - 1){
//                 console.log('gaada penumpang bernama '+ namaPenumpang);
//                 return penumpang;
//             }
//         }
//     }
// }

// ///////////////////////////////////////////////////////////////////

// // OBJECT 

// // Object sama kaya array asosiatif di PHP

// // object di js pake {}

// // contoh 

// var orang = {
//     nama : 'farhan',
//     kelas : '12',
//     alamat : {
//         jalan : 'pule',
//         rt : 17 ,
//     },
//     warna : ['hijau','kuning']
// }

// // object bisa menyimpan sampai function sama seperti array 

// // cara pemanggilannya ada 2 cara 

// // dengan notasi . (titik)
// console.log(orang.alamat.jalan);

// // dengan notasi [] ( kurung siku )
// console.log(orang['nama']);
// console.log(orang['warna'][1]);
// console.log(orang['alamat']['jalan']);



// // cara membuat object ada beberapa cara 

// // 1. Object literal 
// var orang = {
//     nama : 'farhan',
//     kelas : '12',
//     alamat : {
//         jalan : 'pule',
//         rt : 17 ,
//     }
// }

// // 2. function declaration 

// function buatObjectOrang(nama,kelas,alamat){
//     var orang = {};

//     orang.nama = nama;
//     orang.kelas = kelas;
//     orang.alamat = alamat;
    
//     return orang;
// }

// var orang = buatObjectOrang('farhan',12,{ jalan : 'pule' ,rt : 17});

// // 3. Constructor 
// // biasanya nama func nya itu huruf kapital depannya seperti class di php

// function Orang(nama,kelas,alamat){
//     this.nama = nama;
//     this.kelas = kelas;
//     this.alamat = alamat;
// }

// var orang2 = new Orang('farhan',12,{ jalan : 'pule' ,rt : 17})  // pemanggilannya ada syntax new di depan nama func


// ////////////////////////////////////////////////////////////

// // THIS

// // this adalah keyword spesial yang di definisikan di setiap function 

// // jadi this ini kaya window , kalo kita buat variable biasa , nah itu masuk ke object global , dan bisa di akses dari this atau window

// // THIS == window ,jika this berupa object global 



// // 1. Object literal 
// // this untuk object literal ini mengembalikan nilai object yang di jalankan , misal disini function halo itu 
// // ada di object obj , nah jadi this ini mengembalikan nilai dari object obj

// var obj = {};
// obj.halo = function(){
//     console.log(this);
// }  

// obj.halo();

// // 2. function declaration 

// // this untuk function declaration ini mengembalikan nilai global atau window karena sama aja kaya 
// // ngejalanin window.buatObjectOrang() == this.buatObjectOrang() == buatObjectOrang();
 
// function buatObjectOrang(){
//     console.log(this);
// }
// buatObjectOrang();


// // 3. Constructor 
// // this untuk cara constructor , dia mirip seeprti literal , tetapi bedanya ini mengembalikan nilai object baru 
// // cara pemanggilannya mirip seperti function declaration ,tetapi bedanya ada keyword new di depan 
// // untuk membuat sebuah object baru 

// function Orang(){
//     console.log(this);
// }

// new Orang();
// var obj1 = new Orang();
// var obj2 = new Orang();


// /////////////////////////////////////////////////////////////////////

// //Membuat aplikasi sederhana dengan object 

// function Angkot(supir,penumpang,kas){
//     this.supir = supir;
//     this.penumpang = penumpang;
//     this.kas = kas ;

//     this.PenumpangNaik = function(namaPenumpang){
//         this.penumpang.push(namaPenumpang);
//         return this.penumpang; 
//     }

//     this.PenumpangTurun = function(namaPenumpang,bayar){
//         if (this.penumpang.length === 0 ) {
//             alert('penumpang kosong');
//             return false;
//         }else{
//             for(var i = 0 ; i < this.penumpang.length ; i++){
//                 if (this.penumpang[i] == namaPenumpang) {
//                     this.penumpang[i] = undefined;
//                     this.kas += bayar;
//                     return this.penumpang;
//                 }
//             }
//         }
//     } 
// }

// var angkot1 = new Angkot('farhan',[],0);
// var angkot2 = new Angkot('aan',[],0);