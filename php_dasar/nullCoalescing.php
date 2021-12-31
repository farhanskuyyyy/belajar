<?php 

// Sebelumnya kita tahu bahwa data kosong direpresentasikan dengan data NULL di PHP
// Dan hal yang paling repot di PHP adalah mengecek apakah sebuah data ada atau tidak, dan juga apakah data tersebut isinya null atau bukan
// Biasanya untuk melakukan itu, kita perlu menggunakan pengecekan if statement dengan function isset($variable)
// Namun untungnya di php ada null coalescing operator menggunakan tanda ??

// contoh tanpa null coalescing 
$data = "hahahha";

if (isset($data)) {
    $action =  $data;
}else{
    $action = "nothing";
}

echo $action;

// pake null coalescing 

$action = $data ?? 'nothing';
echo $action;
?>