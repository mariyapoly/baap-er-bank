// get input value
function getInputValue(inputId) {
    const inputValueId = document.getElementById(inputId);
    const inputValue = parseFloat(inputValueId.value);
    inputValueId.value = '';
    return inputValue;
}
// fet amound
function getAmound(amoundId, amound) {
    const amoundValuId = document.getElementById(amoundId);
    const amoundValu = parseFloat(amoundValuId.innerText);
    amoundValuId.innerText = amoundValu + amound;
}
// get total banalce
function getBalnace(amound, isAdd) {
    const totalBalance = document.getElementById('total-balance');
    const balanceValue = parseFloat(totalBalance.innerText);
    if (isAdd) {
        totalBalance.innerText = balanceValue + amound;
    } else {
        totalBalance.innerText = balanceValue - amound;
    }
}
// deposit button event handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const amound = getInputValue('deposit-input');
    if (amound > 0) {
        getAmound('deposit-amound', amound);
        getBalnace(amound, true)
    }
})
// withdraw button event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amound = getInputValue('withdraw-input')
    const total = document.getElementById('total-balance').innerText;
    const totalValue = parseFloat(total)
    if (amound > 0 && totalValue >= amound) {
        getAmound('withdraw-amound', amound);
        getBalnace(amound, false)
    } else {
        alert('balance not avaliable')
    }
})