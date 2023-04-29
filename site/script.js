let title=document.createElement('h1');
title.innerHTML=`Gallery on the JS`;
document.querySelector('main').prepend(title);

let picture=document.createElement('picture');
document.querySelector('main').append(picture);
let img=document.createElement('img');
document.querySelector('picture').append(img);
document.querySelector('img').setAttribute('src','#');
document.querySelector('img').setAttribute('alt','Галерая на яваскрипт');


window.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('img').setAttribute('src',randomImage());
});
function randomImage(){
  let random=Math.floor(Math.random()*images.length);
  return images[random];
}
let images=['site/DSC_7533.JPG','site/DSC_7536.JPG','site/DSC_7537.JPG','site/DSC_7538.JPG','site/DSC_7539.JPG','site/DSC_7540.JPG','site/function-return-forever.JPG','site/DSC_7555.JPG'];

let count=+0;
document.querySelector('img').addEventListener('click',()=>{
  count++;
  if(count<images.length){
    document.querySelector('img').setAttribute('src', `${images[count]}`);
  }else if(count==images.length){
    count=0;
    document.querySelector('img').setAttribute('src', `${images[count]}`);
  }else{
    count=0;
  }
});
let span=document.createElement('span');
span.innerHTML=`click flipping <img src='site/click-flipping.png' alt='галерея на яваскритп с перелистванием по клику' style='width:35px'>`;
span.className='lol';
document.querySelector('main').append(span);

let text=document.createElement('p');
text.innerHTML='Супер блестящая фото галерея с перелистыванием по клику на фотографю. Татую галерею можно встроить в любой сайт и она будет работать везде где можно менять стили страницы и встраивать JS("Джава Скрипт" ^_^)';
document.querySelector('main').append(text);
document.querySelector('p').style.cssText=`
  margin:1%;
`;


let label=document.createElement('label');
label.className="toggler-wrapper style-1";
document.querySelector('main').append(label);
let input=document.createElement('input');
input.setAttribute('type','checkbox');
document.querySelector('label').append(input);
let div=document.createElement('div');
div.className='toggler-slider';
document.querySelector('label').append(div);
let divTwo=document.createElement('div');
divTwo.className='toggler-knob';
document.querySelector('.toggler-slider').append(divTwo);

document.querySelector('input[type=checkbox]').addEventListener('click',()=>{
  if(document.querySelector('input[type=checkbox]').checked==true){
    text.innerHTML='Super brilliant photo gallery with flipping by clicking on the photo. Tattoo gallery can be embedded into any site and it will work wherever you can change page styles and embed JS("Java Script" ^_^)';
    eng.innerHTML='< - Rus';
  }else{
    text.innerHTML='Супер блестящая фото галерея с перелистыванием по клику на фотографю. Татую галерею можно встроить в любой сайт и она будет работать везде где можно менять стили страницы и встраивать JS("Джава Скрипт" ^_^)';
    eng.innerHTML='< - Eng';
  }
  console.log('click');
});

let eng=document.createElement('span');
eng.innerHTML='< - Eng';
document.querySelector('main').append(eng);
