const container = document.querySelector('.container');
const thumbnail = document.querySelectorAll('.thumbnail');
const thumbs = document.querySelectorAll('.thumb');
const img = document.querySelector('.imgSorot');

container.addEventListener('click',function(e){
    if(e.target.className == 'thumb'){
        img.src = e.target.src;
        img.classList.add('fade');
        setTimeout(function(){
            img.classList.remove('fade');
        },1000)

        thumbs.forEach(function(thumb){
            if (thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }
        })

        e.target.classList.add('active');
    }
})