// dropdown menu
function showMenu() {
    attMenu = document.getElementById('menu').hasAttribute('class');

    if (attMenu == false) {
        menu.setAttribute('class', 'active');
    } else {
        menu.removeAttribute('class', 'active')
    }
}

// rating star
star = document.querySelectorAll('.rating .star');
function addMainStar1() {
    star[0].classList.add('main-active')
    star[1].classList.remove('main-active')
    star[2].classList.remove('main-active')
    star[3].classList.remove('main-active')
    star[4].classList.remove('main-active')
}
function addMainStar2() {
    star[0].classList.add('main-active')
    star[1].classList.add('main-active')
    star[2].classList.remove('main-active')
    star[3].classList.remove('main-active')
    star[4].classList.remove('main-active')
}
function addMainStar3() {
    star[0].classList.add('main-active')
    star[1].classList.add('main-active')
    star[2].classList.add('main-active')
    star[3].classList.remove('main-active')
    star[4].classList.remove('main-active')
}
function addMainStar4() {
    star[0].classList.add('main-active')
    star[1].classList.add('main-active')
    star[2].classList.add('main-active')
    star[3].classList.add('main-active')
    star[4].classList.remove('main-active')
}
function addMainStar5() {
    star[0].classList.add('main-active')
    star[1].classList.add('main-active')
    star[2].classList.add('main-active')
    star[3].classList.add('main-active')
    star[4].classList.add('main-active')
}
function addSubStar1() {
    star[0].classList.add('sub-active')
    star[1].classList.remove('sub-active')
    star[2].classList.remove('sub-active')
    star[3].classList.remove('sub-active')
    star[4].classList.remove('sub-active')
}
function addSubStar2() {
    star[0].classList.add('sub-active')
    star[1].classList.add('sub-active')
    star[2].classList.remove('sub-active')
    star[3].classList.remove('sub-active')
    star[4].classList.remove('sub-active')
}
function addSubStar3() {
    star[0].classList.add('sub-active')
    star[1].classList.add('sub-active')
    star[2].classList.add('sub-active')
    star[3].classList.remove('sub-active')
    star[4].classList.remove('sub-active')
}
function addSubStar4() {
    star[0].classList.add('sub-active')
    star[1].classList.add('sub-active')
    star[2].classList.add('sub-active')
    star[3].classList.add('sub-active')
    star[4].classList.remove('sub-active')
}
function addSubStar5() {
    star[0].classList.add('sub-active')
    star[1].classList.add('sub-active')
    star[2].classList.add('sub-active')
    star[3].classList.add('sub-active')
    star[4].classList.add('sub-active')
}
function removeSubStar() {
    star[0].classList.remove('sub-active')
    star[1].classList.remove('sub-active')
    star[2].classList.remove('sub-active')
    star[3].classList.remove('sub-active')
    star[4].classList.remove('sub-active')
}
//===================================
var selectYear = Array.from(document.querySelectorAll('select[name="product-year"]'))
// console.log(selectYear);
for (var year = 1980; year <= 2019; year++) {
    var option = document.createElement('option');
        option.setAttribute('value', year);
        option.innerText = year;
    selectYear[0].append(option);
}
//========================
getImg = Array.from(document.querySelectorAll('.slide-product .product-img'));
function changeImg1(){
    getImg[0].classList.add('active');
    getImg[1].classList.remove('active');
    getImg[2].classList.remove('active');
}
function changeImg2(){
    getImg[0].classList.remove('active');
    getImg[1].classList.add('active');
    getImg[2].classList.remove('active');
}
function changeImg3(){
    getImg[0].classList.remove('active');
    getImg[1].classList.remove('active');
    getImg[2].classList.add('active');
}
