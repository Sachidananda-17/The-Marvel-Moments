//variables
let btn = document.querySelector('#Button');
let quote = document.querySelector(".quote");
let person = document.querySelector(".person")

const quotes =
 [ 
    {
      quote: "The Hardest Choices Require the Strongest Wills.",
      person: "Thanos, Avengers: Infinity War"
    },
    
    {
        quote: " THIS IS THE FIGHT OF OUR LIVES, AND WE’RE GOING TO WIN. WHATEVER IT TAKES.",
        person: "Captain America, Avengers: Endgame"
    },

    {
        quote: "The only way to be a good leader is to be a good follower.",
        person: "Steve Rogers, Captain America: The First Avenger"
    },

    {
        quote: "It's Not About How Much We Lost. It's About How Much We Have Left.",
        person: "Tony Stark / Iron Man, Avengers: Endgame "
    },

    {
        quote: "At Some Point, We All Have to Choose, Between What the World Wants You to Be, and Who You Are.",
        person: "Natasha Romanoff / Black Widow, Black Widow "
    },
    {
        quote: "THAT’S MY SECRET, CAPTAIN. I’M ALWAYS ANGRY",
        person: "Bruce Banner / Hulk, Avengers: Age of Ultron"

    },
    {
        quote: "You get hurt, hurt ’em back. You get killed, walk it off.",
        person: "Captain America,  Avengers: Age of Ultron"
    },
];
btn.addEventListener('click',function() 
{
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;

})