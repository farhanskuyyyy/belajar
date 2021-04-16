// //HTML Collection berarti kumpulan node node yang berisi hanya element html 

// //NODE list berarti kumpulan node node yang tidak hanya element html 


// // DOM SELECTION

// // 1. getElementById() 
// //hanya satu element yang di pilih , dan mengembalikan nilai element

// const judul = document.getElementById('judul'); //meneyeleksi by id

// judul.style.color = 'red';  //mengganti style
// judul.style.backgroundColor = '#ccc';   //untuk properti yang ada tanda - (minus) , diganti menjadi camelCase
// judul.innerHTML = 'Belajar DOM';    // mengubah isi html


// // 2. getElemetsByTagName()
// //bisa memilih lebih dari satu elemet , dan mengembalikan HTML Collection 
// //HTML Collection mirip kaya array , dia punya indeks untuk masing masing value 

// const p = document.getElementsByTagName('p');

// p[1].style.color = 'red';

// // untuk mengubah semuanya bisa menggunakan looping 

// for(let i = 0; i < p.length ; i ++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// // untuk ngambil satu Element aja gini caranya 

// // walaupun hanya satu ,nilai yang dikembalikan tetep html collections

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.color = 'blue';;

// // 3. getElementByClassName()
// // ini bisa memilih berdasarkan class name , dan ini mengembalikan nilai HTML collections 
// // jadi ini berupa array , dan cara penggunaannya miri seperti array dengan disertai indeks valuenya 

// const p1 =  document.getElementsByClassName('p1');

// p1[0].innerHTML = 'Paragraph 1 Updated';


// // 4. querySelector()
// // querySelector itu mengambil element berdasarkan selector seperti css ,dan mengembalikan nilai element 
// // ,tetapi hanya satu saja , jika ada lebih dari satu , maka dipilih yang pertama saja 

// const p4 = document.querySelector('#b p');

// p4.style.backgroundColor = 'green';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');

// li2.style.backgroundColor = 'green';

// // 5. querySelectorAll()
// // ini sama seperti sebelumnya ,tetapi bedanya ini mengembalikan nilai Node List 

// const pA = document.querySelectorAll('p');

// for(let i = 0; i < pA.length ; i ++){
//     pA[i].style.backgroundColor = 'green';
// }


// ////////////////////////////////////////////////////////////////////////////////////////////////

// // Manipulation DOM

// // Manipulation Element

// // 1. innerHTML
// // mengubah element html dengan element html yang baru

// // contoh 
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Selamat Datang!';
// judul.innerHTML = '<i>Selamat Datang!</i>';

// // 2. style.propertyCSS 
// //menambahkan properti css pada element html 

// // contoh 
// const p1 = document.getElementsByTagName('p')[0];
// p1.style.backgroundColor = 'lightblue';

// // 3. setAttribute();
// // menambahkann atribut baru dalam element html 
// judul.setAttribute('name','judul_page');

// // 4. getAttribute();
// // men select atribut di dalam html 
// judul.getAttribute('name');     // liat di console 

// // 5. removeAttribute();
// // menghapus attribut element html 
// judul.removeAttribute('name');

// // 6. classList()
// // manipulasi di class element html 
//     const p2 = document.querySelector('.p2');

//     //  a.classList.add()
//     // untuk menambahkan class di element , tanpa menghilangkan class lama 
//     p2.classList.add('paragraph2');

//     //  b.classList.remove()
//     // untuk menghilang kan class 
//     p2.classList.remove('paragraph2');

//     //  c.classList.toggle()
//     // untuk menambah dan menghilangkan class, cara kerjanya seperti tombol toggle
//     p2.classList.toggle('paragraph2');
    
//     //  d.classList.item()
//     // buat ngeliat class apa aja yang ada di 1 element 
//     p2.classList.item(0);   // tergantung indeksnya 
    
//     //  e.classList.containst()
//     // buat ngecek apakah ada nama class tsb atau tidak
//     p2.classList.contains('paragraph2');
    
//     //  f.classList.replace()
//     // buat ngubah nama class
//     p2.classList.replace('paragraph2','para2');




// // Manipulasi Node


// // 1. document.createElement()
// // membuat node element baru 
//     const pBaru = document.createElement('p');
//     const liBaru = document.createElement('li');
//     const h2Baru = document.createElement('h2');

// // 2. document.createTextNode()
// // membuat node teks baru 
//     const teksBaru = document.createTextNode('Paragraph Baru');
//     const teksLiBaru = document.createTextNode('Item Baru');
//     const teksh2Baru = document.createTextNode('Judul Baru');

