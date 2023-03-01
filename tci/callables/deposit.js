const depositInputElement = document.querySelector('#TCI-Program #deposit-price');
const depositLpButton = document.querySelector('#TCI-Program #deposit-btn');
const depositSelect = document.getElementById('lp-list');
const stakedNSBTID = '8wUmN9Y15f3JR4KZfE81XLXpkdgwnqoBNG6NmocZpKQx'


async function activateDepositLP () {
    depositLpButton.addEventListener('click', async () => {
        
        if (depositSelect.value != stakedNSBTID) {
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

            await KeeperWallet.signAndPublishTransaction(depositTx);
            depositInputElement.value = 0;
        }
        
        if (depositSelect.value == stakedNSBTID) {
            const depositTx = {
                type: 16,
                data: {
                    fee: {
                        tokens: '0.005',
                        assetId: 'WAVES',
                    },
                    dApp: '3PPK7G7BQf3yWQdXapuBhEhYkaqNBfcvNtk',
                    call: {
                        function: 'stake',
                        args: [],
                    },
                    payment: [ { assetId: depositSelect.value, tokens: depositInputElement.value }],
                },
            }

            await KeeperWallet.signAndPublishTransaction(depositTx);
            depositInputElement.value = 0;
        }
    });
}

export default activateDepositLP;