/**
 * Gets |n| random elements from |list|.
 * @template T
 * @param {T[]} list An array.
 * @param n The number of elements. Precondition: 0 <= n <= list.length;
 * @returns {T[]} A new array of size |n| with random elements from |list|. Each
 * element can only appear once.
 */
export function sample(list, n) {
    let shuffled = list.slice(0), i = list.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, n);
}
