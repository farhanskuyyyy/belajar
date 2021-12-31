<?php 
// Sebelumnya saya pernah menggunakan beberapa function bawaan dari PHP untuk memanipulasi data string.
// Sebenarnya banyak sekali function bawaan PHP yang bisa kita gunakan untuk memanipulasi string
// https://www.php.net/manual/en/ref.strings.php 

var_dump(join(",",[1,2,3,4,5,6,7,8]));  // mengubah array menjadi string 
var_dump(implode(",",[1,2,3,4,5,6,7,8]));   // mengubah array menjadi string 
var_dump(explode(" ","Farhan Arfianto"));   // Mengubuah string menjadi array
var_dump(strtoupper("farhan arfianto"));    // mengubah mejadi uppercase
var_dump(strtolower("FARHAN ARFIANTO"));    // mengubah mejadi lowercase
var_dump(trim("   farhan    "));            // menghapus white space 
var_dump(substr("farhan arfianto",0,6));    // untuk memotong dan mengambil data dari string 
        // substr("string",awal,banyaknya)
?>