import { SongManageClass } from "../song-class.js";

const songFilesArr = [
    new Audio("../../../music/nct-127/sticker/Sticker.mp3"),
    new Audio("../../../music/nct-127/sticker/Lemonade.mp3"),
    new Audio("../../../music/nct-127/sticker/Breakfast.mp3"),
    new Audio("../../../music/nct-127/sticker/Focus.mp3"),
    new Audio("../../../music/nct-127/sticker/The_Rainy_Night.mp3"),
    new Audio("../../../music/nct-127/sticker/Far.mp3"),
    new Audio("../../../music/nct-127/sticker/Bring_The_Noize.mp3"),
    new Audio("../../../music/nct-127/sticker/Magic_Carpet_Ride.mp3"),
    new Audio("../../../music/nct-127/sticker/Road_Trip.mp3"),
    new Audio("../../../music/nct-127/sticker/Dreamer.mp3"),
    new Audio("../../../music/nct-127/sticker/Promise_You.mp3"),
];

const nct127 = new SongManageClass(songFilesArr);
nct127.init();