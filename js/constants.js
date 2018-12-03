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

//Set id "presets" to the list of stagelists from DataMap.
function populateCommunityList() {
    let keys = Object.keys(dataMap);
    let presets = document.getElementById("presets"); //get navbar presets div
    for (let i = 0; i < keys.length; i++) {
        // <a class="navbar-item" href="javascript:initFromDataMap(keys[i])">Someone's Stagelist</a>
        let presetItem = document.createElement("a");
        presetItem.classList.add("navbar-item");
        presetItem.href = "javascript:preset('" + keys[i] + "')";
        presetItem.innerHTML = keys[i] + "'s Stagelist";
        presets.appendChild(presetItem);
    }
}

function enableNavbarBurgers() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
}


dataMap["2GG"] = "1-3-44-24h-20_85-39h-42h-62h-33h-36h-77h-38h-17h-37";
dataMap["ZeRo"] = "1-3-20-40h-44_85-17h-37-36h-42h-39h";
dataMap["Ori (Michigan TO)"] = "1-3-44-37-40h-20-39h_85-42h-36h-77h-66h-79h-17h";
dataMap["Ottawa"] = "1-3-24h-44-37h-39h-79h_19-20-17h-33h-36h-38h-42h-62h-66h-77h-85";
dataMap["Philly"] = "1h-3h-40h-44h-33h_79h-44-85-20-39h";
dataMap["RJ (Tristate TO)"] = "1h-3h-44h-40h-79h_33h-39h-77h-66h-42h-85h-36h-37h";
dataMap["Smashadelphia"] = "1h-44h-3h-40h-33h-36h-85h_19h-37h-94h-79h-66h-12h-77h";
dataMap["Xanadu"] = "1h-3h-39h-44h-40h_33h-77h-66h-42h-85h-79h-36h";
