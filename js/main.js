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
//set height
    // debugger;
    var getHeight = getHeight.offsetHeight + 'px';
window.onload = function(){
    newsImgHeight.style.height = getHeight;
}
