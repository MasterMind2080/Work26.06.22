const logLinksTexts = () => {
	const paragraphs = document.querySelectorAll("a");

    paragraphs.forEach(paragraph => {
        console.log(paragraph.textContent); // logs every paragraph's text
    });
}

// Sample usage - do not modify
logLinksTexts();