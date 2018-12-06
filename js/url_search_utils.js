// Utilities for modifying the "search" of the URL, i.e. the
// ?x=foo&y=blah part of the URL.

export function decodeSearchToMap(search) {
    const searchWithoutQuestionMark = search.substr(1);
    const parts = searchWithoutQuestionMark.split("&");
    const keyValuePairList = parts.map((x) => x.split("="));

    let result = {};
    for (const keyValuePair of keyValuePairList) {
        result[keyValuePair[0]] = keyValuePair[1];
    }
    return result;
}

export function encodeSearchFromMap(map) {
    let parts = [];
    for (const key in map) {
        parts.push(`${key}=${map[key]}`);
    }

    if (parts.length === 0) {
        return "";
    } else {
        return `?${parts.join("&")}`;
    }
}

export function getSearchValue(search, key) {
    return decodeSearchToMap(search)[key];
}

export function getSearchInt(search, key) {
    return parseInt(getSearchValue(search, key));
}

export function updateValuesInSearch(search, updateMap) {
    let searchMap = decodeSearchToMap(search);
    for (const key in updateMap) {
        if (updateMap[key] !== undefined) {
            searchMap[key] = updateMap[key];
        } else {
            delete searchMap[key];
        }
    }
    return encodeSearchFromMap(searchMap);
}

