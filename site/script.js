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
