let adultCount = document.querySelector('#pTourAdultNo');
let firstName = document.querySelector('#pTourFN');
let lastName = document.querySelector('#pTourLN');
let email = document.querySelector('#pTourEmail');
let phone = document.querySelector('#pTourPhn');
let country = document.querySelector('#pTourCountry');  
let addTag = `<p style="color:red;">Required</p>`;

function changeColor(elem, elem1){
    document.querySelector(`#${elem}`).style.color="red";
    elem1.insertAdjacentHTML('afterend',addTag)
}

document.querySelector('#getStartedBtn').addEventListener('click', function(){
    document.querySelector('.pTForm').classList.remove('hidden');
})

console.log(document.querySelector('#getStartedBtn'));

document.querySelector('.pTFormCloseBtn').addEventListener('click', function(){
    document.querySelector('.pTForm').classList.add('hidden');
})

document.querySelector('#pTFormSubmitBtn').addEventListener('click', function(){

    if(adultCount.value === '' ){
        changeColor('labelFor-pTourAdultNo', adultCount);
        // adultCount.insertAdjacentHTML('afterend',addTag)
    }
    if(firstName.value === ''){
        changeColor('labelFor-pTourFN', firstName);
    }

    if(lastName.value === ''){
        changeColor('labelFor-pTourLN', lastName);
    }
    if(email.value === ''){
        changeColor('labelFor-pTourEmail', email);
    }
    if(phone.value === ''){
        changeColor('labelFor-pTourPhn', phone);
    }
    if(country.value === 'select'){
        changeColor('labelFor-pTourCountry', country);
    }
});

document.querySelector('.ptSec4-1').addEventListener('mouseover', function(){
    document.querySelector('.ptSec4Para-1').classList.remove('hidden');
});
document.querySelector('.ptSec4-1').addEventListener('mouseout', function(){
    document.querySelector('.ptSec4Para-1').classList.add('hidden');
});
document.querySelector('.ptSec4-2').addEventListener('mouseover', function(){
    document.querySelector('.ptSec4Para-2').classList.remove('hidden');
});
document.querySelector('.ptSec4-2').addEventListener('mouseout', function(){
    document.querySelector('.ptSec4Para-2').classList.add('hidden');
});
document.querySelector('.ptSec4-3').addEventListener('mouseover', function(){
    document.querySelector('.ptSec4Para-3').classList.remove('hidden');
});
document.querySelector('.ptSec4-3').addEventListener('mouseout', function(){
    document.querySelector('.ptSec4Para-3').classList.add('hidden');
});
document.querySelector('.ptSec4-4').addEventListener('mouseover', function(){
    document.querySelector('.ptSec4Para-4').classList.remove('hidden');
});
document.querySelector('.ptSec4-4').addEventListener('mouseout', function(){
    document.querySelector('.ptSec4Para-4').classList.add('hidden');
});
document.querySelector('.ptSec4-5').addEventListener('mouseover', function(){
    document.querySelector('.ptSec4Para-5').classList.remove('hidden');
});
document.querySelector('.ptSec4-5').addEventListener('mouseout', function(){
    document.querySelector('.ptSec4Para-5').classList.add('hidden');
});
document.querySelector('.ptSec4-6').addEventListener('mouseover', function(){
    document.querySelector('.ptSec4Para-6').classList.remove('hidden');
});
document.querySelector('.ptSec4-6').addEventListener('mouseout', function(){
    document.querySelector('.ptSec4Para-6').classList.add('hidden');
});
