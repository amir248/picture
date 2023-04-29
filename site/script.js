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
function photoClick(){
  count++;
  if(count<images.length){
    document.querySelector('img').setAttribute('src', `${images[count]}`);
  }else if(count==images.length){
    count=0;
    document.querySelector('img').setAttribute('src', `${images[count]}`);
  }else{
    count=0;
  }

}
document.querySelector('img').addEventListener('click',photoClick);
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

//фотоКлик созданный после объявления класса лол
document.querySelector('.lol').addEventListener('click',photoClick);

function russian(){
  text.innerHTML='Super brilliant photo gallery with flipping by clicking on the photo. Tattoo gallery can be embedded into any site and it will work wherever you can change page styles and embed JS("Java Script" ^_^)';
  eng.innerHTML='< - Russian';
  styleCheckbox.innerHTML='Checkbox styles were taken from here: <a href="https://alvarotrigo.com/blog/css-checkbox-styles/">styleCheckbox</a>';
  eng.style.cssText=`border:3px solid green;width:100%;background:rgba(0,255,0,0.3);border-radius:7px;color:grey;text-shadow:black 1px 1px;`
  Ahref.innerHTML='The page was developed with the participation of a super awesome web workshop: <a href="https://nasobe.ru/">Web workshop named after Baron Siteverstauzen.</a> Be sure to check it out! ^_^';
  //SEO
  document.querySelector('head > meta:nth-child(5)').setAttribute('content', 'Javascript photo gallery');
  document.title='Gallery on JS';
  window.location.hash='#eng'
}
function english(){
  window.location.hash=''
  text.innerHTML='Супер блестящая фото галерея с перелистыванием по клику на фотографю. Татую галерею можно встроить в любой сайт и она будет работать везде где можно менять стили страницы и встраивать JS("Джава Скрипт" ^_^)';
  eng.innerHTML='< - English';
  styleCheckbox.innerHTML='Стили для чекбоква были взфты отсюда <a href="https://alvarotrigo.com/blog/css-checkbox-styles/">styleCheckbox</a>';
  eng.style.cssText=`border:3px solid grey;width:100%;background:rgba(5,5,5,0.3);border-radius:7px; color:red;text-shadow:black 1px 1px;`
  Ahref.innerHTML='страница разработана с участием супер шикарной веб мастерской: <a href="https://nasobe.ru/">Веб мастерская имени барона сайтоверсаузена.</a> Обязательно обращайтесь! ^_^';
  //SEO
  document.querySelector('head > meta:nth-child(5)').setAttribute('content', 'Фото галерея на яваскрипте');
  document.title='Фото галерея на JS';
  counTt=0;
}

document.querySelector('input[type=checkbox]').addEventListener('click',changes);
function changes(){
  if(document.querySelector('input[type=checkbox]').checked==true){
    russian();
    count=1;
  }else{
    english();
  }
}
let eng=document.createElement('span');
eng.style.cssText=`border:3px solid grey;width:100%;background:rgba(5,5,5,0.3);border-radius:7px;color:red;text-shadow:black 1px 1px;`
eng.innerHTML='< - English';
document.querySelector('main').append(eng);

let styleCheckbox=document.createElement('p');
styleCheckbox.innerHTML='Стили для чекбоква были взфты отсюда: <a href="https://alvarotrigo.com/blog/css-checkbox-styles/">styleCheckbox</a>';
styleCheckbox.style.cssText='margin:1%; margin-top:3%;'
document.querySelector('main').append(styleCheckbox);
let counTt=+0;
function changesTwo(){
  counTt++;
  if(counTt==1){
    document.querySelector('input[type=checkbox]').checked=true;
    russian();
  }else if(counTt==2){
    document.querySelector('input[type=checkbox]').checked=false;
    english();
    counTt=0;
  }else{
    counTt=0;
  }
}

document.querySelector('body > main > span:nth-child(6)').addEventListener('click',changesTwo);
let linkToWebWorkshop=document.createElement('div');
linkToWebWorkshop.style.cssText=`margin:1%; background:linear-gradient(rgba(0,255,0,0.3),rgba(255,0,0,0.3));`
document.querySelector('main').append(linkToWebWorkshop);
let Ahref=document.createElement('a');
Ahref.innerHTML='страница разработана с участием супер шикарной веб мастерской: <a href="https://nasobe.ru/">Веб мастерская имени барона сайтоверсаузена.</a> Обязательно обращайтесь! ^_^';
document.querySelector('body > main > div').append(Ahref);


function language(){
  if(window.location.hash=='#eng'){
    photoClick();
    changesTwo();
    // console.log('English');
  }
}
language();
let photoList=document.createElement('section');
document.querySelector('main').append(photoList);
photoList.style.cssText=`
display:flex;
max-width:800px;
width:100%;
flex-wrap:wrap;
justify-content:center;
align-items:center;
`
function photoStock(){
  for(let i=0;i<images.length;i++){
    let photo=document.createElement('img');
    photo.setAttribute('id','ph');
    photo.style.cssText=`
    width:100%;
    max-width:300px;
    margin:3%;
    `
    document.querySelector('section').append(photo);
    // console.log(photo+`${i}`);
    document.querySelectorAll('#ph')[i].setAttribute('src',`${images[i]}`);
    document.querySelectorAll('#ph')[i].addEventListener('click',()=>{
      document.querySelector('img').setAttribute('src',`${images[i]}`);
      window.location.href='#';
      count=i;
    });
  }
}
photoStock();
