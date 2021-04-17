<?php 
// Kadang kita biasa mengakses data array menggunakann perulangan
// Mengakses data array menggunakan perulangan sangat bertele-tele, kita harus membuat counter, lalu mengakses array menggunakan counter yang kita buat
// Namun untungnya, di PHP terdapat perulangan for each, yang bisa digunakan untuk mengakses seluruh data di Array secara otomatis

// kalo pake indeks array 
$names = ['farhan','arfianto'];

foreach($names as $name){
    echo $name;
    echo "\n";
}


// kalo pake key array / array asosiative 
$mobil = [
    'merk' => 'toyota',
    'ban'  => 'pirelli'
];

foreach($mobil as $key => $part){
    echo 'key '.$key .' = '.$part;
    echo "\n";
}
?>
