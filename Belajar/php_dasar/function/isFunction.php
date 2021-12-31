<?php 
// PHP memiliki banyak sekali function dengan prefix is_
// Function-function ini rata-rata digunakan untuk mengecek tipe data dari sebuah data
// https://www.php.net/manual/en/ref.var.php 
// function ini mengembalikan nilai boolean 

$data = "sample";
var_dump(is_bool($data));
var_dump(is_string($data));
var_dump(is_int($data));
var_dump(is_callable($data));
var_dump(is_float($data));


?>