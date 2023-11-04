function Beijos() {
    console.log("Sim")
    var img = document.createElement("IMG");
    img.src = "05b4369c0d8d79bca1452a74fb6a5cbe.gif";
    document.getElementById('sim').appendChild(img);
}

function Reset() {
    console.log("Não")
    alert("Você não pode clicar nesse botão! 😭😭")
    location.reload()
}