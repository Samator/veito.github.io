const cartBtn = document.querySelector('#cart');
const cartBlock = document.querySelector('#cart-block');
const cartBack = document.querySelector('.back_button');
const delProd = document.querySelector('#del-product');
let product = document.querySelector('.add_product');


cartBtn.addEventListener('click', function(){
    cartBlock.style.display = "block";
});
cartBack.addEventListener('click', function(){
    cartBlock.style.display = "none";
});




delProd.addEventListener('click', function(){
    product.remove();
});