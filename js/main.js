const menu = document.querySelector('#menu_btn');
const menuBlock = document.querySelector('#menu_block');
const menuClose = document.querySelector('#menu_close');
console.log(menu,menuBlock,menuClose);

menu.addEventListener('click', function(){
    menuBlock.style.display = "flex";
});

menuClose.addEventListener('click', function(){
    menuBlock.style.display = "none";
});
