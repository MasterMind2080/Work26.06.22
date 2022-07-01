const getNumberOfLinks = () => {
    const paragraphs = document.querySelectorAll("a");
    console.log(paragraphs.length); 
}

// Sample usage - do not modify
console.log(getNumberOfLinks()); // 5