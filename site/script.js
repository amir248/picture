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

document.querySelector('input[type=checkbox]').addEventListener('click',changes);
function changes(){
  if(document.querySelector('input[type=checkbox]').checked==true){
    text.innerHTML='Super brilliant photo gallery with flipping by clicking on the photo. Tattoo gallery can be embedded into any site and it will work wherever you can change page styles and embed JS("Java Script" ^_^)';
    eng.innerHTML='< - Rus';
    styleCheckbox.innerHTML='Checkbox styles were taken from here <a href="https://alvarotrigo.com/blog/css-checkbox-styles/">styleCheckbox</a>';
    eng.style.cssText=`border:3px solid green;width:100%;background:rgba(0,255,0,0.3);border-radius:7px;color:grey;text-shadow:black 1px 1px;`
    count=1;
  }else{
    text.innerHTML='Супер блестящая фото галерея с перелистыванием по клику на фотографю. Татую галерею можно встроить в любой сайт и она будет работать везде где можно менять стили страницы и встраивать JS("Джава Скрипт" ^_^)';
    eng.innerHTML='< - Eng';
    styleCheckbox.innerHTML='Стили для чекбоква были взфты отсюда <a href="https://alvarotrigo.com/blog/css-checkbox-styles/">styleCheckbox</a>';
    eng.style.cssText=`border:3px solid grey;width:100%;background:rgba(5,5,5,0.3);border-radius:7px;`
    counTt=0;
  }
}
let eng=document.createElement('span');
eng.style.cssText=`border:3px solid grey;width:100%;background:rgba(5,5,5,0.3);border-radius:7px;color:red;text-shadow:black 1px 1px;`
eng.innerHTML='< - Eng';
document.querySelector('main').append(eng);

let styleCheckbox=document.createElement('p');
styleCheckbox.innerHTML='Стили для чекбоква были взфты отсюда <a href="https://alvarotrigo.com/blog/css-checkbox-styles/">styleCheckbox</a>';
styleCheckbox.style.cssText='margin:1%; margin-top:3%;'
document.querySelector('main').append(styleCheckbox);
let counTt=+0;
function changesTwo(){
  counTt++;
  if(counTt==1){
    document.querySelector('input[type=checkbox]').checked=true;
    text.innerHTML='Super brilliant photo gallery with flipping by clicking on the photo. Tattoo gallery can be embedded into any site and it will work wherever you can change page styles and embed JS("Java Script" ^_^)';
    eng.innerHTML='< - Rus';
    styleCheckbox.innerHTML='Checkbox styles were taken from here <a href="https://alvarotrigo.com/blog/css-checkbox-styles/">styleCheckbox</a>';
    eng.style.cssText=`border:3px solid green;width:100%;background:rgba(0,255,0,0.3);border-radius:7px;color:grey;text-shadow:black 1px 1px;`
  }else if(counTt==2){
    document.querySelector('input[type=checkbox]').checked=false;
    text.innerHTML='Супер блестящая фото галерея с перелистыванием по клику на фотографю. Татую галерею можно встроить в любой сайт и она будет работать везде где можно менять стили страницы и встраивать JS("Джава Скрипт" ^_^)';
    eng.innerHTML='< - Eng';
    styleCheckbox.innerHTML='Стили для чекбоква были взфты отсюда <a href="https://alvarotrigo.com/blog/css-checkbox-styles/">styleCheckbox</a>';
    eng.style.cssText=`border:3px solid grey;width:100%;background:rgba(5,5,5,0.3);border-radius:7px;`
    counTt=0;
  }else{
    counTt=0;
  }
}
document.querySelector('body > main > span:nth-child(6)').addEventListener('click',changesTwo);
