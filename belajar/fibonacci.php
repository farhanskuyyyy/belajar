<?php 
    function fibonacci($n){
        $angkaPertama = 0;
        $angkaKedua = 1;
        $numbers = [$angkaPertama,$angkaKedua];
        for ($i=0; $i < $n ; $i++) { 
            $hasil = $angkaPertama + $angkaKedua;
            $numbers[] = $hasil;
            $angkaPertama = $angkaKedua;
            $angkaKedua = $hasil;
        };
        return $numbers;
    };

    // echo implode(",",fibonacci(15));

    function bubbleSort($arr){
        $putaran = 0;
        for ($i=0; $i < count($arr) ; $i++) { 
            for ($j=0; $j < count($arr) - 1; $j++) { 
                $putaran++;
                if ($arr[$j] > $arr[$j + 1]) {
                    $tmp = $arr[$j];
                    $arr[$j] = $arr[$j+1];
                    $arr[$j + 1] = $tmp;
                };
            };
        };
        echo $putaran;
        echo "<br>";
        echo implode(",",$arr);
    }

    function bubbleSortInfo($arr){
        $putaran = 0;
        for ($i=0; $i < count($arr) ; $i++) {
            $swapped  = false; 
            echo "<br>";
            echo "Looping i ke - ".$i;
            for ($j = 0; $j < count($arr) - 1; $j++) { 
                $putaran++;
                echo "<br>";
                echo "yang di cek angka ".$arr[$j];
                if ($arr[$j] > $arr[$j + 1]) {
                    $tmp = $arr[$j];
                    $arr[$j] = $arr[$j+1];
                    $arr[$j + 1] = $tmp;
                    $swapped      = true;
                };
                echo "<br>";
                echo "putaran ke- ".$putaran;
                echo " =  \t";
                echo implode(",",$arr);
                echo "<br>";
            };
            if ( !$swapped ) {
                break;
            }
            echo "<br> Hasil = ";
            echo implode(",",$arr);
            echo "<br>";
        };
        echo $putaran;
        echo "<br>";
        echo implode(",",$arr);
    }

    // bubbleSortInfo([23,34,1,2,7,6,5,10]);

    function bubbleSortYt( $arr ) {
        $length = count( $arr );
        $boundary = $length - 1;
        $comparisons  = 0;
      
        for ( $i = 0; $i < $length; $i++ ) {
          $swapped  = false;
          $newBoundary  = 0;
          echo "looping ke - ".$i;
          echo "<br>";
          for ( $j = 0; $j < $boundary; $j++ ) {
              $comparisons++;
              echo "perbandingan ke-".$comparisons;
              echo "\t";
              echo "<br>";
              echo "nilai = ".$arr[$j]."\t";
              echo implode(",",$arr);
              echo "<br>";
            if ( $arr[ $j ] > $arr[ $j + 1 ] ) {
              $tmp            = $arr[ $j + 1 ];
              $arr[ $j + 1 ]  = $arr[ $j ];
              $arr[ $j ]      = $tmp;
              $swapped      = true;
              $newBoundary  = $j;
            } // end of if conditional
      
          } // end of inner for loop
          $boundary = $newBoundary;
          if ( !$swapped ) {
            break;
          }
          echo "Hasil = \t";
          echo implode(",",$arr);
          echo "<br>";
          echo "<br>";

        } // end of first for loop
        echo '<h4>' . $comparisons . ' Comparisons</h4>';
        echo implode(",",$arr);
    };

    bubbleSortYt([23,34,1,2,7,6,5,10])

?>