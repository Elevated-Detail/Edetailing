const scheduleNowButton = document.getElementById('scheduleNowButton')

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        if(scrollY >= 1){
            var newMarginTop = (scrollY) / 4;
            scheduleNowButton.style.marginTop = -newMarginTop + 'px';
        }
    });
});