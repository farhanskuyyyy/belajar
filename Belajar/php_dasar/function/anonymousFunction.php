<?php 
// Anonymous function adalah function tanpa nama, di PHP disebut juga dengan Closure
// Anonymous function biasanya digunakan sebagai argument atau sebagai value di variable
// Anonymous function membuat kita bisa mengirim function sebagai argument di function lainnya

// biasanya anonymous functin di simpan di variable 
// dan variablenya bisa dipanggil sebagai function 

$sayHello = function (string $name){
    echo "Hello $name";
};                                      // kalo anon func di variable wajib pake ; 

$sayHello("farhan");


// anon func sebagai argument 
function sayGoodBye($name,$filter){
    $finalName = $filter($name);
    echo "Good Bye $finalName";
}

sayGoodBye("farhan",function(string $name){
    return strtoupper($name);       // ini anon func di pakai sebagai argument , jadi gausah bikin function biasa 
});


// Mengakses Variable di Luar Closure

// Secara default, anonymous function tidak bisa mengakses variabel yang terdapat diluar function
// Jika kita ingin menggunakan variable yang terdapat diluar anonymous function, kita perlu secara explicit menyebutkannya menggunakan kata kunci use lalu diikuti variable-variable yang ingin kita gunakan

$firstName = "farhan";      // ketika variable ini di pake di function , dia tidak akan bisa di ganti ketika sudah di deklarasikan use di function 
$lastName = "arfiantao";    // jadi seperti variable constant 

$sayHelloFarhan = function() use($firstName,$lastName){     // pake kata kunci use ,untuuk mengakses global variable
    echo "hello $firstName $lastName";
};

$sayHelloFarhan();
?>