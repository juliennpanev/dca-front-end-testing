import { Dapp } from "../plutoBTC/Dapp.js";
import getBalance from "../utils/getBalance.js";

const pageLink = document.getElementById("nav-Pluto-Bitcoin");
const btcDcaDepositAmountElement = document.getElementById('pl-btc-deposit-amount');
const participantsField = document.querySelector('#Pluto-Bitcoin #total-persons');
const maxDepositButton = document.getElementById('pl-btc-deposit-max');
const depositInputElement = document.getElementById('pl-btc-deposit-price');

let data = undefined;

const dapp = new Dapp('3P8XpsQa5TGqyUnNyvvw6jvqTnFBEznu6qD');



export function setMaxDepositIfSelected(maxButton, balanceValueElement, depositInput) {
    maxButton.addEventListener('click', () => {
        depositInput.value = balanceValueElement.textContent;
    })
}

async function setBalance() {
    btcDcaDepositAmountElement.textContent = 0;
    const state = await dapp.getState();
    const address = state["account"]["address"];
    const balanceData = await getBalance(address, 'Ajso6nTTjptu2UHLx6hfSXVtHFtRBJCkKYd5SAyj7zf5');
    btcDcaDepositAmountElement.textContent = balanceData / Math.pow(10, 8);
}



async function setParticipants(participantsElement) {
    let counter = 0;
    data.forEach((element) => {
        if (element["key"].includes("_deposited")) {
            counter++;
        }
    });

    participantsElement.textContent = counter;
}

export async function getDappData () {
    return await dapp.getDappData(dapp.address);
}

export async function getState () {
    return dapp.getState();
}

export async function loadDepositViewAndData() {
    pageLink.addEventListener("click", async (e) => {
        e.preventDefault();
        dapp.pullStakedBalance();
        data = await getDappData();
        setBalance();
        setParticipants(participantsField);
        setMaxDepositIfSelected(maxDepositButton, btcDcaDepositAmountElement, depositInputElement)

    });
}


