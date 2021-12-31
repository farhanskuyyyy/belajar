<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    html,body{
        height : 100%;
    }
    body{
        text-align: center;
    }
    .biru-muda{
        background-color: lightblue;
    }
    .kotak{
        width : 25px;
        height : 25px;
        margin : 10px auto;
    }
    .red{
        background-color:red;
    }
    .green{
        background-color:green;
    }
    .blue{
        background-color:blue;
    }

    </style>
</head>
<body>
    <h1>Bermain Dengan Warna</h1>
    <button type="button" id="tUbahWarna">Toggle Ubah Warna! </button>
    <br>
    <br>
    <br>
    <br>
    <div class="kotak red">
    </div>
        <input type="range" name="red" min="0" max="255">
    <div class="kotak green">
    </div>
        <input type="range" name="green" min="0" max="255">
    <div class="kotak blue">
    </div>
        <input type="range" name="blue" min="0" max="255">
</body>
    <script src="script.js"></script>
</html>