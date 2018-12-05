import {decodeStageFromString} from "./stage_parse.js";

export const STAGE_NAMES = [
	"None", "Battlefield", "Big Battlefield", "Final Destination", "Peach's Castle", "Kongo Jungle", "Hyrule Castle", "Super Happy Tree", "Dream Land",
	"Saffron City", "Mushroom Kingdom", "Princess Peach's Castle", "Rainbow Cruise", "Kongo Falls", "Jungle Japes", "Great Bay", "Temple", "Brinstar", "Yoshi's Island (Melee)",
	"Yoshi's Story", "Fountain of Dreams", "Green Greens", "Corneria", "Venom", "Pokemon Stadium", "Onett", "Mushroom Kingdom II", "Brinstar Depths", "Big Blue",
	"Fourside", "Delfino Plaza", "Mushroomy Kingdom", "Figure-8 Circuit", "WarioWare, Inc.", "Bridge of Eldin", "Norfair", "Frigate Orpheon", "Yoshi's Island (Brawl)",
	"Halberd", "Lylat Cruise", "Pokemon Stadium 2", "Port Town Aero Dive", "Castle Siege", "Distant Planet", "Smashville", "New Pork City", "Summit", "Skyworld",
	"Shadow Moses Island", "Luigi's Mansion", "Pirate Ship", "Spear Pillar", "75m", "Mario Bros.", "Hanenbow", "Green Hill Zone", "3D Land", "Golden Plains", "Paper Mario",
	"Gerudo Valley", "Spirit Train", "Dream Land GB", "Unova Pokemon League", "Prism Tower", "Mute City SNES", "Magicant", "Arena Ferox", "Reset Bomb Forest", "Tortimer Island",
	"Balloon Fight", "Living Room", "Find Mii", "Tomodachi Life", "PictoChat 2", "Mushroom Kingdom U", "Mario Galaxy", "Mario Circuit", "Skyloft", "The Great Cave Offensive",
	"Kalos Pokemon League", "Coliseum", "Flat Zone X", "Palutena's Temple", "Gamer", "Garden of Hope", "Town and City", "Wii Fit Studio", "Boxing Ring", "Gaur Plain", "Duck Hunt",
	"Wrecking Crew", "Pilotwings", "Wuhu Island", "Windy Hill Zone", "Wily Castle", "PAC-LAND", "Super Mario Maker", "Suzaku Castle", "Midgar", "Umbra Clock Tower",
	"New Donk City Hall", "Great Plateau Tower", "Moray Towers", "Dracula's Castle"
];

export const LEGAL_STAGES = [
    "1", "3", "7h", "8", "12h", "17h", "20", "21h", "24", "30", "33h", "35h", "36", "37", "38h", "39",
    "40h", "42h", "44", "62h", "63", "66", "74h", "77h", "79", "85", "92h", "94h", "100", "103h"
].map(decodeStageFromString);

export const CSS_CLASSES = {
    // Indicates that a stage has been selected.
    STAGE_SELECTED: "selected",

    // Indicates that a stage has been struck from selection, i.e. cannot be chosen for
    // this match.
    STAGE_STRUCK: "struck"
};

export const MATCH_TYPES = {
    BEST_OF_THREE: "Bo3",
    BEST_OF_FIVE: "Bo5",
};

