<?php 
// Reference adalah mengakses variable yang sama dengan nama variable yang berbeda
// Reference di PHP tidak sama dengan reference di bahasa pemrograman seperti C / C++ yang memiliki fitur pointer
// Analogi Reference itu seperti file, jika variable adalah file, dan value nya adalah isi file nya, maka reference adalah membuat shortcut (di Windows) atau alias (di Linux / Mac) terhadap file yang sama
// Saat kita mengubah isi value dari reference, maka secara otomatis value variable aslinya pun berubah
// Untuk membuat reference terhadap variable, kita bisa menggunakan karakter & 

// Pertama, PHP Reference bisa memungkinkan kita bisa membuat beberapa variable menuju ke value yang sama

$name = "farhan";

$otherName = &$name;        // shortcut/reference ke variable name
$otherName = "buuudiiiiiiii".PHP_EOL;
echo $name;

// Selanjutnya yang bisa dilakukan di PHP adalah, mengirim data ke function dengan reference

// tanpa reference variable counter tidak akan berubah ketika di increment di dalam function 
function increment($value){
    $value++;
}

$counter = 1;
increment($counter);
echo $counter.PHP_EOL;


// pake reference , variable counter akan berubah ketika di increment di dalam function 
function incrementReference(&$value){
    $value++;
}

$counter = 1;
incrementReference($counter);
incrementReference($counter);
incrementReference($counter);
echo $counter.PHP_EOL;

// PHP juga bisa mengembalikan reference pada function
// Namun hati-hati, gunakan fitur ini jika memang ada alasannya, karena fitur ini bisa membingungkan


?>
