'use strinct';
const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryLi = galleryUl.querySelectorAll('li');

const arrBg=[];

for(let i=0;i<galleryLi.length;i++){
    arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
    galleryLi[i].style.background=arrBg[i]
}

/*
    const firstLi = bannerConUl.firstElementChild; //global로 선언하면 적용 안됨

    bannerConUl.appendChild( firstLi)
    });
    spanRightBtn.addEventListener('click', e =>{
    const lastLi = bannerConUl.lastElementChild; 
    bannerConUl.prepend( lastLi)
*/
let i=-1;

function autoGallery(){

    i++

    const gap = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft;
    const goto = (-i*gap)+'px'
    
    gallery.style.left=goto;
    gallery.style.transition='all 0.2s';

    if(i>=galleryLi.length-1){i=-1};


};

let setIn = setInterval(autoGallery,2000);

(()=>autoGallery())();


const arrow=document.querySelectorAll('span.arrow');

arrow.forEach(el=>{
    el.addEventListener('mouseout',()=>{setIn=setInterval(autoGallery,2000)})
    el.addEventListener('mouseover',()=>{clearInterval(setIn)});
});

const itemsUl = document.querySelector('.items>ul')

const itemsLi = document.querySelectorAll('.items>ul>li')

itemsLi.forEach(el=>{
    el.addEventListener('mouseout',()=>{setIn=setInterval(autoGallery,2000)})
    el.addEventListener('mouseover',()=>{clearInterval(setIn)});
})