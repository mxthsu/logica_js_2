
    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2*3.14);
        pincel.fill();
    }

    function desenhaFlor (x, y) {

        desenhaCirculo(x, y, 25, 'red');
        desenhaCirculo(x-50, y, 25, 'orange');
        desenhaCirculo(x, y-50, 25, 'yellow');
        desenhaCirculo(x+50, y, 25, 'black');
        desenhaCirculo(x, y+50, 25, 'darkblue');
    }

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    desenhaFlor(500, 200);
