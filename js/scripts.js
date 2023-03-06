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
var imgs = document.getElementsByClassName('example-image');
var modalImg = document.getElementById('img01')
for(i = 0; i < imgs.length; i++){
    var picture = imgs[i];
    picture.onclick = function(){
        openImg(this);
    }
}


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
    if(scroll >= (modal.scrollWidth - modal.clientWidth)){ n++ ;lineAddImage(n%imgs.length)};
    //console.log(n)

};
modal.addEventListener("scroll", (e) => {myScript(e)});
