const blue = document.querySelector('.blue');
const pink = document.querySelector('.pink');
const green = document.querySelector('.green');
const purple = document.querySelector('.purple');
const yellow = document.querySelector('.yellow');
const bg = document.querySelector('.bg');
const bg_btn = document.querySelector('.bg-btn');

const font = document.getElementsByClassName('font');

const font_bd = document.querySelector('.font-border');

blue.addEventListener('click',function(){
    bg.style.backgroundColor = "blue";
    bg_btn.style.backgroundColor = "blue";
    font_bd.style.color = "blue";
    font_bd.style.borderColor = "blue";
    font[0].style.color = 'blue';
    font[1].style.color = 'blue';
    font[2].style.color = 'blue';
})
pink.addEventListener('click',function(){
    bg.style.backgroundColor = "pink";
    bg_btn.style.backgroundColor = "pink";
    font_bd.style.color = "pink";
    font_bd.style.borderColor = "pink";
    font[0].style.color = 'pink';
    font[1].style.color = 'pink';
    font[2].style.color = 'pink';
})
green.addEventListener('click',function(){
    bg.style.backgroundColor = "green";
    bg_btn.style.backgroundColor = "green";
    font_bd.style.color = "green";
    font_bd.style.borderColor = "green";
    font[0].style.color = 'green';
    font[1].style.color = 'green';
    font[2].style.color = 'green';
})
purple.addEventListener('click',function(){
    bg.style.backgroundColor = "purple";
    bg_btn.style.backgroundColor = "purple";
    font_bd.style.color = "purple";
    font_bd.style.borderColor = "purple";
    font[0].style.color = 'purple';
    font[1].style.color = 'purple';
    font[2].style.color = 'purple';
})
yellow.addEventListener('click',function(){
    bg.style.backgroundColor = "yellow";
    bg_btn.style.backgroundColor = "yellow";
    font_bd.style.color = "yellow";
    font_bd.style.borderColor = "yellow";
    font[0].style.color = 'yellow';
    font[1].style.color = 'yellow';
    font[2].style.color = 'yellow';
})
