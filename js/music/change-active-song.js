export const changeSongBtns = document.querySelectorAll('.all-songs--song-block');
const changeSongBtnsArr = [...changeSongBtns]; 

const currSongName = document.querySelector('.music--section--song-name');
const songTexts = document.querySelectorAll('.music--section--song-img-text');
const blockSongImgText = document.querySelector('.music--section--song-img');

export let currBtnIndex = 0;
let isSongTextVisible = false;

const songNames = changeSongBtnsArr.map(songBlock => {
    return songBlock.querySelector('.all-songs--song-block-title').textContent;
});

const hideSongText = function(block){
    block.querySelector('.active-song-text').classList.remove('active-song-text');
    isSongTextVisible = false;
}

const revealSongText = function(block){
    songTexts[currBtnIndex].classList.add('active-song-text');
    isSongTextVisible = true;
}

const revealOrHideSongText = function(e){
    let block;
    e.target.classList.contains('.music--section--song-img') ? block = e.target : block = e.target.closest('.music--section--song-img');
    isSongTextVisible ? hideSongText(block) : revealSongText(block);
}

const addActiveClasses = function(){
    changeSongBtns[currBtnIndex].classList.add('active-song-bar');
    songTexts[currBtnIndex].classList.add('active-song-text');
}

const removeActiveClasses = function(){
    changeSongBtns[currBtnIndex].classList.remove('active-song-bar');
    songTexts[currBtnIndex].classList.remove('active-song-text');
}

export const changeSongBar = function(e){
    removeActiveClasses();
    let element;
    e.target.classList.contains('.all-songs--song-block') ? element = e.target : element = e.target.closest('.all-songs--song-block');
    currBtnIndex = changeSongBtnsArr.indexOf(element);
    addActiveClasses();
    const songTextsParent = songTexts[currBtnIndex].parentElement;
    hideSongText(songTextsParent);
    document.querySelector('.music--section--song-name').textContent = songNames[currBtnIndex];
}

export const changeSongBarDueEnded = function(e){
    removeActiveClasses();
    currBtnIndex === songNames.length - 1 ? currBtnIndex = 0 : currBtnIndex++;
    addActiveClasses();
    const songTextsParent = songTexts[currBtnIndex].parentElement;
    hideSongText(songTextsParent);
    document.querySelector('.music--section--song-name').textContent = songNames[currBtnIndex];
}

export const pushPrevBtn = function(){
    removeActiveClasses();
    currBtnIndex === 0 ? currBtnIndex = songNames.length - 1 : currBtnIndex--;
    addActiveClasses();
    const songTextsParent = songTexts[currBtnIndex].parentElement;
    hideSongText(songTextsParent);
    document.querySelector('.music--section--song-name').textContent = songNames[currBtnIndex];
}

export const pushNextBtn = function(){
    removeActiveClasses();
    currBtnIndex === songNames.length - 1 ? currBtnIndex = 0 : currBtnIndex++;
    addActiveClasses();
    const songTextsParent = songTexts[currBtnIndex].parentElement;
    hideSongText(songTextsParent);
    document.querySelector('.music--section--song-name').textContent = songNames[currBtnIndex];
}

blockSongImgText.addEventListener('click', (e) => {
    revealOrHideSongText(e);
});

