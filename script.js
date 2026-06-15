const beginBtn = document.getElementById("beginBtn");

if (beginBtn) {
    beginBtn.addEventListener("click", () => {
        window.location.href = "gifts.html";
    });
}
function createShootingStar() {

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top =
        Math.random() * 40 + "%";

    star.style.left = "-100px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2000);
}

setInterval(createShootingStar, 5000);