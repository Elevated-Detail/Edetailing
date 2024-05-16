//when adding new custom package.
// - add it to getelementbyID
// - create a price for it
// - add it to the order button criteria
// - add it to receipt function if statement
// - add it into the if statement IN ALL AREAS

const topBarCheckoutButton = document.getElementById('topBarCheckoutButton')
const checkoutContainer = document.getElementById('checkoutContainer')
const orderTitle = document.getElementById('orderTitle')
const blackBackground = document.getElementById('blackBackground')

//featured Packages
const featuredPackageCheckbox1 = document.getElementById('featuredPackageCheckbox1')
const featuredPackageCheckbox2 = document.getElementById('featuredPackageCheckbox2')
const featuredPackageCheckbox3 = document.getElementById('featuredPackageCheckbox3')

//standard Packages
const standardPackageCheckbox1 = document.getElementById('standardPackageCheckbox1')
const standardPackageCheckbox2 = document.getElementById('standardPackageCheckbox2')
const standardPackageCheckbox3 = document.getElementById('standardPackageCheckbox3')

//custom Packages
const customPackageCheckbox1 = document.getElementById('customPackageCheckbox1')
const customPackageCheckbox2 = document.getElementById('customPackageCheckbox2')
const customPackageCheckbox3 = document.getElementById('customPackageCheckbox3')
const customPackageCheckbox4 = document.getElementById('customPackageCheckbox4')
const customPackageCheckbox5 = document.getElementById('customPackageCheckbox5')
const customPackageCheckbox6 = document.getElementById('customPackageCheckbox6')
const customPackageCheckbox7 = document.getElementById('customPackageCheckbox7')
const customPackageCheckbox8 = document.getElementById('customPackageCheckbox8')
const customPackageCheckbox9 = document.getElementById('customPackageCheckbox9')
const customPackageCheckbox10 = document.getElementById('customPackageCheckbox10')
const customPackageCheckbox11 = document.getElementById('customPackageCheckbox11')

let page = 1

//Package Headers
const receiptFeaturedPackageHeader = document.getElementById('receiptFeaturedPackageHeader')
const receiptStandardPackagesHeader = document.getElementById('receiptStandardPackagesHeader')
const createYourOwnPackageHeader = document.getElementById('createYourOwnPackageHeader')

//Total Price Stuff
const receiptOrderTotal = document.getElementById('receiptOrderTotal')
const receiptTotalPrice = document.getElementById('receiptTotalPrice')

//Receipt Featured Package
const receiptFeaturedPackage1 = document.getElementById('receiptFeaturedPackage1')
const receiptFeaturedPackage2 = document.getElementById('receiptFeaturedPackage2')
const receiptFeaturedPackage3 = document.getElementById('receiptFeaturedPackage3')

//Receipt Standard Package
const receiptStandardPackage1 = document.getElementById('receiptStandardPackage1')
const receiptStandardPackage2 = document.getElementById('receiptStandardPackage2')
const receiptStandardPackage3 = document.getElementById('receiptStandardPackage3')

//Receipt Custom Package
const createYourOwnPackage1 = document.getElementById('createYourOwnPackage1')
const createYourOwnPackage2 = document.getElementById('createYourOwnPackage2')
const createYourOwnPackage3 = document.getElementById('createYourOwnPackage3')
const createYourOwnPackage4 = document.getElementById('createYourOwnPackage4')
const createYourOwnPackage5 = document.getElementById('createYourOwnPackage5')
const createYourOwnPackage6 = document.getElementById('createYourOwnPackage6')
const createYourOwnPackage7 = document.getElementById('createYourOwnPackage7')
const createYourOwnPackage8 = document.getElementById('createYourOwnPackage8')
const createYourOwnPackage9 = document.getElementById('createYourOwnPackage9')
const createYourOwnPackage10 = document.getElementById('createYourOwnPackage10')
const createYourOwnPackage11 = document.getElementById('createYourOwnPackage11')

let totalPrice = 0

//Item Prices
let featuredPackagePrice1 = 225
let featuredPackagePrice2 = 350
let featuredPackagePrice3 = 150

let standardPackagePrice1 = 100
let standardPackagePrice2 = 175
let standardPackagePrice3 = 50

