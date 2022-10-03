const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answerArray = [
	"Nie.",
	"Tak.",
	"Nie chcesz znać odpowiedzi.",
	"Zdecydowanie!",
	"Zapytaj przyjaciela.",
	"Możliwe.",
	"Napewno tak!",
	"Dowiesz się pojutrze...",
	"Odpowiedź znajdziesz w snach...",
];

const shakeBall = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== "" && input.value.slice(-1) === "?") {
		generatorAnswer();
		error.textContent = "";
        ball.classList.remove('shake-animation')
	} else if (input.value !== "" && input.value.slice(-1) !== "?") {
		console.log(" nie ok");
		error.textContent = "Pytanie musi być zakończone znakiem zapytania!";
		answer.textContent = "";
        ball.classList.remove('shake-animation')
	} else {
		error.textContent = "Musisz zadać jakieś pytanie!";
		answer.textContent = "";
        ball.classList.remove('shake-animation')
	}
};

const generatorAnswer = () => {
	const number = Math.floor(Math.random() * 9);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answerArray[number]}`;
};

ball.addEventListener("click", shakeBall);
