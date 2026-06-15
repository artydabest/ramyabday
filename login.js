let attempts = 0;

function checkAnswer() {

    attempts++;

    const answerEl = document.getElementById("answer");
    const messageEl = document.getElementById("message");
    if (!answerEl || !messageEl) return;

    const answer = answerEl.value.trim().toLowerCase();

    if (answer === "ramya") {

        if (attempts === 1) {
            messageEl.textContent =
                "WOAH U READ MY MIND ON THE FIRST TRY 😭 YES U ARE PRETTY AWESOME.";
        } else {
            messageEl.textContent = "YEAHHHH THERE WE GO 😎";
        }

        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);

    } else if (answer === "roshan") {
        messageEl.textContent = "AWWWWWWW U THINK IM AWESOME☹️";
    } else {
        messageEl.textContent = "WHO TF IS THAAAT???.";
    }

}