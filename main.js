const mathGrid = document.getElementById("mathGrid");
function getNumber(x) {
    if (!x) {
        x = 0;
    }

    const multiplier = Math.pow(10, x);
    const randomNumber = Math.floor(
        1 * multiplier + Math.random() * 9 * multiplier,
    );
    return randomNumber;
}

for (let k = 1; k <= 70; k++) {
    mathGrid.innerHTML += `
                  <div class="math-problem">
                    <div>${getNumber(1)}</div>
                    <div>+${getNumber(0)}</div>
                    <div class="line"></div>
                </div>`;
}

for (let k = 1; k <= 210; k++) {
    mathGrid.innerHTML += `
                  <div class="math-problem">
                    <div>${getNumber(1)}</div>
                    <div>+${getNumber(1)}</div>
                    <div class="line"></div>
                </div>`;
}

for (let k = 1; k <= 70; k++) {
    mathGrid.innerHTML += `
                  <div class="math-problem">
                    <div>${getNumber(2)}</div>
                    <div>+${getNumber(1)}</div>
                    <div class="line"></div>
                </div>`;
}

for (let k = 1; k <= 70; k++) {
    mathGrid.innerHTML += `
                  <div class="math-problem">
                    <div>${getNumber(2)}</div>
                    <div>+${getNumber(2)}</div>
                    <div class="line"></div>
                </div>`;
}
