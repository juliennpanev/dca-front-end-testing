const depositSelect = document.getElementById('lp-list');
const withdrawSelect = document.getElementById('tci-list');
const depositLogo = document.getElementById('lp-deposit-logo');
const withdrawLogo = document.getElementById('tci-withdraw-logo')



function changeLogo() {
    depositSelect.addEventListener('click', () => {
        let lpLogo = depositSelect.value;
        console.log(lpLogo)
        depositLogo.src = './assets/images/' + lpLogo  + '.svg'
    })

    withdrawSelect.addEventListener('click', () => {
        let tciLogo = withdrawSelect.value;
        console.log(tciLogo)
        withdrawLogo.src = './assets/images/' + tciLogo  + '.svg'
    })
}


export default changeLogo;