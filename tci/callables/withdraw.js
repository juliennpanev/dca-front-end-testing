const withdrawInputElement = document.querySelector('#TCI-Program #withdraw-price');
const withdrawTciButton = document.querySelector('#TCI-Program #withdraw-btn');
const withdrawSelect = document.getElementById('tci-list');

async function activateWithdrawTCI () {
    withdrawTciButton.addEventListener('click', async () => {
        
        const withdrawTx = {
            type: 16,
            data: {
                fee: {
                    tokens: '0.005',
                    assetId: 'WAVES',
                },
                dApp: '3PQV9AUMU36fdDYMmMZw6urSYG3BuMahQuk',
                call: {
                    function: 'withdraw2',
                    args: [],
                },
                payment: [ { assetId: withdrawSelect.value, tokens: withdrawInputElement.value }],
            },
        }
        
        await KeeperWallet.signAndPublishTransaction(withdrawTx)
    })
}

export default activateWithdrawTCI;