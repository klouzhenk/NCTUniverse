const shortInfoDropListTitle = document.querySelector('.short-info--droplist-title');
const shortInfoDropListTitleBounds = document.querySelector('.short-info--droplist');
const shortInfoDropList = document.querySelector('.short-info--droplist-list');

const changeDroplist = function(opacity, roundAngles){
    shortInfoDropList.style.opacity = opacity;
    shortInfoDropListTitleBounds.style.borderBottomLeftRadius = roundAngles;
    shortInfoDropListTitleBounds.style.borderBottomRightRadius = roundAngles;
}

const droplistCheck = function(){
    // console.log(shortInfoDropListTitle);
    if(window.getComputedStyle(shortInfoDropList).getPropertyValue('opacity') === '1') changeDroplist('0', '1vw');
    else changeDroplist('1', '0');
}

shortInfoDropListTitle.addEventListener('click', droplistCheck);
document.body.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target !== shortInfoDropListTitle) changeDroplist('0', '1vw');
})