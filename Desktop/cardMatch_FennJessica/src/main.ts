import "./styles.scss";

type CardState = {
  id: number;
  value: string;
  el: HTMLButtonElement;
  matched: boolean;
};

const boardEl = document.getElementById("board") as HTMLDivElement;
const attemptsEl = document.getElementById("attempts") as HTMLSpanElement;
const restartBtn = document.getElementById("restartBtn") as HTMLButtonElement;
const modalEl = document.getElementById("modal") as HTMLDivElement;
const modalTitleEl = document.getElementById(
  "modalTitle"
) as HTMLHeadingElement;
const modalMsgEl = document.getElementById("modalMsg") as HTMLParagraphElement;
const playAgainBtn = document.getElementById(
  "playAgainBtn"
) as HTMLButtonElement;

let deck: CardState[] = [];
let firstPick: CardState | null = null;
let secondPick: CardState | null = null;
let lockBoard = false;
let attempts = 3;
let matchedPairs = 0;

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function setAttempts(n: number) {
  attempts = n;
  attemptsEl.textContent = String(attempts);
}

function showModal(title: string, msg: string) {
  modalTitleEl.textContent = title;
  modalMsgEl.textContent = msg;
  modalEl.classList.remove("hidden");
}

function hideModal() {
  modalEl.classList.add("hidden");
}

function createCardEl(card: CardState): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.className = "card";
  btn.type = "button";
  btn.setAttribute("aria-label", "Hidden card");
  btn.innerHTML = `
    <div class="card__face card__face--back" aria-hidden="true"></div>
    <div class="card__face card__face--front">
      <div class="value-chip">${card.value}</div>
    </div>
  `;
  btn.addEventListener("click", () => handleFlip(card));
  return btn;
}

function buildDeck() {
  const values = shuffle(["A", "A", "B", "B", "C", "C"]);
  deck = values.map((v, i) => ({
    id: i,
    value: v,
    el: document.createElement("button") as HTMLButtonElement,
    matched: false,
  }));
  boardEl.innerHTML = "";
  deck.forEach((card) => {
    card.el = createCardEl(card);
    boardEl.appendChild(card.el);
  });
}

function resetPicks() {
  firstPick = null;
  secondPick = null;
  lockBoard = false;
}

function handleFlip(card: CardState) {
  if (lockBoard) return;
  if (card.matched) return;
  if (firstPick && card.id === firstPick.id) return;

  card.el.classList.add("is-flipped");

  if (!firstPick) {
    firstPick = card;
    return;
  }

  secondPick = card;
  lockBoard = true;

  if (firstPick.value === secondPick.value) {
    firstPick.matched = true;
    secondPick.matched = true;
    firstPick.el.classList.add("is-matched", "is-disabled");
    secondPick.el.classList.add("is-matched", "is-disabled");
    matchedPairs++;

    if (matchedPairs === 3) {
      showModal("You Won!", "Great memory! Want to play again?");
    }
    resetPicks();
  } else {
    setTimeout(() => {
      firstPick!.el.classList.remove("is-flipped");
      secondPick!.el.classList.remove("is-flipped");
      setAttempts(attempts - 1);

      if (attempts - 1 <= 0 && matchedPairs < 3) {
        showModal(
          "Out of attempts",
          "Try again! You need to match all three pairs."
        );
      }
      resetPicks();
    }, 650);
  }
}

function restartGame() {
  hideModal();
  matchedPairs = 0;
  setAttempts(3);
  resetPicks();
  buildDeck();
}

restartBtn.addEventListener("click", restartGame);
playAgainBtn.addEventListener("click", restartGame);

restartGame();
