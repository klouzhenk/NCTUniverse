import { SongManageClass } from "../song-class.js";

const songFilesArr = [
    new Audio("../../../music/nct-127/1st-mini-album/Fire_Truck.mp3"), 
    new Audio("../../../music/nct-127/1st-mini-album/Once_Again.mp3"), 
    new Audio("../../../music/nct-127/1st-mini-album/Wake_Up.mp3"), 
    new Audio("../../../music/nct-127/1st-mini-album/Another_World.mp3"), 
    new Audio("../../../music/nct-127/1st-mini-album/Paradise.mp3"), 
    new Audio("../../../music/nct-127/1st-mini-album/Mad_City.mp3"), 
    new Audio("../../../music/nct-127/1st-mini-album/Switch.mp3")
];

const nct127 = new SongManageClass(songFilesArr);
nct127.init();