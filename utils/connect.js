import getBalance from "./getBalance.js";
import setBaseAssetBalance from "./setPlutoBalance.js";

const connectButton = document.getElementById('connect-button');
const btnField = document.querySelector('.btn')
const depositBalance = document.getElementById('genesis-deposit-amount')

let state = undefined;

async function checkIfConnected () {
    const connection = await KeeperWallet.publicState();
    if (connection == undefined) {
        btnField.textContent = 'Connect Wallet';
    } else {
        btnField.textContent = "Wallet Connected";
    }
}

async function setPlutoBalance () {
    try {
        let state = await KeeperWallet.publicState();
        const address = state.account['address'];
        const balanceData = await getBalance(address, 'Ajso6nTTjptu2UHLx6hfSXVtHFtRBJCkKYd5SAyj7zf5')
        depositBalance.textContent = balanceData / Math.pow(10, 8);
    } catch (e){
        console.log(e)

    }
}


function init () { connectButton.addEventListener('click', async (e) => {
    try {
        state = await KeeperWallet.publicState();
        
        if (state.initialized) {
            btnField.textContent = "Wallet Connected"
            
            getBalance(state.account['address'], 'Ajso6nTTjptu2UHLx6hfSXVtHFtRBJCkKYd5SAyj7zf5');
            setBaseAssetBalance(state.account['address']);
            setPlutoBalance();
        } else {
            btnField.textContent = 'Connect Wallet'
        }
        // testing balance call to NODE API
    } catch (e) {
        console.log(e)
    }
})
}


function getState() {
    return state;
}


export default {
    init,
    getState,
    checkIfConnected,
    setPlutoBalance,
};


