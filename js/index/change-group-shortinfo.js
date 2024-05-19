const changeBtns = document.querySelectorAll('.short-info-btn');
const glassPhotos = document.querySelectorAll('.glass-photo');
const infoBlocks = document.querySelectorAll('.block--info');
const changeBtnsArr = [...changeBtns];
let currBtnIndex = 0;

console.log(changeBtns);
console.log(glassPhotos);
console.log(infoBlocks);

const changeGroup = function(e){
    console.log(e.target);
    changeBtns[currBtnIndex].classList.remove('active-shortinfo-btn');
    glassPhotos[currBtnIndex].classList.add('inactive-shortinfo-photo');
    infoBlocks[currBtnIndex].classList.remove('active-shortinfo-block');
    currBtnIndex = changeBtnsArr.indexOf(e.target);

    changeBtns[currBtnIndex].classList.add('active-shortinfo-btn');
    glassPhotos[currBtnIndex].classList.remove('inactive-shortinfo-photo');
    infoBlocks[currBtnIndex].classList.add('active-shortinfo-block');
}

changeBtns.forEach((btn) => btn.addEventListener('click', changeGroup));