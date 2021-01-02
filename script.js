
const container = document.getElementById("page-container");
const text = document.getElementById("text");

const totalTime = 8500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
    text.innerText = "Inhale";
    container.className = "container expand";

    setTimeout(() => {
        text.innerText = "Hold";

        setTimeout(() => {
            text.innerText = "Exhale";
            container.className = "container condense";

        }, holdTime);
    }, breatheTime);
}

setInterval(breatheAnimation, totalTime);