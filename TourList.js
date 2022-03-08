function mouseOverFun(){
    // console.log(this.parentnode);
    this.querySelector(`.tlSec3-left-details`).classList.remove('hidden');
    this.querySelector('#info1').classList.add('hidden');
    this.querySelector('#item1Parahidden').classList.remove('hidden');
    this.querySelector('.tlSec3-right-icons').classList.add('hidden');
    this.querySelector('.tlSec3-right-button').classList.remove('hidden');
    this.style.boxShadow="20px 20px 100px 100px grey";
    
}

function mouseLeaveFun(){
    this.querySelector('.tlSec3-left-details').classList.add('hidden');
    this.querySelector('#info1').classList.remove('hidden');
    this.querySelector('#item1Parahidden').classList.add('hidden');
    this.querySelector('.tlSec3-right-icons').classList.remove('hidden');
    this.querySelector('.tlSec3-right-button').classList.add('hidden');
    this.style.boxShadow="1px 1px 0.5px 0.5px grey";
}

function toggleHidden(){
    this.querySelector('.tlSec4ImghidObj').classList.toggle('hidden');
    this.classList.toggle('tlSec4Img-Color');
}

let tlSec3Item1 = document.querySelector('#tlSec3-item1');
let tlSec3Item2 = document.querySelector('#tlSec3-item2');
let tlSec3Item3 = document.querySelector('#tlSec3-item3');
let tlSec3Item4 = document.querySelector('#tlSec3-item4');
let tlSec3Item5 = document.querySelector('#tlSec3-item5');
let tlSec3Item6 = document.querySelector('#tlSec3-item6');

let item1 = document.querySelector('.tlSec4Img-item1');
let item2 = document.querySelector('.tlSec4Img-item2');
let item3 = document.querySelector('.tlSec4Img-item3');



item1.addEventListener('mouseover',toggleHidden);
item1.addEventListener('mouseout',toggleHidden);
item2.addEventListener('mouseover',toggleHidden);
item2.addEventListener('mouseout',toggleHidden);
item3.addEventListener('mouseover',toggleHidden);
item3.addEventListener('mouseout',toggleHidden);

tlSec3Item1.addEventListener('mouseover', mouseOverFun);
tlSec3Item1.addEventListener('mouseleave', mouseLeaveFun);
tlSec3Item2.addEventListener('mouseover', mouseOverFun);
tlSec3Item2.addEventListener('mouseleave', mouseLeaveFun);
tlSec3Item3.addEventListener('mouseover', mouseOverFun);
tlSec3Item3.addEventListener('mouseleave', mouseLeaveFun);
tlSec3Item4.addEventListener('mouseover', mouseOverFun);
tlSec3Item4.addEventListener('mouseleave', mouseLeaveFun);
tlSec3Item5.addEventListener('mouseover', mouseOverFun);
tlSec3Item5.addEventListener('mouseleave', mouseLeaveFun);
tlSec3Item6.addEventListener('mouseover', mouseOverFun);
tlSec3Item6.addEventListener('mouseleave', mouseLeaveFun);


document.querySelector('.tlSec3CatItem1').addEventListener('mouseover',function(){
    this.style.backgroundColor="rgb(82, 180, 82, 0.915)";
});
document.querySelector('.tlSec3CatItem1').addEventListener('mouseleave',function(){
    this.style.backgroundColor="rgba(236, 236, 236, 0.815)";
})

document.querySelector('.tlSec3CatItem2').addEventListener('mouseover',function(){
    this.style.backgroundColor="rgb(82, 180, 82, 0.915)";
});
document.querySelector('.tlSec3CatItem2').addEventListener('mouseleave',function(){
    this.style.backgroundColor="rgba(236, 236, 236, 0.815)";
})

document.querySelector('.tlSec3CatItem3').addEventListener('mouseover',function(){
    this.style.backgroundColor="rgb(82, 180, 82, 0.915)";
});
document.querySelector('.tlSec3CatItem3').addEventListener('mouseleave',function(){
    this.style.backgroundColor="rgba(236, 236, 236, 0.815)";
})

document.querySelector('.tlSec3CatItem4').addEventListener('mouseover',function(){
    this.style.backgroundColor="rgb(82, 180, 82, 0.915)";
});
document.querySelector('.tlSec3CatItem4').addEventListener('mouseleave',function(){
    this.style.backgroundColor="rgba(236, 236, 236, 0.815)";
})