
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'white';
    pincel.fillRect(0, 0, 1920, 1080);

    function desenhaCirculo(x, y, r) {
        pincel.fillStyle = 'black';
        pincel.beginPath();
        pincel.arc(x, y, r, 0, 2 * Math.PI);
        pincel.fill();
    }

    function limpaTela(){
        pincel.clearRect(0, 0, 1920, 1080);  
    }

    function mensagem () {
        console.log('chamei mensagem');
    }

    var x = 20;
    function animacao () {
    limpaTela();
    desenhaCirculo(x, 500, 30);
    x++;
    }
    
    setInterval(animacao, 2);
