// Ex1
var quotes = [
        { name: "Be yourself; everyone else is already taken.", author : "Oscar Wilde" },
        { name: "So many books, so little time.", author : "Frank Zappa" },
        { name: "A room without books is like a body without a soul.", author : " Marcus Tullius Cicero" },
        { name: "You only live once, but if you do it right, once is enough.", author : "Mae West" },
        { name: "Be the change that you wish to see in the world.", author : "Mahatma Gandhi" },
        { name: "If you tell the truth, you don't have to remember anything.", author : " Mark Twain" },
        { name: "Always forgive your enemies; nothing annoys them so much..", author : "Oscar Wilde" },
        { name: "We accept the love we think we deserve.", author : "Stephen Chbosky" },
        { name: "Without music, life would be a mistake.", author : "Friedrich Nietzsche" },
]

function generateQuote(){
    var finalNum = Math.floor(Math.random()*10);
    // console.log(finalNum)
    document.getElementById('quoteOutput').innerHTML = quotes[finalNum].name;
    document.getElementById('authorOutput').innerHTML = quotes[finalNum].author;
    if(finalNum === finalNum){

    }

}