// Controller for counterpicks.html & pick_stage.html

import {LEGAL_STAGES, CSS_CLASSES} from "./constants.js";
import {createStageDiv} from "./stage.js";
import {joinEncodedStageList, encodeStageListToString, decodeStageListFromString, encodeStageToString, STAGE_DELIMITER} from "./stage_parse.js";
import {getSearchInt, getSearchValue, updateValuesInSearch} from "./url_search_utils.js";

function disableUnselectedStages() {
    const stageContainer = document.getElementById("stage-container");
    for (let stageDiv of stageContainer.children) {
        if (!stageDiv.classList.contains(CSS_CLASSES.STAGE_SELECTED)) {
            stageDiv.setAttribute("disabled", /* value = */ "");
            stageDiv.classList.add(CSS_CLASSES.STAGE_STRUCK);

            // Since the stages are <div>s and not buttons, we need to
            // explicitly remove their onclick callback to prevent them from
            // being clicked.
            stageDiv.onclick = undefined;
        }
    }
}

function enableAllStages() {
    const stageContainer = document.getElementById("stage-container");
    for (let stageDiv of stageContainer.children) {
        stageDiv.removeAttribute("disabled");
        stageDiv.classList.remove(CSS_CLASSES.STAGE_STRUCK);

        // Since the onclick callback is removed when we disable the stages,
        // we need to register the callback when we re-enable them.
        stageDiv.onclick = () => toggleStageSelection(stageDiv);
    }
}

function getSelectedStageIdList() {
    const stageContainer = document.getElementById("stage-container");
    const selectedStageDivList = stageContainer.getElementsByClassName(
        CSS_CLASSES.STAGE_SELECTED);
    return Array.from(selectedStageDivList).map((x) => x.id);
}

function getMaxNumCounterpicks() {
    return getSearchInt(window.location.search, "max_choices");
}

function enableNextSteps() {
    const nextStepButtonContainer = document.getElementById(
        "next-step-button-container");
    const nextStepButtonList = nextStepButtonContainer.getElementsByClassName(
        "button");
    for (let nextStepButton of nextStepButtonList) {
        nextStepButton.removeAttribute("disabled");
    }
}

function disableNextSteps() {
    const nextStepButtonContainer = document.getElementById(
        "next-step-button-container");
    const nextStepButtonList = nextStepButtonContainer.getElementsByClassName(
        "button");
    for (let nextStepButton of nextStepButtonList) {
        nextStepButton.setAttribute("disabled", /* value = */ "");
    }

}

// Some UI is disabled / enabled when all the counterpicks are selected. This
// function updates the UI to have the proper enabled state based on the currently
// selected stages.
function updateUiEnabledStates() {
    if (getSelectedStageIdList().length === getMaxNumCounterpicks()) {
        enableNextSteps();
        disableUnselectedStages();
    } else {
        disableNextSteps();
        enableAllStages();
    }
}

function toggleStageSelection(stageDiv) {
    stageDiv.classList.toggle(CSS_CLASSES.STAGE_SELECTED);
    updateUiEnabledStates();
}

function getStageListFromSearch() {
     // TODO: Add option to remove stages from the previous game in the URL.
    const specifiedStageIdListString = getSearchValue(
        window.location.search, "choices");
    if (specifiedStageIdListString) {
        return decodeStageListFromString(specifiedStageIdListString);
    }

    const excludedStageIdListString = getSearchValue(
        window.location.search, "excluded");
    if (excludedStageIdListString) {
        const excludedStageIdList = excludedStageIdListString.split(STAGE_DELIMITER);
        return LEGAL_STAGES.filter(
            (x) => !excludedStageIdList.includes(encodeStageToString(x)));
    }

    return LEGAL_STAGES;
}

function getExcludedStageListForNextGame() {
    // The starting stages are excluded for counterpick games after game 2.
    // We keep exclusions from previous games.
    const currentlyExcludedStageIdListString =
        getSearchValue(window.location.search, "excluded") ||
        getSearchValue(window.location.search, "starters");
    const currentlyExcludedStageList = decodeStageListFromString(
        currentlyExcludedStageIdListString);

    // With each game, we add the selected counterpick stages to the excluded
    // list. This whittles the list down with each passing game.
    const chosenCounterpickStageIdListString = getSearchValue(
        window.location.search, "choices");
    const chosenCounterpickStageList = decodeStageListFromString(
        chosenCounterpickStageIdListString);

    return currentlyExcludedStageList.concat(chosenCounterpickStageList);
}

export function initializeCounterpicks() {
    const stageList = getStageListFromSearch();
    const stageDivList = stageList.map(createStageDiv);

    const stageContainer = document.getElementById("stage-container");
    stageDivList.forEach((stageDiv) => {
        stageContainer.appendChild(stageDiv);
    });

    // Make sure all the buttons have the correct state when the page initializes.
    updateUiEnabledStates();
}

export function goToPickStage() {
    const selectedStageIdList = getSelectedStageIdList();

    const pickStageSearchString = updateValuesInSearch(
        window.location.search, {
            choices: joinEncodedStageList(selectedStageIdList),
            max_choices: 1,
        });
    window.location.href = "pick_stage.html" + pickStageSearchString;
}

export function goToNextGame() {
    const selectedStageIdList = getSelectedStageIdList();
    console.assert(selectedStageIdList.length === 1);

    const excludedStageList = getExcludedStageListForNextGame();
    const selectedStageId = getSelectedStageIdList()[0];
    const game = getSearchInt(window.location.search, "game");
    const counterpicksSearchString = updateValuesInSearch(
        window.location.search, {
            last_stage: selectedStageId,
            max_choices: 3,
            choices: undefined,
            game: game + 1,
            excluded: encodeStageListToString(excludedStageList),
        });
    window.location.href = "counterpicks.html" + counterpicksSearchString;
}

export function isFinalGame() {
    const game = getSearchInt(window.location.search, "game");
    const maxGames = getSearchInt(window.location.search, "max_games");

    return game === maxGames;
}

export function goToHome() {
    window.location.href = "index.html";
}