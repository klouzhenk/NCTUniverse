const shortInfoDropListTitle = document.querySelector('.short-info--droplist-title');
const shortInfoDropListTitleBounds = document.querySelector('.short-info--droplist');
const shortInfoDropList = document.querySelector('.short-info--droplist-list');

// shortInfoDropList.style.display = 'none';

const changeDroplist = function(displayMode, roundAngles){
    shortInfoDropList.style.display = displayMode;
    shortInfoDropListTitleBounds.style.borderBottomLeftRadius = roundAngles;
    shortInfoDropListTitleBounds.style.borderBottomRightRadius = roundAngles;
}

const droplistCheck = function(){
    // console.log(shortInfoDropListTitle);
    if(window.getComputedStyle(shortInfoDropList).getPropertyValue('display') === 'flex') changeDroplist('none', '1vw');
    else changeDroplist('flex', '0');
}

shortInfoDropListTitle.addEventListener('click', droplistCheck);
document.body.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target !== shortInfoDropListTitle) changeDroplist('none', '1vw');
})