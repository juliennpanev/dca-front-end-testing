const maxButton = document.querySelector('.max')
const userBalance = document.getElementById('genesis-deposit-amount');


function setMaxDeposit (element) {
    maxButton.addEventListener('click', () => {
        element.value = userBalance.textContent;
    })

}

export default setMaxDeposit;