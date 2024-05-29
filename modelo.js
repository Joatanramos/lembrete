function lembrete() {
    var lem = document.getElementById('txtd')
    var res = document.getElementById('ft')
    var l = Number(lem.value)
    var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
    if (l != 12) {
        res.innerHTML = 'Bunito em baby'
    } else {
        res.innerHTML = 'FELIZ DIA DOS NAMORADOS PRINCESA! <br> TE AMO!! \u{1F49E} '
        img.setAttribute('src', 'lembrete.JPG')
    }
    res.appendChild(img)
    res.style.textAlign = 'center'
    res.style.color = 'white'
    img.style.marginTop = '10px'
    
}