let createYourOwnPackagePrice1 = 50
let createYourOwnPackagePrice2 = 25
let createYourOwnPackagePrice3 = 50
let createYourOwnPackagePrice4 = 15
let createYourOwnPackagePrice5 = 100
let createYourOwnPackagePrice6 = 50
let createYourOwnPackagePrice7 = 75
let createYourOwnPackagePrice8 = 50
let createYourOwnPackagePrice9 = 25
let createYourOwnPackagePrice10 = 25
let createYourOwnPackagePrice11 = 150

//Receipt Input Fields
const recieptNameInput = document.getElementById('recieptNameInput')
const recieptPhoneInput = document.getElementById('recieptPhoneInput')
const recieptEmailInput = document.getElementById('recieptEmailInput')
const recieptAddressInput = document.getElementById('recieptAddressInput')

//Package Containers
const featuredPackagesContainer = document.getElementById('featuredPackagesContainer')
const standardPackagesContainer = document.getElementById('standardPackagesContainer')
const createYourOwnPackageContentContainer = document.getElementById('createYourOwnPackageContentContainer')

const confirmYourOrderHeader = document.getElementById('confirmYourOrderHeader')
const confirmYourOrderName = document.getElementById('confirmYourOrderName')
const confirmYourOrderPhone = document.getElementById('confirmYourOrderPhone')
const confirmYourOrderEmail = document.getElementById('confirmYourOrderEmail')
const confirmYourOrderAddress = document.getElementById('confirmYourOrderAddress')

const receiptPlaceOrderButton = document.getElementById('receiptPlaceOrderButton')

topBarCheckoutButton.addEventListener('click', function(){

    if( featuredPackageCheckbox1.checked || featuredPackageCheckbox2.checked || featuredPackageCheckbox3.checked ||
        standardPackageCheckbox1.checked || standardPackageCheckbox2.checked || standardPackageCheckbox3.checked ||
        customPackageCheckbox1.checked || customPackageCheckbox2.checked || customPackageCheckbox3.checked ||
        customPackageCheckbox4.checked || customPackageCheckbox5.checked || customPackageCheckbox6.checked ||
        customPackageCheckbox7.checked || customPackageCheckbox8.checked || customPackageCheckbox9.checked ||
        customPackageCheckbox10.checked || customPackageCheckbox11.checked){

        DataCollection()
        
        if(page == 1){
            checkoutContainer.style.display = 'flex'
            blackBackground.style.display = 'block'
            topBarCheckoutButton.textContent = 'Packages'
            orderTitle.textContent = 'Your Order'
            featuredPackagesContainer.style.visibility = 'hidden'
            featuredPackagesContainer.style.height = '0'
            standardPackagesContainer.style.visibility = 'hidden'
            standardPackagesContainer.style.height = '0'
            createYourOwnPackageContentContainer.style.visibility = 'hidden'
            createYourOwnPackageContentContainer.style.height = '0'
            page = 2
            setUpReceipt()
            return
        }
        if(page == 2){
            checkoutContainer.style.display = 'none'
            blackBackground.style.display = 'none'
            topBarCheckoutButton.textContent = 'Checkout'
            orderTitle.textContent = 'Schedule a Detail Now'
            featuredPackagesContainer.style.visibility = 'visible'
            featuredPackagesContainer.style.height = 'auto'
            standardPackagesContainer.style.visibility = 'visible'
            standardPackagesContainer.style.height = 'auto'
            createYourOwnPackageContentContainer.style.visibility = 'visible'
            createYourOwnPackageContentContainer.style.height = 'auto'
            page = 1
            totalPrice = 0
            return
        }  

    } 
    else{
        alert('Please select a service before proceding to checkout.')
    }
    
})

