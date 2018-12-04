// Indicates that a stage can be striked / unstriked from selection in a match.
import {STAGE_NAMES} from "./constants.js";

/**
 * Creates the model for a Stage in the UI.
 * @param {int} stageId The ID of the stage. Corresponds to the image and name
 * of the stage.
 * @param {boolean} hazardless true if the stage should be played with hazards off,
 * false otherwise.
 * @returns {{id: int, hazardless: boolean}}
 * @constructor
 */
export function Stage(stageId, hazardless) {
    return {
        id: stageId,
        hazardless: hazardless,
    };
}

/**
 * Creates a <div> representing a stage.
 * @param stage The view for the stage.
 * @returns {HTMLElement} The <div> for the stage.
 */
export function createStageDiv(stage) {
    let stageDiv = document.createElement("div");
    stageDiv.classList.add("card", "stage");

    let stageImg = document.createElement("img");
    stageImg.src = "./img/" + stage.id + (stage.hazardless ? "h" : "") + ".jpg";
    if (stage.hazardless) {
        stageImg.classList.add("hazardless");
    }

    let stageP = document.createElement("p");
    stageP.innerHTML = STAGE_NAMES[stage.id] + (stage.hazardless ? " ¬" : "");

    stageDiv.appendChild(stageImg);
    stageDiv.appendChild(stageP);

    return stageDiv;
}
