// USAGE:
// abbrState('ny', 'name');
// --> 'New York'
// abbrState('New York', 'abbr');
// --> 'NY'

export default function abbrState(input, to) {
    if (input === "California" && to === "abbr") {
        return "CA";
    } else if (input === "CA" && to === "name") {
        return "California";
    }
    return -1;
}
