<?php
// Kita bisa mengirim informasi ke function yang ingin kita panggil
// Untuk melakukan hal tersebut, kita perlu menambahkan argument atau parameter di function yang sudah kita buat
// Cara membuat argument sama seperti cara membuat variabel
// Argument ditempatkan di dalam kurung () di deklarasi function
// Argument bisa lebih dari satu, jika lebih dari satu, harus dipisah menggunakan tanda koma

// function sayHello($name){
//     echo 'Hello '.$name;
// }

// sayHello('farhan');


//// default value 

// PHP mendukung default argument value
// Fitur ini memungkinkan jika ketika kita memanggil function tidak memasukkan parameter, kita bisa menentukan data default nya apa

// function sayHello($name="anonymous"){
//     echo 'Hello '.$name;
//     }

// sayHello('farhan');
// sayHello();

//// type declaration 

// Sama seperti variable, argument di PHP bisa kita masukkan data yang dinamis
// Kadang terlalu dinamis juga menyulitkan jika ternyata kita hanya ingin membuat function yang menggunakan argument dengan tipe data tertentu
// Untungnya di PHP, kita bisa menambahkan type data di argument, sehingga PHP akan melakukan pengecekan ketika kita mengirim value ke function tersebut
// Jika tipe data value tidak sesuai, maka akan terjadi error
// Secara default PHP akan melakukan percobaan konversi tipe data secara otomatis, misal jika kita menggunakan tipe int, tapi kita mengirim string, maka PHP akan otomatis mengkonversi string tersebut menjadi int

// function sum(int $first,int $last){
//     echo $first + $last;
// }

// sum(100,100);
// sum('100','100');   // otomatis conversi dari string ke int 
// sum(true,false);    // otomatis conversi dari boolean ke int 
// // sum([],[]);         // error


//// variable-length argument list 

// Variable-length argument list merupakan kemampuan dimana kita bisa membuat sebuah parameter yang menerima banyak value
// Variable-length argument list secara otomatis akan membuat argument tersebut menjadi array, namun kita tidak perlu manual mengirim array ke functionnya
// Variable-length argument list hanya bisa dilakukan di argument posisi terakhir
// Untuk membuat variable-length argument list, kita bisa menggunakan tanda … (titik tiga kali) sebelum nama argument


function sumAll(...$values){
    $total = 0;
    foreach($values as $value){
        $total += $value;
    }
    echo "total = ". implode(" + ",$values) . " = " . $total;
}


sumAll(23,1,123,54,123,23);         // manggilnya jadi int , tapi nanti di ubah jadi array pas nyampe di function 

$array =[23,1,123,54,123,23];       
sumAll(...$array);                  // tambahin ... biar arraynya jadi int 

?>