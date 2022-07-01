const paragraphs = document.querySelectorAll("p");

console.log(paragraphs.length); // 2
console.log(paragraphs[0]); // <p>First paragraph</p>
console.log(paragraphs[1]); // <p>Second paragraph</p>

paragraphs.forEach(paragraph => {
  console.log(paragraph); // logs every paragraph element one by one
});