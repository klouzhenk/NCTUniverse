import {currBtnIndex, changeSongBtns, changeSongBarDueEnded, pushNextBtn, pushPrevBtn, changeSongBar} from './change-active-song.js';

const loopBtnSong = document.querySelector('.song-audio--loop-btn');
const prevBtnSong = document.querySelector('.arrow--prev-song');
const nextBtnSong = document.querySelector('.arrow--next-song');
const playBtnSong = document.querySelector('.song-audio--play-btn');
let isSongPlaying = false;
let isLooping = false;

export const SongManageClass = function(songFilesArr){
    this.songFilesArr = songFilesArr;
    this.currSongFile = songFilesArr[0];
    this.handleSongEnd = this.handleSongEnd.bind(this);
    this.setOrRemoveLooping = this.setOrRemoveLooping.bind(this);
}

SongManageClass.prototype.setEndedEventListener = function() {
    this.currSongFile.addEventListener('ended', this.handleSongEnd);
}

SongManageClass.prototype.changeCurrSongFile = function(){
    this.currSongFile.removeEventListener('ended', this.handleSongEnd); // очищаємо старий обробник події
    this.currSongFile = this.songFilesArr[currBtnIndex];
    this.setEndedEventListener();
}

SongManageClass.prototype.playOrStopCurrSongFile = function(){
    if(isSongPlaying){
        this.currSongFile.pause();
        isSongPlaying = false;
        document.querySelector('.svg-pause').classList.remove('active-play-btn');
        document.querySelector('.svg-play').classList.add('active-play-btn');
    }
    else{
        this.currSongFile.play();
        isSongPlaying = true;
        document.querySelector('.svg-play').classList.remove('active-play-btn');
        document.querySelector('.svg-pause').classList.add('active-play-btn');
    }
}

SongManageClass.prototype.stopPlayMusicDueChanges = function(){
    this.currSongFile.load();
    isSongPlaying = false;
    document.querySelector('.svg-pause').classList.remove('active-play-btn');
    document.querySelector('.svg-play').classList.add('active-play-btn');
}

SongManageClass.prototype.handleSongEnd = function(){
    changeSongBarDueEnded();
    this.changeCurrSongFile();
    this.currSongFile.load();
    this.currSongFile.play();
    this.setEndedEventListener(); // прив'язуємо обробник події до нового елементу
};

SongManageClass.prototype.setOrRemoveLooping = function(){
    if(isLooping){
        this.currSongFile.loop = false;
        loopBtnSong.classList.remove('active-loop-btn');
        this.setEndedEventListener();
        isLooping = false;
    }
    else{
        this.currSongFile.loop = true;
        loopBtnSong.classList.add('active-loop-btn');
        this.currSongFile.removeEventListener('ended', this.handleSongEnd);
        isLooping = true;
    }
}

SongManageClass.prototype.init = function(){
    changeSongBtns.forEach(btn => btn.addEventListener('click', (e) => {
        changeSongBar(e);
        this.stopPlayMusicDueChanges();
        this.changeCurrSongFile();
        if(isLooping) this.setOrRemoveLooping();
    }));
    prevBtnSong.addEventListener('click', (e) => {
        pushPrevBtn(e);
        this.stopPlayMusicDueChanges();
        this.changeCurrSongFile();
        if(isLooping) this.setOrRemoveLooping();
    });
    nextBtnSong.addEventListener('click', (e) => {
        pushNextBtn(e);
        this.stopPlayMusicDueChanges();
        this.changeCurrSongFile();
        if(isLooping) this.setOrRemoveLooping();
    });
    playBtnSong.addEventListener('click', (e) => {
        this.playOrStopCurrSongFile();
    });
    loopBtnSong.addEventListener('click', this.setOrRemoveLooping);
    this.setEndedEventListener();
}
