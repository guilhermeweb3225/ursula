var img2h=document.getElementById('img2h')
var bt_tema=document.getElementById('dv-tema')
var bt_tema_circulo=document.getElementById('dv-tema-circulo')
var contato=document.getElementById('ctt')
//anicializaçao do menu
function menuanimadoabrir(){
    var menu=document.querySelector('div.dv-menu')
        img2h.addEventListener('click',()=>{
        menu.classList.remove('animaF')
        menu.classList.add('animaC')
        bt_tema.classList.remove('ef-temaF')
        bt_tema.classList.add('ef-temaA')
        bt_tema.style.width='50px'
        bt_tema.style.height='20px'
        bt_tema_circulo.style.width='20px'
        bt_tema_circulo.style.height='20px'
        menuanimadofechar()
})
    }
    //fechamento do menu
menuanimadoabrir()
function menuanimadofechar(){
    var menu=document.querySelector('div.dv-menu')
    img2h.addEventListener('click',()=>{
    menu.classList.add('animaF')
        bt_tema.classList.add('ef-temaF')
        bt_tema.style.width='0px'
        bt_tema.style.height='0px'
        bt_tema_circulo.style.width='0px'
        bt_tema_circulo.style.height='0px'
    menuanimadoabrir()
})
}
//tema claro e escuro
function claro(){
    bt_tema_circulo.addEventListener('click',()=>{
        bt_tema_circulo.classList.remove('dv-temaB')
        bt_tema_circulo.classList.add('dv-temaW')
        bt_tema_circulo.style.left='100%'
        bt_tema_circulo.style.transform='translate(-100%)'
        bt_tema_circulo.style.background='white'
        bt_tema.style.background='#ff0000'
        document.body.classList.add('segundotema')
        document.body.style.background='#b2dfdb'
        img2h.setAttribute('src','menu-tema2.png')
        escuro()
    })
}
claro()
    function escuro(){
    bt_tema_circulo.addEventListener('click',()=>{
        bt_tema_circulo.classList.add('dv-temaB')
        bt_tema_circulo.style.left='0%'
        bt_tema_circulo.style.transform='translate(0%)'
        bt_tema_circulo.style.background='black'
        bt_tema.style.background='#700045'
        location.reload()
        claro()
    })
}