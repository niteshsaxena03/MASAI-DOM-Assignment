
// 1.Changing the text ! 
const heading = document.getElementById('main-heading');
heading.textContent = 'DOM Manipulation Practice Page';


// 2.Select All paragraphs class text content 
const textContentParagraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < textContentParagraphs.length; i++) {
    textContentParagraphs[i].style.color = 'blue';
}


// change img 
const mainImage = document.getElementById('main-image');
mainImage.src = 'https://via.placeholder.com/200';


// div background

const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = '#333';


// inside div

const containerParagraphs = containerDiv.querySelectorAll('p');
containerParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Updated paragraph ${index + 1} inside the container.`;
});
