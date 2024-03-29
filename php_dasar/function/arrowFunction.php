<?php 
// Arrow function diperkenalkan di PHP 7.4 sebagai alternative anonymous function yang lebih sederhana pembuatannya
// Secara garis besar, sebenarnya arrow function dan anonymous function adalah dua hal yang sama
// Hal yang membedakan di arrow function adalah, secara otomatis variable diluar closure bisa digunakan, tidak seperti di anonymous function yang harus disebutkan secara manual menggunakan kata kunci use
// Pembuatan arrow function tidak menggunakan kata kunci function, melainkan fn
// Arrow function di khususnya untuk pembuatan function yang sederhana

$firstName = "farhan";
$lastName = "Arfianto";     // arrow function bisa akses di luar function tanpa kata kunci use 
$sayHello = fn() => "Hello $firstName $lastName";       // auto mereturn data 

echo $sayHello();
?>