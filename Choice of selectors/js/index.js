const getNavbarElement = () => {
	// TODO: get the element with id navbar
    return document.querySelector("#navbar")
}

const getMainElement = () => {
	// TODO: get the element with id main
    return document.querySelector("#main")
}

const getAboutFromFooter = () => {
    // TODO: get the the about link that's in the footer
    return document.querySelector("#footer-wrapper")
}

const getTheParagraphElement = () => {
    // TODO: get the first paragraph element
    return document.querySelector("#main p")
}


// Sample usage - do not modify
console.log(getNavbarElement());
console.log(getMainElement());
console.log(getAboutFromFooter());
console.log(getTheParagraphElement());