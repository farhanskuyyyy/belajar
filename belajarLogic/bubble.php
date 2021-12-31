<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        function bubbleAsc($arr){
            for ($i=0; $i < count($arr); $i++) { 
                for ($j=0; $j < count($arr) - 1; $j++) { 
                    if($arr[$j] > $arr[$j + 1]){
                        // echo implode(",",$arr);
                        // echo "<br>";
                        // echo "<br>";
                        $tmp = $arr[$j];
                        $arr[$j] = $arr[$j + 1];
                        $arr[$j + 1] = $tmp;
                    }
                }
            }
            return $arr;
        }

        $hasill = bubbleAsc([23,434,5,56,2,1,5,6]);
        $hasill2 = implode(",",$hasill);
        echo $hasill2; 

        function bubble($arr){
            for($i = 0; $i < count($arr) ; $i++){
                for($j = 0 ; $j < count($arr) - $i - 1 ; $j++){
                    if ($arr[$j] > $arr[$j + 1]) {
                        $tmp = $arr[$j];
                        $arr[$j] = $arr[$j + 1];
                        $arr[$j+1] =  $tmp;
                    };
                };
            };
            print_r($arr);
        }

        function bintangAsc($n){
            for($i = 1;$i < $n; $i++){
                for($j = 0; $j < $i ; $j++){
                    echo "*";
                };
                echo "<br>";
            };
            for($i = $n ;$i > 0;  $i-- ){
                for ($j=0; $j < $i; $j++) { 
                    echo "*";
                };
                echo "<br>";
            }
        }

        function bintangDesc($n){
            for($i = $n ;$i > 0;  $i-- ){
                for ($j=0; $j < $i; $j++) { 
                    echo "*";
                };
                echo "<br>";
            }
        }

        // bintangAsc(10);

        // $numbers = [10,2,3,4,5,6,12,123,442];
        // bubble($numbers);

        function fibonacci($n){
            $first = 0;
            $second = 1;
            
            $array = [0,1];
            for ($i=0; $i < $n ; $i++) { 
                $hasil = $first + $second;
                // array_push($array,$hasil);
                $array[] = $hasil;

                $first = $second;
                $second = $hasil;
            }
            return $array;
        }
        // $hasil1 = fibonacci(15);;
        // $hasil = implode(", ",$hasil1);
        // echo $hasil;
    ?> 
    <script>
        function bubble(nilai) {
            for(let i = 0;i < nilai.length; i++){
                console.log(nilai);    
                for(let j = 0; j < (nilai.length -i -1 ); j++){
                    if (nilai[j] > nilai[j + 1]) {
                    let tmp = nilai[j] ;
                    nilai[j] = nilai[j+1];
                    nilai[j+1] = tmp;
                    console.log(j);    
                    console.log(nilai);    
                    }
                console.log(nilai);    
                }
                console.log('putarannn ke'+i);
                console.log(nilai);    
            }
            console.log(nilai);    
        
        }

        function bblSort(arr){
     
            for(var i = 0; i < arr.length; i++){
                
                // Last i elements are already in place  
                for(var j = 0; j < ( arr.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration 
                    // is greater than the next iteration
                    if(arr[j] > arr[j+1]){
                        
                    // If the condition is true then swap them
                    var temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j+1] = temp
                    }
                }
            }
            // Print the sorted array
            console.log(arr);
        }

        function fibonacci(n){
            let first = 0;
            let second = 1;
            
            let array = [0,1];
            for(let i = 0; i < n ; i++){
                let hasil = first + second;
                array.push(hasil);

                first = second ;
                second = hasil;
            }
            return array;
        }
        

        let array = [212,24,5,6,73,2,1,7,2,10];

        console.log(fibonacci(15));
        // bubble(array);
    </script>

</body>
</html>