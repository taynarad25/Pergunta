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

function NaoAceitar(btn) {
    AbrirPopUp();
    tela = Random()
    btn.style.position = "absolute";
    btn.style.top = tela[0] + "vh";
    btn.style.left = tela[1] + "vh";
}

function Random(){
    var rand = [Math.random(), Math.random()];
    var tela = [window.screen.width, window.screen.height];
    if(tela[0] > 1050){
        tela[0] = (tela[0] * rand[0]) / 15;
        tela[1] = (tela[1] * rand[1]) / 4;
    }else if(tela[0] > 720 && tela[0] < 1050) {
        tela[0] = (tela[0] * rand[0]) / 5;
        tela[1] = (tela[1] * rand[1]) / 14;
    }else{
        tela[0] = (tela[0] * rand[0]) / 5;
        tela[1] = (tela[1] * rand[1]) / 20;
    }
    return tela;
}

function AbrirPopUp(){
    tela = Random()
    varWindow = window.open (
    'popup.html',
    'pagina',
    "popup=yes, width=300, height=250, scrollbars=no" );
    setTimeout(() => {
        FecharPopup(varWindow);
    }, 1000);
}

function FecharPopup(varWindow){
    fecharWindow = varWindow.close()
}