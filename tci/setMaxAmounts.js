import getBalance from "../utils/getBalance.js"
import { getState } from "../views/plutoBtcDepositView.js"

const maxDepositElement = document.getElementById('deposit-max-tci');
const maxWithdrawElement = document.getElementById('withdraw-max-tci');
const depositSelect = document.getElementById('lp-list');
const depositInputElement = document.querySelector('#TCI-Program #deposit-price')

const withdrawSelect = document.getElementById('tci-list');
const withdrawInputElement = document.querySelector('#TCI-Program #withdraw-price')

function setMaxDepositAmount() {


    maxDepositElement.addEventListener('click', async () => {
        
        const state = await getState();
        const address = state.account.address;
        
        const lpBalance = await getBalance(address, depositSelect.value);
        if (depositSelect.value == '8wUmN9Y15f3JR4KZfE81XLXpkdgwnqoBNG6NmocZpKQx') {
            depositInputElement.value = lpBalance / Math.pow(10, 6);
        } else {
            depositInputElement.value = lpBalance / Math.pow(10, 8);
        }

    });

    maxWithdrawElement.addEventListener('click', async () => {
        
        const state = await getState();
        const address = state.account.address;
        const tciBalance = await getBalance(address, withdrawSelect.value);
        
        withdrawInputElement.value = tciBalance / Math.pow(10, 8);
    });
}

export default setMaxDepositAmount;