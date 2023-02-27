async function getBalance(address, id) {
    try {
        const res = await fetch('https://nodes.wavesnodes.com/assets/balance/' + address + '/' + id)
        const balanceData = await res.json();
        return balanceData.balance;
    } catch (e) {
        console.log(e)
    }
}

export default getBalance;  