function setUpReceipt(){

    receiptOrderTotal.style.display = 'block'
    receiptTotalPrice.style.display = 'block'
    confirmYourOrderHeader.style.display = 'block'
    confirmYourOrderName.style.display = 'block'
    confirmYourOrderPhone.style.display = 'block'
    confirmYourOrderEmail.style.display = 'block'
    confirmYourOrderAddress.style.display = 'block'

    if(featuredPackageCheckbox1.checked || featuredPackageCheckbox2.checked || featuredPackageCheckbox3.checked){
        receiptFeaturedPackageHeader.style.display = 'block'

        if(featuredPackageCheckbox1.checked){
            receiptFeaturedPackage1.style.display = 'block'
            totalPrice += featuredPackagePrice1
        }
        else{
            receiptFeaturedPackage1.style.display = 'none'
        }

        if(featuredPackageCheckbox2.checked){
            receiptFeaturedPackage2.style.display = 'block'
            totalPrice += featuredPackagePrice2
        }
        else{
            receiptFeaturedPackage2.style.display = 'none'
        }

        if(featuredPackageCheckbox3.checked){
            receiptFeaturedPackage3.style.display = 'block'
            totalPrice += featuredPackagePrice3
        }
        else{
            receiptFeaturedPackage3.style.display = 'none'
        }
    }
    else{
        receiptFeaturedPackageHeader.style.display = 'none'
        receiptFeaturedPackage1.style.display = 'none'
        receiptFeaturedPackage2.style.display = 'none'
        receiptFeaturedPackage3.style.display = 'none'
    }

    if(standardPackageCheckbox1.checked || standardPackageCheckbox2.checked || standardPackageCheckbox3.checked){
        receiptStandardPackagesHeader.style.display = 'block'

        if(standardPackageCheckbox1.checked){
            receiptStandardPackage1.style.display = 'block'
            totalPrice += standardPackagePrice1
        }
        else{
            receiptStandardPackage1.style.display = 'none'
        }

        if(standardPackageCheckbox2.checked){
            receiptStandardPackage2.style.display = 'block'
            totalPrice += standardPackagePrice2
        }
        else{
            receiptStandardPackage2.style.display = 'none'
        }

        if(standardPackageCheckbox3.checked){
            receiptStandardPackage3.style.display = 'block'
            totalPrice += standardPackagePrice3
        }
        else{
            receiptStandardPackage3.style.display = 'none'
        }
    }
    else{
        receiptStandardPackagesHeader.style.display = 'none'
        receiptStandardPackage1.style.display = 'none'
        receiptStandardPackage2.style.display = 'none'
        receiptStandardPackage3.style.display = 'none'
    }

    if(customPackageCheckbox1.checked || customPackageCheckbox2.checked || customPackageCheckbox3.checked ||
        customPackageCheckbox4.checked || customPackageCheckbox5.checked || customPackageCheckbox6.checked ||
        customPackageCheckbox7.checked || customPackageCheckbox8.checked || customPackageCheckbox9.checked ||
        customPackageCheckbox10.checked || customPackageCheckbox11.checked){
        createYourOwnPackageHeader.style.display = 'block'

        if(customPackageCheckbox1.checked){
            createYourOwnPackage1.style.display = 'block'
            totalPrice += createYourOwnPackagePrice1
        }
        else{
            createYourOwnPackage1.style.display = 'none'
        }

        if(customPackageCheckbox2.checked){
            createYourOwnPackage2.style.display = 'block'
            totalPrice += createYourOwnPackagePrice2
        }
        else{
            createYourOwnPackage2.style.display = 'none'
        }

        if(customPackageCheckbox3.checked){
            createYourOwnPackage3.style.display = 'block'
            totalPrice += createYourOwnPackagePrice3
        }
        else{
            createYourOwnPackage3.style.display = 'none'
        }

        if(customPackageCheckbox4.checked){
            createYourOwnPackage4.style.display = 'block'
            totalPrice += createYourOwnPackagePrice4
        }
        else{
            createYourOwnPackage4.style.display = 'none'
        }

        if(customPackageCheckbox5.checked){
            createYourOwnPackage5.style.display = 'block'
            totalPrice += createYourOwnPackagePrice5
        }
        else{
            createYourOwnPackage5.style.display = 'none'
        }

        if(customPackageCheckbox6.checked){
            createYourOwnPackage6.style.display = 'block'
            totalPrice += createYourOwnPackagePrice6
        }
        else{
            createYourOwnPackage6.style.display = 'none'
        }

        if(customPackageCheckbox7.checked){
            createYourOwnPackage7.style.display = 'block'
            totalPrice += createYourOwnPackagePrice7
        }
        else{
            createYourOwnPackage7.style.display = 'none'
        }

        if(customPackageCheckbox8.checked){
            createYourOwnPackage8.style.display = 'block'
            totalPrice += createYourOwnPackagePrice8
        }
        else{
            createYourOwnPackage8.style.display = 'none'
        }

        if(customPackageCheckbox9.checked){
            createYourOwnPackage9.style.display = 'block'
            totalPrice += createYourOwnPackagePrice9
        }
        else{
            createYourOwnPackage9.style.display = 'none'
        }

        if(customPackageCheckbox10.checked){
            createYourOwnPackage10.style.display = 'block'
            totalPrice += createYourOwnPackagePrice10
        }
        else{
            createYourOwnPackage10.style.display = 'none'
        }

        if(customPackageCheckbox11.checked){
            createYourOwnPackage11.style.display = 'block'
            totalPrice += createYourOwnPackagePrice11
        }
        else{
            createYourOwnPackage11.style.display = 'none'
        }
    }
    else{
        createYourOwnPackageHeader.style.display = 'none'
        createYourOwnPackage1.style.display = 'none'
        createYourOwnPackage2.style.display = 'none'
        createYourOwnPackage3.style.display = 'none'
        createYourOwnPackage4.style.display = 'none'
        createYourOwnPackage5.style.display = 'none'
        createYourOwnPackage6.style.display = 'none'
        createYourOwnPackage7.style.display = 'none'
        createYourOwnPackage8.style.display = 'none'
        createYourOwnPackage9.style.display = 'none'
        createYourOwnPackage10.style.display = 'none'
        createYourOwnPackage11.style.display = 'none'
    }

    receiptTotalPrice.textContent = '$' + totalPrice

}

