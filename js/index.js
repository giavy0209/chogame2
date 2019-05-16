    vid = document.getElementById('news-video');
    thumb = document.getElementById('thumb');
    newsImgHeight = document.getElementById('set-height');
    getHeight = document.getElementById('getHeight');
function playVid(){
    thumb.style.opacity = "0";
    thumb.style.pointerEvents = "none"
    vid.play();
}
function pauseVid(){
    vid.pause();
    // thumb.style.opacity = "1";
    thumb.style.pointerEvents = "all";
}

function showMenu(){
    attMenu = document.getElementById('menu').hasAttribute('class');

    if(attMenu == false ){
        menu.setAttribute('class', 'active');
    }else{
        menu.removeAttribute('class', 'active')
    }
}

    var getHeight = getHeight.offsetHeight + 'px';
    window.onload = function(){
    newsImgHeight.style.height = getHeight;
}
