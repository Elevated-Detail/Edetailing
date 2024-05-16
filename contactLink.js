const textNowButton = document.getElementById('textNowButton')
const textNowButton2 = document.getElementById('textNowButton2')
const emailNowButton = document.getElementById('emailNowButton')

const socialMediaButton1 = document.getElementById('socialMediaButton1')
const socialMediaButton2 = document.getElementById('socialMediaButton2')
const socialMediaButton3 = document.getElementById('socialMediaButton3')
const socialMediaButton4 = document.getElementById('socialMediaButton4')

socialMediaButton2.addEventListener('click', function(){
    window.location.href = 'https://www.facebook.com/profile.php?id=100094543657304&mibextid=LQQJ4d'
})

socialMediaButton4.addEventListener('click', function(){
    window.location.href = 'https://www.youtube.com/@Elev8eddetail'
})

socialMediaButton3.addEventListener('click', function(){
    window.location.href = 'https://www.tiktok.com/@elevated.detail?_t=8liPnMt1Sgc&_r=1'
})

socialMediaButton1.addEventListener('click', function(){
    window.location.href = 'https://www.instagram.com/elev8eddetail?igsh=MXRmdWI1ejhmamM4dA=='
})

var phoneNumber = "5027910995"
var phoneNumber2 = '5022165809'

var smsUri = "sms:" + phoneNumber;
var smsUri2 = "sms:" + phoneNumber2;

textNowButton.addEventListener('click', function(){
    window.location.href = smsUri;
})

textNowButton2.addEventListener('click', function(){
    window.location.href = smsUri2;
})

emailNowButton.addEventListener('click', function(){
    window.location.href = 'mailto:elevateddetail8@gmail.com'
})