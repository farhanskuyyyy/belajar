const tUbahWarna = document.getElementById('tUbahWarna');

//event click untuk mengubah class 
tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue';
    document.body.classList.toggle('biru-muda');
}

// tambah tombol baru 
const tBaru = document.createElement('button');
const teksTBaru = document.createTextNode('Acak Warna!');
tBaru.appendChild(teksTBaru);
tBaru.setAttribute('type','button');

// node manipulation after()
tUbahWarna.after(tBaru);

tBaru.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})


// mengubah warna dengan inputan range 
const red = document.querySelector('input[name=red]');
const green = document.querySelector('input[name=green]');
const blue = document.querySelector('input[name=blue]');

red.addEventListener('input',function () {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

green.addEventListener('input',function () {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

blue.addEventListener('input',function () {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})


// mengubah warna dengan menggerakkan mouse 

document.body.addEventListener('mousemove',function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255 ) // ini untuk menentukan range dr sumbu x / lebar layar 
    const yPos = Math.round((event.clientY / window.innerHeight) * 255 ) // ini untuk menentukan range dr sumbu y / tinggu layar 

    document.body.style.backgroundColor = 'rgb('+xPos+','+ yPos +',0)'
})