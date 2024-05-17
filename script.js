//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to strip articles from the beginning of the band name
function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

// Sorting the array using the custom comparator
const sortedBands = bands.sort((a, b) => {
    const strippedA = stripArticle(a);
    const strippedB = stripArticle(b);
    return strippedA.localeCompare(strippedB);
});

const elements=document.getElementById("band");
sortedBands.forEach((item)=>{
	const newLi=document.createElement("li");
	newLi.innerHTML=`<li>`{item}`</li>`;
	elements.append(newLi);
})
