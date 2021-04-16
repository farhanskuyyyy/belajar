// DOM Traversal 
// // DOM Penelusuran 
// // berfungsi untuk menelusuri parent,child,sibling berdasarkan dom tree

// const close = document.querySelector('.close');
// const container = document.querySelector('.container');
// const card = document.querySelector('.card');


// close.addEventListener('click',function() {
//     // container.removeChild(card);         // bisa jg tp 
//     card.style.display = 'none';
// })



const close = document.querySelectorAll('.close');

// untuk mendapatkan satu satu class close ,menggunakan pengulangan 

for(let i = 0 ; i < close.length ; i++){
    close[i].addEventListener('click',function(e){
        // console.log(e)  // e ini berisi banyak object event 
        e.target.parentElement.style.display = 'none';
    })
}


// atau bisa menggunakan forEach 

close.forEach(function(i){
    i.addEventListener('click',function(e){
        e.target.parentElement.style.display = 'none';
    })
})


// ada beberapa function untuk dom traversal 
const nama = document.querySelector('.nama');

        // Method                                           // Hasil

// 1. parentNode();                                          node
// Mengambil Node Parentnya 
console.log(nama.parentNode);

// 2. parentElement();                                       Element
// Mengambil Element Parentnya 
console.log(nama.parentElement);
console.log(nama.parentElement.parentElement);

// 3. nextSibling();                                         node   
// Mengambil Node setelahnya yang satu parent 
console.log(nama.nextSibling);  // Menghasilkan node 

// 4. nextElementSibling();                                 Element
// Mengambil Element setelahnya yang satu parent 
console.log(nama.nextElementSibling);

// 5. previousSibling();                                    node
// Mengambil Node sebelumnya yang satu parent 
console.log(nama.previousSibling);

// 6. previousElementSibling();                             Element
// Mengambil Element sebelumnya yang satu parent 
console.log(nama.previousElementSibling);



////// preventDefault 

// untuk menghentikan aksi default dari sebuah Element 
// contohnya element a yang automatis ketika dijalankan , dia akan merefresh halamannya 

close.forEach(function(i){
    i.addEventListener('click',function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    })
})



/////// event Bubling 
//  jadi sebenernya jika kita menambahkan event pada suatu element , maka secara default parent dari element tsb 
//  juga ikut memiliki event 

//contohnya 
close.forEach(function(i){
    i.addEventListener('click',function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();     // menghentikan kebiasaan default element 
        e.stopPropagation();    // menghentikan event parentnya 
    })
})

const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
    card.addEventListener('click',function(){
        alert('kartu di klik');
    })
})

// jadi ketika close di tekan , event close dan cards akan dijalankan 
// untuk mengatasi hal tsb , bisa digunakan function stopPropagation()


// nah dengan adanya sifat bubling tsb, kita bisa manfaatkan sbg berikut 

const container = document.querySelector('.container');     // seleksi untuk parent terluar 

container.addEventListener('click',function(e){             // e ini berisi object untuk event 
    if(e.target.className == 'close'){                      // tambahkan kondisi untuk mencari target yang sesuai
        e.target.parentElement.style.display = 'none';      // aksinya 
    }
})
