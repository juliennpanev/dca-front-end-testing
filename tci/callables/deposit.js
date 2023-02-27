const depositInputElement = document.querySelector('#TCI-Program #deposit-price');
const depositLpButton = document.querySelector('#TCI-Program #deposit-btn');
const depositSelect = document.getElementById('lp-list');


async function activateDepositLP () {
    depositLpButton.addEventListener('click', async () => {
        
        const depositTx = {
            type: 16,
            data: {
                fee: {
                    tokens: '0.005',
                    assetId: 'WAVES',
                },
                dApp: '3PQV9AUMU36fdDYMmMZw6urSYG3BuMahQuk',
                call: {
                    function: 'deposit2',
                    args: [],
                },
                payment: [ { assetId: depositSelect.value, tokens: depositInputElement.value }],
            },
        }
        
        await KeeperWallet.signAndPublishTransaction(depositTx)
    
    })
}

export default activateDepositLP;