
const depositBtn = document.getElementById('pluto-btc-deposit-btn');

const withdrawBtn = document.getElementById('pluto-btc-withdraw-btn');

const claimBtn = document.getElementById('pluto-btc-claim-btn');

const depositInputField = document.getElementById('pl-btc-deposit-price')
const withdrawInputField = document.getElementById('pl-btc-withdraw-price')
const claimInputField = document.getElementById('pl-btc-claim-input')


async function activatePlutoBtcDappInvokes() {

    depositBtn.addEventListener('click', async () => {
        KeeperWallet.signAndPublishTransaction({
            type: 16,
            data: {
                fee: {
                    tokens: '0.005',
                    assetId: 'WAVES',
                },
                dApp: '3P8XpsQa5TGqyUnNyvvw6jvqTnFBEznu6qD',
                call: {
                    function: 'deposit',
                    args: [],
                },
                payment: [ { assetId: 'Ajso6nTTjptu2UHLx6hfSXVtHFtRBJCkKYd5SAyj7zf5', tokens: depositInputField.value } ],
            },
        })
            .then(tx => {
                window.alert(tx);
            })
            .catch(e => {
                window.alert(e.message);
            })
    });

    withdrawBtn.addEventListener('click', async () => {
        KeeperWallet.signAndPublishTransaction({
            type: 16,
            data: {
                fee: {
                    tokens: '0.005',
                    assetId: 'WAVES',
                },
                dApp: '3P8XpsQa5TGqyUnNyvvw6jvqTnFBEznu6qD',
                call: {
                    function: 'withdraw',
                    args: [ {
                        'type': 'integer',
                        'value': Math.pow(10, 8) * withdrawInputField.value
                    } ],
                },
                payment: [],
            },
        })
        .then(tx => {
            window.alert(tx.id);
        })
        .catch(e => {
            window.alert(e.message)
        })
    });

    claimBtn.addEventListener('click', async () => {
        KeeperWallet.signAndPublishTransaction({
            type: 16,
            data: {
                fee: {
                    tokens: '0.005',
                    assetId: 'WAVES',
                },
                dApp: '3P8XpsQa5TGqyUnNyvvw6jvqTnFBEznu6qD',
                call: {
                    function: 'claim',
                    args: [ {
                        'type': 'integer',
                        'value': claimInputField.value
                    } ],
                },
                payment: [],
            },
        })
        .then(tx => {
            window.alert(tx.id);
        })
        .catch(e => {
            wondow.alert(e.message);
        })
    });


}

export default activatePlutoBtcDappInvokes;