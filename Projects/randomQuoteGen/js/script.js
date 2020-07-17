/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * Array of various quotes
***/
const quotes = [
  {
    quote: "I'm going to live like a Narnian as I can even if there isn't any Narnia!",
    source: "Puddleglum",
    citation: "The Silver Chair",
    year: 1953
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Helen Keller",
    tags: "#Perspective"
  },
  {
    quote: "Some day you will be old enough to start reading fairy tales again.",
    source: "C.S. Lewis",
    citation: "Good Reads",
  },
  {
    quote: "The truth shall make you free.",
    source: "Jesus",
    citation: "The Bible",
    tags: "#Christian"
  },
  {
    quote: "Sometimes I get emotional over fonts.",
    source: "Kanye West",
  }
];
// For Testing quote array
//console.log(quotes);

/***
 * Change background color randomly
 ***/
function changeBackgroundColorRand() {
  const sevColors = [
    "#000000", "#c0c0c0", "#808080", "#ffffff", "#800000", "#ff0000", "#800080", "4169e1",	"#fff8dc",
    "#ff00ff", "#008000",	"#00ff00", "#808000",	"#ffff00", "#000080",	"#0000ff", "#008080",	"#8b008b",
    "#00ffff", "#ffa500",	"#f0f8ff", "#faebd7",	"#7fffd4", "#f0ffff", "#f5f5dc", "#ffe4c4",	"#00ced1",
    "#ffebcd", "#8a2be2", "#a52a2a", "#deb887", "#5f9ea0", "#7fff00", "#d2691e", "#ff7f50", "#6495ed", 	
    "#dc143c", "#00ffff",	"#00008b", "#008b8b",	"#b8860b", "#a9a9a9",	"#006400", "#a9a9a9",	"#bdb76b",		
    "#556b2f", "#ff8c00",	"#9932cc", "#8b0000",	"#e9967a", "#8fbc8f",	"#483d8b", "#2f4f4f",	"#2f4f4f",		
    "#9400d3", "#ff1493",	"#00bfff", "#696969",	"#696969", "#1e90ff",	"#b22222", "#fffaf0",	"#228b22",	
    "#dcdcdc", "#f8f8ff",	"#ffd700", "#daa520",	"#adff2f", "#808080",	"#f0fff0", "#ff69b4",	"#cd5c5c",	
    "#4b0082", "#fffff0", "#f0e68c", "#e6e6fa", "#fff0f5", "#7cfc00",	"#fffacd", "#add8e6",	"#f08080",	
    "#e0ffff", "#fafad2",	"#d3d3d3", "#90ee90",	"#d3d3d3", "#ffb6c1",	"#ffa07a", "#20b2aa", "#9acd32",
    "#87cefa", "#778899",	"#778899", "#b0c4de",	"#ffffe0", "#32cd32",	"#faf0e6", "#663399", "#f5f5f5",
    "#ff00ff", "#66cdaa",	"#0000cd", "#ba55d3",	"#9370db", "#3cb371",	"#7b68ee", "#00fa9a",	"#48d1cc",		
    "#191970", "#f5fffa",	"#ffe4e1", "#ffe4b5",	"#ffdead", "#fdf5e6",	"#6b8e23", "#ff4500",	"#da70d6",		
    "#98fb98", "#afeeee",	"#db7093", "#ffefd5",	"#ffdab9", "#cd853f",	"#ffc0cb", "#dda0dd",	"#b0e0e6",		
    "#8b4513", "#fa8072",	"#f4a460", "#2e8b57",	"#fff5ee", "#a0522d",	"#87ceeb", "#6a5acd",	"#f5deb3",
    "#708090", "#708090",	"#fffafa", "#00ff7f",	"#4682b4", "#d2b48c",	"#d8bfd8", "#ff6347",	"#40e0d0",		
    "#c71585", "#eee8aa", "#bc8f8f", "#ee82ee"];
    let randomColorNum = Math.floor (Math.random() * sevColors.length);
    document.body.style.backgroundColor = sevColors[randomColorNum];
}


/***
 * Gets a random quote from quote array
***/
function getRandomQuote() {
  // Gets random number between 0 and 4, based on quotes array length
  const randomNumber = Math.floor( Math.random() * quotes.length );
  // Return random quote
  return quotes[randomNumber];
}
// For testing function
//console.log(getRandomQuote()); 


/***
 * 
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let HTML = '';

  // Setup HTML w/ quote and source
  HTML += `<p class="quote"> ${randomQuote.quote} </p>`;
  HTML += `<p class="source"> ${randomQuote.source}`;
  // Checks for citation
  if(randomQuote.citation) {
    HTML += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  // Checks for year
  if(randomQuote.year) {
    HTML += `<span class="year"> ${randomQuote.year} </span>`;
  }
  // Checks for tags
  if(randomQuote.tags) {
    HTML += `<span class="tags"> ${randomQuote.tags} </span>`;
  }
  HTML += `</p>`;

  // Selects and adds HTML to div
  const div = document.getElementById('quote-box');
  div.innerHTML = HTML;

  // Change Background Color
  changeBackgroundColorRand();

}
// For testing function
//printQuote();


/***
 * Changing Quote
***/
// Button Click
document.getElementById('load-quote').addEventListener("click", printQuote, false); // Code Provided by Treehouse
// Or Timer
setInterval(printQuote, 25000);