function pilihanKomputer(){
    const com = Math.random();
    if (com < 0.34) return 'gajah';
    if (com > 0.34 && com < 0.67 ) return 'semut';
    return 'orang';
}


function getHasil(p,com){
    if(p == com) return 'Seri!';
    if(p == 'gajah') return (com == 'orang') ? hasil = 'Menang ! ' : hasil = 'Kalah!';
    if(p == 'orang') return (com == 'semut') ? hasil = 'Menang ! ' : hasil = 'Kalah!';
    if(p == 'semut') return (com == 'gajah') ? hasil = 'Menang ! ' : hasil = 'Kalah!';
}



// // cara statis 
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function(){
//     const com = pilihanKomputer();
//     const p = pGajah.className;
//     const hasil = getHasil(p,com);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src','img/'+com+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil ;
// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function(){
//     const com = pilihanKomputer();
//     const p = pSemut.className;
//     const hasil = getHasil(p,com);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src','img/'+com+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil ;
// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click',function(){
//     const com = pilihanKomputer();
//     const p = pOrang.className;
//     const hasil = getHasil(p,com);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src','img/'+com+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil ;
// })

// cara dinamis 

const pilihan = document.querySelectorAll('li img');    // select img di dalam li 
pilihan.forEach(function(pil){                          // looping li , untuk seleksi per img 
    pil.addEventListener('click',function(){            // ditambah event untuk menangkap per imgnya 
        const com = pilihanKomputer();
        const p = pil.className;
        const hasil = getHasil(p,com);

        putar();        // memanggil fungsi untuk memutar gambar 

        setTimeout(function(){      //  berfungsi untuk menampilkan hasil setelah waktu yang ditentukan 
            const imgKomputer = document.querySelector('.img-komputer');   // seleksi gambar komputer 
            imgKomputer.setAttribute('src','img/'+com+'.png');  // mengubah gambar komputer 

            const info = document.querySelector('.info');   // menampilkan hasil dari suwit 
            info.innerHTML = hasil ;
        },1000)
        
    })
})

function putar(){
    const imgKomp = document.querySelector('.img-komputer');
    const gambar = ['orang','semut','gajah'];
    const waktuAwal = new Date().getTime();     // info waktu awal untuk di compare 

    let i = 0;
    setInterval(function(){
        if (new Date().getTime() - waktuAwal > 1000) {      // menghitung selisih waktu untuk di jadikan titik finish
            clearInterval;      // menghapus interval untuk memberhentikan 
            return;             // keluar function 
        }
        imgKomp.setAttribute('src','img/'+gambar[i++]+'.png');    
        if(i == gambar.length){
            i = 0;
        }
    },100)
}