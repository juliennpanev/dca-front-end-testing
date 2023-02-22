import { getDappData } from "./plutoBtcDepositView.js";
import { getState } from "./plutoBtcDepositView.js";



const data = await getDappData();
const state = await getState();
const claimableAmountField = document.getElementById('pl-btc-claim-amount');
const claimLinkElement = document.querySelector('#Pluto-Bitcoin #pluto-claim');
const claimMaxButton = document.getElementById('pl-btc-claim-max');
const claimInput = document.getElementById('pl-btc-claim-input')

function setClaimableAmount(state, element, dappData) {
    element.textContent = 0;
    const address = state[ 'account' ][ 'address' ];
    dappData.forEach(entry => {
        if (entry[ 'key' ].includes(address + '_toClaim')) {
            element.textContent = entry[ 'value' ];
        }
    });
}

function setMaxClaimableAmountIfSelected() {
    claimMaxButton.addEventListener('click', () => {
        claimInput.value = claimableAmountField.textContent;
    })
}





function loadClaimView() {
    claimLinkElement.addEventListener('click', async () => {
        setClaimableAmount(await getState(), claimableAmountField, data);
        setMaxClaimableAmountIfSelected()

    })
}


export default loadClaimView;