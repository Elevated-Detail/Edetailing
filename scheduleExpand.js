const orderTopBar = document.getElementById('orderTopBar')

window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    if(scrollY >= 1){
        orderTopBar.style.backgroundColor = 'rgb(75, 75, 75, 1)'
    }
    else{
        orderTopBar.style.backgroundColor = 'rgb(75, 75, 75, 0)'
    }
})

let screenWidthCheck = 0

window.addEventListener('resize', function(){
    if(window.innerWidth > 950 && screenWidthCheck == 0){
        screenWidthCheck = 1
        fpc1.style.display = 'block'
        fpc2.style.display = 'block'
        fpc3.style.display = 'block'

        fp1 = false
        fp2 = false
        fp3 = false

        spc1.style.display = 'block'
        spc2.style.display = 'block'
        spc3.style.display = 'block'

        sp1 = false
        sp2 = false
        sp3 = false
    }
    if(window.innerWidth < 950 && screenWidthCheck == 1){
        screenWidthCheck = 0
        fpc1.style.display = 'none'
        fpc2.style.display = 'none'
        fpc3.style.display = 'none'

        fp1 = false
        fp2 = false
        fp3 = false

        fpe1.textContent = '+'
        fpe2.textContent = '+'
        fpe3.textContent = '+'

        spc1.style.display = 'none'
        spc2.style.display = 'none'
        spc3.style.display = 'none'

        sp1 = false
        sp2 = false
        sp3 = false

        spe1.textContent = '+'
        spe2.textContent = '+'
        spe3.textContent = '+'
    }
})

const fpe1 = document.getElementById('fpe1')
const fpe2 = document.getElementById('fpe2')
const fpe3 = document.getElementById('fpe3')

const fpc1 = document.getElementById('fpc1')
const fpc2 = document.getElementById('fpc2')
const fpc3 = document.getElementById('fpc3')

let fp1 = false
let fp2 = false
let fp3 = false

const spe1 = document.getElementById('spe1')
const spe2 = document.getElementById('spe2')
const spe3 = document.getElementById('spe3')

const spc1 = document.getElementById('spc1')
const spc2 = document.getElementById('spc2')
const spc3 = document.getElementById('spc3')

let sp1 = false
let sp2 = false
let sp3 = false

fpe1.addEventListener('click', function(){
    if(fp1 == false){
        fpc1.style.display = 'block'
        fpe1.textContent = '-'
        fp1 = true
        return
    }
    if(fp1){
        fpc1.style.display = 'none'
        fpe1.textContent = '+'
        fp1 = false
    }
})

fpe2.addEventListener('click', function(){
    if(fp2 == false){
        fpc2.style.display = 'block'
        fpe2.textContent = '-'
        fp2 = true
        return
    }
    if(fp2){
        fpc2.style.display = 'none'
        fpe2.textContent = '+'
        fp2 = false
    }
})

fpe3.addEventListener('click', function(){
    if(fp3 == false){
        fpc3.style.display = 'block'
        fpe3.textContent = '-'
        fp3 = true
        return
    }
    if(fp3){
        fpc3.style.display = 'none'
        fpe3.textContent = '+'
        fp3 = false
    }
})

spe1.addEventListener('click', function(){
    if(sp1 == false){
        spc1.style.display = 'block'
        spe1.textContent = '-'
        sp1 = true
        return
    }
    if(sp1){
        spc1.style.display = 'none'
        spe1.textContent = '+'
        sp1 = false
    }
})

spe2.addEventListener('click', function(){
    if(sp2 == false){
        spc2.style.display = 'block'
        spe2.textContent = '-'
        sp2 = true
        return
    }
    if(sp2){
        spc2.style.display = 'none'
        spe2.textContent = '+'
        sp2 = false
    }
})

spe3.addEventListener('click', function(){
    if(sp3 == false){
        spc3.style.display = 'block'
        spe3.textContent = '-'
        sp3 = true
        return
    }
    if(sp3){
        spc3.style.display = 'none'
        spe3.textContent = '+'
        sp3 = false
    }
})

function FadeToHome(){
    fadeElement.style.opacity = 1
    setTimeout(function(){
        window.location.href = 'home.html'
    }, 1000)
}

document.getElementById('homeIcon').addEventListener('click', FadeToHome)