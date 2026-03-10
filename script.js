const flashCards = [
	{
		question: "O que é JavaScript?",
		answer: "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web."
	},
	{
		question: "O que são funções de callback em JavaScript?",
		answer: "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação."
	},
	{
		question: "O que é o this em JavaScript?",
		answer: "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada."
	},
	{
		question: "O que é hoisting em JavaScript?",
		answer: 'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.'
	},
	{
		question: "O que são tipos primitivos em JavaScript?",
		answer: "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos."
	},
];


let currentCard = 0;
let showingCardAnswer = false;
let flashCard;
let cardText;

const cardCounter = document.getElementById("cardCounter");
const flashCardContainer = document.getElementById("flashCardContainer")
const nextCard = document.getElementById("nextCard");

function createFlashCard(card){
    const flashCardElement = document.createElement("div")
    flashCardElement.id = "flashCard"

    const cardText = document.createElement("p")
    cardText.id = "cardText"
    cardText.textContent = card.question

    flashCardElement.appendChild(cardText)

    flashCardElement.addEventListener("click", handleCardClick)

    return flashCardElement
}

function renderCard() {
    const card = createFlashCard(flashCards[currentCard])

    flashCardContainer.innerHTML = ""

    flashCardContainer.appendChild(card)

    flashCard = document.getElementById("flashCard")
    cardText = document.getElementById("cardText")

    updateCard()
}

function handleCardClick() {
    showingCardAnswer = !showingCardAnswer
    flashCard.classList.toggle("showing-answer", showingCardAnswer)
    updateCard()
}

function updateCard() {
    const currentFlashCard = flashCards[currentCard]
    if (showingCardAnswer){
        cardText.textContent = currentFlashCard.answer
    } else {
        cardText.textContent = currentFlashCard.question
    }
    cardCounter.textContent = `Card ${currentCard + 1} de ${flashCards.length}`
}

function nextCardButton() {
    if(currentCard < flashCards.length -1 ) {
        currentCard++
        showingCardAnswer = false
        renderCard()
    }

}

renderCard()
const button = nextCard.addEventListener("click", nextCardButton)