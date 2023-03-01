const withdrawInputElement = document.querySelector('#TCI-Program #withdraw-price');
const withdrawTciButton = document.querySelector('#TCI-Program #withdraw-btn');
const withdrawSelect = document.getElementById('tci-list');
const sNSBTTCIID = '4CDoUKSAtLTwVTpdxFu6EcbafiCDZUSBXrWGjrAcCPoL'

async function activateWithdraw () {
    withdrawTciButton.addEventListener('click', async () => {
        

        if (withdrawSelect.value != sNSBTTCIID) {
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
            withdrawInputElement.value = 0;
        } 

        if (withdrawSelect.value == sNSBTTCIID) {
            const withdrawTx = {
                type: 16,
                data: {
                    fee: {
                        tokens: '0.005',
                        assetId: 'WAVES',
                    },
                    dApp: '3PPK7G7BQf3yWQdXapuBhEhYkaqNBfcvNtk',
                    call: {
                        function: 'withdraw',
                        args: [],
                    },
                    payment: [ { assetId: withdrawSelect.value, tokens: withdrawInputElement.value }],
                },
            }

            await KeeperWallet.signAndPublishTransaction(withdrawTx)
            withdrawInputElement.value = 0;
        }
    });
}

export default activateWithdraw;