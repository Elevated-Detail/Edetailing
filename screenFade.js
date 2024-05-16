document.addEventListener("DOMContentLoaded", function(){

    const fadeElement = document.getElementById('fadeElement')

    setTimeout(function(){
        fadeElement.style.opacity = 0
    }, 200)

})

function FadeToOrder(){
    fadeElement.style.opacity = 1
    setTimeout(function(){
        window.location.href = 'order.html'
    }, 1000)
}

document.getElementById('scheduleNowButton').addEventListener('click', FadeToOrder)
document.getElementById('packageScheduleButton1').addEventListener('click', FadeToOrder)
document.getElementById('packageScheduleButton2').addEventListener('click', FadeToOrder)
document.getElementById('packageScheduleButton3').addEventListener('click', FadeToOrder)
document.getElementById('viewOtherPackagesButton').addEventListener('click', FadeToOrder)
