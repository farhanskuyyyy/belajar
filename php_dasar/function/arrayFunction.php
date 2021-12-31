<?php 
// Di PHP juga terdapat banyak sekali function bawaan yang bisa kita gunakan untuk memanipulasi data Array
// https://www.php.net/manual/en/ref.array.php 
 
$array = [1,2,3,4,5,6,7,8,9,10];

// array_map(callable,array)
// function ini salah satu casenya bisa untuk mengalikan semua isi array 

$mapFunction = fn(int $value) => $value * 10 ;
$dataResult = array_map($mapFunction,$array);
var_dump($dataResult);

// rsort();
// function ini untuk mengurutkan array descending 
rsort($array);  
var_dump($array);

// array_keys()
// function ini untuk mengambil key / index array 
var_dump(array_keys($array));

// array_values()
// function ini untuk mengambil value dari array 
var_dump(array_values($array));

// shuffle()
// function ini untuk mengacak isi array
shuffle($array);
var_dump($array);

?>