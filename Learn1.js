const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const quoteAuthor = document.querySelector('.author .name');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');
const instaBtn = document.querySelector('.insta');



function randomQuote() {
    quoteBtn.classList.add('loading')
    quoteBtn.innerText = "Loading Quote..."
    fetch("https://api.quotable.io/random").then(Ryan => Ryan.json()).then(Rayan =>{
        quoteText.innerText = Rayan.content;
        quoteAuthor.innerText = Rayan.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove('loading')
     });
}


soundBtn.addEventListener('click', ()=>{
    let Rayanr1 = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`);
    speechSynthesis.speak(Rayanr1); 
});

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});
instaBtn.addEventListener('click', ()=>{
    let Rayanr2 = 'https://www.instagram.com/';
    window.open(Rayanr2,);
});

quoteBtn.addEventListener('click', randomQuote);
