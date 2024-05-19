import { SongManageClass } from "../song-class.js";

const songFilesArr = [
    new Audio("../../../music/byte-blast-8-bit-arcade-music-background-music-for-video-24-s.mp3"), 
    new Audio("../../../music/byte-blast-8-bit-arcade-music-background-music-for-video-24-s.mp3"), 
    new Audio("../../../music/byte-blast-8-bit-arcade-music-background-music-for-video-24-s.mp3"), 
    new Audio("../../../music/byte-blast-8-bit-arcade-music-background-music-for-video-24-s.mp3"), 
    new Audio("../../../music/byte-blast-8-bit-arcade-music-background-music-for-video-24-s.mp3"), 
    new Audio("../../../music/byte-blast-8-bit-arcade-music-background-music-for-video-24-s.mp3"), 
    new Audio("../../../music/byte-blast-8-bit-arcade-music-background-music-for-video-24-s.mp3")
];

const regular = new SongManageClass(songFilesArr);
regular.init();