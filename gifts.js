const gift1 = document.getElementById("gift1");
const gift2 = document.getElementById("gift2");
const gift3 = document.getElementById("gift3");
const gift4 = document.getElementById("gift4");
const popup = document.getElementById("popup");
const memeImage = document.getElementById("memeImage");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");
let activeButtons = 0;
const maxButtons = 19;
let clicksNeeded = 19;
let clicksDone = 0;
let chosenGift = null;
let chosenGiftNumber = 0;
const counterId = "trialCounter";
let counter = document.getElementById(counterId);
if (!counter) {
    counter = document.createElement("div");
    counter.id = counterId;
    counter.textContent = `Birthday Trials™ ${clicksDone}/${clicksNeeded}`;
    document.body.appendChild(counter);
} else {
    counter.textContent = `Birthday Trials™ ${clicksDone}/${clicksNeeded}`;
}
const phrases = [
    "WORK FOR IT ",
    "HAHHAHHA YOU THOUGHT",
    "LOCK IN BRO ",
    "BOOMER🥀",
    "*INSERT ROSHAN MOANING SOUNDS*",
    "AAAAAAAAAAAAAAHHHHH",
    "FAAAASTERRRRRRRRRRR",
    "HARDERRRRRRRRRRRR",
    "CLICKING THIS BUTTON MEANS YOU AGREE THAT ROSHAN IS THE GREATEST",
    "YOU SUCK",
    "SKILL ISSUE",
    "YOU SUCK BAHAHAHAHA",
    "STOP BEING A BITCH AND CLICK",
];

const gifts = document.querySelectorAll(".gift-box");

function disableAllGifts(selectedGift) {

    gifts.forEach(gift => {
        gift.style.pointerEvents = "none";
        gift.style.opacity = "0.5";
    });

    if (selectedGift) selectedGift.style.opacity = "1";
}

if (gift1) gift1.addEventListener("click", () => {

    memeImage.src = "images/rock.jpg";

    popupTitle.textContent = "#1";
    popupText.textContent =
        "DAMN STOP CHOOSING THE FIRST THING YOU SEEEEEE";

   chosenGift = gift1;
    chosenGiftNumber = 1;
popup.style.display = "flex";

});

if (gift2) gift2.addEventListener("click", () => {

    memeImage.src = "images/photo2.jpg";

    popupTitle.textContent = "#2";
    popupText.textContent =
        "hehehe #2 hhahaha";

    chosenGift = gift2;
    chosenGiftNumber = 2;

popup.style.display = "flex";


});

if (gift3) gift3.addEventListener("click", () => {

    memeImage.src = "images/photo3.jpg";

    popupTitle.textContent = "#3";
    popupText.textContent =
        "If a stick is gay then when you hold it, are you jerking it off?";

    chosenGift = gift3;
    chosenGiftNumber = 3;
    popup.style.display = "flex";

});

if (gift4) gift4.addEventListener("click", () => {

    memeImage.src = "images/photo4.jpg";

    popupTitle.textContent = "#4";
    popupText.textContent =
        "Cool, so you like minors huh?";

     chosenGift = gift4;
     chosenGiftNumber = 4;
popup.style.display = "flex";

});

if (cancelBtn) cancelBtn.addEventListener("click", () => {
    if (popup) popup.style.display = "none";
});

if (confirmBtn) confirmBtn.addEventListener("click", () => {
    if (!chosenGift) {
        if (popupText) popupText.textContent = "Please select a gift first.";
        return;
    }

    disableAllGifts(chosenGift);

    const h1 = document.querySelector("h1");
    if (h1) h1.textContent =
        "imma disable the other ones, cause i can... but you can still click the disabled ones, just for fun :)";

    startChallenge();
});
function startChallenge() {

    popup.style.display = "none";

    spawnButton();
}

function spawnButton() {

    if (activeButtons >= maxButtons) return;

    activeButtons++;

    const btn = document.createElement("button");

    btn.textContent =
        phrases[Math.floor(Math.random() * phrases.length)];

    btn.style.position = "absolute";
    btn.style.left =
        Math.random() * (window.innerWidth - 220) + "px";

    btn.style.top =
        Math.random() * (window.innerHeight - 100) + "px";

    btn.style.padding = "15px 25px";

    btn.style.fontSize = "16px";

    btn.style.color = "white";

    btn.style.background =
    "rgba(25,25,112,0.85)";

    btn.style.backdropFilter = "blur(10px)";

    btn.style.border = "1px solid rgba(255,255,255,0.25)";

    btn.style.borderRadius = "15px";    

    btn.style.cursor = "pointer";

    btn.style.zIndex = "999";

    btn.style.boxShadow =
    "0 0 20px rgba(255,255,255,0.15)";

    btn.style.transition = "0.3s";

    document.body.appendChild(btn);
btn.addEventListener("mouseleave", () => {

    btn.style.transform = "scale(1)";

    btn.style.background =
        "rgba(255,255,255,0.15)";
});
btn.style.transform =
    `rotate(${Math.random() * 16 - 8}deg)`;
    btn.addEventListener("mouseenter", () => {

    btn.style.transform =
        `scale(1.08) rotate(${Math.random() * 16 - 8}deg)`;

});

    btn.className = 'trial-button';
    btn.addEventListener("click", () => {

        clicksDone++;
        activeButtons = Math.max(0, activeButtons - 1);
        counter.textContent = `Birthday Trials™ ${clicksDone}/${clicksNeeded}`;

        btn.remove();

        if (clicksDone < clicksNeeded) {
            spawnButton();
            if (clicksDone > 3 && activeButtons < maxButtons) {
                spawnButton();
            }
        } else {
            if (chosenGiftNumber > 0) {
                window.location.href = `gift${chosenGiftNumber}.html`;
            } else {
                // fallback
                window.location.href = `gifts.html`;
            }
        }

    });
}
