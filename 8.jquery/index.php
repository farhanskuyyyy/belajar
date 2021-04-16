<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    *{
        margin :0;
        padding:0;
    }
    body{
        text-align : center ;
    }
    
    .box{
        width:600px;
        height:400px;
        border: 5px solid black;
        margin: 10px auto;
        overflow: auto;
    }

    .box2{
        width:100px;
        height:70px;
        border: 1px solid black;
        margin: 10px auto;
        overflow: auto;
    }

    .box3{
        width:100px;
        height:70px;
        border: 1px solid black;
        margin: 10px auto;
        overflow: auto;
        background-color:white;
    }
    

    .boxes {
        width:200px;
        height:200px;
        border:2px solid black;
        /* margin: 10px auto; */
        float: left;
        box-sizing: border-box;
    }
    .change{
        background-color:white;
    }
    </style>
</head>
<body>
    <h1 id="judul">Belajar Jquery</h1>
    <div class="box">
        <div class="boxes">BOX 1</div>
        <div class="boxes">BOX 2</div>
        <div class="boxes">BOX 3</div>
    BOX
    </div>

    <div class="box">
        <h1>Mengubah Element</h1>
        <br>
        <p id="teks">Paragraph 1</p>
        <br>
        <form action="">
            <input type="text" id="inpTeks">
            <input type="submit">
        </form>
        <br>
        <h1>Menambah Element</h1>
        <div class="box2">
            <p>paragraf</p>
        </div>
        <br>
        <h1>Menghapus Element</h1>
        <div class="box3">
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="script.js"></script>
</html>