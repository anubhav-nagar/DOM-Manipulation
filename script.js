const quotes = [
  {
    quote:
      "If names are not correct, language will not be in accordance with the truth of things.",
    name: "Confucius",
  },
  {
    quote: "How vain, without the merit, is the name.",
    name: "Homer",
  },
  {
    quote: "Action without a name, a who attached to it, is meaningless.",
    name: "Hanna Arendt",
  },
  {
    quote:
      "A name pronounced is the recognition of the individual to whom it belongs. He who can pronounce my name aright, he can call me, and is entitled to my love and service.",
    name: "Henry David Thoreau",
  },
  {
    quote:
      "The glory of my name increases my shame. Less known by mortals, I could better escape their eyes.",
    name: "Jean Racine",
  },
  {
    quote: "Forgive your enemies, but never forget their names.",
    name: "John F. Kennedy",
  },
  {
    quote:
      "History is not another name for the past, as many people imply. It is the name for stories about the past.",
    name: "A. J. P. Taylor",
  },
  {
    quote:
      "They say we die twice - once when the last breath leaves our body and once when the last person we know says our name.",
    name: "Al Pacino",
  },
  {
    quote: "O peace! how many wars were waged in thy name.",
    name: "Alexander Pope",
  },
  {
    quote:
      "We write our names in the sand: and then the waves roll in and wash them away.",
    name: "Neil Gaiman",
  },
  {
    quote:
      "Leadership is not a popularity contest; it's about leaving your ego at the door. The name of the game is to lead without a title.",
    name: "Robin Sharma",
  },
  {
    quote:
      "Some men do as much begrudge others a good name, as they want one themselves: and perhaps that is the reason of it.",
    name: "William Penn",
  },
  {
    quote:
      "When you love someone, you say their name different. Like it's safe inside your mouth.",
    name: "Jodi Picoult",
  },
  {
    quote:
      "I've named everything that I've ever owned. Real or inanimate, I have to give it a first and last name. Everything in my apartment comes alive at night.",
    name: "Amy Sedaris",
  },
  {
    quote:
      "Do you not know that a man is not dead while his name is still spoken?",
    name: "Terry Pratchett",
  },
  {
    quote: "Carve your name on hearts, not tombstones.",
    name: "Shannon L. Alder",
  },
  {
    quote:
      "Hope has two beautiful daughters; their names are Anger and Courage. Anger at the way things are, and Courage to see that they do not remain as they are.",
    name: "Augustine Of Hippo",
  },
  {
    quote:
      "Proper names are poetry in the raw. Like all poetry they are untranslatable.",
    name: "W.H. Auden",
  },
  {
    quote: "Names are the sweetest and most important sound in any language",
    name: "Dale Carnegie",
  },
  {
    quote:
      "I remember so well the day that you came into my life. You asked for my name, you had the most beautiful smile.",
    name: "Gary Valenciano",
  },
];

const btn = document.querySelector("#new-btn");
btn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = document.querySelector(".quote");
  quote.innerText = quotes[random].quote;
  const byPerson = document.querySelector(".person");
  byPerson.innerText = quotes[random].name;
});

