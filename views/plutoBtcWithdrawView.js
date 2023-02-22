import { Dapp } from "../plutoBTC/Dapp.js";


const dapp = new Dapp('3P8XpsQa5TGqyUnNyvvw6jvqTnFBEznu6qD')

const withdrawBalanceField = document.getElementById('pluto-btc-withdraw-amount')
const maxButton = document.getElementById('pl-btc-withdraw-max');
const withdrawInput = document.getElementById('pl-btc-withdraw-price')
const withdrawSectionButton = document.getElementById('pluto-withdraw')

async function setWithdrawBalance() {
    withdrawBalanceField.textContent = 0
    const state = await dapp.getState();
    const address = (state['account']['address']);
    let data = await dapp.getDappData(dapp.address);
    data.forEach(entry => {
        console.log(state);
        console.log(address);
        console.log(entry);
        if (entry['key'].includes(address + '_deposited')) {
            withdrawBalanceField.textContent = entry['value'] / Math.pow(10, 8);
        }
        
       
    })
}

function setMaxWithdrawAmountIfSelected() {
    maxButton.addEventListener('click', () => {
        withdrawInput.value = withdrawBalanceField.textContent;
    })
}


async function loadWithdrawView () {
    withdrawSectionButton.addEventListener('click', async () => {
        setMaxWithdrawAmountIfSelected();
        setWithdrawBalance();
    })
}



export default loadWithdrawView;

