function Beijos() {
    console.log("Sim");
    var img = document.createElement("IMG");
    img.src = "05b4369c0d8d79bca1452a74fb6a5cbe.gif";
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

function Reset(btn) {
    console.log("Não");
    if(Math.random() > 0.5){
        var width = 50;
        var height = 50;
    }else{
        var width = 100;
        var height = 100; 
    }
  
    btn.style.position = "absolute";
    btn.style.top = Math.random() * width + "vh";
    btn.style.left = Math.random() * height + "vh";
}