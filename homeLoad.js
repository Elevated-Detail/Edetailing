document.addEventListener('DOMContentLoaded', function(){
    const topBar = document.getElementById('topBar')
    const watermarkLogo = document.getElementById('watermarkLogo')

    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        if(scrollY >= 1){
            topBar.style.backgroundColor = 'rgb(75, 75, 75, 1)'
            watermarkLogo.style.opacity = '1'
        }
        else{
            topBar.style.backgroundColor = 'rgb(75, 75, 75, 0)'
            watermarkLogo.style.opacity = '0'
        }
    });

    window.addEventListener('scroll', function() {
        var documentHeight = document.body.scrollHeight;
    
        var viewportHeight = window.innerHeight;
    
        var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
        var distanceToBottom = documentHeight - (scrollPosition + viewportHeight);
    
        var threshold = 50;
    
        if (distanceToBottom <= threshold) {
            watermarkLogo.style.display = 'none'
        }
        else{
            watermarkLogo.style.display = 'block'
        }
    });

})

