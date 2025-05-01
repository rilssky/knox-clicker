let knoxes = 0;
let upgrades = 0;
let knoxesPerClick = 1;

function clickKnox() {
    knoxes += knoxesPerClick;
    document.getElementById('knoxCount').innerText = knoxes;
}

function buyUpgrade() {
    const upgradeCost = 10;
    if (knoxes >= upgradeCost) {
        knoxes -= upgradeCost;
        upgrades += 1;
        knoxesPerClick += 1;
        document.getElementById('knoxCount').innerText = knoxes;
        document.getElementById('upgradeCount').innerText = upgrades;
    } else {
        alert('Not enough Knox\'s!');
    }
}
