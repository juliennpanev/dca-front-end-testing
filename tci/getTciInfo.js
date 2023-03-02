const tciWithdrawElement = document.getElementById('lp-withdraw-link');
const tokenInfoElement = document.getElementById('token-info');
const selectWithdrawOptionsElement = document.getElementById('tci-list')
const tokenAmountElement = document.getElementById('token-amount');

function setTciInfo() {
    tciWithdrawElement.addEventListener('click', async () => {  
        tokenInfoElement.textContent = 'Minted TCI:';
        const req = await fetch('https://nodes.wavesnodes.com/assets/details/' + selectWithdrawOptionsElement.value);
        const data = await req.json();
        const tciIssued = data.quantity;
        const tciName = selectWithdrawOptionsElement[ selectWithdrawOptionsElement.selectedIndex ].textContent;
        const formattedAmount = (tciIssued / Math.pow(10, 8)).toFixed(4);
        tokenAmountElement.textContent = `${formattedAmount} ${tciName}`;
    });

    selectWithdrawOptionsElement.addEventListener('click', async () => {
        const req = await fetch('https://nodes.wavesnodes.com/assets/details/' + selectWithdrawOptionsElement.value);
        const data = await req.json();
        const tciIssued = data.quantity;
        const tciName = selectWithdrawOptionsElement[ selectWithdrawOptionsElement.selectedIndex ].textContent;
        const formattedAmount = (tciIssued / Math.pow(10, 8)).toFixed(4);
        tokenAmountElement.textContent = `${formattedAmount} ${tciName}`;
    })
}

export default setTciInfo;