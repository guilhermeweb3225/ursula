var img2h=document.getElementById('img2h')
function menuanimadoabrir(){
    var menu=document.querySelector('div.dv-menu')
        img2h.addEventListener('click',()=>{
        menu.classList.remove('animaF')
        menu.classList.add('animaC')
        menuanimadofechar()
})
    }
menuanimadoabrir()
function menuanimadofechar(){
        var menu=document.querySelector('div.dv-menu')
        img2h.addEventListener('click',()=>{
        menu.classList.add('animaF')
        menuanimadoabrir()
    })
}

