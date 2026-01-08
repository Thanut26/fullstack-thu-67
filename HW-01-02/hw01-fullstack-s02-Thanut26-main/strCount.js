function countString(input, type) {

    let count = 0;

    if (type === "w") {
        let text = input.trim();
        if (text === "") {
            return 0;
        }

        let words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== "") {
                count++;
            }
        }
        return count;
    }

    if (type === "c") {
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== " ") {
                count++;
            }
        }
        return count;
    }

    if (type === "v") {
        let vowels = "aeiouAEIOU";
        for (let i = 0; i < input.length; i++) {
            if (vowels.includes(input[i])) {
                count++;
            }
        }
        return count;
    }

    throw new Error("Invalid parameter");
}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w"));
console.log("Character count:", countString("Hello world, how are you?", "c"));
console.log("Vowel count:", countString("Hello world, how are you?", "v"));

module.exports = countString;
