// Controller for starters.html

import {LEGAL_STAGES, CSS_CLASSES} from "./constants.js";
import {sample} from "./utils.js";
import {decodeStageListFromString, encodeStageListToString} from "./stage_parse.js";
import {createStageDiv} from "./stage.js";
import {updateValuesInSearch} from "./url_search_utils.js";

/**
 * Lets the user go to the counterpicks screen if there's only one stage remaining.
 */
function updateCounterpicksButtonEnabled() {
    const stageContainer = document.getElementById("stage-container");
    const counterpicksButton = document.getElementById("counterpicks-button");
    const stageDivList = stageContainer.getElementsByClassName("stage");
    const struckStageDivList = stageContainer.getElementsByClassName(
        CSS_CLASSES.STAGE_STRUCK);

    const numStagesLeft = stageDivList.length - struckStageDivList.length;
    if (numStagesLeft === 1) {
        counterpicksButton.removeAttribute("disabled");
    } else {
        counterpicksButton.setAttribute("disabled", /* value = */ "");
    }
}

function strikeStage(stageDiv) {
    stageDiv.classList.toggle(CSS_CLASSES.STAGE_STRUCK);
    updateCounterpicksButtonEnabled();
}

export function initializeStarters() {
    const specifiedStageListString = window.location.hash;
    const stageList =
        specifiedStageListString
            ? decodeStageListFromString(specifiedStageListString)
            : sample(LEGAL_STAGES, 5);
    window.location.hash = encodeStageListToString(stageList);

    const stageContainer = document.getElementById("stage-container");
    const stageDivList = stageList.map(createStageDiv);
    stageDivList.forEach((stageDiv) => {
        stageDiv.onclick = () => strikeStage(stageDiv);
        stageContainer.appendChild(stageDiv);
    });

    // Make sure the button has the right state when the page initializes.
    updateCounterpicksButtonEnabled();
}

export function goToCounterpicks() {
    const startersString = window.location.hash.substr(1);
    const counterpicksSearch = updateValuesInSearch(
        window.location.search, {
            starters: startersString,
            max_choices: 3,
            game: 2,
        });
    window.location.href = "counterpicks.html" + counterpicksSearch;
}