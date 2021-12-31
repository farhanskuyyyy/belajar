$(document).ready(function(){
    $('.box').css('backgroundColor','blue');    // seleksi class
    $('.boxes').css('backgroundColor','red');   // dia akan mewarnai semua yang ada classnya 
    $('.boxes:first').css('backgroundColor','magenta');   // untuk spesifik yang di tuju
    $('.boxes:eq(2)').css('backgroundColor','salmon');   // atau ini , menggunakan indeks 

    //--------Event--------// 

    $('#judul').click(function(){
        $('.box').css('backgroundColor','cyan'); 
    })
    $('.box').mouseenter(function(){
        $('.box').css('backgroundColor','cyan'); 
    })
    $('.box').mouseleave(function(){
        $('.box').css('backgroundColor','blue'); 
    })
    
    // fungsi this ini untuk menyeleksi objek itu sendiri , jadi bisa dinamis sesuai yang di klik 
    // ini untuk case class memiliki beberapa element 
    $('.boxes').mouseenter(function(){
        $(this).css('backgroundColor','blue'); 
    })

    $('.boxes').mouseleave(function(){
        $(this).css({
            'backgroundColor':'red',
            'color' : 'white'
        }); 
    })


    //-------Get And Set Nilai Jquery--------// 
    $('form').submit(function(event){
        let text = $('#inpTeks').val();     //fungsi val() bisa get , dan set jika memiliki parameter value 
        $('#teks').text(text);              //fungsi text() bisa untuk get ,dan set jika memiliki parameter text element
                                            // fungsi html() bisa get , dan set jika memiliki parameter element html 
        
    
        // Mencegah sifat default 
        event.preventDefault();

    })

    //------- Menambah dan Menghapus -------- // 

    // Menambah 
    // 1. Append
    // menambah node di paling akhir di dalam lingkup tertentu 
    $('.box2').append('<div>Append</div>'); 
    // 2. Prepend
    // menambah node di paling awal di dalam lingkup tertentu 
    $('.box2').prepend('<div>Prepend</div>'); 
    // 3. Before
    // menambah node di tempat sebelum selectornya  
    $('.box2').before('<div>Before</div>'); 
    // 4. After 
    // menambah node di tempat setelah selectornya  
    $('.box2').after('<div>After</div>'); 

    //Menghapus 
    // 1. Remove
    // Menghapus semua Element dan isinya 
    $('.box3').remove();
    // 2. Empty
    // Hanya mengapus isinya saja ,elementnya tidak
    $('.box3').empty();


    // --------- Manipulasi Class ------- // 

    $('.box2').dblclick(function(){
        // addClass
        // Menambah Class
        // $('.box2').addClass('change');
        //removeClass
        // Menghapus Class
        // $('.box2').removeClass('change');
        //toggleClass
        // Menghapus dan menambah Class
        $('.box2').toggleClass('change');

    })
})