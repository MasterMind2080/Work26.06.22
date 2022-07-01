const getDivElements = () => {
    // TODO: return all the div elements
    return document.querySelectorAll("div")
    // const div = document.querySelectorAll("div");
    // return div;
};
  
const getFooterLinks = () => {
    // TODO: return all the links that are in the footer-wrapper
    // const links = document.querySelectorAll("a");
    // return links;
    return document.querySelectorAll("#footer-wrapper a")
};
  
const getAboutLinks = () => {
    // TODO: return all the links that point to the About Us page
    // return document.querySelectorAll("#footer-wrapper a").textContent
    const link = document.querySelectorAll("#footer-wrapper a.about");
    return link.textContent;  
    // ?
};
  
  
// Sample usage - do not modify
console.log(getDivElements());
console.log(getFooterLinks());
console.log(getAboutLinks());