// // 3. Node.appendChild()
// // menambahkan child ke parent 
//     pBaru.appendChild(teksBaru);           // menggabungkan antara node element dan node teks 
//     liBaru.appendChild(teksLiBaru);           // menggabungkan antara node element dan node teks 
//     h2Baru.appendChild(teksh2Baru);           // menggabungkan antara node element dan node teks 
// //  wadah.appendChild(isi)

//     const sectionA = document.getElementById('a');
//     sectionA.appendChild(pBaru);                    // meletakkan element yang baru di buat 

// // 4. Node.insertBefore()
// // menambahkan child baru sebelum child yang ada 

//     const ul = document.querySelector('section#b ul');
//     const li2 = ul.querySelector('li:nth-child(2)');

//     ul.insertBefore(liBaru,li2);
// //  parent.insertBefore(childBaru,childSetelahnya);


// // 5. parentNode.removeChild()
// // menghapus node child 

//     const a = document.getElementsByTagName('a')[0];
//     sectionA.removeChild(a);

// // 6. parentNode.replaceChild()
// // mengganti node child 

//     const sectionB = document.getElementById('b');
//     const p4 = sectionB.querySelector('p');

//     sectionB.replaceChild(h2Baru,p4);
// //  parent.replaceChild(nodeBaru,nodeLama);


// Documentasi
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model


// /////////////////////////////////////////////////////////////////////////
// // DOM Event 
// // event pada javascript merepresentasikan sebuuah kejadian yang terjadi di dalam DOM yang dilakukan oleh user atau API

// // Cara 'mendengarkan' event 
// // 1. Event handler
//     // keywordnya = on<event>
//     // ex : onclick

// //  a. inline HTML attribute
// //      di tulis di dalam struktur element html

//     //html 
//     // <p class="p3" onclick="ubahWarna()">paragraf 3</p>

//     const p3 = document.querySelector('.p3');

//     function ubahWarna(){
//         p3.style.backgroundColor = 'lightblue';
//     }

// //  b. Element Method
//     // tanpa menambah struktur di htmlnya 
//     const p2 = document.querySelector('.p2');

//     p2.onclick = function(){
//         p2.style.backgroundColor = 'lightblue';
//     }
//     //atau
//     p3.onclick = ubahWarna;


// // 2. addEventListener()
// //  fungsinya sama ,tetapi lebih modern dan lebih mudah di terapkan 

//     const p4 = document.querySelector('section#b p');
//     //function untuk menambah item baru 

//     p4.addEventListener('click',function(){
//         const ul = document.querySelector('section#b ul');

//         const liBaru = document.createElement('li');
//         const teksLiBaru = document.createTextNode('Item Baru');
//         liBaru.appendChild(teksLiBaru);

//         ul.appendChild(liBaru);

//     });

// //// Perbedaan antara Event Handler dengan addEventListener 

// // jika ada event dengan element yang sama ,maka 
// // 1. event handler akan menimpa event yang sebelumnya 
//     p2.onclick = function(){
//         p2.style.backgroundColor = 'lightblue';
//     }
//     p2.onclick = function(){
//         p2.style.color = 'red';
//     }
// // 2. addEventListener akan menambah eventnya 
//     p3.addEventListener('click',function() {
//         p3.style.backgroundColor = 'lightblue';
//     })
//     p3.addEventListener('click',function() {
//         p3.style.color = 'red';
//     })

// //// Event List 
// const judul = document.getElementById('judul');

// // dblclick
// judul.addEventListener('dblclick',function() {
//     judul.style.backgroundColor = 'salmon';
// })

// // mouseenter
// judul.addEventListener('mouseenter',function() {
//     judul.style.backgroundColor = 'red';
// })

// judul.addEventListener('mouseenter',function() {
//     const ul = document.querySelector('section#b ul');

//         const liBaru = document.createElement('li');
//         const teksLiBaru = document.createTextNode('Item Baru');
//         liBaru.appendChild(teksLiBaru);

//         ul.appendChild(liBaru);
// })

// // mouseleave
// judul.addEventListener('mouseleave',function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.querySelector('li:nth-child(4)');

//     ul.removeChild(liBaru);
// })

// judul.addEventListener('mouseleave',function() {
//     judul.style.backgroundColor = 'blue';
// })

// // Dokumentasi 
// // https://developer.mozilla.org/en-US/docs/Web/Events





