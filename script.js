function Aceitar() {
    var img = document.createElement("IMG");
    img.src = "amor.gif";
    setTimeout(() => {
        document.getElementById('novaDiv').appendChild(img);
    }, 500);
}

function Limpar() {
    var div = document.getElementById('novaDiv');
    for (child of div.children){
        child.remove();
    }
}

function Random(btn) {
    var rand1 = Math.random()
    var rand2 = Math.random()
    var telaW = window.screen.width
    var telaH = window.screen.height
    if(telaW > 800){
        telaW = (telaW * rand1) / 15
        telaH = (telaH * rand2) / 4
    }else {
        telaW = (telaW * rand1) / 5
        telaH = (telaH * rand2) / 15
    }
    btn.style.position = "absolute";
    btn.style.top = telaW + "vh";
    btn.style.left = telaH + "vh";
}

function Cuidado() {
    var img = document.createElement("IMG");
    img.src = "error.gif";
    setTimeout(() => {
        document.getElementById('novaDiv').appendChild(img);
    }, 500);
}