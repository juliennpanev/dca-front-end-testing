const dcaBalanceElement = document.getElementById('withdraw-amount');
const withdrawBtn = document.getElementById('genesis-withdraw-btn');
const withdrawLink = document.getElementById('withdraw-link');
const withdrawInput = document.getElementById('genesis-withdraw-price');
const withdrawMaxElement = document.getElementById('withdraw-max');
let dcaId = 'FGe2fT41osaHcE6JRKtXbUwHaWFRB4Ygye9vS5hRJWJy'

function setMaxWithdraw () {
    withdrawMaxElement.addEventListener('click', () => {
        console.log('clicked')
        console.log(dcaBalanceElement.textContent)
        withdrawInput.value = dcaBalanceElement.textContent;
    })
}
async function getDcaBalance(address) {
    try {
        const res = await fetch('https://nodes.wavesnodes.com/assets/balance/' + address + '/' + dcaId);
        const data = await res.json();
        return data;
    } catch(e) {
        windows.alert(e);
    }
}

async function setWithdrawBalance() {
    const state = await KeeperWallet.publicState();
    if (state.initialized) {
        const dcaBalance = await getDcaBalance(state.account['address']);
        dcaBalanceElement.textContent = dcaBalance['balance'] / Math.pow(10, 8);
    }
}

async function loadWithdrawInfo() {
    withdrawLink.addEventListener('click', async () =>{
        setWithdrawBalance();
    })
}

async function activateWithdrawBtn () {
    withdrawBtn.addEventListener('click', async () => {
        
        const withdrawTx = {
            type: 16,
            data: {
                fee: {
                    tokens: '0.05',
                    assetId: 'WAVES',
                },
                dApp: '3PAFi86jNXNmgc4Fx4RnV6aJLXcW4zn99LJ',
                call: {
                    function: 'withdraw',
                    args: [],
                },
                payment: [ { assetId: dcaId, tokens: withdrawInput.value }],
            },
        }
        
        await KeeperWallet.signAndPublishTransaction(withdrawTx)
    })
}


const withdraw = {
    loadWithdrawInfo,
    getDcaBalance,
    activateWithdrawBtn,
    setMaxWithdraw,
}

export default withdraw;

