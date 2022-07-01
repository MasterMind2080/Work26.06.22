/**
 * @param {string} cssSelector
 */
 const getTextFromSelector = cssSelector => {
	cssSelector = document.querySelector(".container h1")
    console.log(cssSelector?.textContent);
}

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // undefined