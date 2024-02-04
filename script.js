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
    AbrirPopUp();
    var rand1 = Math.random()
    var rand2 = Math.random()
    var telaW = window.screen.width
    var telaH = window.screen.height
    if(telaW > 1050){
        telaW = (telaW * rand1) / 15;
        telaH = (telaH * rand2) / 5;
    }else if(telaW > 720 && telaW < 1050) {
        telaW = (telaW * rand1) / 5;
        telaH = (telaH * rand2) / 14;
    }else{
        telaW = (telaW * rand1) / 5;
        telaH = (telaH * rand2) / 20;
    }
    btn.style.position = "absolute";
    btn.style.top = telaW + "vh";
    btn.style.left = telaH + "vh";
}

function AbrirPopUp(){
    varWindow = window.open (
    'popup.html',
    'pagina',
    "popup=yes, width=350, height=255, top=100, left=110, scrollbars=no" );
    setTimeout(() => {
        FecharPopup(varWindow);
    }, 2000);
}
function FecharPopup(varWindow){
    fecharWindow = varWindow.close()
}