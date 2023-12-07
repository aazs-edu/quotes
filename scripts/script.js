// JS Assignment 2 - Abdulrahman Zaki
// Select Elements
var quote = document.querySelector(".quote-box .quote");
var author = document.querySelector(".quote-box .author-name");
var quoteBtn = document.querySelector(".btns-box .quote-btn");
var copyBtn = document.querySelector(".btns-box .copy-btn");

// Quotes Dataset
const quotesDataset = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    quote: "“So many books, so little time.”",
    author: "Frank Zappa",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    quote: "“We accept the love we think we deserve.”",
    author: "Stephen Chbosky",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    author: "Mark Twain",
  },
  {
    quote: "“I have not failed. I've just found 10,000 ways that won't work.”",
    author: "Thomas A. Edison",
  },
  {
    quote: "“If you don't stand for something you will fall for anything.”",
    author: "Gordon A. Eadie",
  },
  {
    quote: "“A day without sunshine is like, you know, night.”",
    author: "Steve Martin",
  },
  {
    quote: "“It is never too late to be what you might have been.”",
    author: "George Eliot",
  },
];

// Initialize the previous index to an invalid value
var previousIndex = -1;
function generateRandomIndex() {
  let newIndex;
  // prevent consecutive repetitions of the same index
  do {
    newIndex = Math.floor(Math.random() * quotesDataset.length);
  } while (newIndex === previousIndex);
  // Update the previous index for the next iteration
  previousIndex = newIndex;
  return newIndex;
}

// Handle Generate New Random Quote
function newQuote() {
  // Play Click Sound
  document.getElementById("click").play();
  // Generates a random number between 0 and the length of the dataset
  var randomIndex = generateRandomIndex();
  var result = quotesDataset[randomIndex];
  // Display Quote
  quote.innerText = result.quote;
  author.innerText = result.author;
  // console.log(result, randomIndex);
}
quoteBtn.addEventListener("click", newQuote);

// Handle Copy Quote To Clipboard
function copyQuote() {
  // Play Click Sound
  document.getElementById("click").play();
  // Copy
  navigator.clipboard.writeText(quote.innerText);
  // Popup Toast
  Swal.fire({
    toast: true,
    text: "The quote has been copied",
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
    position: "top",
  });
}
copyBtn.addEventListener("click", copyQuote);
