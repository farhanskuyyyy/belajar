<?php
// PHP mendukung konsep yang bernama variable function
// Variable function adalah kemampuan memanggil sebuah function dari value yang terdapat di sebuah variable
// Untuk menggunakan variable function, kita bisa secara langsung memanggil $namaVariable(), jika ingin menambahkan argument, kita bisa menggunakan $namaVariable(argument)

function sayFunction(){
    echo "function say";
}

$variabaleBuatDipanggil = "sayFunction";    // nyimpen function sebagai variable
$variabaleBuatDipanggil();                  // panggil fuunction yang ada di variable


///////// cara lain 

function sayHello(string $name,$filter){
    $finalName = $filter($name);
    echo "Hello $finalName" . PHP_EOL;
}

function filter(string $name):string
{
    return "filter simple";
}

sayHello("farhan","filter");            // ini cara jadiin function sebagai variable gini 
// function filter akan dipanggil sebagai sebuah function dan menerima param $name 


?>