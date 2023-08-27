 const quoteContainer = document.getElementById('quote-container');
 const quoteText = document.getElementById('quote');
 const authorText = document.getElementById('author');
 const twitterBtn = document.getElementById('twitter');
 const newQuoteBtn = document.getElementById('id-quote');
 const loader = document.getElementById('loader')


 
 let apiQuotes = [];

 //show loading
 function loading(){
    loader.hidden = false;
    quoteContainer.hidden= true;
 }

 // Hide Loading 
 function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
 }



//Show new Quotes
 function newQuote(){
    loading()
    // Pick a random quote from api quote array
   // console.log(localQuotes[1])
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // here we set the by using textContent
    // authorText.textContent = quote.author;
    //check if Author field is blank and replace with 'Unknown'
    if(!quote.author ){
        authorText.textContent= 'Unknown';
    }else{
        authorText.textContent= quote.author;
    }

    // Check Quote length to determine styling
    if(quote.text.length > 10){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-update');
    }
    
    // Set Quote, Hide Loader
    quoteText.textContent= quote.text;
    complete();
    console.log(quote)
 }
// Get Quotes from API
async function getQuotes(){
   // const apiUrl = 'https://type.fit/api/quotes';
   loading();
   const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();     
        // console.log(apiQuotes);
         newQuote();
    }catch (error){
        //Ctach Error here 
    }
}

//Tweet Quote
function tweetQuote(){
    // const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.Text.textContent}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

    window.open(twitterUrl , '_blank');
}

// Event Listener


newQuoteBtn.addEventListener('click' , newQuote);
twitterBtn.addEventListener('click' , tweetQuote);


//on load
getQuotes();

// newQuote();