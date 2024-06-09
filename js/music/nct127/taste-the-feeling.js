import { SongManageClass } from "../song-class.js";

const songFilesArr = [
    new Audio('../../../music/nct-127/taste-the-feeling/Taste_The_Feeling.mp3')
];

const nct127 = new SongManageClass(songFilesArr);
nct127.init();