let canSubmit = false

receiptPlaceOrderButton.addEventListener('click', function(){
    if(recieptNameInput.value.trim() !== "" && 
       recieptPhoneInput.value.trim() !== "" && 
       recieptEmailInput.value.trim() !== "" && 
       recieptAddressInput.value.trim() !== ""){

        canSubmit = true

    }
    else{
        alert('Please fill out all fields.')
    }
})

//--------------------------------------------------------------------------

const formName = document.getElementById('formName')
const formPhone = document.getElementById('formPhone')
const formEmail = document.getElementById('formEmail')
const formAddress = document.getElementById('formAddress')

const formFirstTimer = document.getElementById('formFirstTimer')
const formTotalDisastser = document.getElementById('formTotalDisastser')
const formSummerSpecial = document.getElementById('formSummerSpecial')

const formBasic = document.getElementById('formBasic')
const formPremium = document.getElementById('formPremium')
const formUltimate = document.getElementById('formUltimate')

const formCreateYourOwnPackage1 = document.getElementById('formCreateYourOwnPackage1')
const formCreateYourOwnPackage2 = document.getElementById('formCreateYourOwnPackage2')
const formCreateYourOwnPackage3 = document.getElementById('formCreateYourOwnPackage3')
const formCreateYourOwnPackage4 = document.getElementById('formCreateYourOwnPackage4')
const formCreateYourOwnPackage5 = document.getElementById('formCreateYourOwnPackage5')
const formCreateYourOwnPackage6 = document.getElementById('formCreateYourOwnPackage6')
const formCreateYourOwnPackage7 = document.getElementById('formCreateYourOwnPackage7')
const formCreateYourOwnPackage8 = document.getElementById('formCreateYourOwnPackage8')
const formCreateYourOwnPackage9 = document.getElementById('formCreateYourOwnPackage9')
const formCreateYourOwnPackage10 = document.getElementById('formCreateYourOwnPackage10')
const formCreateYourOwnPackage11 = document.getElementById('formCreateYourOwnPackage11')

const formTotal = document.getElementById('formTotal')
const formBlakesCommision = document.getElementById('formBlakesCommision')

