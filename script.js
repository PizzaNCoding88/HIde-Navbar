//GRABBERS

const menuBar = document.querySelector('.navbar');
const menuButton = document.querySelector('.button');
const unorLis = document.querySelector('.links');
//HIDE

// menuButton.addEventListener('click' , function(){
//     if(menuBar.classList.contains('hidden')){
//         menuBar.classList.remove('hidden');
//     } else{
//         menuBar.classList.add('hidden');
//     }
// })

menuButton.addEventListener('click' , function(){
    if(menuBar.classList.contains('navbarHide')){
        menuBar.classList.remove('navbarHide');
        menuBar.classList.add('navbar');
        unorLis.classList.add('links');
        unorLis.classList.remove('linkHide')
    } else{
        menuBar.classList.add('navbarHide');
        menuBar.classList.remove('navbar');
        unorLis.classList.add('linkHide');
        unorLis.classList.remove('links');
    }
})