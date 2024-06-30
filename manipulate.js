// arrayManipulation.js

// Task 1: processArray function
function processArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
}

// Task 2: formatArrayStrings function
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

module.exports = { processArray, formatArrayStrings };
// userInfo.js

// Task 3: createUserProfiles function
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

module.exports = { createUserProfiles };