function DataCollection(){
    if(featuredPackageCheckbox1.checked){
        formFirstTimer.value = 'First Timer'
    }
    else{
        formFirstTimer.value = ''
    }
    if(featuredPackageCheckbox2.checked){
        formTotalDisastser.value = 'Total Disaster'
    }
    else{
        formTotalDisastser.value = ''
    }
    if(featuredPackageCheckbox3.checked){
        formSummerSpecial.value = 'Summer Special'
    }
    else{
        formSummerSpecial.value = ''
    }
    //---
    if(standardPackageCheckbox1.checked){
        formBasic.value = 'Basic Package'
    }
    else{
        formBasic.value = ''
    }
    if(standardPackageCheckbox2.checked){
        formPremium.value = 'Premium Package'
    }
    else{
        formPremium.value = ''
    }
    if(standardPackageCheckbox3.checked){
        formUltimate.value = 'Ultimate Package'
    }
    else{
        formUltimate.value = ''
    }
    //---
    if(customPackageCheckbox1.checked){
        formCreateYourOwnPackage1.value = 'Exterior Wash and Dry'
    }
    else{
        formCreateYourOwnPackage1.value = ''
    }
    if(customPackageCheckbox2.checked){
        formCreateYourOwnPackage2.value = 'Tire and Rim Cleaning'
    }
    else{
        formCreateYourOwnPackage2.value = ''
    }
    if(customPackageCheckbox3.checked){
        formCreateYourOwnPackage3.value = 'Interior Vaccuming'
    }
    else{
        formCreateYourOwnPackage3.value = ''
    }
    if(customPackageCheckbox4.checked){
        formCreateYourOwnPackage4.value = 'Window Cleaning'
    }
    else{
        formCreateYourOwnPackage4.value = ''
    }
    if(customPackageCheckbox5.checked){
        formCreateYourOwnPackage5.value = 'Paint Correction'
    }
    else{
        formCreateYourOwnPackage5.value = ''
    }
    if(customPackageCheckbox6.checked){
        formCreateYourOwnPackage6.value = 'Interior Cleaning'
    }
    else{
        formCreateYourOwnPackage6.value = ''
    }
    if(customPackageCheckbox7.checked){
        formCreateYourOwnPackage7.value = 'Steam Cleaning'
    }
    else{
        formCreateYourOwnPackage7.value = ''
    }
    if(customPackageCheckbox8.checked){
        formCreateYourOwnPackage8.value = 'Advanced Wash Treatment'
    }
    else{
        formCreateYourOwnPackage8.value = ''
    }
    if(customPackageCheckbox9.checked){
        formCreateYourOwnPackage9.value = 'Carpet Shampooing'
    }
    else{
        formCreateYourOwnPackage9.value = ''
    }
    if(customPackageCheckbox10.checked){
        formCreateYourOwnPackage10.value = 'Leather Conditioning'
    }
    else{
        formCreateYourOwnPackage10.value = ''
    }
    if(customPackageCheckbox11.checked){
        formCreateYourOwnPackage11.value = 'Ceramic Coating'
    }
    else{
        formCreateYourOwnPackage11.value = ''
    }
}

let blakesMoney = 0

function SendOrder(event){

    setTimeout(function(){
        if(canSubmit == true){
            canSubmit = false

            formTotal.value = receiptTotalPrice.textContent

            blakesMoney = totalPrice * .05
            formBlakesCommision.value = '$' + blakesMoney
            
            formName.value = recieptNameInput.value;
            formPhone.value = recieptPhoneInput.value;
            formEmail.value = recieptEmailInput.value;
            formAddress.value = recieptAddressInput.value;
    
            setTimeout(function(){
                recieptNameInput.value = ''
                recieptPhoneInput.value = ''
                recieptEmailInput.value = ''
                recieptAddressInput.value = ''
                var form = document.getElementById('dataForm')
                var formData = new FormData(form)

                var sheetsUrl = 'https://script.google.com/macros/s/AKfycbzWV0gk5sFB9DXJ7f9E6FcOrFtydWK2Zxkoe9tHAc7ZAzJ9T9_s0qpGEavM6_qO-4Us/exec'

                event.preventDefault(sheetsUrl)
                LoadingStart()

                fetch(sheetsUrl, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(data => {
                    if(data === 'sent'){
                        LoadingStop()
                        alert('Order sent successfully. We will notify you as soon as possible to schedule your service. Thank you!')
                        window.location.href = 'home.html'
                    }
                    else{
                        alert('Error. Please try again later.')
                    }
                })
                .catch(error => {
                    alert('Something went wrong. Please try again.')
                })

            }, 100)
        }
    }, 100)

}

const loadingIndicator = document.getElementById('loadingIndicator')
const loadingCover = document.getElementById('loadingCover')

function LoadingStart(){
    loadingIndicator.style.display = 'block';
    loadingCover.style.display = 'block';
}
  
  function LoadingStop(){
    loadingIndicator.style.display = 'none';
    loadingCover.style.display = 'none';
}


