/*!
* Start Bootstrap - Landing Page v6.0.4 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// icon zooming'

let n = 0 ;

var modal = document.getElementById('myModal')
var imgs = document.getElementsByClassName('gallery-for-id');
var galleries = [];
var modalImg = document.getElementById('img01');

let singInBtn = document.getElementById('signIn');
let rowVert = document.getElementById('rowVert')

for(i = 0; i < imgs.length; i++){
    //galleries[imgs[i].parentNode.parentNode.id.split('gallery')[1]] =[]
    var picture = imgs[i];
    picture.onclick = function(){
        openImg(this);
    }
}
console.log(galleries)

function openImg(pic){
    //modal.style.display='grid';
    modal.style.display='flex';
    modalImg.src = pic.src;
}

function close(){
    modal.style.display ='none';
}


function lineAddImage(n){
    addImg = new Image();
    addImg.src = imgs[n]?.src;
    if (!!imgs[n]) {
        n =0;
        addImg.classList.add("modal-content");
        modal.appendChild(addImg)
     }
     else {
        close()
     }
};
function myScript (e){
    let scroll = modal.scrollLeft;
    if(scroll >= (modal.scrollWidth - modal.clientWidth -10)){ n++ ;lineAddImage(n % imgs.length)};
    //console.log(n)

};
// modal.addEventListener("scroll", (e) => {myScript(e)});


function signIn() {
    console.log('работает')
    if(singInBtn.innerText == 'Войти') {
        singInBtn.innerText = 'Выйти';
    } else {
        singInBtn.innerText = 'Войти'; 
    }

    if(!document.getElementById('greet')) {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = '<div class="col-12 d-flex justify-content-end"><p>Здравствуйте, example@mail.ru</p></div>'
        newDiv.id = 'greet'
        rowVert.append(newDiv)
    } else {
        let newDiv = document.getElementById('greet')
        rowVert.removeChild(newDiv)
    }

}

singInBtn.addEventListener('click', signIn)