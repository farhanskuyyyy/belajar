<?php 

// Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan nilai
// Dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin dihasilkan
// Kita hanya bisa menghasilkan 1 data di sebuah function, tidak bisa lebih dari satu

// function sum(int $first,int $second){
//     $total = $first + $second;
//     return $total;
// }

// $result = sum(10,10);
// var_dump($result);

function getFinalValue(int $value){
    if ($value >= 80) {
        return "A";
    }elseif ($value >= 70 ) {
        return "B";
    }elseif ($value >= 60 ) {
        return "C";
    }else{
        return "D";
    }
}

$hasil = getFinalValue(80);
echo $hasil;

//// return type declaration

// Sama seperti pada argument, pada return value pun kita bisa mendeklarasikan tipe datanya
// Hal ini selain mempermudah kita ketika membaca tipe data kembalian function, bisa juga digunakan untuk menjaga jangan sampai kita mengembalikan tipe data yang salah di function
// Untuk mendeklarasikan tipe data kembalian function, setelah kurung () kita bisa tambahkan : diikuti tipe data kembaliannya

function sum(int $first,int $second) : int      // tambahin di sini type declarationnya 
{
    $total = $first + $second;
    return $total;
}

$result = sum(10,10);
var_dump($result);


// kalo type declaration beda sama yang di kembalikan , maka eror 

?>