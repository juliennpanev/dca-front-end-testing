const depositSelect = document.getElementById('lp-list');
const withdrawSelect = document.getElementById('tci-list');
const depositLogo = document.getElementById('lp-deposit-logo');
const withdrawLogo = document.getElementById('tci-withdraw-logo');

const depositInput = document.querySelector('#TCI-Program #deposit-price');
const withdrawInput = document.querySelector('#TCI-Program #withdraw-price');




function changeLogo() {
    depositSelect.addEventListener('click', () => {
        let lpLogo = depositSelect.value;
        console.log(lpLogo)
        depositLogo.src = './assets/images/' + lpLogo  + '.svg'
        depositInput.value = 0;
    })

    withdrawSelect.addEventListener('click', () => {
        let tciLogo = withdrawSelect.value;
        console.log(tciLogo);
        withdrawLogo.src = './assets/images/' + tciLogo  + '.svg';
        withdrawInput.value = 0;
    })
}


export default changeLogo;