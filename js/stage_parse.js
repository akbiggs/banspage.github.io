import {Stage} from './stage.js'

const HAZARD_CHARACTER = 'h';
const STAGE_DELIMITER = '-';

/**
 * Converts a stage model into a URL-safe string.
 * @param {{id: int, hazardless: boolean}} stage The stage's model.
 * @example
 * encodeStageToString({id: 5, hazardless: true}) // => 5h
 * @example
 * encodeStageToString({id: 2, hazardless: false}) // => 2
 * @returns {string} The stage model in string form.
 */
export function encodeStageToString(stage) {
    return `${stage.id}${stage.hazardless ? HAZARD_CHARACTER : ""}`
}

/**
 * Parses a stage model from a string (usually from a URL).
 * @param {string} stageString The encoded URL string version of a stage.
 * This should come from {@link encodeStageToString}.
 * @returns {{id: int, hazardless: boolean}}
 */
export function decodeStageFromString(stageString) {
    const stageRegex = /(\d+)(h)?/;
    const matchedStageString = stageString.match(stageRegex);

    const stageIdString = matchedStageString[1];
    const stageProperties = matchedStageString[2];

    return Stage(
        /* stageId = */ parseInt(stageIdString),
        /* hazardless = */ stageProperties === "h");
}

/**
 * Converts a list of stages into a URL-safe string.
 * @param {{id: int, hazardless: boolean}[]} stageList
 * @returns {string}
 */
export function encodeStageListToString(stageList) {
    return stageList.map(encodeStageToString).join(STAGE_DELIMITER);
}


/**
 * Parses a list of stages from a string (usually from a URL).
 * @param {string} stageListString A string of a stage list. This should come from
 * {@link encodeStageListToString}.
 * @returns {{id: int, hazardless: boolean}[]} The list of parsed stages.
 */
export function decodeStageListFromString(stageListString) {
    return stageListString.split(STAGE_DELIMITER).map(decodeStageFromString);
}