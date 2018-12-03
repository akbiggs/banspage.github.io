let dataMap = {};
let indexToInit = 1;

const names = [
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

let whitelist = [
    "None", "Battlefield", "Final Destination", "Kongo Jungle", "Dream Land", "Rainbow Cruise", "Kongo Falls", "Brinstar", "Yoshi's Story", "Fountain of Dreams", "Pokemon Stadium", "Delfino Plaza",
    "WarioWare, Inc.", "Norfair", "Frigate Orpheon", "Yoshi's Island (Brawl)", "Halberd", "Lylat Cruise", "Pokemon Stadium 2", "Castle Siege", "Smashville", "Unova Pokemon League", "Prism Tower",
    "Arena Ferox", "PictoChat 2", "Mushroom Kingdom U", "Skyloft", "Kalos Pokemon League", "Gamer", "Town and City", "Duck Hunt", "Wuhu Island", "Pilotwings", "Wily Castle", "Super Mario Maker", "Midgar",
    "Umbra Clock Tower", "New Donk City Hall", "Dracula's Castle"
];

const legalStages = [
    "1", "3", "7h", "8", "12h", "17h", "20", "21h", "24", "30", "33h", "35h", "36", "37", "38h", "39",
    "40h", "42h", "44", "62h", "63", "66", "74h", "77h", "79", "85", "92h", "94h", "100", "103h"
];

