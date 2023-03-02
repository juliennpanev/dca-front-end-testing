const investedLpInfoElement = document.getElementById('token-amount');
const selectedLp = document.getElementById('lp-list');
const depositLink = document.getElementById('lp-deposit-link');
const depositInfoText = document.getElementById('token-info')

async function getInvestedAmount() {
    if (selectedLp.value == '8wUmN9Y15f3JR4KZfE81XLXpkdgwnqoBNG6NmocZpKQx') {
        const req = await fetch('http://20.7.14.174:6869/assets/balance/3PPK7G7BQf3yWQdXapuBhEhYkaqNBfcvNtk/8wUmN9Y15f3JR4KZfE81XLXpkdgwnqoBNG6NmocZpKQx');
        const data = await req.json();
        let balance = (data.balance / Math.pow(10, 6)).toFixed(2);
        investedLpInfoElement.textContent = `${balance} NSBT`;


        selectedLp.addEventListener('click', async () => {


            const req = await fetch('http://20.7.14.174:6869/addresses/data/3PPNhHYkkEy13gRWDCaruQyhNbX2GrjYSyV/%25s%25s%25s__staked__3PQV9AUMU36fdDYMmMZw6urSYG3BuMahQuk__' + selectedLp.value);
            const data = await req.json();
            let formattedAmount = (data.value / Math.pow(10, 8)).toFixed(2);
            const lp = selectedLp[ selectedLp.selectedIndex ].textContent;
            investedLpInfoElement.textContent = `${formattedAmount} ${lp}`; d

        });

        depositLink.addEventListener('click', async () => {
            depositInfoText.textContent = 'Invested LP:';
            const req = await fetch('http://20.7.14.174:6869/assets/balance/3PPK7G7BQf3yWQdXapuBhEhYkaqNBfcvNtk/8wUmN9Y15f3JR4KZfE81XLXpkdgwnqoBNG6NmocZpKQx');
            const data = await req.json();
            let balance = (data.balance / Math.pow(10, 6)).toFixed(2);
            investedLpInfoElement.textContent = `${balance} NSBT`;
        })
    }
}

export default getInvestedAmount;