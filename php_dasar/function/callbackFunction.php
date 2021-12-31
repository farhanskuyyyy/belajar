<?php 
// Callback adalah sebuah mekanisme sebuah function memanggil function lainnya sesuai dengan yang diberikan di argument
// Hal ini sebenarnya sudah kita lakukan di materi Variable Function dan Anonymous Function
// Namun di PHP ada cara lain untuk implementasi callback, yaitu menggunakan tipe data callable
// Dan untuk memanggil callback function tersebut, kita bisa menggunakan function call_user_func(callable, arguments)

function sayHello(string $name,callable $filter){       // callable berarti ,sebuah function 
    // $finalName = $filter($name);         // cara sebelumnya sama saja kaya yang di bawah ini 
    $finalName = call_user_func($filter,$name);
    echo "Hello $finalName";
}

sayHello("farhan",function($name){ return strtoupper($name);});
sayHello("farhan", fn($name) => strtoupper($name));
sayHello("farhan","strtoupper");
sayHello("farhan","strtolower");
?>