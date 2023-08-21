function aclean(arr) {
    let result = new Set();
    let anagramGroups = new Map();
    let cleanArray = [];
    arr.forEach(word => {
        let sorted = word.toLowerCase().split('').sort().join('');
        if (anagramGroups.has(sorted)) {
            return;
        } else {
            anagramGroups.set(sorted, word);
        }
        let keyValue = anagramGroups.get(sorted);
        cleanArray += `${keyValue} `;
    });
    return cleanArray;
}

let arr = ["nap", "teachers", "PAN", "ear", "era", "hectares"];
alert(aclean(arr));