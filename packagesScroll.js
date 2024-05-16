const featuredPackage1 = document.getElementById('featuredPackage1')
const featuredPackage2 = document.getElementById('featuredPackage2')
const featuredPackage3 = document.getElementById('featuredPackage3')

const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')

const scrollDot1 = document.getElementById('scrollDot1')
const scrollDot2 = document.getElementById('scrollDot2')
const scrollDot3 = document.getElementById('scrollDot3')

let currentTab = 1
let canClick = true

var screenWidth

function handleScreenWidth() {
    screenWidth = window.innerWidth;

    if(screenWidth < 1370){

        featuredPackage1.style.position = 'absolute'
        featuredPackage2.style.position = 'absolute'
        featuredPackage3.style.position = 'absolute'

        if(currentTab == 1){
            featuredPackage1.style.transform = 'translateX(0)'
            featuredPackage2.style.transform = 'translateX(1000%)'
            featuredPackage3.style.transform = 'translateX(-1000%)'
            resetDots()
            scrollDot1.style.color = '#b73a39'
        }
        
        if(currentTab == 2){
            featuredPackage1.style.transform = 'translateX(-1000%)'
            featuredPackage2.style.transform = 'translateX(0)'
            featuredPackage3.style.transform = 'translateX(1000%)'
            resetDots()
            scrollDot2.style.color = '#b73a39'
        }
        
        if(currentTab == 3){
            featuredPackage1.style.transform = 'translateX(1000%)'
            featuredPackage2.style.transform = 'translateX(-1000%)'
            featuredPackage3.style.transform = 'translateX(0)'
            resetDots()
            scrollDot3.style.color = '#b73a39'
        }
    }
    else{
        featuredPackage1.style.transform = 'translateX(0)'
        featuredPackage2.style.transform = 'translateX(0)'
        featuredPackage3.style.transform = 'translateX(0)'

        featuredPackage1.style.position = 'static'
        featuredPackage2.style.position = 'static'
        featuredPackage3.style.position = 'static'
    }
}

handleScreenWidth();
window.addEventListener('resize', function() {
    handleScreenWidth();
});

function clickCooldown(){
    canClick = false
    setTimeout(function(){
        canClick = true
    }, 200)
}

function resetDots(){
    scrollDot1.style.color = 'white'
    scrollDot2.style.color = 'white'
    scrollDot3.style.color = 'white'
}

rightArrow.addEventListener('click', function(){
    if(currentTab == 1 && canClick == true){
        currentTab = 2
        handleScreenWidth()
        clickCooldown()
    }
    if(currentTab == 2 && canClick == true){
        currentTab = 3
        handleScreenWidth()
        clickCooldown()
    }
    if(currentTab == 3 && canClick == true){
        currentTab = 1
        handleScreenWidth()
        clickCooldown()
    }
})

leftArrow.addEventListener('click', function(){
    if(currentTab == 1 && canClick == true){
        currentTab = 3
        handleScreenWidth()
        clickCooldown()
    }
    if(currentTab == 2 && canClick == true){
        currentTab = 1
        handleScreenWidth()
        clickCooldown()
    }
    if(currentTab == 3 && canClick == true){
        currentTab = 2
        handleScreenWidth()
        clickCooldown()
    }
})


