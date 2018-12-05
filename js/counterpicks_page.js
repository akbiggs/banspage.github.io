import {LEGAL_STAGES, CSS_CLASSES} from "./constants.js";
import {createStageDiv} from "./stage.js";

// The number of counterpick stages that the loser forces the winner to use.
const MAX_SELECTED_COUNTERPICK_STAGES = 3;

function disableUnselectedStages() {
    const stageContainer = document.getElementById("stage-container");
    for (let child of stageContainer.children) {
        if (!child.classList.contains(CSS_CLASSES.STAGE_SELECTED)) {
            child.setAttribute("disabled", /* value = */ "");
            child.classList.add(CSS_CLASSES.STAGE_STRUCK);
            child.onclick = undefined;
        }
    }
}

function enableAllStages() {
    const stageContainer = document.getElementById("stage-container");
    for (let child of stageContainer.children) {
        child.removeAttribute("disabled");
        child.classList.remove(CSS_CLASSES.STAGE_STRUCK);
        child.onclick = () => selectStage(child);
    }
}

function promptForStageIfMaxSelected() {
    const stageContainer = document.getElementById("stage-container");
    const promptStageButton = document.getElementById("prompt-stage-button");

    const selectedStages = stageContainer.getElementsByClassName(
        CSS_CLASSES.STAGE_SELECTED);
    if (selectedStages.length === MAX_SELECTED_COUNTERPICK_STAGES) {
        promptStageButton.removeAttribute("disabled");
        disableUnselectedStages();
    } else {
        promptStageButton.setAttribute("disabled", /* value = */ "");
        enableAllStages();
    }
}

export function selectStage(stageDiv) {
    stageDiv.classList.toggle(CSS_CLASSES.STAGE_SELECTED);
    promptForStageIfMaxSelected();
}

export function initializeCounterpicks() {
    // TODO: Add option to remove stages from the previous game in the URL.
    const stageList = LEGAL_STAGES;

    const stageContainer = document.getElementById("stage-container");
    const stageDivList = stageList.map(createStageDiv);
    stageDivList.forEach((stageDiv) => {
        stageDiv.onclick = () => selectStage(stageDiv);
        stageContainer.appendChild(stageDiv);
    });

    // Make sure all the buttons have the correct state when the page initializes.
    promptForStageIfMaxSelected();
}

export function promptStageChoice() {
    window.location.href = "counterpicks.html" + window.location.hash;
}
