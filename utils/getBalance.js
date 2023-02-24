async function getBalance(address, id) {
    try {
        const res = await fetch('https://nodes.wavesnodes.com/assets/balance/' + address + '/' + id)
        const balanceData = await res.json();
        return balanceData;
    } catch (e) {
        window.alert(e.data);
    }
}

export default getBalance;  