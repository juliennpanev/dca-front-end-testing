const maxButton = document.getElementById('max')
const userBalance = document.getElementById('deposit-amount');


function setMaxDeposit (element) {
    maxButton.addEventListener('click', () => {
        element.value = userBalance.textContent;
    })

}

export default setMaxDeposit;