const input = document.getElementById('deposit-price');
const depositBtn = document.getElementById('deposit-btn');


async function invoke() {
    depositBtn.addEventListener('click', (e) => {
        e.preventDefault();

        KeeperWallet.signAndPublishTransaction({
            type: 16,
            data: {
                fee: {
                    tokens: '0.005',
                    assetId: 'WAVES',
                },
                dApp: '3PAFi86jNXNmgc4Fx4RnV6aJLXcW4zn99LJ',
                call: {
                    function: 'deposit',
                    args: [],
                },
                payment: [ { assetId: 'Ajso6nTTjptu2UHLx6hfSXVtHFtRBJCkKYd5SAyj7zf5', tokens: input.value }],
            },
        })
        .then(tx => {
            window.alert("Pluto deposit succesful!")
        })
        .catch(e => {
            window.alert(e.message)
        })
        
    })

}


export default invoke;